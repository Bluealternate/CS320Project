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

