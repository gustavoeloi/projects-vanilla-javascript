const sidebar = document.querySelector(".sidebar");
const navToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

const showSideBar = () => {
  sidebar.classList.toggle("show-sidebar");
};

navToggle.addEventListener("click", () => {
  showSideBar();
});

closeBtn.addEventListener("click", () => {
  showSideBar();
});
