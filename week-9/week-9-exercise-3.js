// set your API key here
// you can request one from https://newsapi.org/register
var apiKey = '6f7e312447dd4b158a642cccdf08fb9d';


function requestNews() {
    // set a default query to search for
    var query = "Astronomy";

    // look to see if text has been entered
    var queryInput = document.querySelector(".query");
    if (queryInput.value.length > 0) {
        query = queryInput.value;
    }

    // Note that the API doesn't allow direct requests via JavaScript -
    // it has an error with "CORS"
    // And so we 'proxy' the API to bypass this issue.
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

// update the news
function updateNews(data) {
    // remove current stories
    var newsElement = document.querySelector(".news");
    while (newsElement.firstChild) {
        newsElement.removeChild(newsElement.firstChild);
    }

    // add new stories
    data.articles.forEach(createNewsStory);
}

function createNewsStory(story) {
    // create a div element for each element
    var storyElement = document.createElement("div");
    storyElement.classList.add("story");

    // add link
    var storyLink = document.createElement("a");
    storyLink.classList.add("story-link");
    storyLink.href = story.url;
    storyElement.appendChild(storyLink);

    // add the story title
    var storyTitle = document.createElement("p");
    storyTitle.classList.add("story-name");
    storyTitle.textContent = story.title;
    storyLink.appendChild(storyTitle);

    // add other story details
    var storySource = document.createElement("em");
    storySource.classList.add("story-source");
    storySource.textContent = "Source: " + story.source.name;
    storyElement.appendChild(storySource);

    // add image
    var storyImg = document.createElement("img");
    storyImg.classList.add("story-img");
    storyImg.src = story.urlToImage;
    storyElement.appendChild(storyImg);

    // add the story to the page
    var newsElement = document.querySelector(".news");
    newsElement.appendChild(storyElement);
}

// listen for clicks on the button
var searchButton = document.querySelector('.search');
searchButton.addEventListener("click", requestNews);

// also update on page load
requestNews();