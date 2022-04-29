//JS file for The Beat Homepage. Includes JS for embedded Leaflet JS Map with markers and popups. Also includes the form validation for newsletter sign up form

//EMVEDDED MAP
var venuesMap = L.map('map').setView([51.505, -0.09], 13); // Setting map coordinates


// Adding tile layer via Mapbox Street
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 1,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kaTU3IiwiYSI6ImNsMmlzZDljdTBxM2ozanA5ZWttY3p2dXgifQ.5vaAbetwu8fg39gyI_jG9Q'
}).addTo(venuesMap);

// venue markers
var bluesKitchenBrixtonMarker = L.marker([51.459759, -0.122200]).addTo(venuesMap); //Blues Kitchen Brixton marker
bluesKitchenBrixtonMarker.bindPopup("<b>Blues Kitchen Brixton</b><br>40 Acre Ln<br>London, SW2 5SP"); //Binds Blues Kitchen popup to marker


var bluesKitchenShoreditchMarker = L.marker([51.525639, -0.080310]).addTo(venuesMap); //Blues Kitchen Shoreditch marker
bluesKitchenShoreditchMarker.bindPopup("<b>Blues Kitchen Shoreditch</b><br>131-146 Curtain Rd<br>London, EC2A 3AR"); //Binds Blues Kitchen Shoredith popup to marker


var kokoMarker = L.marker([51.534592, -0.138520]).addTo(venuesMap); //KOKO marker
kokoMarker.bindPopup("<b>KOKO</b><br>1A Camden high St<br>London, NW1 7JE"); //Binds KOKO popup to marker


var villageUndergroundMarker = L.marker([51.523731, -0.079230]).addTo(venuesMap); //Village Underground marker
villageUndergroundMarker.bindPopup("<b>Village Underground</b><br>54 Holywell Ln<br>London, EC2A 3PQ"); //Binds Village Underground popup to marker


var electricBallroomMarker = L.marker([51.539747, -0.143013]).addTo(venuesMap); //Electric Ballroom marker
electricBallroomMarker.bindPopup("<b>Electric Ballroom</b><br>184 Camden high St<br>London, NW1 8QP"); //Binds Electric Ballroom popup to marker


var omearaMarker = L.marker([51.50414, -0.094533]).addTo(venuesMap); //Omeara marker
omearaMarker.bindPopup("<b>Omeara</b><br>6 O'Meara St<br>London, SE1 1TE");//Binds Omeara popup to marker

// NEWSLETTER FORM VALIDATION
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const frequency = document.getElementById('frequency');
const errorElement = document.getElementById('error');
var contains = false;

form.addEventListener('submit', (e) => { //this event listener specifies the conditions for form submission
  let errorMessage = [] //selects all error messages
  if (name.value == '' || name.value == null) { //if the name field is an empty string or just left blank
    errorMessage.push('Please enter your name') //error message will displayed
  }

  if (email.value.includes = '@') { //if the email address contains an @ sign, then it is valid, no error message will be pushed
   contains = true;
 }

 if (contains) { //if the email address does not contain the @ sign, an error message will be pushed (refernece previously declared variable 'contains = false')
   errorMessage.push("All email addresses must contain the '@' sign")
 }

  if (frequency.value == "0") { //chooses the "default option, meaning the user hasn't selected a value from the dropdown"
    errorMessage.push('Please choose a newsletter frequency')
  }

  if (errorMessage.length > 0) { //if the error message length is greater than 0, then there is an error that should prevent the form from submiting
    e.preventDefault() //prevents form from submiting if an error is present
    errorElement.innerText = errorMessage.join("\n") //if there are multiple error messages, they will be simultaneously shown to the user on a new line
  }
})
