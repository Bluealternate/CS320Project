// Javascript file to contain our files
class Animal {
  constructor(name, type, description) {
    this.name = name;
    this.type = type;
    this.description = description;
  }
}

const Cat1 = new Animal('Fluffy', 'Cat', 'A cat that is really fluffy');
const Dog1 = new Animal('Woof', 'Dog', 'A dog that says woof');
const arrayForUser1 = [];
arrayForUser1.push(Cat1);
arrayForUser1.push(Dog1);

const Monkey1 = new Animal('Tail', 'Monkey', 'Eating a banana');
const Giraffe2 = new Animal('LongNeck', 'Giraffe', 'Has a long neck');
const arrayForUser2 = [];
arrayForUser2.push(Monkey1);
arrayForUser2.push(Giraffe2);

function ListAnimalForFeedAnimal() { // Normally use for loop and clean the code up more.
  if (document.cookie === '1') {
    document.getElementById('1').innerHTML = arrayForUser1[0].name;
    document.getElementById('2').innerHTML = arrayForUser1[1].name;
  } else if (document.cookie === '2') {
    document.getElementById('1').innerHTML = arrayForUser2[0].name;
    document.getElementById('2').innerHTML = arrayForUser2[1].name;
  } else {
    console.log('Error');
  }
}
