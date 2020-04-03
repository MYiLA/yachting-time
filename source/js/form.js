'use strict';
// ajax запрос НА мой емейл
const URL_UPLOAD = 'https://formspree.io/mzbvobkj';
const XHR_CODE_SUCCESS = 200;

const xhrTimeout = 10000;

const backend = function (method, URL, onSuccess, onError, data) {

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === XHR_CODE_SUCCESS) {
      onSuccess(xhr.response);
    } else {
      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.timeout = xhrTimeout;
  xhr.open(method, URL);
  xhr.send(data);
};

// показывает блок с картинами
$('.cruises-select__tabs-caption').on('click', '.cruises-select__tab:not(.active)', function () {
    // console.log($(this).closest('.cruises-select__content-wrap'))
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.cruises-select__wrap').children('.cruises-select__content-wrap').find('.cruises-select__tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});

// показывает блок с плашками
$('.cruises-select__btn-collapse').on('click', function () {
    $('.cruises-select__wrap').toggleClass('active')
})

// логика инпутов

$('.form__input').on('focusout', function () {
    if ($(this).val() === '') {
        $(this).parent().removeClass('active')
        $(this).parent().removeClass('change')
    }
})

$('.form__input-wrap').on('click', function () {
    $(this).addClass('active')
})

// закрыть попап
$('.form__btn-close').on('click', function () {
    $('.popup-form').removeClass('active')
})

$('.form__btn-close').on('click', function () {
    $('.popup-form').removeClass('active--no-places')
})

// открыть попап (переделать. перед открытием должен активироваться соответствующий кнопке радио батон)
$('.upcoming-trips__btn--book').on('click', function () {
    $('.popup-form').addClass('active')
})

$('.upcoming-trips__btn--tel').on('click', function () {
    $('.popup-form').addClass('active--no-places')
})
console.log($('#tel'));
// маски для формы
$(document).ready(function () {
    $('#tel').mask('+7(900)-000-00-00');
    $('#tel-popup').mask('+7(900)-000-00-00');
})
// проверка валидация
$('.form__input').on('change', function () {
    $(this).parent().addClass('change')
})

const validationName = function (input) {
    if (input[0].value === '') {
        input.parent().addClass('invalid');
        alert('Пожалуйста введите имя');
        return
    }
    if (/[0-9]/.test(input[0].value)) {
        input.parent().addClass('invalid');
        alert('Пожалуйста не используйте числа при вводе имени');
        return
    } else
        input.parent().removeClass('invalid')
}

const validationTel = function (input) {
    if (input[0].value.length !== 17) {
        input.parent().addClass('invalid');
        alert('Пожалуйста введите телефон');
        return
    } else {
        input.parent().removeClass('invalid')
    }
}

$('#name').on('focusout', function () {
    validationName($('#name'))
})

$('#tel').on('focusout', function () {
    validationTel($('#tel'))
})

$('#name-popup').on('focusout', function () {
    validationName($('#name-popup'))
})

$('#tel-popup').on('focusout', function () {
    validationTel($('#tel-popup'))
})


// субмит и ajax

const openPopupThanks = function (colorItem) {
    $('.popup-thanks').addClass('active');
    $('.popup-thanks').addClass(colorItem);
}

const closePopupThanks = function (colorItem) {
    $('.popup-thanks').removeClass('active');
    $('.popup-thanks').removeClass(colorItem);
}

$('.popup-form .form__submit').on('click', function (evt) {
    evt.preventDefault();
    validationName($('#name-popup'));
    validationTel($('#tel-popup'));

    if ($('.popup-form .form__input-wrap.invalid').length > 0) {
        return
    } else {
        // скрываю попап формы
        $('.popup-form').removeClass('active')
        $('.popup-form').removeClass('active--no-places')
        // отправка формы сервисом formspree.io


        // window.backend('POST', URL_UPLOAD, function() {
        //     alert('Сервис formspree.io (https://formspree.io/) возможно работает не корректно'); 
        // }, function() {
        //     alert('Произошла ошибка соединения')
        // }, new FormData($('.popup-form .form__form')[0]));


        // всегда говорю "спасибо":-)
        openPopupThanks('popup-thanks--black')

        $('.popup-form .form__form')[0].reset();
    }
})

$('.landing__form .form__submit').on('click', function (evt) {
    evt.preventDefault();

    validationName($('#name'));
    validationTel($('#tel'));

    if ($('.landing__form .form__input-wrap.invalid').length > 0) {
        return
    } else {

        // window.backend('POST', URL_UPLOAD, function() {
        //     alert('Сервис formspree.io (https://formspree.io/) возможно работает не корректно'); 
        // }, function() {
        //     alert('Произошла ошибка соединения')
        // }, new FormData($('.landing__form .form__form')[0]));

        openPopupThanks('popup-thanks--white');
        $('.landing__form .form__form')[0].reset();
    }
})

$('.popup-thanks__btn').on('click', function () {
    closePopupThanks('popup-thanks--white')
    closePopupThanks('popup-thanks--black')
})

// .popup-thanks
//     &.active открывает попап
//     &--white белый попап
//     &--black темный попап