function getComputerchoice() {
    let num = Math.random();
    console.log(num);
    if (num <= 0.3) {
        return "rock";
    }
    else if (num <= 0.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanchoice() {
    let correct = false;
    do {
        let humanChoice = prompt("enter your choice:", "")
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            correct = true;
            return humanChoice;
        }
        else {
            alert("incorrect input please enter any of rock,paper or scissors");
        }
    } while (correct == false);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors"
        && computerChoice == "paper") {
        humanScore++;
        console.log(humanChoice + " beats" + computerChoice);
        console.log("you won this round");
    }
    else if (humanChoice == computerChoice) {
        console.log("Draw!!!");
    }
    else {
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice);
        console.log("you lost this round");
    }

}

let humanScore = 0;
let computerScore = 0;

//playing 5 times
for (let i = 0; i < 5; i++) {
    let computer = getComputerchoice();
    let human = getHumanchoice();
    playRound(human, computer);
}

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);