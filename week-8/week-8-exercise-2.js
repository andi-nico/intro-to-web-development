var earth = {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
};

function addPlanetToPage(planet) {
    // create a div element for the planet
    var planetElement = document.createElement("div");
    planetElement.classList.add("planet");
    planetElement.classList.add("planet-" + planet.name);

    // add the planet name
    var planetName = document.createElement("p");
    planetName.classList.add("planet-name");
    planetName.textContent = planet.name;
    planetElement.appendChild(planetName);

  // add other planet details
    var planetCircumference = document.createElement("p");
    planetCircumference.classList.add("planet-circumference");
    planetCircumference.textContent = "Circumference: " + planet.circumference;
    planetElement.appendChild(planetCircumference);

    // add the planet to the page
    var planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}

// add the planet to the page
addPlanetToPage(earth);