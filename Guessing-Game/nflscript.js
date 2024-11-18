/* TO DO
Keep track of score
adjust buttons for correct and incorrect answers
Modal after game is over
*/

const formVar = document.getElementById("NFL");


// Get modal elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector("#close");
const exitButton = document.querySelector("#openModal");
const homeButton = document.getElementById("home");
// Select the <p> element inside the modal
const modalParagraph = document.querySelector("#myModal p");

let score = 0;
let clickCount = 0;

homeButton.addEventListener("click", () => {
    redirectPage("index.html")
});

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Function to handle button click event
function grader(event){   
     const clickedButton = event.target;  // Get the clicked button
    
        // Check if the clicked button's id is "home", home button does not need a color change.
        if(clickedButton.id ==="openModal" || clickedButton.id === "home") {
            clickedButton.style = "none";
            
         // Check if the clicked button's id is "correct"   
         } else if (clickedButton.id === 'correct') {
            console.log(clickedButton.id);
            score += 10;
            clickCount++;
            endGame();
            clickedButton.style.backgroundColor = 'green';  // Change the background color to green
            const firstClass = clickedButton.classList[0];

            // Select all buttons with that same class
            const allButtonsWithSameClass = document.querySelectorAll(`.${firstClass}`);

            // Disable all buttons with the same class
            allButtonsWithSameClass.forEach(button => {
                button.disabled = true; // Disable each button with the same class
            });


        } else { 
          
            clickCount++;
            endGame();
            clickedButton.style.backgroundColor = 'red';  // Change the background color to green
            clickedButton.style.color = 'black';  // Change text color for visibility 
            const firstClass = clickedButton.classList[0];

            // Select all buttons with that same class
            const allButtonsWithSameClass = document.querySelectorAll(`.${firstClass}`);

            // Disable all buttons with the same class
            allButtonsWithSameClass.forEach(button => {
                button.disabled = true; // Disable each button with the same class
            });

    }

}

    function endGame (){

        // Set or change the text content of the <p> element
        if(clickCount == 6){
        
            modal.style.display = "flex"; // Show the modal
            clickCount = 0; // 
            modalParagraph.textContent = `Your Score was ${score} / 60`

            const userPoints = {
                totalPoints: score,
            }

            localStorage.setItem("userPoints", JSON.stringify(userPoints));
            

        }

    }
    
    // Attach event listeners to all buttons
    document.querySelectorAll('button').forEach(button => {

        button.addEventListener('click', grader);

    });

    const redirectPage = function (url) {
        redirectURL = url;
        location.assign(url);
    };

    // Optional: Add a close event for the modal
    document.querySelector("#close").onclick = function() {
        modal.style.display = "none"; // Hide the modal when closed
    };

    //allows for delayed execution, instead passes the redirect function to execute later, or whem the exitbutton is clicked.

    exitButton.addEventListener('click', () => redirectPage("index.html"));





