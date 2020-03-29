'use strict';
// инициализация слайдеров
const alsoSlider = new Glide('.also__glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 30,
    autoplay: 5000,
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
    type: 'carousel',
    startAt: 0,
    perView: 5,
    gap: 30,
    autoplay: 5000,
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

const croatiaSlider = new Glide('.impressions__glide--croatia', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    peek: {before: 50, after: 50},
    autoplay: 5000,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
});

const greeceSlider = new Glide('.impressions__glide--greece', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    peek: {before: 50, after: 50},
    autoplay: 5000,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
});

const sicilySlider = new Glide('.impressions__glide--sicily', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    peek: {before: 50, after: 50},
    autoplay: 5000,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
});

const turkeySlider = new Glide('.impressions__glide--turkey', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    peek: {before: 50, after: 50},
    autoplay: 5000,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
});

introSlider.mount();
alsoSlider.mount();
croatiaSlider.mount();
greeceSlider.mount();
sicilySlider.mount();
turkeySlider.mount();

const deleteAlsoSlider = function (slider, width) {
    if(window.innerWidth >= width) {
    slider.destroy();
  } else {
    slider.mount();
  }
}

deleteAlsoSlider(alsoSlider, tabletWidth)
deleteAlsoSlider(introSlider, desktopWidth)

// остальные два отключать на десктопе desktopWidth

window.addEventListener('resize', function () {
    deleteAlsoSlider(alsoSlider, tabletWidth)
    deleteAlsoSlider(introSlider, desktopWidth)
})

