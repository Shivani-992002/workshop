const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Automatic slide show
setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000); // Change slide every 3 seconds