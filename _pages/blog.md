---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 7
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<style>
/* =========================================================
   BLOG — Clean Academic Cards (Aligned with Publications)
   ========================================================= */

:root{
  --blog-text: #0b1220;
  --blog-muted: rgba(11,18,32,0.65);

  --blog-card: #ffffff;
  --blog-border: rgba(0,0,0,0.12);
  --blog-shadow: 0 10px 24px rgba(0,0,0,0.06);

  --blog-accent: #3685f3;
  --blog-radius: 14px;
}

[data-theme="dark"]{
  --blog-text: rgba(255,255,255,0.92);
  --blog-muted: rgba(255,255,255,0.70);

  --blog-card: rgba(18,18,18,0.65);
  --blog-border: rgba(255,255,255,0.16);
  --blog-shadow: 0 14px 30px rgba(0,0,0,0.35);
}

/* Intro / header card */
.blog-intro{
  border: 1px solid var(--blog-border);
  border-radius: var(--blog-radius);
  background: var(--blog-card);
  box-shadow: var(--blog-shadow);
  padding: 16px 18px;
  margin: 14px 0 20px;
}
.blog-intro h1{
  margin: 0 0 6px;
  color: var(--blog-text);
  font-weight: 650;
  letter-spacing: -0.01em;
}
.blog-intro p{
  margin: 0;
  color: var(--blog-muted);
}

/* Section title */
.blog-section-title{
  margin: 0 0 10px;
  color: var(--blog-text);
  font-weight: 650;
  letter-spacing: -0.01em;
  font-size: 1.05rem;
}

/* Featured grid */
.blog-featured-grid{
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 10px 0 22px;
}
@media (min-width: 980px){
  .blog-featured-grid{
    grid-template-columns: 1fr 1fr;
  }
}

