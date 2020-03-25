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

$('.form__input-wrap').on('click', function () {
    $(this).addClass('active')
})

$('.form__submit').on('click', function (evt) {
    evt.preventDefault()
})

promo__link