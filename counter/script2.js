const counter = document.querySelector(".counter");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

let counterRef;

const init = () => {
  counterRef = 0;
  counter.textContent = counterRef;
  checkValue();
};

const checkValue = () => {
  if (counterRef > 0) {
    counter.style.color = "green";
  } else if (counterRef < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "#000";
  }
};

init();

btnDecrease.addEventListener("click", () => {
  counterRef--;
  counter.textContent = counterRef;
  checkValue();
});

btnReset.addEventListener("click", () => {
  init();
});

btnIncrease.addEventListener("click", () => {
  counterRef++;
  counter.textContent = counterRef;
  checkValue();
});
