// Javascript file to contain our files
class Animal {
  constructor(name, type, description) {
    this.name = name;
    this.type = type;
    this.description = description;
  }
}

const Cat1 = new Animal('Fluffy', 'Cat', 'A cat that is really fluffy');
const Dog1 = new Animal('Woof', 'Dog', 'A do that says woof');
const arrayForUser1 = [];
arrayForUser1.push(Cat1);
arrayForUser1.push(Dog1);

function ListAnimalForFeedAnimal() { // Normally use for loop and clean the code up more.
  document.getElementById('1').innerHTML = arrayForUser1[0].name;
  document.getElementById('2').innerHTML = arrayForUser1[1].name;
}
