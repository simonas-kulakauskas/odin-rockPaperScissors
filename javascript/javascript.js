let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

// TODO: Reduce the size of these, no need to have them as variables and to have the event listener call an anonymous function when we can pass the 'playRound' 
// TODO: Straight away....

// * Displaying Function

const messageDisplay = document.getElementById("messageDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawScoreDisplay = document.getElementById("drawScoreDisplay");




const getRandomInt = () => Math.floor(Math.random() * 3); // To get a random choice of 3 (for rock, paper or scissors)


const getComputerChoice = () => { // Gets response from getRandomInt and choose the corresponding rock, paper or scissors.
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

const promptHuman = () => window.prompt("Pick: Rock, Paper, Scissors...", "");


const getHumanChoice = () => { // Force player to pick one of 3, make sure valid otherwise let them retry.
    const choices = ["rock", "paper", "scissors"];
    let humanChoice;

    humanChoice = promptHuman().toLowerCase();

    if (choices.includes(humanChoice)) {
        return (humanChoice);
    }
    else {
        window.alert(humanChoice + " is not valid, try again...")
        getHumanChoice();
    }

}


const checkWhoWon = (humanChoice, computerChoice) => { // Checks who won the round, returns 0 for draw, 1 for human, 2 for computer.
    if (humanChoice === computerChoice) { // Check draw?
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

const stopAllListeners = () => {
    rockButton.removeEventListener("click", rockButtonHandler);
    paperButton.removeEventListener("click", paperButtonHandler);
    scissorsButton.removeEventListener("click", scissorsButtonHandler);
}

const updateDisplay = (winner) => {
    if (humanScore === 5) {
        console.log("HUMAN 5 ROUNDS")
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



const playRound = (humanChoice, computerChoice) => { // Run 'checkWhoWon', display message and change score based on who won.
    let winner = checkWhoWon(humanChoice, computerChoice);
    switch (winner) {
        case 0: // draw case
            drawScore++;
            updateDisplay(0);
            console.log("Draw, both selected " + humanChoice + ", score left unchanged.");
            break;
        case 1: // human win case
            humanScore++;
            updateDisplay(1);
            console.log("Human wins!, selected " + humanChoice + ", Computer selected " + computerChoice + ".");
            break;
        case 2: // computer win case
            computerScore++;
            updateDisplay(2);
            console.log("Computer wins!, selected " + computerChoice + ", Human selected " + humanChoice + ".");
            break;
    }
}

// * Buttons functions
const rockButton = document.getElementById("rockButton");


// rockButton.addEventListener("click", () => {
//     
// });
function rockButtonHandler() {
    playRound("rock", getComputerChoice());
}

rockButton.addEventListener("click", rockButtonHandler);


const paperButton = document.getElementById("paperButton");

function paperButtonHandler() {
    playRound("paper", getComputerChoice());
}

paperButton.addEventListener("click", paperButtonHandler);

const scissorsButton = document.getElementById("scissorsButton");

function scissorsButtonHandler() {
    playRound("scissors", getComputerChoice());
}

scissorsButton.addEventListener("click", scissorsButtonHandler);







// playGame();





