
// Script for the carousel images on the home page

let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-images img');
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}