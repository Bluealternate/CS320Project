let animalFeedCount = 0;

function feedAnimal() {
  animalFeedCount += 1;
  if (animalFeedCount === 3) {
    // Used https://www.w3schools.com/jsref/prop_img_src.asp to find out.
    document.getElementById('AnimalPicture').src = '../Images/FeedAnimalsImages/Rabbit2.png';
  }
}