//= require jquery/dist/jquery
//= require what-input/what-input.min
//= require foundation-sites/dist/foundation.min

//= require appendAround.js
//= require svg4everybody.min.js

$(document).foundation();

$(".js-append").appendAround();


$(function(){
  svg4everybody();
});
