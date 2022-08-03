const buttons = document.querySelectorAll('button');
const computerChoiceText = document.querySelector('.computer-choice');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const gameResultText = document.querySelector('.game-winner');
const reset = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;


let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


let playRound = (playerSelection, computerSelection) => {
    let roundMessage = '';

    if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        roundMessage = 'You Loose! Paper beats Rock';
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        roundMessage = 'You Win! Paper beats Rock';
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        roundMessage = 'You Win! Rock beats Scissors';
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        roundMessage = 'You Loose! Rock beats Scissors';
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        roundMessage = 'You Win! Scissors beats Paper';
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        roundMessage = 'You Loose! Scissors beats Paper';
    }
    else if(playerSelection == computerSelection){
        roundMessage = 'It\'s a tie';
    }

    return roundMessage;
}


buttons.forEach(button => button.addEventListener('click', e => {
    
    let computerChoice = getComputerChoice();
    let playerChoice = e.target.id;

    let roundWinner = playRound(playerChoice, computerChoice);

    if(computerScore < 5 && playerScore < 5){
        if (playerChoice != ''){
            computerChoiceText.textContent = computerChoice;
        }

        if (playerChoice == computerChoice){
            computerChoiceText.textContent = `${computerChoice}. It's a tie.`;
        }

        if (roundWinner.includes('Win')){
            playerScore++;
            computerChoiceText.textContent = `${computerChoice}. Human wins this round.`;
        }

        if (roundWinner.includes('Loose')){
            computerScore++;
            computerChoiceText.textContent = `${computerChoice}. Computer wins this round.`;
        }
    }

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    if (playerScore == 5){
        gameResultText.textContent = 'Human';
    }
    else if(computerScore == 5){
        gameResultText.textContent = 'Computer';
    }
    
}));


reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    computerChoiceText.textContent = '____'
    gameResultText.textContent = '____';
});