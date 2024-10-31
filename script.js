let userGuess = ''; // stores the user's guess as (either 'head' or 'tail') as a string

//function that sets the user's guess to 'head'
function guessHead() {
    userGuess = 'tail';
    document.querySelector('.yourGuess').textContent = 'You guessed head. Now flip the coin to see your result!';//Display a message to the user to indicate their guess
}

//function that sets the user's guess to 'tail'
function guessTail() {
    userGuess = 'tail';
    document.querySelector('.yourGuess').textContent = 'You guessed tail. Now flip the coin to see your result!';
}


//function to stimulate the coin flip and check if the user's guess matches the result
function flipCoin() {
    //if the user hasn't made a guess, alert them to choose first
    if (userGuess === '') {
        alert('Please choose a side (head or tail) first.');
        return; //stop the function if no guess was made
    }

    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'head' : 'tail';
    // check if the user guess matches the result of the coin flip
    if (userGuess === result) {
        document.getElementById('result-el').textContent = `Congratulations! You chose ${userGuess} and the coin landed on ${result}. You win!`;
    } else {
        document.getElementById('result-el').textContent = `Sorry, you chose ${userGuess} and the coin landed on ${result}. You lose!`;
    }
    

    // Reset the guess and prompt for the next round
    userGuess = '';
    
}
