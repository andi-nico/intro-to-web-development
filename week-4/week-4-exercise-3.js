// get the current time, but only the seconds
var seconds = new Date().getSeconds();
console.log(seconds);

// add the current time to the page
// (we'll discuss this properly next week)
var timeElement = document.querySelector(".time");
timeElement.textContent = seconds;

if (timeElement <=20) {
  timeElement.classList.add("orange");
}



/* if (distanceFromSun <= 90) {
    console.log("Bit hot out");

} else if (distanceFromSun > 90 &&  distanceFromSun <= 95) {
    console.log("Perfect weather");

} else {
    console.log("Bit cold out");
} */