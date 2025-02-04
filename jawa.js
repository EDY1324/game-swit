let userScore = 0;
let computerScore = 0;

const resultMessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const computerImg = document.getElementById('computer-img');

let computerChoice = 'rock'
let interval;
function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function animateComputerChoice() {
    let timeLeft = 20;
    resultMessage.textContent = "Komputer sedang memilih...";
    interval = setInterval(() => {
        computerChoice = getRandomChoice();
        computerImg.src = `${computerChoice}.png`;
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(interval);
            resultMessage.textContent = "";
            playRound();
        }
    }, 1000);
}

function playRound(userChoice) {
    if (userChoice === computerChoice) {
        resultMessage.textContent = "Seri!";
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = "Anda Menang!";
        userScore++;
    } 
    else {
        resultMessage.textContent = "Komputer Menang!";
    }

    userScoreElement.textContent = `Skor Anda: ${userScore}`;
    computerScoreElement.textContent = `Skor Komputer: ${computerScore}`;
}

document.getElementById('rock').addEventListener('click', () => {
    animateComputerChoice();
    setTimeout(() => { 
        playRound('rock');
    }, 2000);
});

document.getElementById('paper').addEventListener('click', () => {
    animateComputerChoice();
    setTimeout(() => {
        playRound('paper');
    }, 2000);
});

document.getElementById('scissors').addEventListener('click', () => {
    animateComputerChoice();
    setTimeout(() => {
        playRound('scissors');
    }, 2000);
});