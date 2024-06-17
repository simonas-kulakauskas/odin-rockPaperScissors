console.log("Javascript is linked & working.")

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const getRandomInt = () => {
    return Math.floor(Math.random() * 3);
}

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

const promptHuman = () => {
    return (window.prompt("Pick: Rock, Paper, Scissors...", ""));
}

const getHumanChoice = () => {
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


function playGame() {
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

    const playRound = (humanChoice, computerChoice) => { // Run 'checkWhoWon', display message and change score based on who won.
        let winner = checkWhoWon(humanChoice, computerChoice);
        switch (winner) {
            case 0:
                drawScore++;
                console.log("Draw, both selected " + humanChoice + ", score left unchanged.");
                break;
            case 1:
                humanScore++;
                console.log("Human wins!, selected " + humanChoice + ", Computer selected " + computerChoice + ".");
                break;
            case 2:
                computerScore++;
                console.log("Computer wins!, selected " + computerChoice + ", Human selected " + humanChoice + ".");
                break;
        }
    }

    const displayScore = () => { // Display score when ran.
        console.log("Draw score: " + drawScore + ".\nHuman score: " + humanScore + ".\nComputer score: " + computerScore);
        if (humanScore === computerScore) {
            console.log("Draw, No one won!");
        }
        else if (humanScore > computerScore) {
            console.log("Human wins overall!!!");
        }
        else if (humanScore < computerScore) {
            console.log("Computer wins overall!!!");
        }
    }

    let rounds = 5; // Choose how many rounds, in this case 5 rounds.

    for (i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    displayScore();

}