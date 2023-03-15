---
title: The xPack Docus Mock releases
# permalink: /dev-tools/ninja-build/releases/

date: 2020-09-28 17:53:00 +0300

---

{% for post in site.posts %}{% if post.categories contains "releases" %}{% if post.categories contains "ninja-build" %}
* [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) [(download)]({{ post.download_url }}){% endif %}{% endif %}{% endfor %}
