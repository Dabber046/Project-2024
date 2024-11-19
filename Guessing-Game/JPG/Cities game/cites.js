let score = 0;
let playerName = "";
const homePage = document.getElementById('back');
const startButton = document.getElementById('start');
const buttons = document.querySelectorAll('.city-choices button');
const submit = document.getElementById('subBtn');
const againBtn = document.getElementById('again');
const rankDisplay = document.getElementById('rank');
const scoreDisplay = document.getElementById('score');


startButton.addEventListener('click', function () {
    playerName = prompt("Enter your name:");
    if (!playerName) {
        alert("Please enter a name to start the game!");
        return;
    }
})
buttons.forEach(function(button){
    button.addEventListener('click', function () {
        if (button.getAttribute('data-answer') === 'correct') {
            button.style.backgroundColor = "#d4edda";
            button.style.color = "#155724";
            score += 20;
        } else {
            button.style.textDecoration = "line-through";
            button.style.backgroundColor = "#f8d7da";
            button.style.color = "#721c24";
        }

    
        const groupBtn = button.parentNode.querySelectorAll('button');
        groupBtn.forEach(function(btn){
         btn.disabled = true;
    });
});
});


submit.addEventListener('click', function () {
   scoreDisplay.textContent = `${playerName},your score is ${score}.`
   
    const scores = JSON.parse(localStorage.getItem('score')) || [];
    scores.push({ name: playerName, score: score });
    const topScores = scores
        .sort((a, b) => b.score - a.score) 
        .slice(0, 5); 

    localStorage.setItem('score', JSON.stringify(topScores));
    rankingList(topScores);
});


function rankingList(scores) {
    rankDisplay.innerHTML = '';

        scores.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${entry.name}</td>
        <td>${entry.score}</td>
        `;
        rankDisplay.appendChild(row);
    });
}



againBtn.addEventListener('click', function () {
    location.reload();
});


homePage.addEventListener('click', function () {
    window.location.href = 'index.html';
});
