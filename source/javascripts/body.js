//= require jquery/dist/jquery
//= require what-input/what-input.min
//= require foundation-sites/dist/foundation.min

//= require appendAround.js


//= require owl.carousel.min.js

$(document).foundation();


$(".js-append").appendAround();


//Owl carousel for phase nav
$(document).ready(function() {

  //checks the active phase number before loading the carousel
  var activeSlide = $(".phase-nav__item.is-active").index();
  var widowWidth = $(window).width();
  var visibleSlides;
  
  if (widowWidth > 0 ){
    visibleSlides = 0;
  } 
  if (widowWidth > 479 ){
    visibleSlides = 1;
  }
  if (widowWidth > 830 ){
    visibleSlides = 2;
  }
  if (widowWidth > 1100 ){
    visibleSlides = 3;
  }

  $("[data-carousel]").owlCarousel({
    pagination: false,
    items: 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [1100,3],
    itemsTablet: [830,2],
    itemsTabletSmall: [600,1],
    itemsMobile : [479,1]
  });
  var owl = $("[data-carousel]");
  $(".next").click(function(){
    owl.trigger("owl.next");
  });
  $(".prev").click(function(){
    owl.trigger("owl.prev");
  });

  if(activeSlide > visibleSlides){
    owl.trigger('owl.jumpTo', activeSlide);
  }
});