const programmesGlide = new Glide('.programmes__glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 0,
      autoplay: 4000,
      animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
      dragThreshold: 50,
      animationDuration: 1000,
      breakpoints: {
        900: {
          perView: 2
        },
        660: {
          perView: 1
        }
      },
    });

if (window.innerWidth <= tabletWidth) {
  programmesGlide.mount();
}

const onToggleSlider = function() {
    if (window.innerWidth <= tabletWidth) {
      programmesGlide.mount();
    } else {
      programmesGlide.destroy();
    }
};
  
window.addEventListener('resize', onToggleSlider);
