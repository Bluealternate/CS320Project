// https://www.w3schools.com/jsref/prop_text_value.asp
// https://stackoverflow.com/questions/2018567/loading-another-html-page-from-javascript
// https://www.w3schools.com/js/js_if_else.asp    For information on elseif
// https://www.w3schools.com/js/js_cookies.asp
function checkCredentials() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'Edward' && password === 'theSecond') {
    document.cookie = '1';
    window.location.href = 'MainPage.html';
  } else if (username === 'Canterlot' && password === 'Aurthur') {
    window.location.href = 'MainPage.html';
  } else {
    window.location.href = 'LogIn.html';
  }
}
