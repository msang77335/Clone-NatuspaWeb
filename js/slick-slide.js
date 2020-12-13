$(".multiple-items").slick({
   dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: "linear",
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   prevArrow: `<button type="button" class="slick-prev">prev</i></button>`,
   nextArrow: `<button type="button" class="slick-next">next</button>`,
});

$(".multiple-post").slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   speed: 2000,
   dots: true,
   autoplay: true,
   autoplaySpeed: 2000,
   prevArrow: false,
   nextArrow: false,
   responsive: [
      {
         breakpoint: 900,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         },
      },
      {
         breakpoint: 700,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
         },
      },
   ],
});

$(".slider-for").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: ".slider-nav",
   speed: 1000,
});
$(".slider-nav").slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   asNavFor: ".slider-for",
   centerMode: true,
   focusOnSelect: true,
   centerMode: true,
   centerPadding: "0",
   prevArrow: false,
   nextArrow: false,
   speed: 1000,
   responsive: [
      {
         breakpoint: 900,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
         },
      },
   ],
});
