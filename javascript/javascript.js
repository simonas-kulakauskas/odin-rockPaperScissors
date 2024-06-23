let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const getRandomInt = () => Math.floor(Math.random() * 3);

const getComputerChoice = () => {
    switch (getRandomInt()) {
        case 0: return ("rock");
        case 1: return ("paper");
        case 2: return ("scissors");
        default:
            console.log("Something has gone wrong with 'getRandomInt()'");
            console.log(getRandomInt);
            return null;
    }
}

const checkWhoWon = (humanChoice, computerChoice) => { // Checks who won the round, returns 0 for draw, 1 for human, 2 for computer.
    if (humanChoice === computerChoice) { // Draw?
        return 0;
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") { return 2; }
        else if (computerChoice === "scissors") { return 1; };
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") { return 1; }
        else if (computerChoice === "scissors") { return 2; };
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") { return 1; }
        else if (computerChoice === "rock") { return 2; }
    }

}

const playRound = (humanChoice, computerChoice) => { // Run 'checkWhoWon', display message and change score based on who won.
    let winner = checkWhoWon(humanChoice, computerChoice);
    switch (winner) {
        case 0: // draw case
            drawScore++;
            updateDisplay(0);
            break;
        case 1: // human win case
            humanScore++;
            updateDisplay(1);
            break;
        case 2: // computer win case
            computerScore++;
            updateDisplay(2);
            break;
    }
}


// Grab elements that'll be changed from dom.
const messageDisplay = document.getElementById("messageDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawScoreDisplay = document.getElementById("drawScoreDisplay");

const stopAllListeners = () => { // Stops buttons working when game is won.
    rockButton.removeEventListener("click", rockButtonHandler);
    paperButton.removeEventListener("click", paperButtonHandler);
    scissorsButton.removeEventListener("click", scissorsButtonHandler);
}

const updateDisplay = (winner) => { // Update's display if noone's won, updates display and stops listeners if someone won
    if (humanScore === 5) {
        messageDisplay.textContent = "PLAYER HAS REACHED 5 POINTS, PLAYER WINS!";
        playerScoreDisplay.textContent = 5;
        stopAllListeners();
    }
    else if (computerScore === 5) {
        messageDisplay.textContent = "COMPUTER HAS REACHED 5 POINTS, COMPUTER WINS!";
        computerScoreDisplay.textContent = 5;
        stopAllListeners();

    } else {
        switch (winner) {
            case 0:
                messageDisplay.textContent = "Draw, No one wins this round!";
                drawScoreDisplay.textContent = drawScore;
                break;
            case 1:
                messageDisplay.textContent = "Player wins the round!";
                playerScoreDisplay.textContent = humanScore;
                break;
            case 2:
                messageDisplay.textContent = "Computer wins the round!";
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }

}

// Button listeners and handlers.

function rockButtonHandler() {
    playRound("rock", getComputerChoice());
}
document.getElementById("rockButton").addEventListener("click", rockButtonHandler);

function paperButtonHandler() {
    playRound("paper", getComputerChoice());
}
document.getElementById("paperButton").addEventListener("click", paperButtonHandler);

function scissorsButtonHandler() {
    playRound("scissors", getComputerChoice());
}
document.getElementById("scissorsButton").addEventListener("click", scissorsButtonHandler);
