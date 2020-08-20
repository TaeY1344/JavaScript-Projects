const slide = document.getElementsByClassName('slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const intervalTime = 5000;
const auto = true;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');

  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slide[0].classList.add('current');
  }

}

const prevSlide = () => {
  const current = document.querySelector('.current');

  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slide[slide.length - 1].classList.add('current');
  }

}


nextBtn.addEventListener('click', (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prevBtn.addEventListener('click', (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(prevSlide, intervalTime);
  }
})

if (auto) {
  setInterval(nextSlide, intervalTime);
}
