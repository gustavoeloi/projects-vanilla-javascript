const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (element) => {
    const question = btn.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
