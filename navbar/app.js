// There are many ways to create a navbar, but I'm going to use a class in CSS as it provides such an easy way to do this

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  console.log(links.classList.contains("show-links"));

  // First: verify if links have the class 'show-link', if not we add this class, otherwise, remove it.

  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

  // But, there is another way to show the navbar, using the .toggle method, it's very easy because it automatically checks if the class exists and remove or add it

  links.classList.toggle("show-links");
});
