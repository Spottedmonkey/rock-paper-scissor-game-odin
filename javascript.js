
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
    
let computerChoice ='';
let humanChoice = '';

function playRound(computerChoice, humanChoice) {
    
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        alert ("You won this round");
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        alert ("You won this round");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        alert ("You won this round");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        alert ("Yeah, it's a tie")
    } else {
        alert("Computer won this round!");
        computerScore++;
    };

    roundsPlayed++;
    roundStats.textContent = `Rounds played: ${roundsPlayed}`;
    humanStats.textContent = `Your score: ${humanScore}`;
    computerStats.textContent = `Computer's score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    
};

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const roundStats = document.querySelector('#round-stats');
const humanStats = document.querySelector('#human-stats');
const computerStats = document.querySelector('#computer-stats');

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');


rockBtn.addEventListener('click', () => {
    humanChoice = 'Rock';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice)
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    console.log(roundsPlayed);
});

paperBtn.addEventListener('click', () => {
    humanChoice = 'Paper';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
});

scissorsBtn.addEventListener('click', () => {
    humanChoice = 'Scissors';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
});

// playRound(computerChoice, humanChoice); 
// console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
// console.log(`Your current score: ${humanScore}\nComputer's current score: ${computerScore}`);

// alert("The game has ended");

// if (humanScore > computerScore) {
//     alert("You won the game!")
// } else if (humanScore < computerScore) {
//     alert("Ahahahah, you lose!")
// } else {
//     alert("Eh, let's call it a draw")
// }
