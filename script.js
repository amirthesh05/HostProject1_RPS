let playerScore = 0;
let computerScore = 0;

const options = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a Tie!";
    } else if (player === 'rock') {
        if (computer === 'scissors') {
            playerScore++;
            return 'You Win!';
        } else if (computer === 'paper') {
            computerScore++;
            return 'Computer Wins!';
        }
    } else if (player === 'paper') {
        if (computer === 'rock') {
            playerScore++;
            return 'You Win!';
        } else if (computer === 'scissors') {
            computerScore++;
            return 'Computer Wins!';
        }
    } else if (player === 'scissors') {
        if (computer === 'paper') {
            playerScore++;
            return 'You Win!';
        } else if (computer === 'rock') {
            computerScore++;
            return 'Computer Wins!';
        }
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

   
    document.getElementById('user-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;
    document.getElementById('winner').textContent = winner;

   
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;


    document.getElementById('user-choice').textContent = '-';
    document.getElementById('computer-choice').textContent = '-';
    document.getElementById('winner').textContent = '-';
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}
