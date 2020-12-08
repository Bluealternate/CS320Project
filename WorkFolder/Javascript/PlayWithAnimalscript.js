function allowDropThis(i) {
  i.preventDefault();
}

function dragThis(i) {
  i.dataTransfer.setData("fed", i.target.id);
  ;
}

// Functionality for experience

var x = 0;
var y = 0;
var z = 0;
function addXP() {
  y = 0;
  if (x == 0) {
    x = 1;
    var elem = document.getElementById("level");
    var width = 1;
    var id = setInterval(frame, 10);
    var stat = document.getElementById('num');

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        x = 0;
        z++;
        stat.innerHTML = 'Bessie Leveled Up! Lv. ' + z;
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width + '%';
      }
    }
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
