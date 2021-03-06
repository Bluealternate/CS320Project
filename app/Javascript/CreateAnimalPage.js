let animal = '';
let name = '';
let ball = '';
let house = '';
let randomNames = ["Kevin", "Fido", "Randy", "Alex", "Fluffy", "Princess", "Doug", "Bubbles"];
let table;
let cells;

//console.log(sessionStorage.getItem("user"));
//localStorage.clear();

sessionStorage.setItem("user", "a");


console.log(sessionStorage.length);
for(let i = 0; i < sessionStorage.length; i++){
  console.log(sessionStorage.getItem(sessionStorage.key(i)));
  let temp = sessionStorage.getItem(sessionStorage.key(i));
  temp = JSON.parse(temp);
  console.log(temp[0]);
  console.log(temp[1]);
  console.log(temp[2]);
  console.log(temp[3]);
  console.log(temp[4]);
}

//this code should construct an animal with the desired attributes the user has requested
function createAnimal(){
  name = document.getElementById("animalNameTextBox").value;
  console.log(name);
  let flag = 0;
  if(ball === '') {
    document.getElementById("ballMSG").className = "ui pointing red basic label";
    flag = 1;
  }
  else {
    document.getElementById("ballMSG").className = "hidden ui pointing red basic label";
  }

  if(house === '') {
    document.getElementById("houseMSG").className = "ui pointing red basic label";
    flag = 1;
  }
  else {
    document.getElementById("houseMSG").className = "hidden ui pointing red basic label";
  }

  if(name === '') {
    document.getElementById("nameMSG").className = "ui pointing red basic label";
    flag = 1;
  }
  else {
    document.getElementById("nameMSG").className = "hidden ui pointing red basic label";
  }

  if(animal === '') {
    document.getElementById("animalMSG").className = "ui pointing red basic label";
    flag = 1;
  }
  else {
    document.getElementById("animalMSG").className = "hidden ui pointing red basic label";
  }

  if(localStorage.getItem(name) === null) {
    console.log("no entry exists");
    document.getElementById("nameMSG").className = "hidden ui pointing red basic label";
  }
  else {
    console.log("entry exists");
    document.getElementById("nameMSG").className = "ui pointing red basic label";
    document.getElementById("nameMSG").innerHTML = "name already taken"
    flag = 1;
  }

  if(flag === 1) {
    return;
  }

  let data = [];
  data.push(name);
  data.push(animal);
  data.push(ball);
  data.push(house);
  data.push(sessionStorage.getItem("user"));

  localStorage.setItem(name,JSON.stringify(data));
  sessionStorage.setItem(name, JSON.stringify(data));
  window.location.href = "../HTMLFiles/AnimalCreated.html";
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