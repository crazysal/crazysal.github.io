---
layout: without_header
---

# Blog Entries and personal Journal

* * *

{% for post in site.posts %}	
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>	
  {{ post.excerpt }}	
{% endfor %}

{% for post in site.tags[page.tag] %}
    <a href="{{ post.url | absolute_url }}">
      {{ post.title }}
    </a>
{% endfor %}
[Resume](./resume.html). 
[Background](./background.html).
[Projects](./background.html).
