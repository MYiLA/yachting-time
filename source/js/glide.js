'use strict';
(function () {
// инициализация слайдеров
const widthTablet = 900;
const desktopWidth = 1250;

const alsoSlider = new Glide('.also__glide', {
    type: 'slider',
    startAt: 0,
    perView: 4,
    gap: 30,
    autoplay: 6000,
    hoverpause: true,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
    breakpoints: {
        900: {
            perView: 3
        },
        660: {
            perView: 1
        }
    },
});

const introSlider = new Glide('.intro__glide', {
    type: 'slider',
    startAt: 0,
    perView: 5,
    gap: 30,
    autoplay: 6000,
    hoverpause: true,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
    breakpoints: {
        1440: {
            perView: 3
        },
        900: {
            perView: 2
        },
        660: {
            perView: 1
        }
    },
});

const reviewsSlider = new Glide('.reviews__glide', {
    type: 'slider',
    startAt: 0,
    perView: 3,
    gap: 30,
    autoplay: 6000,
    hoverpause: true,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
    breakpoints: {
        900: {
            perView: 1
        },
    },
});

const teamSlider = new Glide('.team__glide', {
    type: 'slider',
    startAt: 0,
    perView: 2,
    gap: 30,
    autoplay: 6000,
    hoverpause: true,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
    breakpoints: {
        900: {
            perView: 1
        },
    },
});

const deleteSlider = function (slider, width) {
    if(window.innerWidth >= width) {
    slider.destroy();
  } else {
    slider.mount();
  }
}

deleteSlider(alsoSlider, widthTablet)
deleteSlider(reviewsSlider, widthTablet)

deleteSlider(introSlider, desktopWidth)
deleteSlider(teamSlider, widthTablet)

// остальные два отключать на десктопе desktopWidth

window.addEventListener('resize', function () {
    deleteSlider(alsoSlider, widthTablet)
    deleteSlider(reviewsSlider, widthTablet)

    deleteSlider(introSlider, desktopWidth)
    deleteSlider(teamSlider, widthTablet)
})

})();