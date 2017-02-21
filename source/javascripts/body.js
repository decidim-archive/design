//= require jquery/dist/jquery
//= require what-input/dist/what-input.min

//= require foundation_requires
//= require foundation-datepicker/js/foundation-datepicker
//= require foundation-datepicker/js/locales/foundation-datepicker.es.js
//= require foundation-datepicker/js/locales/foundation-datepicker.ca.js

//= require form_datepicker
//= require appendAround.js
//= require svg4everybody.min.js
//= require progressFixed.js

$(document).foundation();

$(".js-append").appendAround();

$(function(){
  svg4everybody();
  progressFixed();
  formDatePicker();
});
