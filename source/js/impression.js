'use strict';
// слайдеры

const croatiaSlider = new Glide('.impressions__glide--croatia', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 30,
  // peek: {before: 50, after: 50},
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
  // peek: {before: 50, after: 50},
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
  // peek: {before: 50, after: 50},
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
  // peek: {before: 50, after: 50},
  autoplay: 5000,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
});
// слайдеры
// croatiaSlider.mount();
// greeceSlider.mount();
// sicilySlider.mount();
// turkeySlider.mount();

// croatiaSlider.destroy();
// greeceSlider.destroy();
// sicilySlider.destroy();
// turkeySlider.destroy();
// табы
// impressions__tab--croatia
// impressions__tab--greece
// impressions__tab--sicily
// impressions__tab--turkey

// active
// слайдеры
// impressions__glide--croatia
// impressions__glide--greece
// impressions__glide--sicily
// impressions__glide--turkey

// слайдер по умолчанию
croatiaSlider.mount();
// табы стран
const deleteActivImpressions = function (a) {
  console.log(a);
  console.log('croatia ' + $('.impressions__tab--croatia').hasClass('active'))
  console.log('greece ' + $('.impressions__tab--greece').hasClass('active'))
  console.log('sicil ' + $('.impressions__tab--sicily').hasClass('active'))
  console.log('turkey ' + $('.impressions__tab--turkey').hasClass('active'))
  if ($('.impressions__tab--croatia').hasClass('active')) {
    $('.impressions__tab--croatia').removeClass('active');
    $('.impressions__glide--croatia').removeClass('active');
    croatiaSlider.destroy();
  }
  else if ($('.impressions__tab--greece').hasClass('active')) {
    $('.impressions__tab--greece').removeClass('active');
    $('.impressions__glide--greece').removeClass('active');
    console.log(a);
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
    $(this).addClass('active');
    if ($('.impressions__tab--croatia').hasClass('active')) {
      $('.impressions__glide--croatia').addClass('active');
      croatiaSlider.mount();
    }

    else if ($('.impressions__tab--greece').hasClass('active')) {
      $('.impressions__glide--greece').addClass('active');
      greeceSlider.mount();
    }

    else if ($('.impressions__tab--sicily').hasClass('active')) {
      $('.impressions__glide--sicily').addClass('active');
      sicilySlider.mount();
    }

    else if ($('.impressions__tab--turkey').hasClass('active')) {
      $('.impressions__glide--turkey').addClass('active');
      turkeySlider.mount();
    }
  })
})

