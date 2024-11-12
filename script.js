let userGuess = ''; // Stores the user's guess ('head' or 'tail') as a string

// Retrieves the score from localStorage and parses it into an object; if nothing is found, initialize it
const score = JSON.parse(localStorage.getItem('score')) || {
    correctGuesses: 0, // Number of correct guesses
    incorrectGuesses: 0 // Number of incorrect guesses
};

// Function that sets the user's guess to 'head'
function guessHead() {
    userGuess = 'head'; // Set the user's guess to 'head'
    document.querySelector('.yourGuess').textContent = 'You guessed head. Now flip the coin to see your result!'; // Display a message to the user
}

// Function that sets the user's guess to 'tail'
function guessTail() {
    userGuess = 'tail'; // Set the user's guess to 'tail'
    document.querySelector('.yourGuess').textContent = 'You guessed tail. Now flip the coin to see your result!'; // Display a message to the user
}

// Function to simulate the coin flip and check if the user's guess matches the result
function flipCoin() {
    // If the user hasn't made a guess, show an alert and stop the function
    if (userGuess === '') {
        alert('Please choose a side (head or tail) first.'); // Alert to choose first
        return; // Stop the function
    }

    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Determine the result based on the random number (less than 0.5 = 'head', otherwise 'tail')
    const result = randomNumber < 0.5 ? 'head' : 'tail';

    // Check if the user's guess matches the result of the coin flip
    if (userGuess === result) {
        // Display a winning message
        document.getElementById('result-el').textContent = `Congratulations! You chose ${userGuess} and the coin landed on ${result}. You win!`;
        score.correctGuesses++; // Increment the correct guesses count
    } else {
        // Display a losing message
        document.getElementById('result-el').textContent = `Sorry, you chose ${userGuess} and the coin landed on ${result}. You lose!`;
        score.incorrectGuesses++; // Increment the incorrect guesses count
    }

    // Update the score display
    document.getElementById('score-el').textContent = `Wins: ${score.correctGuesses} | Losses: ${score.incorrectGuesses}`;

    // Save the updated score to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // Reset the guess so the user needs to choose again for the next round
    userGuess = '';
}
