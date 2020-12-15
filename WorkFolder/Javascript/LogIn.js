// https://www.w3schools.com/jsref/prop_text_value.asp
// https://stackoverflow.com/questions/2018567/loading-another-html-page-from-javascript
// https://www.w3schools.com/js/js_if_else.asp    For information on elseif
// https://www.w3schools.com/js/js_cookies.asp
function checkCredentials() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'a' && password === 'a') {
    document.cookie = '1';
    sessionStorage.setItem("user", "a");
    window.location.href = 'MainPage.html';
  } else if (username === 'b' && password === 'b') {
    document.cookie = '2';
    sessionStorage.setItem("user", "b");
    window.location.href = 'MainPage.html';
  } else {
    window.location.href = 'LogIn.html';
  }
}
