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
  htmlstring += '<li><a id="cap_theorem">Understanding The Cap Theorem - System Design</a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="mysql_concat">Hacking The MySql Concat Function </a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="win32">Win32 Sality: Virus Summary, Prevention & Removal </a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="matlab">Matrix Laboratory (MATLAB) </a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="drchuck">Dr. Chuck\'s Assignment</a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="prog-1">What is Programming? (Part – I)</a> </li>';
  htmlstring += '<hr>';
  htmlstring += '<li><a id="prog-2">What is Programming? (Part – II)</a> </li>';
  htmlstring += '</ul>';
  htmlstring += '</div>';
  htmlstring += '<div class="col-lg-2 well well-sm">';
  htmlstring += '<div class="sidebar-title">Wisdom</div>';
  htmlstring += '<hr>';
  htmlstring += '<ul class="sidebar-nav" id="sidebar">';
  htmlstring += '<li><a id="wallace">This is Water</a> </li>';
  htmlstring += '<hr>';
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
  $("a#wallace").attr("href", "https://crazysal.github.io/content/gyaan/david_wallace.html")
  $("a#koepke").attr("href", "https://crazysal.github.io/content/gyaan/breathe.html")
  $("a#urquico").attr("href", "https://crazysal.github.io/content/gyaan/girl-who-writes.html")
  $("a#toDo").attr("href", "https://crazysal.github.io/content/gyaan/to_do.html")
    //tech
  $("a#win32").attr("href", "https://crazysal.github.io/content/tech/win32_sality.html")
  $("a#prog-1").attr("href", "https://crazysal.github.io/content/tech/prog-intro1.html")
  $("a#prog-2").attr("href", "https://crazysal.github.io/content/tech/prog2.html")
  $("a#mysql_concat").attr("href", "https://crazysal.github.io/content/tech/mysql_concat.html")
  $("a#matlab").attr("href", "https://crazysal.github.io/content/tech/matlab.html")
  $("a#drchuck").attr("href", "https://crazysal.github.io/content/tech/drchuck.html")
  $("a#cap_theorem").attr("href", "https://crazysal.github.io/content/tech/cap_theorem.html")
    //Social
  $("a.twitter").attr("href", "https://twitter.com/crazysal").attr("title", "Follow my Tweets")
  $("a.facebook").attr("href", "https://www.facebook.com/Crazy.sal14").attr("title", "Facebook")
  $("a.instagram").attr("href", "https://instagram.com/mauvejedi/").attr("title", "Insta")
    //<li><a class="googleplus" href="#" title="Google+">Google+</a></li> 
    //<li><a class="dribbble" href="#" title="Dribbble">Dribbble</a></li> 
    //<li><a class="flickr" href="#" title="Flickr">Flickr</a></li> 
});