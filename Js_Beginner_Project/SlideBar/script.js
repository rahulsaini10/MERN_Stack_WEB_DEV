const threeDots = document.querySelector(".three-dot");
const container = document.querySelector(".container");
const cut = document.querySelector(".cut");

threeDots.addEventListener("click", () => {
  container.style.width = '50vw';
});

cut.addEventListener("click", () => {
  container.style.width = '0';
});
