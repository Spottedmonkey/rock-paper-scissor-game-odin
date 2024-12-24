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
            return "Scissor";
        };
    }
    
    function getHumanChoice(choice) {
        choice = prompt("Will you choose Rock, Paper or Scissor?")
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
        } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
            alert ("You won this round");
            humanScore += 1;
        } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
            alert ("You won this round");
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            alert ("Yeah, it's a tie")
        } else {
            alert("Computer won this round!");
            computerScore += 1;
        }
    }
    playRound(computerChoice, humanChoice); 
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
    console.log(`Your current score: ${humanScore}\nComputer's current score: ${computerScore}`);
}

for (let i = 0; i < 5; i++) {
    playGame()
}

console.log("%cThe game has ended", "color: cornflowerblue; font-weight: bold; font-size: 15px;");

if (humanScore > computerScore) {
    console.log("%cYou won the game!", "color:lime; font-size: 18px;")
} else if (humanScore < computerScore) {
    console.log("%cAhahahah, you lose!", "color:red; font-size: 18px;")
} else {
    console.log("%cEh, let's call it a draw", "color:lightblue; font-size: 18px;")
}