/* Post list */
.blog-posts{
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Card */
.blog-card{
  border: 1px solid var(--blog-border);
  border-radius: var(--blog-radius);
  background: var(--blog-card);
  box-shadow: var(--blog-shadow);
  padding: 14px 16px;
  transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
}
.blog-card:hover{
  transform: translateY(-2px);
  border-color: rgba(54,133,243,0.35);
}

/* Card layout for posts with thumbnails */
.blog-card.has-thumb{
  padding: 0;
  overflow: hidden;
}
.blog-card-grid{
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 860px){
  .blog-card-grid{
    grid-template-columns: 1fr 220px;
  }
}
.blog-card-body{
  padding: 14px 16px;
}
.blog-card-thumb{
  width: 100%;
  height: 100%;
  min-height: 170px;
  object-fit: cover;
  border-left: 1px solid var(--blog-border);
}
@media (max-width: 859px){
  .blog-card-thumb{
    border-left: 0;
    border-top: 1px solid var(--blog-border);
    min-height: 200px;
  }
}

/* Title */
.blog-title{
  margin: 0 0 6px;
  font-weight: 650;
  font-size: 1.05rem;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
.blog-title a{
  color: var(--blog-text);
  text-decoration: none;
}
.blog-title a:hover{
  text-decoration: underline;
  text-decoration-color: rgba(54,133,243,0.45);
}
.blog-desc{
  margin: 0 0 10px;
  color: var(--blog-muted);
}

/* Meta */
.blog-meta{
  margin: 0;
  color: var(--blog-muted);
  font-size: 0.92rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

/* Tags row styled like “chips” in Publications */
.blog-chips{
  margin: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.blog-chips a{
  border: 1px solid rgba(54,133,243,0.25);
  background: rgba(54,133,243,0.10);
  color: var(--blog-text);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
  text-decoration: none;
}
.blog-chips a:hover{
  text-decoration: underline;
}

/* Pin icon alignment (featured) */
.blog-pin{
  float: right;
  color: var(--blog-muted);
  margin-left: 10px;
}

/* Divider */
.blog-divider{
  border: 0;
  border-top: 1px solid var(--blog-border);
  margin: 18px 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  .blog-card{ transition: none; }
  .blog-card:hover{ transform: none; }
}
</style>

<div class="post">

  {% assign blog_name_size = site.blog_name | size %}
  {% assign blog_description_size = site.blog_description | size %}

  {% if blog_name_size > 0 or blog_description_size > 0 %}
    <div>
      <h1>{{ site.blog_name }}</h1>
      <p>{{ site.blog_description }}</p>
    </div>
  {% endif %}

  {% assign featured_posts = site.posts | where: "featured", "true" %}
  {% if featured_posts.size > 0 %}

    <h2 class="blog-section-title">Featured posts</h2>

    <div class="blog-featured-grid">
      {% for post in featured_posts %}

        {% if post.external_source == blank %}
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {% else %}
          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
        {% endif %}
        {% assign year = post.date | date: "%Y" %}

        <a href="{{ post.url | relative_url }}" style="text-decoration:none;">
          <div class="blog-card">
            <span class="blog-pin"><i class="fa-solid fa-thumbtack fa-xs"></i></span>

            <h3 class="blog-title">{{ post.title }}</h3>

            {% if post.description %}
              <p class="blog-desc">{{ post.description }}</p>
            {% endif %}

            <p class="blog-meta">
              <span>{{ read_time }} min read</span>
              <span>&middot;</span>
              <span>
                <a href="{{ year | prepend: '/blog/' | relative_url }}" style="color:var(--blog-muted); text-decoration:none;">
                  <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                </a>
              </span>
            </p>
          </div>
        </a>

      {% endfor %}
    </div>

    <hr class="blog-divider">
  {% endif %}

  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  <ul class="blog-posts">

    {% for post in postlist %}

      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}

      {% assign year = post.date | date: "%Y" %}
      {% assign tags = post.tags | join: "" %}
      {% assign categories = post.categories | join: "" %}

      <li>

        {% if post.thumbnail %}

          <div class="blog-card has-thumb">
            <div class="blog-card-grid">
              <div class="blog-card-body">

                <h3 class="blog-title">
                  {% if post.redirect == blank %}
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  {% elsif post.redirect contains '://' %}
                    <a href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
                  {% else %}
                    <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                  {% endif %}
                </h3>

                {% if post.description %}
                  <p class="blog-desc">{{ post.description }}</p>
                {% endif %}

                <p class="blog-meta">
                  <span>{{ read_time }} min read</span>
                  <span>&middot;</span>
                  <span>{{ post.date | date: '%B %d, %Y' }}</span>
                  {% if post.external_source %}
                    <span>&middot;</span>
                    <span>{{ post.external_source }}</span>
                  {% endif %}
                </p>

                <div class="blog-chips">
                  <a href="{{ year | prepend: '/blog/' | relative_url }}">
                    <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                  </a>

                  {% if tags != "" %}
                    {% for tag in post.tags %}
                      <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                        <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                      </a>
                    {% endfor %}
                  {% endif %}

                  {% if categories != "" %}
                    {% for category in post.categories %}
                      <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                        <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
                      </a>
                    {% endfor %}
                  {% endif %}
                </div>

              </div>

              <img class="blog-card-thumb" src="{{ post.thumbnail | relative_url }}" alt="thumbnail">

            </div>
          </div>

        {% else %}

          <div class="blog-card">
            <h3 class="blog-title">
              {% if post.redirect == blank %}
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              {% elsif post.redirect contains '://' %}
                <a href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
              {% else %}
                <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
              {% endif %}
            </h3>

            {% if post.description %}
              <p class="blog-desc">{{ post.description }}</p>
            {% endif %}

            <p class="blog-meta">
              <span>{{ read_time }} min read</span>
              <span>&middot;</span>
              <span>{{ post.date | date: '%B %d, %Y' }}</span>
              {% if post.external_source %}
                <span>&middot;</span>
                <span>{{ post.external_source }}</span>
              {% endif %}
            </p>

            <div class="blog-chips">
              <a href="{{ year | prepend: '/blog/' | relative_url }}">
                <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
              </a>

              {% if tags != "" %}
                {% for tag in post.tags %}
                  <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
                    <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
                  </a>
                {% endfor %}
              {% endif %}

              {% if categories != "" %}
                {% for category in post.categories %}
                  <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                    <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
                  </a>
                {% endfor %}
              {% endif %}
            </div>
          </div>

        {% endif %}

      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}

</div>