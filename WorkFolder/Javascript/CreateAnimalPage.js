var animal = "dog";
var name = "Fido";
var ball;
var house;

//this code should construct an animal with the desired attributes the user has requested
function createAnimal(){
  name = document.getElementById("animalNameTextBox").value;

}

//this function should randomly set the name field for the animal to be created
function randomNameGenerator(){
  //get a random number

  //use modulo operator to fit the random number to the index range of our random list of names

  //use number to fetch a name from the list

  //set the name field for the animal to be created to the fetched name
}

//this function should store the type of ball the user would like for their pet
function storeBall(id){
  ball = document.getElementById(id).id;
  //console.log(ball);
}

//this function should store the type of house the user would like for their pet
function storeHome(id){
  house = document.getElementById(id).id;
  //console.log(house);
}

function storeAnimal(id){
  animal = id;
  //console.log(animal);
}