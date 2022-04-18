$(document).ready(function(){
    $(".button-collapse").sideNav();
    

    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

    add_paper_thumbnail();
    $(window).resize( function() {
      add_paper_thumbnail();
    });



}); // end of document ready




function add_paper_thumbnail(){
  
  var window_width = $(document).width();
  var thumb1 = document.getElementById("paper-thumbnail1");
  var thumb2 = document.getElementById("paper-thumbnail2");
  
  if( window_width <= 991 ) {
    thumb1.className = "col s12";
    thumb1.getElementsByTagName('img')[0].src = "images/thumbnail1.jpg";
    thumb2.className = "col s12";
    thumb2.getElementsByTagName('img')[0].src = "images/thumbnail2.jpg";
  } else {
    thumb1.className = "col m12";
    thumb1.getElementsByTagName('img')[0].src = "images/thumbnail.jpg";
    thumb2.getElementsByTagName('img')[0].src = "";
  }
}