const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_SELECTION = 'PAPER';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_PLAYER_LOST = 'PLAYER_LOST';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid selection! We have selected ${DEFAULT_SELECTION} for you!`);
    return DEFAULT_SELECTION;
  }
  return selection;
};

const getComputerChoice = function () {
  // let computerOptions = [ROCK, PAPER, SCISSORS];
  const computerChoice = Math.random();
  if (computerChoice < 0.34) {
    return ROCK;
  } else if (computerChoice < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const determineWinner = function (compChoice, playChoice) {
  if (compChoice === playChoice) {
    return RESULT_DRAW;
  } else if (
    (compChoice === ROCK && playChoice === PAPER) ||
    (compChoice === PAPER && playChoice === SCISSORS) ||
    (compChoice === SCISSORS && playChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_PLAYER_LOST;
  }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerSelection = getPlayerChoice();
  console.log('player', playerSelection);
  const computerSelection = getComputerChoice();
  console.log('computer', computerSelection);
  const winner = determineWinner(computerSelection, playerSelection);
  console.log('result', winner);
});
