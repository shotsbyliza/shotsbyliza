$(document).ready(function(){
  console.log('why is this not working?');
});

$('.margie').click(function(){
  $('.number-1').css('text-align','left');
});
$('.mojito').dblclick(function(){
  $('.number-2').after("<p>Extra Mint Please!<p>");
});
$('.gin').hover(function(){
  $('.number-3').css('text-align','right');
});
$('.ginger').click(function(){
  $('.number-4').css("color", "gold");
});
$('.sangria').hover(function(){
  $('.number-5').css("color", "maroon");
});
