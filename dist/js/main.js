// Elements appear when scrolled into view...
(() => {
  let elements;
  let windowHeight;

  init = () => {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  };

  checkPosition = () => {
    elements.forEach(element => {
      let positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
        element.classList.remove("fade-in-element");
      }
    });
  };

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Tutor card button functionality -Scroll throu tutor cards
const tutors = document.querySelectorAll(".tutor");
const nextBtns = document.querySelectorAll(".next_btn");

nextTutor = () => {
  tutors.forEach(tutor => {
    if (tutor.classList.contains("show")) {
      tutor.classList.remove("show");
    } else {
      tutor.classList.add("show");
    }
  });
};

nextBtns.forEach(btn => {
  btn.addEventListener("click", nextTutor);
});
