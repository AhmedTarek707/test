/*global $, alert, console*/
$(function()
  {
    'use strict';
    
    //adjest header height
    var myHeader = $('.header');
    myHeader.height($(window).height());
    $(window).resize(function()
      { 
        myHeader.height($(window).height());
      });
     //links add active class
     $('.links li').click(function() 
      { 
    $(this).addClass('active').siblings().removeClass('active');
      });
//adjust Bx slider list item center

//trigger the Bx slider

//smooth scroll to div
$('.links li a').click(function(){
    $('html, body').animate(
        {
           scrollTop: $('#' + $(this).data('value')).offset().top
        },1300);
});
}); // } & ) end of the Top function