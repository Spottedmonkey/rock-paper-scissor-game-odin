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

alert("The game has ended");

if (humanScore > computerScore) {
    alert("You won the game!")
} else if (humanScore < computerScore) {
    alert("Ahahahah, you lose!")
} else {
    alert("Eh, let's call it a draw")
}
