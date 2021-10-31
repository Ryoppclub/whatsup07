$ (function () {
  var pagetop = $("#js-scroll-fadein");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      pagetop.addClass("is-fadein");
    } else {
      pagetop.removeClass("is-fadein");
    }
  });
  pagetop.click(function(){
    $("body,html").animate({scrollTop: 0} , 500);
    return false;
  });

  $(".flow-card h5").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});