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
  $(".owl-carousel").owlCarousel({
    pagination: false
  });
  var owl = $(".owl-carousel");
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
});