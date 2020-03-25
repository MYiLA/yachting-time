'use strict';
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
    if($(this).val() === '') {
        $(this).parent().removeClass('active')
        $(this).parent().removeClass('change')
    }  
})

$('.form__input-wrap').on('click', function () {
    $(this).addClass('active')
})

$('.form__input').on('change', function () {
    $(this).parent().addClass('change')
})

$('.form__submit').on('click', function (evt) {
    evt.preventDefault()
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