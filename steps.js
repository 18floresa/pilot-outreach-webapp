/* =============================
   STEP CARD EXPAND/COLLAPSE LOGIC
============================= */
const cards = document.querySelectorAll(".step-card");

cards.forEach(card => {
  const header = card.querySelector(".step-header");
  const content = card.querySelector(".step-content");
  const arrow = card.querySelector(".step-arrow");

  // Start with content hidden
  content.style.display = "none";

  header.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");

    if (isOpen) {
      content.style.display = "block";
      arrow.textContent = "×";   // change + to × when open

      // >>> STRONG AUTO-SCROLL FIX <<<
      const cardTop = card.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({
        top: cardTop,
        behavior: "smooth"
      });

    } else {
      content.style.display = "none";
      arrow.textContent = "+";   // change back to +
    }
  });
});
