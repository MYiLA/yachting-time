// эффект ховера на мобильной ширине
(function () {
const widthMobile = 320;
const widthTabletSmall = 660;
const widthTablet = 900;
const widthDesktop = 1440;
const disappearCss = {
    'opacity': 0,
    'pointer-events': 'none'
};
const appearCss = {
    'opacity': 1,
    'pointer-events': 'auto'   
}



const uncomingHoverMobile = function () {
    if ($(window).width() < widthTabletSmall) {
        $('.upcoming-trips__item').each(function () {
            $(this).children('.upcoming-trips__item-wrap').children('.upcoming-trips__btn-mobile').on('click', function () {
                $(this).parent().parent().children('.upcoming-trips__item-hover').css({
                    'transform': 'translateX(0)',
                    'opacity': 1,
                    'pointer-events': 'auto'
                })
            });

            $(this).children('.upcoming-trips__item-hover').children('.upcoming-trips__btn-mobile').on('click', function () {
                $(this).parent().css({
                    'transform': 'translateX(75%)',
                    'opacity': 0,
                    'pointer-events': 'none'
                })
            });
            // $(this).children('.upcoming-trips__item-hover').children('.upcoming-trips__btn--book').on('click', function () {
            //     $('.popup-form').addClass('active')
            // })
        });
    } else {
        $('.upcoming-trips__item').each(function () {
            $(this).children('.upcoming-trips__item-hover').attr('style', '')
        });
    };
}

const collapseUncoming = function () {
    if ($(window).width() < widthTablet) {
        $('.upcoming-trips__btn-collapse--max').on('click', function () {
            $('.upcoming-trips__btn-collapse--min').css('display', 'block');
            $('.upcoming-trips__btn-collapse--max').css('display', 'none');
            $('.upcoming-trips__item').css('display', 'block');
        })

        $('.upcoming-trips__btn-collapse--min').on('click', function () {
            $('.upcoming-trips__btn-collapse--min').css('display', 'none');
            $('.upcoming-trips__btn-collapse--max').css('display', 'block');
            $('.upcoming-trips__item:not(:nth-child(1)):not(:nth-child(2))').css('display', 'none');
        })
    } else {
        $('.upcoming-trips__item').each(function () {
            $(this).attr('style', '');
        })
        $('.upcoming-trips__btn-collapse--min').attr('style', '');
        $('.upcoming-trips__btn-collapse--max').attr('style', '');
    }
}

$(window).resize(function () {
    uncomingHoverMobile()
    if($(window).width() >= widthTablet) {
        $('.upcoming-trips__item').each(function () {
            $(this).attr('style', '');
        })
        $('.upcoming-trips__btn-collapse--min').attr('style', '');
        $('.upcoming-trips__btn-collapse--max').attr('style', '');
    }
})

uncomingHoverMobile()
collapseUncoming()
})();