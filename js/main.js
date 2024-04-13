// Define *constant* for array of objects Titles.
const gamesTitles = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Define *constant* for Previous Button DOM Element.
const previousButton = document.querySelector(".my-previous");

console.log("previousButton", previousButton, typeof previousButton);

// Define *constant* for Next Button DOM Element.
const nextButton = document.querySelector(".my-next")

console.log("nextButton", nextButton, typeof nextButton);

// Print in (displayDivElem) the attributes of (printTitleOnDisplay).
gamesTitles.forEach((curTitle, indexTitle)=> {

  console.log(curTitle);

  printTitleOnDisplay(curTitle, indexTitle);

});

// Define *variable* for Active Index.
let activeIndex = 0;

// Define *constant* for Carousel Item DOM Element.
const carouselItemArrayElem = document.querySelectorAll(".my-carousel-item");

console.log("carouselItemArrayElem", carouselItemArrayElem, typeof carouselItemArrayElem);

// Add class "active" to Carousel Item DOM Element.
activeClassOnActiveIndex(carouselItemArrayElem, activeIndex);

// Add class "active" to Carousel Item DOM Element.
nextButton.addEventListener("click", ()=> {
  
  activeClassOffActiveIndex(carouselItemArrayElem, activeIndex);

  if (activeIndex < gamesTitles.length-1) {

    activeIndex++

    activeClassOnActiveIndex(carouselItemArrayElem, activeIndex);

  } else {

    activeIndex = 0;

    activeClassOnActiveIndex(carouselItemArrayElem, activeIndex);

  };
  
});
