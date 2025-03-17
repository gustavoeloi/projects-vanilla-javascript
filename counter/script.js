const counter = document.querySelector(".counter");

const btns = document.querySelectorAll(".btn");

let counterRef = 0;

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    const button = e.currentTarget.classList;

    if (button.contains("decrease")) {
      counterRef--;
    } else if (button.contains("reset")) {
      counterRef = 0;
    } else if (button.contains("increase")) {
      counterRef++;
    }

    counterRef > 0
      ? (counter.style.color = "green")
      : counterRef < 0
      ? (counter.style.color = "red")
      : (counter.style.color = "#000");

    counter.textContent = counterRef;
  });
});
