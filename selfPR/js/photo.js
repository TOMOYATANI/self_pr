/* <====== burger-menu ======> */

$(".burger-btn").on("click", function () {
  $(".burger-btn").toggleClass("close");
  $(".nav-header-menu").fadeToggle(500);
  $("body").toggleClass("noscroll");
});

$("#nav-menu a[href]").on("click", function (event) {
  $(".burger-btn").trigger("click");
});

/* <====== animation ======> */

ScrollReveal().reveal(".animate", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  viewFactor: 0.5,
  reset: true,
});

/* <====== button ======> */

$(document).ready(function () {
  $("#top-button").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $("#top-button").fadeIn("fast");
    } else {
      $("#top-button").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").offset().top;
    if (scrollPosition > footHeight) {
      $("#top-button").css({
        position: "absolute",
      });
    } else {
      $("#top-button").css({
        position: "fixed",
      });
    }
  });

  $("##top-button").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
