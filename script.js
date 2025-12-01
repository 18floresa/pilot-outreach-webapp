/* =============================
   SLIDESHOW LOGIC
============================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

document.getElementById('nextBtn')?.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

document.getElementById('prevBtn')?.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

/* =============================
   STEP CARD EXPAND/COLLAPSE LOGIC
============================= */
const cards = document.querySelectorAll(".step-card");

cards.forEach(card => {
  const header = card.querySelector(".step-header");
  header.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});
