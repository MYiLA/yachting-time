//открытие меню 
$('.menu__burger-btn').on('click', function () {
  $('.navbar-collapse').toggleClass('show-menu');
})

//анимация бургера
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });