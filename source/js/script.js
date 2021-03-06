'use strict';
(function () {

  const widthTablet = 900;
  // const desktopWidth = 1250;

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

  // блок вопросов: открыть и закрыть ответ

  $('.questions__btn').on('click', function () {
    if ($(window).width() < widthTablet) {
      $(this).parent().toggleClass('active');
    } else {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
      } else {
        $('.questions__item').removeClass('active');
        $(this).parent().addClass('active');
      }
    }
  })

  window.addEventListener('resize', function () {
    if ($(window).width() >= widthTablet) {
      $('.questions__item').removeClass('active');
    }
  })

  // закрыть ответ по клику вне его зоны

  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".questions__item.active"); // тут указываем селектор
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
    }
  });

  // развернуть/свернуть вопросы

  const collapseQuestions = function () {
    $('.questions__btn-collapse--max').on('click', function () {
      $('.questions__btn-collapse--min').css('display', 'block');
      $('.questions__btn-collapse--max').css('display', 'none');
      $('.questions__item').css('display', 'block');
    })

    $('.questions__btn-collapse--min').on('click', function () {
      $('.questions__btn-collapse--min').css('display', 'none');
      $('.questions__btn-collapse--max').css('display', 'block');
      $('.questions__item:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4))').css('display', 'none');
    })
  }

  collapseQuestions();

})();