let humanScore = 0;
let computerScore = 0;

function playGame() {
    function getComputerChoice() {
        const randomInt = Math.floor(Math.random() * 3);
        if (randomInt == 0) {
            return "Rock";
        } else if (randomInt == 1) {
            return "Paper";
        } else {
            return "Scissors";
        };
    }
    
    function getHumanChoice(choice) {
        choice = prompt("Will you choose Rock, Paper or Scissors?")
        choice = choice.toLowerCase()
        choice = choice[0].toUpperCase() + choice.slice(1);
        return choice
    }
    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    function playRound(computerChoice, humanChoice) {
        if (humanChoice === "Paper" && computerChoice === "Rock") {
            alert ("You won this round");
            humanScore += 1;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            alert ("You won this round");
            humanScore += 1;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            alert ("You won this round");
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            alert ("Yeah, it's a tie")
        } else {
            alert("You lose suckah!");
            computerScore += 1;
        }
    }
    playRound(computerChoice, humanChoice); 
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
    console.log(`Your current score is ${humanScore}.`);
    console.log(`The computers current score is ${computerScore}.`);
   
}

for (let i = 0; i < 5; i++) {
    playGame()
}

if (humanScore > computerScore) {
    console.log("%cYou won the game!", "color:lime; font-size: 18px;")
} else if (humanScore < computerScore) {
    console.log("%cAhahahah, you lose!", "color:red; font-size: 18px;")
} else {
    console.log("%cEh, let's call it a draw", "color:lightblue; font-size: 18px;")
}
