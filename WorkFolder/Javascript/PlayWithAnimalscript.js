function allowDropThis(i) {
  i.preventDefault();
}

function dragThis(i) {
  i.dataTransfer.setData("fed", i.target.id);
  ;
}

// Functionality for experience

var x = 0;
var z = 0;
var width = 0;

function addXP() {
  var elem = document.getElementById("level");
  var stat = document.getElementById('num');
  if (width >= 75){
    x = 0;
    width=0;
    z++;
    stat.innerHTML = 'Bessie Leveled Up! Lv. ' + z;
    elem.style.width = width + '%';
    elem.innerHTML = width + '%';
  } else {
    width += 25;
    elem.style.width = width + '%';
    elem.innerHTML = width + '%';
  }
}

function playSound(aud){
  var sound = new Audio(aud);
  sound.play();
}

function dropThis(i) {
  playSound('../Audiofiles/bark.mp3');
  addXP();
  var data = i.dataTransfer.getData("fed");
  this.appendChild(document.getElementById(data));
}
