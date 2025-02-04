function playGame(playerChoice) {
    const choices = ['batu', 'gunting', 'kertas'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let playerIndex = 0;
    const playerImage = document.getElementById('playerChoice');
    const loadingPlayerImages = ['batu.png', 'gunting.png', 'kertas.png'];

    let computerIndex = 0;
    const computerImage = document.getElementById('computerChoice');
    const loadingComputerImages = ['batu.png', 'gunting.png', 'kertas.png'];

    const intervalPlayer = setInterval(() => {
        playerImage.src = loadingPlayerImages[playerIndex];
        playerIndex = (playerIndex + 1) % 3;
    }, 150);

    const intervalComputer = setInterval(() => {
        computerImage.src = loadingComputerImages[computerIndex];
        computerIndex = (computerIndex + 1) % 3;
    }, 150);

    setTimeout(() => {
        clearInterval(intervalPlayer);
        clearInterval(intervalComputer);

        playerImage.src = `${playerChoice}.png`;
        computerImage.src = `${computerChoice}.png`;

        const result = determineWinner(playerChoice, computerChoice);
        document.getElementById('result').innerHTML = `
            <p>Pemain memilih: <strong>${playerChoice}</strong></p>
            <p>Komputer memilih: <strong>${computerChoice}</strong></p>
            <p>Hasil: <strong>${result}</strong></p>
        `;
    }, 1000);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Seri';
    }
    if (
        (player === 'batu' && computer === 'gunting') ||
        (player === 'gunting' && computer === 'kertas') ||
        (player === 'kertas' && computer === 'batu')
    ) {
        return 'Pemain Menang';
    } else {
        return 'Komputer Menang';
    }
}