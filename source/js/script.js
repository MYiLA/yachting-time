'use strict';

const tabletWidth = 900;
const desktopWidth = 1440;

const closeAnimation = function (wrap) {
  wrap.classList.remove('dissolve-show');
  wrap.classList.add('dissolve-hidden');
}


// Плавный скролл ссылок-якорей

$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: ($(hash).offset().top) - 100
      }, 800);
    }
  });
});

// загрузка файла

$('.promo__link').on('click', function (evt) {
  evt.preventDefault()
})

