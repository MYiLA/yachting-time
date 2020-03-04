'use strict';

const tabletWidth = 900;
const desktopWidth = 1440;

const closeAnimation = function (wrap) {
  wrap.classList.remove('dissolve-show');
  wrap.classList.add('dissolve-hidden');
}
