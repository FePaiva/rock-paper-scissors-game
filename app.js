const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_SELECTION = 'PAPER';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid selectio! We have selected ${DEFAULT_SELECTION} for you!`);
    return DEFAULT_SELECTION;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
