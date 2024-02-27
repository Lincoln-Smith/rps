
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
];

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const MAX_ROUNDS = 5;

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        if (roundsPlayed < MAX_ROUNDS) {
            const selectionName = selectionButton.dataset.selection;
            const selection = SELECTIONS.find(selection => selection.name === selectionName);
            makeSelection(selection);
        } else {
            // Game is over, display a message
            displayGameOverMessage();
        }
    });
});

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) {
        incrementScore(yourScoreSpan);
        playerScore++;
    }
    if (computerWinner) {
        incrementScore(computerScoreSpan);
        computerScore++;
    }

    roundsPlayed++;

    if (roundsPlayed === MAX_ROUNDS) {
        // Disable selection buttons when the game is over
        selectionButtons.forEach(button => (button.disabled = true));
    }
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}

function displayGameOverMessage() {
    let gameOverMessage;
    if (playerScore > computerScore) {
        gameOverMessage = "Congratulations! You won!";
    } else if (playerScore < computerScore) {
        gameOverMessage = "Sorry, you lost to the computer.";
    } else {
        gameOverMessage = "It's a tie!";
    }
    const finalScores = `Your score: ${playerScore}, Computer's score: ${computerScore}`;
    document.getElementById('gameOverMessage').textContent = gameOverMessage;
    document.getElementById('finalScores').textContent = finalScores;
}

let username = prompt('Enter your name:');
let story = `Welcome ${username}! State your name below!  `;
let madLibOutputDiv = document.getElementById('madLibOutput');
madLibOutputDiv.innerHTML = `<p> ${story}</p>`;
