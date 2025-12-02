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
      arrow.textContent = "×";   // change + to x when open

      // >>> AUTO-SCROLL TO HEADER <<<
      card.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else {
      content.style.display = "none";
      arrow.textContent = "+";   // change back to +
    }
  });
});
