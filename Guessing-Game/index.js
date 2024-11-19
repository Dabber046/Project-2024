const animalButton = document.getElementById("animal");
const footballButton = document.getElementById("football");
const cityButton = document.getElementById("city");

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

animalButton.addEventListener('click', () => redirectPage("index2.html"));
footballButton.addEventListener('click', () => redirectPage("nfl.html"));
cityButton.addEventListener('click', () => redirectPage("cities.html"));

