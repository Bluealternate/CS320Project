// Javascript file to contain our files
// https://buzzcoder.gitbooks.io/codecraft-javascript/content/object/iterate-over-a-dictionary.html
// Feed Animal helper variables
var feedAnimalHelperName = '';
class Animal {
  constructor(name, type, description) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.feedCount = 0;
    this.rank = 0;
  }

  toString(){
    let string = this.name + '/' + this.type + '/' + this.description + '/' + this.rank + '$';
    return string;
  }
}

const Cat1 = new Animal('Fluffy', 'Cat', 'A cat that is really fluffy');
const Dog1 = new Animal('Woof', 'Dog', 'A dog that says woof');
const arrayForUser1 = {};
arrayForUser1[Cat1.name] = Cat1;
arrayForUser1[Dog1.name] = Dog1;

const Monkey1 = new Animal('Tail', 'Monkey', 'Eating a banana');
const Giraffe2 = new Animal('LongNeck', 'Giraffe', 'Has a long neck');
const arrayForUser2 = {};
arrayForUser2[Monkey1.name] = Monkey1;
arrayForUser2[Giraffe2.name] = Giraffe2;

function ListAnimalForFeedAnimal() { // Normally use for loop and clean the code up more.
  let numberTracker = 1;
  if (document.cookie === '1') {
    for (let animals in arrayForUser1) {
      document.getElementById(numberTracker.toString()).innerHTML = arrayForUser1[animals].name;
      numberTracker += 1;
    }

  } else if (document.cookie === '2') {
    for (let animals in arrayForUser2) {
      document.getElementById(numberTracker.toString()).innerHTML = arrayForUser2[animals].name;
      numberTracker += 1;
    }
  } else {
    console.log('Error');
  }
}

function goToLink(idValue) {
  document.cookie = `${document.cookie} ${document.getElementById(idValue).innerHTML}`;
  window.location.href = 'FeedAnimalSupplement.html';
}

function showAnimal() {
  var cookieSections = document.cookie.split(' ');
  feedAnimalHelperName = cookieSections[1];
  if (cookieSections[0] === '1') {
    const animalType = arrayForUser1[feedAnimalHelperName].type;
    const currentFeedCount = arrayForUser1[feedAnimalHelperName].feedCount;
    if (currentFeedCount < 3) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}1.png`;
    } else if (currentFeedCount >= 3 && currentFeedCount < 6) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}2.png`;
    } else if (currentFeedCount >= 6 && currentFeedCount < 9) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}3.png`;
    } else if (currentFeedCount >= 9) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}4.png`;
    }
  } else if (cookieSections[0] === '2') {
    const animalType = arrayForUser2[feedAnimalHelperName].type;
    const currentFeedCount = arrayForUser2[feedAnimalHelperName].feedCount;
    if (currentFeedCount < 3) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}1.png`;
    } else if (currentFeedCount >= 3 && currentFeedCount < 6) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}2.png`;
    } else if (currentFeedCount >= 6 && currentFeedCount < 9) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}3.png`;
    } else if (currentFeedCount >= 9) {
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}4.png`;
    }
  }
  document.cookie = cookieSections[0];
}

function feedAnimalHelper() {
  if (document.cookie === '1') {
    arrayForUser1[feedAnimalHelperName].feedCount += 1;
    const feeds = arrayForUser1[feedAnimalHelperName].feedCount;
    const animalType = arrayForUser1[feedAnimalHelperName].type;
    if (feeds === 3) {
      arrayForUser1[feedAnimalHelperName].rank = 1;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}2.png`;
    } else if (feeds === 6) {
      arrayForUser1[feedAnimalHelperName].rank = 2;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}3.png`;
    } else if (feeds === 9) {
      arrayForUser1[feedAnimalHelperName].rank = 3;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}4.png`;
    }
  } else if (document.cookie === '2') {
    arrayForUser2[feedAnimalHelperName].feedCount += 1;
    const feeds = arrayForUser2[feedAnimalHelperName].feedCount;
    const animalType = arrayForUser2[feedAnimalHelperName].type;
    if (feeds === 3) {
      arrayForUser2[feedAnimalHelperName].rank = 1;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}2.png`;
    } else if (feeds === 6) {
      arrayForUser2[feedAnimalHelperName].rank = 2;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}3.png`;
    } else if (feeds === 9) {
      arrayForUser2[feedAnimalHelperName].rank = 3;
      document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}4.png`;
    }
  }
}
