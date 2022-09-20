const CHOICES = ['rock', 'paper', 'scissors']


/* 
- Logic for opponent will be in function called getComputerChoice
    1. Function will randomly select between
        a. Rock
        b. Paper
        c. Scissors
    2. It will return only one of 3 possible outcomes.
*/

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)]
}

/*

- Logic for running the round will be handled by function called playRound
    1. Function will take two parameters the playerSelection and computerSelection
    2. It will return a string with a result (win,lose,draw)
*/

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock') {

        switch (computerSelection) {
            case 'scissors':
                return 'win'
            case 'paper':
                return 'loss'
            default:
                return 'draw'
        }
    }

    if (playerSelection == 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'loss'
            case 'paper':
                return 'win'
            default:
                return 'draw'
        }
    }

    if (playerSelection == 'paper') {
        switch (computerSelection) {
            case 'scissors':
                return 'loss'
            case 'rock':
                return 'win'
            default:
                return 'draw'
        }
    }
}
/*
# Logic for a complete game will be handled by function called game
1. Function game will call the playRound function
2. game function will complete who ever reaches 5 points first
*/

export function game() {

    let gameActive = true
    let playerPoints = 0
    let opponentPoints = 0
    while (gameActive) {
        let playerSelection = prompt('Rock, paper or scissors: ')

        if (playerSelection == undefined) {
            return
        }

        let opponentSelection = getComputerChoice()
        console.log(`You picked ${playerSelection}. Opponent picked: ${opponentSelection}!`)
        let result = playRound(playerSelection, opponentSelection)
        console.log(`Result is: ${result}`)

        if (result == 'win') {
            playerPoints++
        }
        else if (result == 'loss') {
            opponentPoints++
        }

        console.log(`Your score: ${playerPoints}`)
        console.log(`Opponents score: ${opponentPoints}`)

        if (playerPoints == 5 || opponentPoints == 5) {
            gameActive = false
            if (playerPoints == 5) {
                console.log('You won!')
                return 'win'
            } else {
                console.log('You lost!')
                return 'loss'
            }

        }
    }
}
