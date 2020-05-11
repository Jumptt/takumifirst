$(function(){
  $('h1').slideUp(3000);
  $('h1').css('color','red');

  $('.main').hover(function(){
   $('.mainchil').fadeIn();

},
function(){
 $('.mainchil').fadeOut();
});
});
