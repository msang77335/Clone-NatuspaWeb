var $grid = $(".service__list").isotope({
   itemSelector: ".service__item",
   layoutMode: "fitRows",
   transitionDuration: "0.8s",
});
// filter items on button click
$(".categories__item").on("click", function () {
   var filterValue = $(this).attr("data-filter");
   $(".categories__item").removeClass("active");
   $(this).addClass("active");
   $grid.isotope({ filter: filterValue });
});
