const icons = document.querySelectorAll(".section-1-icons i");
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

let counter = 1;

setInterval(() => {
  counter++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  if (counter > icons.length) {
    icons[0].classList.add("change");
    counter = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 3500);