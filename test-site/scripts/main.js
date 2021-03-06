var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beach.jpeg') {
      myImage.setAttribute ('src','images/bikini.jpeg'); // First Image
    } else {
      myImage.setAttribute ('src','images/beach.jpeg');  // Second Image
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {                // This is to personalize the title
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Beaches are awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Beaches are awesome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}