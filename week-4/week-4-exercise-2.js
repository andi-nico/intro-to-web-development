var nearestStar = "Alpha Centauri";
var lightYearsAway = 4.3;
var age = 6000000000;
var isHot = true;

console.log(nearestStar); // "Alpha Centauri"
console.log(lightYearsAway);

var planets = 8;
var dwarfPlanets = 5;

var planetCount = planets + dwarfPlanets;
console.log(planetCount); // 13

var numberOfPlanets = 9;

numberOfPlanets = numberOfPlanets - 1;
console.log(numberOfPlanets); // 8 - bye bye Pluto

var city = "London";
var country = "England";

var address = city + country;
console.log(address); // "LondonEngland"

var newAddress = city + ", " + country;
console.log(newAddress); // "London, England"

var firstNumber = 10;
var secondNumber = 2;

console.log(firstNumber + secondNumber); // 10 + 2 === 12
console.log(firstNumber - secondNumber); // 10 - 2 === 8
console.log(firstNumber * secondNumber); // 10 * 2 === 20
console.log(firstNumber / secondNumber); // 10 / 2 === 5

var number = 10;

console.log(number === 1);  // false
console.log(number !== 1);  // true
console.log(number > 10);   // false
console.log(number >= 10);  // true
console.log(number < 10);   // false
console.log(number <= 10);  // true

// remember we set the value of planet earlier when we set:
var planet = "Mars";

// Test the value of our variable
if (planet === "Earth") {
  console.log("We are on Earth, enjoy!");
}

if (planet !== "Earth") {
  console.log("We are not on Earth, I hope you can hold your breath!");
}

if (planet === "Earth") {
    console.log("Nice weather");

} else if (planet === "Mars") {
    console.log("Bit cold out");

} else if (planet === "Venus") {
    console.log("Bit hot out");

} else {
    console.log("Where am I?");
}

var time = "1pm";

// do something if the planet is Earth AND it's lunch time
if (planet === "Earth" && time === "1pm") {
    console.log("Lunchtime on earth, falafel time!");

// it's either not Earth, or it isn't lunch time yet...
} else {
    console.log("I'm hungry...");
}

// do something if the planet is Mercury OR if the planet is Venus
if (planet === "Mercury" || planet === "Venus") {
    console.log("Take your coat off, it's hot out");

} else if (planet === "Earth") {
    console.log("Ah, just right");

} else {
    console.log("You might need an extra layer");
}

// set a variable (in millions of miles)
var distanceFromSun = 93;

if (distanceFromSun <= 90) {
    console.log("Bit hot out");

} else if (distanceFromSun > 90 &&  distanceFromSun <= 95) {
    console.log("Perfect weather");

} else {
    console.log("Bit cold out");
} 

