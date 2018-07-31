---
layout: default
---

## Welcome to another page

_yay_

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  {{ post.excerpt }}
{% endfor %}

[back](./)
