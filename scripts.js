let playerScore = 0;
let computerScore = 0;



//  Functions

function computerPlay() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    let computerSelection = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[computerSelection]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log(`Player | ${playerSelection} vs. ${computerSelection} | Computer`);
    if (playerSelection === computerSelection) {
        return resultsText.textContent = "Tie game! No winner.";
    }

    switch (true) {
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            playerScore++;
            return resultsText.textContent = "Rock smashes scissors! You win!";
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            playerScore++;
            return resultsText.textContent = "Paper covers rock! You win!";
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            playerScore++;
            return resultsText.textContent = "Scissors cuts paper! You win!";
        case playerSelection === "ROCK" && computerSelection === "PAPER":
            computerScore++;
            return resultsText.textContent = "Paper covers rock! You lose.";
        case playerSelection === "PAPER" && computerSelection === "SCISSORS":
            computerScore++;
            return resultsText.textContent = "Scissors cut paper! You lose.";
        case playerSelection === "SCISSORS" && computerSelection === "ROCK":
            computerScore++;
            return resultsText.textContent = "Rock smashes scissors! You lose.";
    }
}

function winnerCheck(playerScore, computerScore) {
    if (playerScore === 5) {
        alert(`Congratulations! You won the game!
        Final score:
        Player: ${playerScore}
        Computer: ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        console.log(playerScore);
        console.log(computerScore);
        return true;
    } else if (computerScore === 5) {
        alert(`Too bad! You lost the game.
        Final score:
        Player score: ${playerScore}
        Computer score: ${computerScore}`);
        playerScore = 0;
        computerScore = 0;
        console.log(playerScore);
        console.log(computerScore);
        return true;
    }
}

function scoreReset() {
    return playerScore = 0, computerScore = 0;
}

function scoreUpdate() {
    playerResults.textContent = `Player's Score: ${playerScore}`;
    computerResults.textContent = `Computer's Score: ${computerScore}`;
    winnerCheck(playerScore, computerScore) ? scoreReset() : console.log('hi');
}



//  DOM Manipulation

const body = document.querySelector('body');
const results = document.querySelector('#results');
const score = document.querySelector('#score');

const rockButton = document.querySelector('#rock-button')
rockButton.addEventListener('click', (e) => {
    playRound('ROCK', computerPlay());
    scoreUpdate();
});

const paperButton = document.querySelector('#paper-button')
paperButton.addEventListener('click', (e) => {
    playRound('PAPER', computerPlay());
    scoreUpdate();
});

const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', (e) => {
    playRound('SCISSORS', computerPlay());
    scoreUpdate();
})

const resultsText = document.createElement('span');
results.appendChild(resultsText);

const playerResults = document.querySelector('#player-results');
playerResults.textContent = `Player's Score: ${playerScore}`;

const computerResults = document.querySelector('#computer-results')
computerResults.textContent = `Computer's Score: ${computerScore}`;