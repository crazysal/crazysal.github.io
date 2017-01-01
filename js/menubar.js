$(document).ready(function () {
  /*GA*/
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-89643543-1', 'auto');
  ga('send', 'pageview');
  /*Urls*/
  //topnav
  $("a#home").attr("href", "https://crazysal.github.io");
  $("a#about").attr("href", "https://crazysal.github.io/about.html")
  $("a#resume").attr("href", "https://crazysal.github.io/content/resume/saleem_resume.pdf");
  $("a#resume").attr("target", "_blank");
  $("a#contact").attr("href", "https://crazysal.github.io/contact.html");
});