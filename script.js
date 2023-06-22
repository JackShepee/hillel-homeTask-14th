const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imageElement = document.getElementById("randomImage");
  imageElement.src = "images/" + randomImage;
}

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", getRandomImage);
