//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';
/*
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/life.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'set Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'get Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}