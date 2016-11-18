$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
  });
  /*Urls*/
  //gyaan
  $("a#koepke").attr("href", "https://crazysal.github.io/content/gyaan/breathe.html")
  $("a#urquico").attr("href", "https://crazysal.github.io/content/gyaan/girl-who-writes.html")
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
