$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
  });
  /*Html*/
  var htmlstring = "";
  htmlstring += '<div class="col-lg-2 well well-sm">';
  htmlstring += '<div class="sidebar-title"> Nerdy Stuff</div>';
  htmlstring += '<hr>';
  htmlstring += '<ul class="sidebar-nav" id="sidebar">';
  htmlstring += '<li><a id="mysql_concat">Hacking The MySql Concat Function </a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="win32">Win32 Sality: Virus Summary, Prevention & Removal </a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="prog-1">What is Programming ?(Part – I)</a> </li>';
  htmlstring += '<hr>';/*
  htmlstring += '<li><a href="content/tech/article1.html">Article 3</a> </li>';
  htmlstring += '</ul>';*/
  htmlstring += '</div>';
  htmlstring += '<div class="col-lg-2 well well-sm">';
  htmlstring += '<div class="sidebar-title">Wisdom</div>';
  htmlstring += '<hr>';
  htmlstring += '<ul class="sidebar-nav" id="sidebar">';
  htmlstring += '<li><a id="koepke">Life Goals by Daniell Koepke</a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="urquico">Who to Date by Rosemarie Urquico</a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="toDo">Things to Do</a> </li>';
  htmlstring += '<hr>';/*
  htmlstring += '<li><a href="content/gyaan/article1.html">Article 1</a> </li>';
  htmlstring += '</ul>';*/
  htmlstring += '</div>';
  $("#sidebar_html").empty().append(htmlstring);
  /*Urls*/
  //gyaan
  $("a#koepke").attr("href", "https://crazysal.github.io/content/gyaan/breathe.html")
  $("a#urquico").attr("href", "https://crazysal.github.io/content/gyaan/girl-who-writes.html")
  $("a#toDo").attr("href", "https://crazysal.github.io/content/gyaan/to_do.html")
    //tech
  $("a#win32").attr("href", "https://crazysal.github.io/content/tech/win32_sality.html")
  $("a#prog-1").attr("href", "https://crazysal.github.io/content/tech/prog-intro1.html")
  $("a#mysql_concat").attr("href", "https://crazysal.github.io/content/tech/mysql_concat.html")
    //Social
  $("a.twitter").attr("href", "https://twitter.com/crazysal").attr("title", "Follow my Tweets")
  $("a.facebook").attr("href", "https://www.facebook.com/Crazy.sal14").attr("title", "Facebook")
  $("a.instagram").attr("href", "https://instagram.com/mauvejedi/").attr("title", "Insta")
    //<li><a class="googleplus" href="#" title="Google+">Google+</a></li> 
    //<li><a class="dribbble" href="#" title="Dribbble">Dribbble</a></li> 
    //<li><a class="flickr" href="#" title="Flickr">Flickr</a></li> 
});
