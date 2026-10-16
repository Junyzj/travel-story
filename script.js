// Get the three images
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

// Get the story title and text
let storyTitle = document.getElementById("story-title");
let storyText = document.getElementById("story-text");

// Get the two buttons
let buttonOne = document.getElementById("sequence-one");
let buttonTwo = document.getElementById("sequence-two");


// Sequence One: Going on a Trip
function showSequenceOne() {

  image1.src = "images/image1.jpg";
  image2.src = "images/image2.jpg";
  image3.src = "images/image3.jpg";

  image1.alt = "home";
  image2.alt = "suitcase";
  image3.alt = "airport";

  storyTitle.textContent = "Going on a Trip";

  storyText.textContent =
    "I get ready at home, pack my suitcase, and arrive at the airport to begin my trip.";
}


// Sequence Two: Going Home
function showSequenceTwo() {

  image1.src = "images/image3.jpg";
  image2.src = "images/image2.jpg";
  image3.src = "images/image1.jpg";

  image1.alt = "airport";
  image2.alt = "suitcase";
  image3.alt = "home";

  storyTitle.textContent = "Going Home";

  storyText.textContent =
    "My trip is over. I leave the airport with my suitcase and finally return home.";
}


// Event listeners
buttonOne.addEventListener("click", showSequenceOne);
buttonTwo.addEventListener("click", showSequenceTwo);