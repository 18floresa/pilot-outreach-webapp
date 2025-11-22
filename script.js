// Fade-in on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("ready");
});

// PAGE ROUTING
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".top-nav a[data-page]");

function showPage(id) {
  pages.forEach((p) => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active-link",
      link.getAttribute("data-page") === id
    );
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(link.getAttribute("data-page"));
  });
});

// Buttons in hero
document.querySelectorAll("[data-page-jump]").forEach((btn) => {
  btn.addEventListener("click", () => {
    showPage(btn.getAttribute("data-page-jump"));
  });
});

// MULTI-STEP PATHWAY
let currentStep = 0;
const stepPanels = document.querySelectorAll("[data-step-panel]");
const progressSteps = document.querySelectorAll(".progress-step");

const prevStepBtn = document.getElementById("prevStepBtn");
const nextStepBtn = document.getElementById("nextStepBtn");

function updateStep(i) {
  currentStep = i;

  stepPanels.forEach((panel, index) => {
    panel.classList.toggle("active", index === currentStep);
  });

  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  prevStepBtn.disabled = currentStep === 0;
  nextStepBtn.textContent =
    currentStep === stepPanels.length - 1 ? "Finish" : "Next →";
}

prevStepBtn.addEventListener("click", () => {
  if (currentStep > 0) updateStep(currentStep - 1);
});

nextStepBtn.addEventListener("click", () => {
  if (currentStep === stepPanels.length - 1) {
    showPage("home");
    updateStep(0);
  } else {
    updateStep(currentStep + 1);
  }
});

// Allow clicking progress bar
progressSteps.forEach((step, i) => {
  step.addEventListener("click", () => {
    updateStep(i);
  });
});

// DARK MODE
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Initialize first step
updateStep(0);

