// https://www.w3schools.com/jsref/prop_text_value.asp
// https://stackoverflow.com/questions/2018567/loading-another-html-page-from-javascript
// https://www.w3schools.com/js/js_if_else.asp    For information on elseif
// https://www.w3schools.com/js/js_cookies.asp
function checkCredentials() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  sessionStorage.clear();

  if (username === 'a' && password === 'a') {
    document.cookie = '1';
    sessionStorage.setItem("user", "a");
    loadAnimals("a");
    window.location.href = 'MainPage.html';
  } else if (username === 'b' && password === 'b') {
    document.cookie = '2';
    sessionStorage.setItem("user", "b");
    loadAnimals("b");
    window.location.href = 'MainPage.html';
  } else {
    window.location.href = 'LogIn.html';
  }
}

function loadAnimals(user) {
  console.log(localStorage.length);
  if(localStorage.length === 0) {
    return;
  }

  for(let i = 0; i < localStorage.length; i++){
    if((JSON.parse(localStorage.getItem(localStorage.key(i)))[4]) === user){
      console.log("loading into temporary memory");
      sessionStorage.setItem(JSON.parse(localStorage.getItem(localStorage.key(i)))[0] ,localStorage.getItem(localStorage.key(i)));
    }
  }

  /*
  for(let i = 0; i < sessionStorage.length; i++){
   console.log(sessionStorage.getItem(sessionStorage.key(i)));
  }
  */

}