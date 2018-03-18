//WORK IN PROGRESS, DOES NOT WORK FOR NOW (the script is not even loaded byt the index.html)

$(document).ready(function() {
  /* set variables */
    var range = $('.input-range'); /* range input */
    var value = $('.range-value'); /* range display */
  /* set / display initial starting range value */
  var startingVal = range.prop('value')
  value.html('&pound;' + startingVal);
  /* live update range value */
  range.on('input', function(){
    roundAmount()
  });
  /* live update range value - IE */
  range.on('change', function(){
    roundAmount()
  });
});
