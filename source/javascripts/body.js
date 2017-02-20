//= require jquery/dist/jquery
//= require what-input/dist/what-input.min

//= require foundation_requires

//= require form_validation_custom_errors

//= require appendAround.js
//= require svg4everybody.min.js
//= require progressFixed.js

$(document).foundation();

$(".js-append").appendAround();

$(function(){
  svg4everybody();
  progressFixed();
  formValidationCustomErrors();
});
