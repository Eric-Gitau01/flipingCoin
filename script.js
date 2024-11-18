const randomNumber = Math.random()
const guess = 'head'
let result

if (randomNumber < 0.5) {
    result = 'head'
} else {
    result = 'Tails'
}

if (result === guess) {
    console.log('You guessed correctly!')
} else {
    console.log(`Sorry, you guessed ${guess}. The correct answer was ${result}.`)
}