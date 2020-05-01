'use strict';

(function () {
    // ajax запрос НА тестовый емейл
    const URL_UPLOAD = 'https://cors-anywhere.herokuapp.com/https://formspree.io/xknqwaqr';


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

        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
            onError('Закончился срок действия запроса');
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
            $(this).parent().removeClass('valid')
        }
    })

    $('.form__input-wrap').on('click', function () {
        $(this).addClass('active')
    })

    // закрыть попап (переделать на display none и класс/опасити/анимации)
    $('.form__btn-close').on('click', function () {
        $('.popup-form').removeClass('active');
        $('.popup-form').removeClass('active--no-places');
        $('.popup-form .form__form')[0].reset();

        $('.popup-form .form__input-wrap').each(function () {
            $(this).removeClass('valid')
            $(this).removeClass('active')
        });
    })

    // открыть попап (переделать на display none и класс/опасити/анимации)
    $('.upcoming-trips__btn--book').on('click', function () {
        $('.popup-form').addClass('active')
    })

    $('.upcoming-trips__btn--tel').on('click', function () {
        $('.popup-form').addClass('active--no-places')
    })

    // маски для формы

    var phoneMask = IMask($('#tel')[0], {
        mask: '+{7} (900) 000-00-00',
        placeholderChar: '_',
        lazy: false,
    });

    var phoneMaskPopup = IMask($('#tel-popup')[0], {
        mask: '+{7} (900) 000-00-00',
        placeholderChar: '_',
        lazy: false,
    });


    var nameMask = IMask($('#name-popup')[0], {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/,
    });


    var nameMaskPopup = IMask($('#name')[0], {
        mask: /^(?!.*\s{2,})[a-zA-Zа-яА-Я\s]+$/,
    });

    // проверка валидация
    const invalidTime = 2500;

    const validationName = function (input) {
        if (input[0].value !== '') {
            input.parent().removeClass('invalid');
            input.parent().addClass('valid');
            return true;
        } else {
            input.parent().addClass('invalid');
            input.parent().removeClass('valid')
            input.parent().children('label').text('Имя введено не полностью');
            input.parent().children('label').css({
                'color': '#e30a17'
            });
            setTimeout(function () {
                input.parent().removeClass('invalid');
                input.parent().children('label').text('Ваше имя');
                input.parent().children('label').attr('style', '');
            }, invalidTime);
            return false
        }
    }

    const validationTel = function (input) {
        if (
            (input.val().search('_') === -1) &&
            (input.val() != '')) {
            input.parent().removeClass('invalid');
            input.parent().addClass('valid');
            return true;
        } else {
            input.parent().addClass('invalid');
            input.parent().removeClass('valid')
            input.parent().children('label').text('Номер телефона введен не полностью');
            input.parent().children('label').css({
                'color': '#e30a17'
            });
            setTimeout(function () {
                input.parent().removeClass('invalid');
                input.parent().children('label').text('Ваш номер телефона');
                input.parent().children('label').attr('style', '');
            }, invalidTime);
            return false;
        }
    }

    const isValide = function () {
        return (validationName() && validationTel())
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

    const openPopupError = function (colorItem) {
        $('.popup-error').addClass('active');
        $('.popup-error').addClass(colorItem);
    }

    const closePopupError = function (colorItem) {
        $('.popup-error').removeClass('active');
        $('.popup-error').removeClass(colorItem);
    }

    //сообщения формы
    var showError = function (errorMessage) {
        openPopupError('popup-error--white');
    }

    var showSuccess = function () {
        openPopupThanks('popup-thanks--white');
        $('.landing__form .form__form')[0].reset();
        $('.landing__form .form__input-wrap').each(function () {
            $(this).removeClass('valid')
            $(this).removeClass('active')
        })
    }

    //сообщения формы-попапа
    var showErrorPopup = function (errorMessage) {
        openPopupError('popup-error--black');
    }

    var showSuccessPopup = function () {
        openPopupThanks('popup-thanks--black')
        $('.popup-form .form__form')[0].reset();
        $('.popup-form .form__input-wrap').each(function () {
            $(this).removeClass('valid')
            $(this).removeClass('active')
        })
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

            // function (method, URL, onSuccess, onError, data)
            backend(
                'POST',
                URL_UPLOAD,
                showSuccessPopup,
                showErrorPopup,
                new FormData($('.popup-form .form__form')[0]));
        }
    })

    $('.landing__form .form__submit').on('click', function (evt) {
        evt.preventDefault();

        validationName($('#name'));
        validationTel($('#tel'));

        if ($('.landing__form .form__input-wrap.invalid').length > 0) {
            return
        } else {

            backend(
                'POST', 
                URL_UPLOAD, 
                showSuccess, 
                showError,
                new FormData($('.landing__form .form__form')[0]));
        }
    })

    $('.popup-thanks__btn').on('click', function () {
        closePopupThanks('popup-thanks--white')
        closePopupThanks('popup-thanks--black')
    })

    $('.popup-error__btn').on('click', function () {
        closePopupError('popup-error--white');
        closePopupError('popup-error--black');
    })

    // .popup-thanks
    //     &.active открывает попап
    //     &--white белый попап
    //     &--black темный попап
})();