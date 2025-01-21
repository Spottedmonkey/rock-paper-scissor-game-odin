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

const roundOutcome = document.querySelector('#round-outcome');

function playRound(computerChoice, humanChoice) {
    
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        roundOutcome.textContent = "You won this round!";
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        roundOutcome.textContent = "You won this round!";
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        roundOutcome.textContent = "You won this round!";
        humanScore++;
    } else if (humanChoice === computerChoice) {
        roundOutcome.textContent = "Yeah, it's a tie";
        humanScore++;
        computerScore++;
    } else {
        roundOutcome.textContent = "Computer won this round!";
        computerScore++;
    };

    roundsPlayed++;
    roundNumber.textContent = `${roundsPlayed}`;
    humanNumber.textContent = `${humanScore}`;
    computerNumber.textContent = `${computerScore}`;

    if (humanScore === 5 && computerScore === 5) {
        roundOutcome.textContent = "Eh, let's call it a draw"
    } else if (humanScore === 5) {
        roundOutcome.textContent = "You won the game!"
    } else if (computerScore === 5) {
        roundOutcome.textContent = "Ahahaha you lost to a computer!"
    }

    if (humanScore == 5 || computerScore == 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
};

function changeComputerImage(computerChoice) {
    if (computerChoice === "Rock") {
        computerMoveImg.src = './images/rock-rps-odin.png';
    } else if (computerChoice === "Paper") {
        computerMoveImg.src = './images/paper-rps-odin.png';
    } else if (computerChoice === "Scissors") {
        computerMoveImg.src = './images/scissors-rps-odin.png';
    } else {
        return;
    }
}

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
const computerMoveImg = document.querySelector('#computer-move-img');


rockBtn.addEventListener('click', () => {
    humanChoice = 'Rock';
    playerMoveImg.src = './images/rock-rps-odin.png';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    changeComputerImage(computerChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    console.log(roundsPlayed);
});

rockBtn.addEventListener('mousedown', () => {
    rockBtn.setAttribute('style', 'background-color: #FFBA00; transform: scale(0.97);')
})

rockBtn.addEventListener('mouseup', () => {
    rockBtn.setAttribute('style', 'background-color: #ecebe4;')
})

paperBtn.addEventListener('click', () => {
    humanChoice = 'Paper';
    playerMoveImg.src = './images/paper-rps-odin.png';
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    changeComputerImage(computerChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
});

paperBtn.addEventListener('mousedown', () => {
    paperBtn.setAttribute('style', 'background-color: #FFBA00; transform: scale(0.97);')
})

paperBtn.addEventListener('mouseup', () => {
    paperBtn.setAttribute('style', 'background-color: #ecebe4;')
})

scissorsBtn.addEventListener('click', () => {
    humanChoice = 'Scissors';
    computerChoice = getComputerChoice();
    playerMoveImg.src = './images/scissors-rps-odin.png';
    playRound(computerChoice, humanChoice);
    changeComputerImage(computerChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
});

scissorsBtn.addEventListener('mousedown', () => {
    scissorsBtn.setAttribute('style', 'background-color: #FFBA00; transform: scale(0.97);')
})

scissorsBtn.addEventListener('mouseup', () => {
    scissorsBtn.setAttribute('style', 'background-color: #ecebe4;')
})

const instructionReveal = document.querySelector('#instruction-reveal');
const instructionContent = document.querySelector('#instruction-content');
const tipContainerHeader = document.querySelector('#tip-container-header');

instructionReveal.addEventListener('click', (e) => {
    instructionContent.textContent = '';
    console.log(buttonClicked);
    setTimeout(buttonFalse,1)
    removeInstructionContent()
    setTimeout(logConsole, 300)
});

let buttonClicked = Boolean;

function logConsole() {
    console.log(buttonClicked);
}

function buttonFalse() {
    buttonClicked = false
    instructionReveal.src = './images/arrow-down-sign-to-navigate.png';
}

function buttonTrue() {
    buttonClicked = true
    instructionReveal.src = './images/arrow-up-sign-to-navigate.png';
    tipContainerHeader.setAttribute('style', 'padding-top: 10px;');
    instructionContent.setAttribute('style', 'padding-bottom: 5px;');
}

function removeInstructionContent() {
    if (buttonClicked === false) {
        instructionContent.textContent = 'In order to start the game click on one of the "rock, paper, scissors" buttons below, the game only lasts until one of the players have reached a score of 5.'
        setTimeout(buttonTrue, 1)
    } else {
        return
    }
}

const restartButton = document.querySelector('#restart-button');

restartButton.addEventListener('click', () => {
    humanScore = 0;
    humanNumber.textContent = `${humanScore}`;
    computerScore = 0;
    computerNumber.textContent = `${computerScore}`;
    roundsPlayed = 0;
    roundNumber.textContent = `${roundsPlayed}`;
    roundOutcome.textContent = `Let's play!`
    computerMoveImg.src = './images/rex-rps-odin.png';
    playerMoveImg.src = './images/tritops-rps-odin.png';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
})

restartButton.addEventListener('mousedown', () => {
    restartButton.setAttribute('style', 'background-color: #FFBA00; transform: scale(0.97);')
})

restartButton.addEventListener('mouseup', () => {
    restartButton.setAttribute('style', 'background-color: #ecebe4;')
})