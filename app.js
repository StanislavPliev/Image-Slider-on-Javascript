const upBtnNode = document.querySelector('.up-button');
const downBtnNode = document.querySelector('.down-button');
const containerNode = document.querySelector('.container');
const sidebarNode = document.querySelector('.sidebar');
const mainSlideNode = document.querySelector('.main-slide');

const slidesCount = mainSlideNode.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebarNode.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtnNode.addEventListener('click', () => {
  changeSlide('up');
})

downBtnNode.addEventListener('click', () => {
  changeSlide('down');
})

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  } 

  const height = containerNode.clientHeight;

  mainSlideNode.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebarNode.style.transform = `translateY(${activeSlideIndex * height}px)`;
}