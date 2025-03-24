const form = document.querySelector(".form-imc");

const formHeight = document.getElementById("height");
const formWeigth = document.getElementById("weigth");

const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

const imcResult = document.querySelector(".imc-result");
const imcCategory = document.querySelector(".imc-category");

//TODO: Validar o Formulário, Classificar por cores, melhorar a interface

let category;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  modal.classList.toggle("open-modal");

  const height = Number(formHeight.value);
  const weigth = Number(formWeigth.value);

  const imc = weigth / (height * height);

  if (imc >= 40) {
    category = "Obesidade grau 3";
  } else if (imc >= 35 && imc <= 39) {
    category = "Obesidade grau 2";
  } else if (imc >= 30 && imc <= 34.9) {
    category = "Obesidade grau 1";
  } else if (imc >= 25 && imc <= 29.9) {
    category = "Sobrepeso";
  } else if (imc >= 18.6 && imc <= 24.9) {
    category = "Normal";
  } else {
    category = "Abaixo do normal";
  }

  imcResult.textContent = imc.toFixed(2);
  imcCategory.textContent = category;
});

closeModal.addEventListener("click", () =>
  modal.classList.toggle("open-modal")
);
