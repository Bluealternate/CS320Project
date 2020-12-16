// Javascript file to contain our files
// https://buzzcoder.gitbooks.io/codecraft-javascript/content/object/iterate-over-a-dictionary.html
// For array Destructuring error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Feed Animal helper variables
let feedAnimalHelperName = ''; // Helper variable used in the feed animal page.
const animalz = [100];
let track = 0;
class Animal { // To create an animal object
  constructor(name, type, description) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.feedCount = 0;
    this.rank = 0;
  }

  toString() {
    const string = `${this.name}/${this.type}/${this.description}/${this.rank}$`;
    return string;
  }
}

function build() {
  let i = 0;
  const animalHold = new Animal('', '', '');
  while (i < 100) {
    animalz[i] = animalHold;
    i++;
  }
}
// Create some instances of the animals and put then into dictionaries.
build();
const Cat1 = new Animal('Fluffy', 'Cat', 'A cat that is really fluffy');
animalz[track] = Cat1;
track++;
const Dog1 = new Animal('Woof', 'Dog', 'A dog that says woof');
animalz[track] = Dog1;
track++;
const arrayForUser1 = {};
arrayForUser1[Cat1.name] = Cat1;
arrayForUser1[Dog1.name] = Dog1;

const Monkey1 = new Animal('Tail', 'Monkey', 'Eating a banana');
animalz[track] = Monkey1;
track++;
const Giraffe2 = new Animal('LongNeck', 'Giraffe', 'Has a long neck');
animalz[track] = Giraffe2;
track++;
const arrayForUser2 = {};
arrayForUser2[Monkey1.name] = Monkey1;
arrayForUser2[Giraffe2.name] = Giraffe2;

function ListAnimalForFeedAnimal() { // To list the user animals in the Feed Animal page
  let numberTracker = 1; // Helper variable to list the animals.
  if (document.cookie === '1') { // If the user is user A
    for (const animals in arrayForUser1) { // Go through all of user A animals
      document.getElementById(numberTracker.toString()).innerHTML = arrayForUser1[animals].name; // Display name
      numberTracker += 1; // Increment helper number
    }
  } else if (document.cookie === '2') { // If the user is user B
    for (const animals in arrayForUser2) { // Go through all of user B animals
      document.getElementById(numberTracker.toString()).innerHTML = arrayForUser2[animals].name; // Display name
      numberTracker += 1; // Increment helper number
    }
  } else { // This part should not run and used for error checking potentially.
    console.log('Error');
  }
}

function goToLink(idValue) { // Go to a page to feed the animal if the animal name is clicked
  document.cookie = `${document.cookie} ${document.getElementById(idValue).innerHTML}`; // Store animal name in cookie.
  window.location.href = 'FeedAnimalSupplement.html';
}

function showAnimal() { // Show the picture of the animal to be fed
  const cookieSections = document.cookie.split(' '); // get user number and animal name
  const [y, z] = cookieSections;
  feedAnimalHelperName = z;
  if (cookieSections[0] === '1') { // If user A get the type of the animal being display and display the animal type
    const animalType = arrayForUser1[feedAnimalHelperName].type;
    document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}1.png`;
  } else if (cookieSections[0] === '2') {// If user B get the type of the animal and display animal type
    const animalType = arrayForUser2[feedAnimalHelperName].type;
    document.getElementById('AnimalPicture').src = `../Images/FeedAnimalsImages/${animalType}1.png`;
  }
  document.cookie = y; // Reassign the cookie so that it has the user number
}

function feedAnimalHelper() { // function to change the picture display to have stars the more times the animal is fed.
  // For user A increment feed count and display appropiate picture and change rank based off of feedcount.
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
    // For user B increment feed count and display appropiate picture and change rank based off of feedcount.
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
