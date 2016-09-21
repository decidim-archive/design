//= require jquery/dist/jquery
//= require what-input/what-input.min
//= require foundation-sites/dist/foundation.min

//= require appendAround.js

//= require map/marker
//= require map/map

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
  if (widowWidth > 768 ){
    visibleSlides = 2;
  }
  if (widowWidth > 980 ){
    visibleSlides = 3;
  }

  $("[data-carousel]").owlCarousel({
    pagination: false,
    items: 4
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