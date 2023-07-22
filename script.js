let slides = document.querySelectorAll(".slide");

let rightSide = document.querySelector(".right-side");
let leftSide = document.querySelector(".left-side");

let currentSlide = 0;

rightSide.addEventListener("click", function () {
  let nextSlide = (currentSlide + 1) % slides.length;

  slides[nextSlide].style.display = "block";

  slides[currentSlide].style.display = "none";

  currentSlide = nextSlide;

  console.log("right side clicked");
});

leftSide.addEventListener("click", function () {
  let prevSlide = currentSlide == 0 ? slides.length - 1 : currentSlide - 1;

  slides[currentSlide].style.display = "none";
  slides[prevSlide].style.display = "block";

  currentSlide = prevSlide;
});
