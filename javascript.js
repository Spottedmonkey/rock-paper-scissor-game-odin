
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
        humanScore++;
        computerScore++;
    } else {
        alert("Computer won this round!");
        computerScore++;
    };

    roundsPlayed++;
    roundNumber.textContent = `${roundsPlayed}`;
    humanNumber.textContent = `${humanScore}`;
    computerNumber.textContent = `${computerScore}`;
    // humanPlay.textContent = `${humanChoice}`;
    // computerPlay.textContent = `${computerChoice}`

    if (humanScore == 5 || computerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    
};

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const roundNumber = document.querySelector('#round-number')
const humanNumber = document.querySelector('#human-number');
const computerNumber = document.querySelector('#computer-number');

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

const humanPlay = document.querySelector('#human-play');
const computerPlay = document.querySelector('#computer-play');

const playerMoveImg = document.querySelector('#player-move-img');


rockBtn.addEventListener('click', () => {
    humanChoice = 'Rock';
    playerMoveImg.src = './images/rock-rps-odin.png';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    console.log(roundsPlayed);
});

paperBtn.addEventListener('click', () => {
    humanChoice = 'Paper';
    playerMoveImg.src = './images/paper-rps-odin.png';
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
    playerMoveImg.src = './images/scissors-rps-odin.png';
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
