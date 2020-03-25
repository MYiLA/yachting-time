'use strict';

const alsoSlider = new Glide('.also__glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 30,
    autoplay: 6000,
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
}).mount();


const deleteAlsoSlider = function () {
    if(window.innerWidth >= tabletWidth) {
    alsoSlider.destroy()
  } 
  // иначе заного инициализировать слайдер(если в нем есть такая опция)
}
// остальные два отключать на десктопе desktopWidth
deleteAlsoSlider()

window.addEventListener('resize', deleteAlsoSlider)

