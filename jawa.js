let userScore = 0;
let computerScore = 0;

const resultMessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const computerImg = document.getElementById('computer-img');
const userImg = document.getElementById('user-img'); 

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function animateComputerChoice() {
    let timeLeft = 20;
    resultMessage.textContent = "Komputer sedang memilih...";
    const interval = setInterval(() => {
        const tempChoice = getRandomChoice();
        computerImg.src = `${tempChoice}.png`;
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(interval);
            resultMessage.textContent = "";
        }
    }, 1000);
}

function playRound(userChoice) {
    const computerChoice = getRandomChoice();
    
    userImg.src = `${userChoice}.png`;
    computerImg.src = `${computerChoice}.png`;

    if (userChoice === computerChoice) {
        resultMessage.textContent = "Seri!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = "Anda Menang!";
        userScore++;
    } else {
        resultMessage.textContent = "Komputer Menang!";
        computerScore++;
    }

    userScoreElement.textContent = `Skor Anda: ${userScore}`;
    computerScoreElement.textContent = `Skor Komputer: ${computerScore}`;
}

document.getElementById('rock').addEventListener('click', () => {
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', () => {
    playRound('scissors');
});
