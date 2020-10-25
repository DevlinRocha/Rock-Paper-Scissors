/*    
    Begin with a function called computerPlay that randomly returns either 'Rock', 'Paper', or 'Scissors'.
    
    A new round begins with a function taking inputs from the players selection and the computers selection
    Return a string declaring the winner of the round, such as: "You lose! Paper beats rock"

    1.) Make sure the function is case insensitive so it takes all variations of user inputs.
    2.) Make sure results are returned, console.log() is for testing purposes only

    Another function called game() uses the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

    1.) Use console.log() to report the results of each round at the end
    2.) Use prompt() to get input from the user
    3.) Feel free to re-work previous functions or create more "helper" functions if it would be useful
*/

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    possibleChoices = ["Rock", "Paper", "Scissors"];
    let computerSelection = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[computerSelection]
}

function playerChoice() {
    let playerChoice = false;
    let playerSelection = "";
    while (playerChoice === false) {
        playerSelection = prompt("Rock, paper, or scissors?")
        if (playerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "SCISSORS") {
            return playerSelection
            playerChoice = true;
        }
    }
}

function bothChoose() {
    let computerSelection = computerPlay();
    let playerSelection = playerChoice();
    return [computerSelection, playerSelection]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return "Tie game! No winner."
    }

    switch (true) {
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            playerScore++;
            return "Rock smashes scissors! You win!"
            break;
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            playerScore++;
            return "Paper covers rock! You win!"
            break;
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            playerScore++;
            return "Scissors cuts paper! You win!"
            break;
        
        case playerSelection === "ROCK" && computerSelection === "PAPER":
            computerScore++;
            return "Paper covers rock! You lose."
            break;
        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            computerScore++;
            return "Scissors cut paper! You lose."
            break;
        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            computerScore++;
            return "Rock smashes scissors! You lose."
            break;
    }
}

function game() {
    console.log("Starting a new game...");
    for (i = 0; i < 5; i++) {
        let [computerSelection, playerSelection] = bothChoose();
        results = playRound(playerSelection, computerSelection);
        console.log(results);
    }
    if (playerScore > computerScore) {
        return `Congratulations! You won the game!
        Final score
        Player: ${playerScore} Computer: ${computerScore}`
    } else {
        return `Too bad! You lost the game.
        Final score
        Player: ${playerScore} Computer: ${computerScore}`
    }
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
}