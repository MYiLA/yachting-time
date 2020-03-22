//открытие меню 
$('.menu__burger-btn').on('click', function () {
  $('.navbar-collapse').toggleClass('show-menu');
})

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('.header').addClass('header--fixed')
    $('.header__tel').addClass('header__tel--fixed')
  }
  else{
  $('.header').removeClass('header--fixed');
  $('.header__tel').removeClass('header__tel--fixed')
  }
  });

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