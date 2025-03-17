const reviews = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Carlos Souza",
    description:
      "Ótima experiência! O atendimento foi rápido e eficiente, recomendo muito.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Mariana Oliveira",
    description:
      "O serviço foi excelente, a equipe foi muito atenciosa e prestativa.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Fernando Lima",
    description:
      "Tive um pequeno problema no início, mas foi resolvido rapidamente. Muito satisfeito!",
  },
  {
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Juliana Costa",
    description:
      "Super recomendo! Fui muito bem atendida e o serviço superou minhas expectativas.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Ricardo Mendes",
    description: "Muito bom! Qualidade impecável e atendimento excelente.",
  },
];

const image = document.getElementById("img");
const namePerson = document.getElementById("name");
const description = document.getElementById("description");

// buttons
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentIndex = 0;

const showPerson = () => {
  const person = reviews[currentIndex];
  image.src = person.img;
  namePerson.textContent = person.name;
  description.textContent = person.description;
};

const updateButtons = () => {
  btnNext.disabled = currentIndex >= reviews.length - 1;
  btnPrev.disabled = currentIndex <= 0;
};

updateButtons();

document.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

btnPrev.addEventListener("click", () => {
  if (currentIndex >= 0) {
    currentIndex--;
    showPerson();
  }
  updateButtons();
});

btnNext.addEventListener("click", () => {
  if (currentIndex < reviews.length - 1) {
    currentIndex++;
    showPerson();
  }
  updateButtons();
});
