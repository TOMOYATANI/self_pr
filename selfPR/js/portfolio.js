/* <====== slick ======> */
$(".slider-photo").slick({
  infinite: true,
  autoplay: true,
  arrow: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: "-10%",
  prevArrow: '<i class="prev-arrow fas fa-chevron-left"></i>',
  nextArrow: '<i class="next-arrow fas fa-chevron-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        autoplay: true,
        arrow: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        prevArrow: '<i class="prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="next-arrow fas fa-chevron-right"></i>',
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        autoplay: true,
        arrow: true,
        slidesToShow: 1,
        autoplaySpeed: 4000,
        prevArrow: '<i class="prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="next-arrow fas fa-chevron-right"></i>',
      },
    },
  ],
});

$(".slider-works").slick({
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* <====== burger-menu ======> */

$(".burger-btn").on("click", function () {
  $(".burger-btn").toggleClass("close");
  $(".nav-header-menu").fadeToggle(500);
  $("body").toggleClass("noscroll");
});

$("#nav-menu a[href]").on("click", function (event) {
  if ($(".burger-btn").css("display") == "block") {
    $(".burger-btn").trigger("click");
  }
});

/* <====== animation ======> */

ScrollReveal().reveal(".animate", {
  origin: "bottom",
  distance: "50px",
  duration: 800,
  viewFactor: 0.5,
  reset: true,
});

ScrollReveal().reveal(".rotate", {
  rotate: { x: 0, y: 0, z: 300 },
  duration: 3000,
  viewFactor: 0.5,
  reset: true,
});

ScrollReveal().reveal(".animate-about", {
  delay: 800,
  origin: "left",
  distance: "100px",
  reset: true,
});

ScrollReveal().reveal(".camera", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".myself", {
  delay: 500,
  origin: "bottom",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".skill", {
  delay: 800,
  origin: "bottom",
  distance: "50px",
  reset: true,
});

ScrollReveal().reveal(".animate-contact", {
  delay: 800,
  origin: "right",
  distance: "100px",
  reset: true,
});

/* <====== button ======> */

$(document).ready(function () {
  $("#top-button").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#top-button").fadeIn("fast");
    } else {
      $("#top-button").fadeOut("fast");
    }
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
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
