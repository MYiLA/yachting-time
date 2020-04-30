'use strict';
(function () {
const yachtSlider = new Glide('.yacht-glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 30,
    autoplay: 6000,
    hoverpause: true,
    animationTimingFunc: 'cubic-bezier(.36,.39,.31,1.02)',
    dragThreshold: 50,
    animationDuration: 1000,
});

yachtSlider.mount();

$(function() {
  $("a").each(function(b) {//работа с элементом (ссылка)
      if (this.title) {
          var c = this.title;
          var x = 0;//расположение по горизонтали(left)
          var y = 15;//расположение по вертикали (top)
          $(this).mouseover(function(d) {
              this.title = "";
              $("body").append('<div id="tooltip">' + c + "</div>");
              $("#tooltip").css({
                  left: (d.pageX + x) + "px",
                  top: (d.pageY + y) + "px",
                  opacity: "1"//полупрозрачность
              }).show(600)//скорость появления подсказки
          }).mouseout(function() {
              this.title = c;
              $("#tooltip").remove()
          }).mousemove(function(d) {
              $("#tooltip").css({
                  left: (d.pageX + x) + "px",
                  top: (d.pageY + y) + "px"
              })
          })
      }
  })
  });
})();