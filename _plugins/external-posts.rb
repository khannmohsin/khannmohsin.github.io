require 'feedjira'
require 'httparty'
require 'jekyll'
require 'nokogiri'
require 'time'
require 'uri'
require 'cgi'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    DEFAULT_DESC_LEN = 220

    def generate(site)
      sources = site.config['external_sources']
      return if sources.nil?

      sources.each do |src|
        puts "Fetching external posts from #{src['name']}:"
        if src['rss_url']
          fetch_from_rss(site, src)
        elsif src['posts']
          fetch_from_urls(site, src)
        end
      end
    end

    # ----------------------------
    # RSS ingestion (Medium)
    # ----------------------------
    def fetch_from_rss(site, src)
      xml = HTTParty.get(src['rss_url']).body
      return if xml.nil?

      feed = Feedjira.parse(xml)
      process_entries(site, src, feed.entries)
    end

    def process_entries(site, src, entries)
      entries.each do |e|
        puts "...fetching #{e.url}"

        html_blob = e.content || e.summary || ''

        thumbnail = extract_first_image_url(html_blob)

        desc = sanitize_description(e.summary, DEFAULT_DESC_LEN)
        desc = extract_first_paragraph_text(html_blob, DEFAULT_DESC_LEN) if desc.empty?

        entry_tags = normalize_taxonomy_array(e.respond_to?(:categories) ? e.categories : nil)
        author = e.respond_to?(:author) ? e.author.to_s.strip : ''
        canonical = canonicalize_url(e.url.to_s)

        reading_time = estimate_read_time_minutes(strip_to_text(html_blob))

        create_document(site, src, canonical, {
          title: e.title.to_s,
          content: html_blob.to_s,
          summary: desc,
          published: e.published,
          thumbnail: thumbnail,
          author: author,
          entry_tags: entry_tags,
          reading_time: reading_time
        })
      end
    end

    # ----------------------------
    # URL ingestion fallback
    # ----------------------------
    def fetch_from_urls(site, src)
      src['posts'].each do |post|
        puts "...fetching #{post['url']}"

        content = fetch_content_from_url(post['url'])
        content[:published] = parse_published_date(post['published_date'])

        thumb = extract_first_image_url(content[:raw_html])
        content[:thumbnail] = thumb

        content[:summary] = sanitize_description(content[:summary], DEFAULT_DESC_LEN)
        content[:summary] = extract_first_paragraph_text(content[:raw_html], DEFAULT_DESC_LEN) if content[:summary].empty?

        content[:reading_time] = estimate_read_time_minutes(strip_to_text(content[:content]))
        canonical = canonicalize_url(post['url'])

        create_document(site, src, canonical, content)
      end
    end

    # ----------------------------
    # Create Jekyll document
    # ----------------------------
    def create_document(site, src, url, content)
      source_name = (src['name'] || 'External').to_s
      slug = make_slug(source_name, url, content[:title])

      path = site.in_source_dir("_posts/#{slug}.md")
      doc = Jekyll::Document.new(path, { site: site, collection: site.collections['posts'] })

      doc.data['external_source'] = source_name
      doc.data['external'] = true
      doc.data['title'] = content[:title]
      doc.data['date'] = content[:published]
      doc.data['redirect'] = url
      doc.data['canonical_url'] = url

      doc.data['description'] = content[:summary]
      doc.data['feed_content'] = content[:content]

      doc.data['author'] = content[:author] unless content[:author].to_s.empty?
      doc.data['reading_time'] = content[:reading_time] if content[:reading_time]

      if content[:thumbnail] && !content[:thumbnail].empty?
        doc.data['thumbnail'] = content[:thumbnail]
        doc.data['image'] = content[:thumbnail]
      end

      default_tags = normalize_taxonomy_array(src['default_tags'])
      entry_tags = normalize_taxonomy_array(content[:entry_tags])

      combined_tags = (default_tags + entry_tags + [source_name]).uniq
      doc.data['tags'] = combined_tags unless combined_tags.empty?

      doc.data['categories'] = normalize_taxonomy_array(src['default_categories'])
      doc.data['categories'] = ['External'] if doc.data['categories'].empty?

      doc.content = content[:content]
      site.collections['posts'].docs << doc
    end

    # ----------------------------
    # Helpers
    # ----------------------------
    def extract_first_image_url(html)
      return nil if html.nil? || html.strip.empty?

      doc = Nokogiri::HTML(html)

      doc.css('img').each do |img|
        candidates = [
          img['src'],
          img['data-src'],
          img['data-original'],
          img['srcset']&.split(',')&.first&.split&.first,
          img['data-srcset']&.split(',')&.first&.split&.first
        ].compact.map(&:strip)

        candidates.each do |url|
          u = url.downcase
          next if u.include?('/_/stat?') || u.include?('event=post.clientviewed')
          next if u.start_with?('data:')
          next if u.end_with?('.gif')
          next if u.include?('tracking') || u.include?('pixel')

          return url
        end
      end

      nil
    rescue
      nil
    end

    def sanitize_description(text, max_len)
      return '' if text.nil?

      cleaned = Nokogiri::HTML(text).text.strip.gsub(/\s+/, ' ')
      cleaned.length > max_len ? cleaned[0, max_len].rstrip + '…' : cleaned
    end

    def extract_first_paragraph_text(html, max_len)
      doc = Nokogiri::HTML(html)
      p = doc.css('p').map { |e| e.text.strip }.find { |t| t.length >= 40 }
      return '' if p.nil?

      p.length > max_len ? p[0, max_len].rstrip + '…' : p
    rescue
      ''
    end

    def strip_to_text(html)
      Nokogiri::HTML(html.to_s).text.gsub(/\s+/, ' ').strip
    rescue
      ''
    end

    def estimate_read_time_minutes(text, wpm = 180)
      words = text.split(/\s+/).size
      [(words / wpm.to_f).ceil, 1].max
    end

    def normalize_taxonomy_array(value)
      return [] if value.nil?
      arr = value.is_a?(Array) ? value : value.to_s.split(',')
      arr.map(&:strip).reject(&:empty?).uniq
    end

    def canonicalize_url(url)
      u = URI.parse(url)
      return url unless u.query

      params = CGI.parse(u.query)
      %w[utm_source utm_medium utm_campaign utm_term utm_content source].each { |k| params.delete(k) }
      u.query = params.empty? ? nil : URI.encode_www_form(params.transform_values(&:first))
      u.to_s
    rescue
      url
    end

    def make_slug(source, url, title)
      base = source.downcase.gsub(/\W+/, '-')
      last = url.split('/').last
      return "#{base}-#{last}" if title.gsub(/\W/, '').empty?

      slug = title.downcase.gsub(/\W+/, '-')
      slug.empty? ? "#{base}-#{last}" : slug
    end

    def fetch_content_from_url(url)
      html = HTTParty.get(url).body
      doc = Nokogiri::HTML(html)

      {
        title: doc.at('title')&.text.to_s,
        summary: doc.at('meta[name="description"]')&.[]('content').to_s,
        content: doc.css('p').map(&:text).join(' '),
        raw_html: html,
        entry_tags: []
      }
    end

    def parse_published_date(date)
      date.is_a?(String) ? Time.parse(date).utc : date.to_time.utc
    end
  end
end