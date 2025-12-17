function getComputerChoice() {

    let x = Math.random();

    if (x < 1 / 3) {
        return "rock";
    }
    else if (x < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }

}


let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {


    let result = document.querySelector("#result");
    //result.textContent = "";

    let para = document.createElement("p");

    let newPara = document.createElement("p");
    newPara.textContent = "";


    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        para.textContent = `Paper beats Rock! You Win!
        Score: You:${humanScore}, Computer:${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        para.textContent = `Rock crushes Scissors! You Win!
        Score: You:${humanScore}, Computer:${computerScore}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        para.textContent = `Scissors cut Paper! You Win!
        Score: You:${humanScore}, Computer:${computerScore}`;
    }
    else if (humanChoice === computerChoice) {
        para.textContent = `It's a Tie!
        Score: You:${humanScore}, Computer:${computerScore}`;
    }

    else {
        computerScore++;
        let finalComputerChoice = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
        let finalHumanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
        para.textContent = `${finalComputerChoice} beats ${finalHumanChoice}! Computer Wins!
        Score: You:${humanScore}, Computer:${computerScore}`;

    }



    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            newPara.textContent = "You Won!";
        }
        else if (computerScore > humanScore) {
            newPara.textContent = "Computer Won!";
        }
        else {
            newPara.textContent = "Tie!";
        }
        buttons.forEach(btn => btn.disabled = true);
    }

    result.appendChild(para);
    result.appendChild(newPara);

}





let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener('click', () => {
        let humanSelection = button.textContent.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    });
}

