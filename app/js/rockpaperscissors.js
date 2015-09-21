////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock") {
        switch(computerMove) {
            case "rock":
            winner = "tie";
            break;
            case "scissors":
            winner = "player";
            break;
            case "paper":
            winner = "computer";
            break;
        }
    } else if (playerMove === "paper") {
        switch(computerMove){
            case "rock":
            winner = "player";
            break;
            case "scissors":
            winner = "computer";
            break;
            case "paper":
            winner = "tie";
            break;
        }
    } else if (playerMove === "scissors") {
        switch(computerMove){
            case "rock":
            winner = "computer";
            break;
            case "scissors":
            winner = "tie";
            break;
            case "paper":
            winner = "player";
            break;
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    if (playerWins < 5 && computerWins < 5); {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    var winner = getWinner();
    if (winner === 'player') {
        playerWins += 1;
    } else if (winner === 'computer') {
        computerWins += 1;
    } else if (winner === 'tie') {
        playerWins += 0;
        computerWins += 0;
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }
    return [playerWins, computerWins];
}

