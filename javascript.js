



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
    const div = document.querySelector('#div');
    div.innerHTML="";
    const won = document.createElement("div");
    const result = document.createElement('div');

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors"
        && computerChoice == "paper") {
        humanScore++;

        won.textContent = `${humanChoice} beats ${computerChoice} \n`;
    
        div.appendChild(won);


        result.textContent = " you won this round";
        result.setAttribute("style","color:green;")
        div.appendChild(result);

    }
    else if (humanChoice == computerChoice) {
     
        const draw = document.createElement('div');
        draw.textContent = " DRAW!!! ";
        div.appendChild(draw);
    }
    else {
        computerScore++;
        won.textContent = `${computerChoice} beats ${humanChoice} \n`;
        div.appendChild(won);

        result.textContent = " you lost this round";
        result.setAttribute("style","color:red;")
        div.appendChild(result);

    }
    const score = document.createElement('div');
    score.textContent = `Human Score: ${humanScore} \n Computer Score: ${computerScore}`
    score.setAttribute('style','font-weight:bold')
    div.appendChild(score);

}

let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound(button.id, getComputerchoice())
        }
        else{
            const div = document.querySelector('#div');
            const winner=document.createElement('div');
            winner.textContent=(humanScore==5)? "You won" : "You Lost";
            winner.setAttribute("style","font-weight:bold; color:gold ;margin-top:10px;margin-left:10px")
            div.appendChild(winner);
            alert("start a new round");
        }
    });
})
console.log(humanScore);

