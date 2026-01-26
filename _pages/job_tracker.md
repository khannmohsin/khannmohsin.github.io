---
layout: default
title: Login
nav: true
nav_order: 9
permalink: /job-tracker/
---

<script>
  window.location.replace("{{ '/assets/job-applications/' | relative_url }}");
</script>
<noscript>
  <p>
    Redirecting to the job applications tracker.
    <a href="{{ '/assets/job-applications/' | relative_url }}">Continue</a>
  </p>
</noscript>
