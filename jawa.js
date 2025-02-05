let userScore = 0;
let computerScore = 0;

const resultMessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const computerImg = document.getElementById('computer-img');
const userImg = document.getElementById('user-img');  

let computerChoice = 'rock'; 
let interval; 

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function animateComputerChoice(userChoice) {
    let timeLeft = 5;  
    resultMessage.textContent = "Komputer sedang memilih..."; 
    document.getElementById('user-choice').style.display = "none"; 

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

    interval = setInterval(() => {
        computerChoice = getRandomChoice();
        computerImg.src = `${computerChoice}.png`;  
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(interval);  
            resultMessage.textContent = ""; 
            playRound(userChoice);
        }
    }, 1000); 
}

function playRound(userChoice) {
    document.getElementById('user-choice').style.display = "block";
    document.getElementById('user-choice').textContent = `Pilihan Anda: ${userChoice}`;
    userImg.src = `${userChoice}.png`; 

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
        computerScore++; 
    }

    userScoreElement.textContent = `Skor Anda: ${userScore}`;
    computerScoreElement.textContent = `Skor Komputer: ${computerScore}`;

    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

document.getElementById('rock').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Anda: Batu";
    userImg.src = "rock.png";  
    animateComputerChoice('rock'); 
});

document.getElementById('paper').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Anda: Kertas";
    userImg.src = "paper.png";  
    animateComputerChoice('paper');  
});

document.getElementById('scissors').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Anda: Gunting";
    userImg.src = "scissors.png";  
    animateComputerChoice('scissors'); 
});