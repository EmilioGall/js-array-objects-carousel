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


//////////
// Print in (displayDivElem) and (thumbnailsDivElem) the attributes of (printTitleOnDisplay).
gamesTitles.forEach((curTitle, indexTitle)=> {

  // console.log(curTitle);

  printTitleOnDisplay(curTitle, indexTitle);

  printTitleOnThumbnails(curTitle);

});


//////////
// Define *constant* for Previous Button DOM Element.
const previousButton = document.querySelector(".my-previous");

// console.log("previousButton", previousButton, typeof previousButton);

// Define *constant* for Next Button DOM Element.
const nextButton = document.querySelector(".my-next")

// console.log("nextButton", nextButton, typeof nextButton);


//////////
// Define *variable* for Active Index.
let activeIndex = 0;

// Define *constant* for Carousel Item DOM Element.
const carouselItemArrayElem = document.querySelectorAll(".my-carousel-item");

// console.log("carouselItemArrayElem", carouselItemArrayElem, typeof carouselItemArrayElem);

// Add class "active" to Carousel Item DOM Element.
activeClassOnActiveIndex(carouselItemArrayElem, activeIndex);


//////////
// Define *constant* for Thumbnails Items DOM Elements.
const thumbnailsItemArrayElem = document.querySelectorAll(".my-thumbnail");

console.log("thumbnailsItemArrayElem", thumbnailsItemArrayElem, typeof thumbnailsItemArrayElem);

// Add class "active" to Thumbnails Item DOM Element.
activeClassOnActiveIndex(thumbnailsItemArrayElem, activeIndex);


//////////
// Add Event on *Click* for Next Button DOM Element.
nextButton.addEventListener("click", ()=> goForward());

// Add Event on *Click* for Previous Button DOM Element.
previousButton.addEventListener("click", ()=> goBackward());


//////////
// Add Event on *Click* for Thumbnails Item DOM Elements.
thumbnailsItemArrayElem.forEach((curTitle, indexTitle)=> {

  // console.log(curTitle);

  curTitle.addEventListener("click", ()=> {
  
    activeClassOffActiveIndex(carouselItemArrayElem, activeIndex);
  
    activeClassOffActiveIndex(thumbnailsItemArrayElem, activeIndex);
    
    activeClassOnActiveIndex(carouselItemArrayElem, indexTitle);
  
    activeClassOnActiveIndex(thumbnailsItemArrayElem, indexTitle);

    activeIndex = indexTitle
  
  });

});


//////////
// Define *constant* for Order Button DOM Element.
const orderButton = document.getElementById("my-order-button");

console.log("orderButton", orderButton, typeof orderButton);

// Define *constant* for Stop/Play Button DOM Element.
const stopButton = document.getElementById("my-stop-button")

// console.log("stopButton", stopButton, typeof stopButton);


//////////
// Define *variable* for Slide direction.
let goingForward = false;

// Define *variable* for autoPlay Time Interval.
let autoPlay = null;

if (goingForward === true) {

  autoPlay = setInterval(()=> goForward(), 3000);

} else {

  autoPlay = setInterval(()=> goBackward(), 3000);

};

console.log("autoPlay", autoPlay, typeof autoPlay);


//////////
// Add Event on *Click* for Stop Button DOM Element.
stopButton.addEventListener("click", ()=> {
  
  if (autoPlay !== null) {

    clearInterval(autoPlay);

    autoPlay = null;

  } else {

    if (goingForward === true) {

      autoPlay = setInterval(()=> goForward(),3000); 
  
    } else {
    
      autoPlay = setInterval(()=> goBackward(),3000);
    
      goingForward = false;

    };

  };

});


//////////
// Add Event on *Click* for Order Button DOM Element.
orderButton.addEventListener("click", ()=> {

  console.log("clicked");

  clearInterval(autoPlay);

  autoPlay = null;

  console.log("autoPlay", autoPlay, typeof autoPlay);

  if (goingForward === true) {

    autoPlay = setInterval(()=> goBackward(), 3000);

    goingForward = false;

    console.log("autoPlay", autoPlay, typeof autoPlay);

  } else {

    autoPlay = setInterval(()=> goForward(), 3000);

    goingForward = true;

    console.log("autoPlay", autoPlay, typeof autoPlay);

  };

});