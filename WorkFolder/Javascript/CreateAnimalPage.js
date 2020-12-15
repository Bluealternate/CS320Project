var animal = "dog";
var name = "Fido";
var ball;
var house;
var randomNames = ["Kevin", "Fido", "Randy", "Alex", "Fluffy", "Princess", "Doug", "Bubbles"];
var table;
var cells;

//this code should construct an animal with the desired attributes the user has requested
function createAnimal(){
  name = document.getElementById("animalNameTextBox").value;

}

//this function should randomly set the name field for the animal to be created
function randomNameGenerator(){
  //get a random number
  var random = Math.floor(Math.random() * Math.floor(randomNames.length - 1));

  //use number to fetch a name from the list
  //set the name field for the animal to be created to the fetched name
  name = randomNames[random];
  document.getElementById("animalNameTextBox").value = name;
}

//this function should store the type of ball the user would like for their pet
function storeBall(id) {
  ball = document.getElementById(id).id;
  //console.log(ball);

  document.getElementById(id).parentNode.backgroundColor = "white";

  document.getElementById(id).style.backgroundColor = "yellow";

  let table = document.getElementById('ball_table');
  let cells = table.getElementsByTagName('td');

  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].style.backgroundColor = "";
  }
  let cellSelected = table.getElementsByTagName('td')[id];
  cellSelected.style.backgroundColor = "yellow";
}

//this function should store the type of house the user would like for their pet
function storeHome(id){
  house = document.getElementById(id).id;
  //console.log(house);

  let table = document.getElementById('house_table');
  let cells = table.getElementsByTagName('td');

  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].style.backgroundColor = "";
  }
  let cellSelected = table.getElementsByTagName('td')[id];
  cellSelected.style.backgroundColor = "yellow";
}

function storeAnimal(id) {
  animal = id;
  //console.log(animal);

  document.getElementById("animalPic").src = document.getElementById(id + " pic").src;
}