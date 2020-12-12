// Javascript file to contain our files
// https://buzzcoder.gitbooks.io/codecraft-javascript/content/object/iterate-over-a-dictionary.html
class Animal {
  constructor(name, type, description) {
    this.name = name;
    this.type = type;
    this.description = description;
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
  document.getElementById('AnimalPicture').src = '../Images/FeedAnimalsImages/Cat1.png';
}
