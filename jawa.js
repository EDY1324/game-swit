const choices = ["batu", "gunting", "kertas"];

const turnInfoElem = document.getElementById("turnInfo");
const player1ChoiceElem = document.getElementById("player1Choice");
const player2ChoiceElem = document.getElementById("player2Choice");
const resultMessageElem = document.getElementById("resultMessage");
const gameSection = document.querySelector(".game-section");
const modeSelection = document.querySelector(".mode-selection");

let gameMode = null; 
let player1Choice = null;
let player2Choice = null;

function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "Seri!";
    } else if ((player1Choice === "batu" && player2Choice === "gunting") ||
               (player1Choice === "gunting" && player2Choice === "kertas") ||
               (player1Choice === "kertas" && player2Choice === "batu")) {
        return "Pemain 1 Menang!";
    } else {
        return "Pemain 2 Menang!";
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayChoices() {
    player1ChoiceElem.textContent = `Pilihan Pemain 1: ${player1Choice}`;
    player2ChoiceElem.textContent = `Pilihan Pemain 2: ${player2Choice}`;
    const result = determineWinner(player1Choice, player2Choice);
    resultMessageElem.textContent = `Hasil: ${result}`;
}

function changeTurn() {
    if (player1Choice && player2Choice) {
        displayChoices();
        player1Choice = null;
        player2Choice = null;
        turnInfoElem.textContent = "Giliran Pemain 1";
    } else {
        turnInfoElem.textContent = gameMode === "pvp" ?
            (player1Choice ? "Giliran Pemain 2" : "Giliran Pemain 1") :
            "Giliran Pemain 1";
    }
}

function handleChoice(choice) {
    if (gameMode === "pvp") {
        if (!player1Choice) {
            player1Choice = choice;
            changeTurn();
        } else if (!player2Choice) {
            player2Choice = choice;
            changeTurn();
        }
    } else if (gameMode === "pvk") {
        if (!player1Choice) {
            player1Choice = choice;
            const compChoice = computerChoice();
            player2Choice = compChoice;
            changeTurn();
        }
    }
}

document.getElementById("batu").addEventListener("click", () => handleChoice("batu"));
document.getElementById("gunting").addEventListener("click", () => handleChoice("gunting"));
document.getElementById("kertas").addEventListener("click", () => handleChoice("kertas"));

document.getElementById("pvp").addEventListener("click", () => {
    gameMode = "pvp";
    modeSelection.style.display = "none";
    gameSection.style.display = "block";
    turnInfoElem.textContent = "Giliran Pemain 1";
});

document.getElementById("pvk").addEventListener("click", () => {
    gameMode = "pvk";
    modeSelection.style.display = "none";
    gameSection.style.display = "block";
    turnInfoElem.textContent = "Giliran Pemain 1";
});
