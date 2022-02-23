//alert("Hello world!");//
console.log("Attention, the universe!");

// calculate the current time
var timeNow = new Date().toUTCString();

// output the time to the console
console.log(timeNow);

// find the HTML element in the page that has a class of "time"
var timeElement = document.querySelector(".time");

// update the content of the time HTML element with the current time
timeElement.textContent = timeNow;

// add an extra class to the time HTML element to change the text colour
timeElement.classList.add("orange");