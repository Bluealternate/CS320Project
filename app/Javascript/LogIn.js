// https://www.w3schools.com/jsref/prop_text_value.asp
// https://stackoverflow.com/questions/2018567/loading-another-html-page-from-javascript
// https://www.w3schools.com/js/js_if_else.asp    For information on elseif
// https://www.w3schools.com/js/js_cookies.asp
// https://www.w3schools.com/jsref/jsref_length_string.asp //To find out how to get the length of strings.
function checkCredentials() {
  const username = document.getElementById('username').value; // Get the username and passwords
  const password = document.getElementById('password').value;
  // If the username and password is long then just automatically reload the page
  if (username.length >= 20 || password.length >= 30) {
    window.location.href = 'LogIn.html';
  }

  sessionStorage.clear();

  if (username === 'a' && password === 'a') { // If user A set the cookie to 1 and go to the main page
    document.cookie = '1';
    sessionStorage.setItem('user', 'a');
    loadAnimals('a');
    window.location.href = 'MainPage.html';
  } else if (username === 'b' && password === 'b') { // If user B set the cookie to 2 and go to the main page
    document.cookie = '2';
    sessionStorage.setItem('user', 'b');
    loadAnimals('b');
    window.location.href = 'MainPage.html';
  } else { // Else reload the page because the credentials are wrong.
    window.location.href = 'LogIn.html';
  }
}

function loadAnimals(user) {
  console.log(localStorage.length);
  if(localStorage.length === 0) {
    return;
  }

  for (let i = 0; i < localStorage.length; i++){
    if ((JSON.parse(localStorage.getItem(localStorage.key(i)))[4]) === user) {
      console.log('loading into temporary memory');
      sessionStorage.setItem(JSON.parse(localStorage.getItem(localStorage.key(i)))[0],
        localStorage.getItem(localStorage.key(i)));
    }
  }

  /*
  for(let i = 0; i < sessionStorage.length; i++){
   console.log(sessionStorage.getItem(sessionStorage.key(i)));
  }
  */

}