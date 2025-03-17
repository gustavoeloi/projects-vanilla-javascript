const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "cyan",
  "#ff5733",
  "#3498db",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#e74c3c",
  "#1abc9c",
  "rgba(255, 87, 51, 1)",
  "rgba(52, 152, 219, 0.8)",
  "rgba(46, 204, 113, 0.6)",
  "rgba(241, 196, 15, 0.4)",
  "rgba(155, 89, 182, 0.2)",
  "rgba(231, 76, 60, 0.1)",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let generatedNumber = randomNumber();
  let pickedColor = colors[generatedNumber];

  document.body.style.backgroundColor = colors[generatedNumber];
  color.textContent = pickedColor;
  color.style.color = pickedColor;
});

const randomNumber = () => Math.floor(Math.random() * colors.length);
