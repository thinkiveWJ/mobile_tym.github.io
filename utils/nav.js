$(function(){
  $(".nav-bar").click(function(e){
    e.preventDefault();
    $(".nav-list").fadeToggle();
  });

  // dialog
  $(".dialog-bg, .dialog-close").click(function(){
    $(".dialog-bg").fadeOut();
    $("#dialog").fadeOut();
    $("#apply").fadeOut();
  });
  $(".fixed-bottom ul li:last-child a").click(function(e){
    e.preventDefault();
    $(".dialog-bg, #dialog").fadeIn();
  });


});