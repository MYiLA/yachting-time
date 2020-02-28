const playBtnElement = document.querySelector('.media__play-btn');
const videoCoverElement = document.querySelector('.media__wrap-desc');

playBtnElement.addEventListener('click', () => {
  closeAnimation(videoCoverElement);
});