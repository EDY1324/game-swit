let userScore = 0;
let computerScore = 0;
let gameHistory = [];

const resultMessage = document.getElementById('result-message');
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const computerImg = document.getElementById('computer-img');
const userImg = document.getElementById('user-img');
const historyElement = document.getElementById('history');

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
    document.getElementById('user-choice').textContent = `Pilihan Kamu: ${userChoice}`;
    userImg.src = `${userChoice}.png`; 

    if (userChoice === computerChoice) {
        resultMessage.textContent = "Seri!";
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = "Kamu Menang!";
        userScore++; 
    } 
    else {
        resultMessage.textContent = "Komputer Menang!";
        computerScore++; 
    }

    gameHistory.push(`Pemain memilih: ${userChoice}, Komputer memilih: ${computerChoice}. Hasil : ${resultMessage.textContent}`);
    updateHistory();

    userScoreElement.textContent = `Skor Kamu: ${userScore}`;
    computerScoreElement.textContent = `Skor Komputer: ${computerScore}`;

    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

function updateHistory() {
    historyElement.innerHTML = "";
    gameHistory.slice(-5).forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = entry;
        historyElement.appendChild(listItem);
    });
}

document.getElementById('rock').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Kamu: Batu";
    userImg.src = "rock.png";  
    animateComputerChoice('rock'); 
});

document.getElementById('paper').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Kamu: Kertas";
    userImg.src = "paper.png";  
    animateComputerChoice('paper');  
});

document.getElementById('scissors').addEventListener('click', () => {
    document.getElementById('user-choice').textContent = "Pilihan Kamu: Gunting";
    userImg.src = "scissors.png";  
    animateComputerChoice('scissors'); 
});