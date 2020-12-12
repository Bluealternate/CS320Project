// https://dmitripavlutin.com/string-interpolation-in-javascript/

let animalFeedCount = 0;

function feedAnimal() {
  animalFeedCount += 1;
  if (animalFeedCount === 3) {
    // Used https://www.w3schools.com/jsref/prop_img_src.asp to find out.
    var animalName = 'Rabbit';
    document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalName}2.png`;
  }
}
