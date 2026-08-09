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

<div class="post aux-flagship aux-blog">
  <section class="blog-intro" aria-label="Blog overview">
    <h1 class="blog-page-title page-title-uniform">Industry and Research Blogs</h1>
    {% if site.blog_description and site.blog_description != '' %}
      <p class="blog-page-subtitle">{{ site.blog_description }}</p>
    {% endif %}
  </section>

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

        {% if post.redirect == blank %}
          {% assign post_href = post.url | relative_url %}
        {% elsif post.redirect contains '://' %}
          {% assign post_href = post.redirect %}
        {% else %}
          {% assign post_href = post.redirect | relative_url %}
        {% endif %}

        <a class="blog-featured-link" href="{{ post_href }}"{% if post.redirect contains '://' %} target="_blank" rel="noopener noreferrer"{% endif %}>
          <article class="blog-card">
            <span class="blog-pin"><i class="fa-solid fa-thumbtack fa-xs"></i></span>
            <h3 class="blog-title">{{ post.title }}</h3>
            {% if post.description %}
              <p class="blog-desc">{{ post.description }}</p>
            {% endif %}
            <p class="blog-meta">
              <span>{{ read_time }} min read</span>
              <span>&middot;</span>
              <span><i class="fa-solid fa-calendar fa-sm"></i> {{ year }}</span>
            </p>
          </article>
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
{% assign suppress_featured_in_latest = false %}
{% if featured_posts.size > 0 %}
{% if page.pagination.enabled %}
{% if paginator.page == 1 %}
{% assign suppress_featured_in_latest = true %}
{% endif %}
{% else %}
{% assign suppress_featured_in_latest = true %}
{% endif %}
{% endif %}

  <ul class="blog-posts">
    {% for post in postlist %}
      {% if suppress_featured_in_latest and post.featured %}
        {% continue %}
      {% endif %}
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
          <article class="blog-card has-thumb">
            <div class="blog-card-grid">
              <div class="blog-card-body">
                <h3 class="blog-title">
                  {% if post.redirect == blank %}
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  {% elsif post.redirect contains '://' %}
                    <a href="{{ post.redirect }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
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
                  <span class="blog-chip"><i class="fa-solid fa-calendar fa-sm"></i> {{ year }}</span>
                  {% if tags != "" %}
                    {% for tag in post.tags %}
                      <span class="blog-chip"><i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</span>
                    {% endfor %}
                  {% endif %}
                  {% if categories != "" %}
                    {% for category in post.categories %}
                      <span class="blog-chip"><i class="fa-solid fa-tag fa-sm"></i> {{ category }}</span>
                    {% endfor %}
                  {% endif %}
                </div>
              </div>

              <img class="blog-card-thumb" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail" loading="lazy" decoding="async">
            </div>
          </article>
        {% else %}
          <article class="blog-card">
            <h3 class="blog-title">
              {% if post.redirect == blank %}
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              {% elsif post.redirect contains '://' %}
                <a href="{{ post.redirect }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
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
              <span class="blog-chip"><i class="fa-solid fa-calendar fa-sm"></i> {{ year }}</span>
              {% if tags != "" %}
                {% for tag in post.tags %}
                  <span class="blog-chip"><i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}</span>
                {% endfor %}
              {% endif %}
              {% if categories != "" %}
                {% for category in post.categories %}
                  <span class="blog-chip"><i class="fa-solid fa-tag fa-sm"></i> {{ category }}</span>
                {% endfor %}
              {% endif %}
            </div>
          </article>
        {% endif %}
      </li>
    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
