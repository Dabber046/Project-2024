    let correctGuesses = 0;

    function makeGuess(button, correctAnswer, userGuess) {
    const box = button.parentElement.parentElement; 
    const message = box.querySelector('.message');
    
    if (userGuess === correctAnswer) {
        button.classList.add('bg-green-500', 'font-bold');
        button.classList.remove('bg-purple-400', 'bg-red-500');
        box.classList.remove('bg-purple-500', 'bg-red-500');
        box.classList.add('bg-green-500');
        message.classList.add('hidden'); 

        correctGuesses++;

        
        if (correctGuesses === 5) {
            setTimeout(resetGame, 10000);
        }
    } else {
      
        box.classList.add('bg-red-500');
        box.classList.remove('bg-purple-500', 'bg-green-500');
        message.classList.remove('hidden');
        message.textContent = 'Try Again!';
    }
}


function resetGame() {
    correctGuesses = 0; 

    
    document.querySelectorAll('.guess-button').forEach(button => {
        button.classList.remove('bg-green-500', 'bg-red-500', 'font-bold');
        button.classList.add('bg-purple-400'); 
    });

    document.querySelectorAll('.image-container').forEach(box => {
        box.classList.remove('bg-green-500', 'bg-red-500', 'bg-purple-500');
        box.classList.add('bg-white'); 
    });

    document.querySelectorAll('.message').forEach(message => {
        message.classList.add('hidden');
    });
}
