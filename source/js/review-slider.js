new Glide('.review__glide', {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 30,
  autoplay: 4000,
  animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
  dragThreshold: 50,
  animationDuration: 1000,
}).mount();