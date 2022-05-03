//**EMBEDDED MAP * EMBEDDED MAP**
//**EMBEDDED MAP * EMBEDDED MAP**

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

//**PIANO * PIANO **
//**PIANO * PIANO **

const keys = document.querySelectorAll('.key') //Select all elements with the class "key". Using "const" instead of var because the variable should not change in the future
const whiteKeys = document.querySelectorAll('.key.white') //Select all the white keys using a combo class
const blackKeys = document.querySelectorAll('.key.black') //Select all black keys using a combo class

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

//keys will play the associated note when pressed with the mouse 
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) //use "dataset" to call the html data attribute
  noteAudio.currentTime = 0 //restarts the audio file at the beginning each time the key is pressed
  noteAudio.play() //plays audio
  key.classList.add('active') //indicates that the key is being pressed
  noteAudio.addEventListener('ended', () => { //removes the active state when the key is not being pressed anymore
    key.classList.remove('active')
  })
}

// **MUSIC NEWS * MUSIC NEWS** 
// **MUSIC NEWS * MUSIC NEWS** 

var apiKey = '14794e3966714affa3ffa1b331c84f4c';

function requestNews() {
    // set a default query to search for
    var query = "Music";

    var proxyUrl = 'https://www.staff.city.ac.uk/~sbrm225/proxy.php?csurl=';
    var originalUrl = 'https://newsapi.org/v2/everything&q=' + query + '&apiKey=' + apiKey
    var apiUrl = proxyUrl + originalUrl;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new stories, update the page
            updateNews(data); 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function updateNews(data) { // update the news
    var newsElement = document.querySelector(".news");     // remove current stories

    while (newsElement.firstChild) {
        newsElement.removeChild(newsElement.firstChild);
    }

    
    data.articles.slice(0, 6).forEach(createNewsStory); // add first six news articles
}

function createNewsStory(story) {

  var storyElement = document.createElement("a"); // create a link for each element
  storyElement.href = story.url;
  storyElement.classList.add("story-link");


    
    var storyTitle = document.createElement("p"); // add the article title
    storyTitle.classList.add("story-name");
    storyTitle.textContent = story.title;
    storyElement.appendChild(storyTitle);

    
    var storySource = document.createElement("em"); // add other story details
    storySource.classList.add("story-source");
    storySource.textContent = "Source: " + story.source.name;
    storyElement.appendChild(storySource);

   
    var storyImg = document.createElement("img");  // add image
    storyImg.classList.add("story-img");
    storyImg.src = story.urlToImage;
    storyElement.appendChild(storyImg);

   
    var newsElement = document.querySelector(".news");  // add the story to the page
    newsElement.appendChild(storyElement);
}

requestNews(); //update on page load


// **NEWSLETTER VALIDATION ** NEWSLETTER VALIDATION**
// **NEWSLETTER VALIDATION ** NEWSLETTER VALIDATION**

const submit = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const frequency = document.getElementById('frequency');
const errorElement = document.getElementById('error');
const confirmSubmission = document.getElementById('confirm');

confirmSubmission.addEventListener('confirm', (e) => { //this event listener specifies the conditions for form submission
  let errorMessage = [] //selects all error messages
  if (name.value == '' || name.value == null) { //if the name field is an empty string or just left blank
    errorMessage.push('Please enter your name') //error message will displayed
  }

  if (frequency.value == "0") { //chooses the "default option, meaning the user hasn't selected a value from the dropdown"
    errorMessage.push('Please choose a newsletter frequency')
  }

  if (errorMessage.length > 0) { //if the error message length is greater than 0, then there is an error that should prevent the form from submiting
    e.preventDefault() //prevents form from submiting if an error is present
    errorElement.innerText = errorMessage.join("\n") //if there are multiple error messages, they will be simultaneously shown to the user on a new line
  }

	else {
		confirmSubmission.push('Thanks for signing up!')
	}
})
