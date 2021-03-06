'use strict';
// слайдеры
(function () {
const croatiaSlider = new Glide('.impressions__glide--croatia', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  gap: 30,
  peek: {before: 150, after: 150},
  autoplay: 6000,
  hoverpause: true,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
  breakpoints: {
    1800: {
      peek: {before: 420, after: 420},
    },
    1700: {
      peek: {before: 300, after: 300},
    },
    1440: {
      peek: {before: 240, after: 240},
    },
    1340: {
      peek: {before: 250, after: 250},
    },
    1170: {
      peek: {before: 180, after: 180},
    },
    1000: {
      peek: {before: 130, after: 130},
    },
    900: {
      peek: {before: 280, after: 280},
    },
    800: {
      peek: {before: 240, after: 240},
    },
    700: {
      peek: {before: 180, after: 180},
    },
    600: {
      peek: {before: 140, after: 140},
    },
    510: {
      peek: {before: 100, after: 100},
    },
    420: {
      peek: {before: 0, after: 90},
    }
},
});

const greeceSlider = new Glide('.impressions__glide--greece', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  gap: 30,
  peek: {before: 150, after: 150},
  autoplay: 6000,
  hoverpause: true,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
  breakpoints: {
    1800: {
      peek: {before: 420, after: 420},
    },
    1700: {
      peek: {before: 300, after: 300},
    },
    1440: {
      peek: {before: 240, after: 240},
    },
    1340: {
      peek: {before: 250, after: 250},
    },
    1170: {
      peek: {before: 180, after: 180},
    },
    1000: {
      peek: {before: 130, after: 130},
    },
    900: {
      peek: {before: 280, after: 280},
    },
    800: {
      peek: {before: 240, after: 240},
    },
    700: {
      peek: {before: 180, after: 180},
    },
    600: {
      peek: {before: 140, after: 140},
    },
    510: {
      peek: {before: 100, after: 100},
    },
    420: {
      peek: {before: 0, after: 90},
    }
},
});

const sicilySlider = new Glide('.impressions__glide--sicily', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  gap: 30,
  peek: {before: 150, after: 150},
  autoplay: 6000,
  hoverpause: true,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
  breakpoints: {
    1800: {
      peek: {before: 420, after: 420},
    },
    1700: {
      peek: {before: 300, after: 300},
    },
    1440: {
      peek: {before: 240, after: 240},
    },
    1340: {
      peek: {before: 250, after: 250},
    },
    1170: {
      peek: {before: 180, after: 180},
    },
    1000: {
      peek: {before: 130, after: 130},
    },
    900: {
      peek: {before: 280, after: 280},
    },
    800: {
      peek: {before: 240, after: 240},
    },
    700: {
      peek: {before: 180, after: 180},
    },
    600: {
      peek: {before: 140, after: 140},
    },
    510: {
      peek: {before: 100, after: 100},
    },
    420: {
      peek: {before: 0, after: 90},
    }
},
});

const turkeySlider = new Glide('.impressions__glide--turkey', {
  type: 'slider',
  startAt: 0,
  perView: 1,
  gap: 30,
  peek: {before: 150, after: 150},
  autoplay: 6000,
  hoverpause: true,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
  breakpoints: {
    1800: {
      peek: {before: 420, after: 420},
    },
    1700: {
      peek: {before: 300, after: 300},
    },
    1440: {
      peek: {before: 240, after: 240},
    },
    1340: {
      peek: {before: 250, after: 250},
    },
    1170: {
      peek: {before: 180, after: 180},
    },
    1000: {
      peek: {before: 130, after: 130},
    },
    900: {
      peek: {before: 280, after: 280},
    },
    800: {
      peek: {before: 240, after: 240},
    },
    700: {
      peek: {before: 180, after: 180},
    },
    600: {
      peek: {before: 140, after: 140},
    },
    510: {
      peek: {before: 100, after: 100},
    },
    420: {
      peek: {before: 0, after: 90},
    }
},
});

// слайдер по умолчанию
croatiaSlider.mount();
// табы стран
const deleteActivImpressions = function () {
  
  if ($('.impressions__tab--croatia').hasClass('active')) {
    $('.impressions__tab--croatia').removeClass('active');
    $('.impressions__glide--croatia').removeClass('active');
    croatiaSlider.destroy();
  }
  else if ($('.impressions__tab--greece').hasClass('active')) {
    $('.impressions__tab--greece').removeClass('active');
    $('.impressions__glide--greece').removeClass('active');
    greeceSlider.destroy();
  }
  else if ($('.impressions__tab--sicily').hasClass('active')) {
    $('.impressions__tab--sicily').removeClass('active');
    $('.impressions__glide--sicily').removeClass('active');
    sicilySlider.destroy();
  }
  else if ($('.impressions__tab--turkey').hasClass('active')) {
    $('.impressions__tab--turkey').removeClass('active');
    $('.impressions__glide--turkey').removeClass('active');
    turkeySlider.destroy();
  }
}

$('.impressions__tab').each(function () {
  $(this).on('click', function () {
    console.log('нажали ' + $(this));
    deleteActivImpressions($(this));
    console.log('работает ' + $(this));
    // setTimeout(function(){}, 0)
    $(this).addClass('active');
    if ($('.impressions__tab--croatia').hasClass('active')) {
      $('.impressions__glide--croatia').addClass('active');
      croatiaSlider.mount();
      // $('.glide__slide--clone').remove();
    }

    else if ($('.impressions__tab--greece').hasClass('active')) {
      $('.impressions__glide--greece').addClass('active');
      greeceSlider.mount();
      // $('.glide__slide--clone').remove();
    }

    else if ($('.impressions__tab--sicily').hasClass('active')) {
      $('.impressions__glide--sicily').addClass('active');
      sicilySlider.mount();
      // $('.glide__slide--clone').remove();
    }

    else if ($('.impressions__tab--turkey').hasClass('active')) {
      $('.impressions__glide--turkey').addClass('active');
      turkeySlider.mount();
      // $('.glide__slide--clone').remove();
    }
  })
})

})();