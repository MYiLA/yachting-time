"use strict";var alsoSlider=new Glide(".also__glide",{type:"slider",startAt:0,perView:4,gap:30,autoplay:5e3,animationTimingFunc:"cubic-bezier(.36,.39,.31,1.02)",dragThreshold:50,animationDuration:1e3,breakpoints:{900:{perView:3},660:{perView:1}}}),introSlider=new Glide(".intro__glide",{type:"slider",startAt:0,perView:5,gap:30,autoplay:5e3,animationTimingFunc:"cubic-bezier(.36,.39,.31,1.02)",dragThreshold:50,animationDuration:1e3,breakpoints:{1440:{perView:3},900:{perView:2},660:{perView:1}}}),reviewsSlider=new Glide(".reviews__glide",{type:"slider",startAt:0,perView:3,gap:30,autoplay:5e3,animationTimingFunc:"cubic-bezier(.36,.39,.31,1.02)",dragThreshold:50,animationDuration:1e3,breakpoints:{900:{perView:1}}}),deleteSlider=function(e,i){window.innerWidth>=i?e.destroy():e.mount()};deleteSlider(alsoSlider,tabletWidth),deleteSlider(introSlider,desktopWidth),deleteSlider(reviewsSlider,tabletWidth),window.addEventListener("resize",(function(){deleteSlider(alsoSlider,tabletWidth),deleteSlider(introSlider,desktopWidth),deleteSlider(reviewsSlider,tabletWidth)}));