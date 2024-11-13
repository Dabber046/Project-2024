// Define the images and animals
const images = {
    meerkat: "meerkat.jpg",
    elephant: "elephant.jpg",
    giraffe: "giraffe.jpg",
    lion: "lion.jpg",
    tiger: "tiger.jpg"
};

// Get references to HTML elements
const animalImage = document.querySelector("#clue img");
const resultText = document.getElementById("result");
const answerDisplay = document.getElementById("answer-display");
const animalBoxes = document.querySelectorAll(".animal-box");
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

let currentAnimal = null;

// Function to toggle dark mode
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Function to load a random animal
function loadRandomAnimal() {
    const animalKeys = Object.keys(images);
    currentAnimal = animalKeys[Math.floor(Math.random() * animalKeys.length)];
    animalImage.src = images[currentAnimal];
    answerDisplay.value = "Name of animal"; 
}

// Function to handle guesses
function handleGuess(event) {
    const guessedAnimal = event.currentTarget.getAttribute("data-animal");

    if (guessedAnimal === currentAnimal) {
        // Correct guess
        resultText.textContent = "Correct!";
        resultText.classList.add("flash-correct");
        resultText.classList.remove("flash-wrong");
        answerDisplay.value = currentAnimal.charAt(0).toUpperCase() + currentAnimal.slice(1);
        
        // Load a new random animal after a short delay
        setTimeout(() => {
            resultText.textContent = ""; // Clear result message
            loadRandomAnimal();
        }, 1000);
    } else {
        // Wrong guess
        resultText.textContent = "Try again!";
        resultText.classList.add("flash-wrong");
        resultText.classList.remove("flash-correct");
    }

    // Remove the flash classes after the animation ends
    setTimeout(() => {
        resultText.classList.remove('flash-correct', 'flash-wrong');
    }, 500);
}

// Add event listeners to animal boxes
animalBoxes.forEach(box => {
    box.addEventListener('click', handleGuess);
});

// Load the initial random animal
loadRandomAnimal();




