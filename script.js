const userGuess = document.querySelector('.user-guess');
const guessBtn = document.querySelector('.guess-number');
const lowOrHighDisplay = document.querySelector('.low-or-high');
const showUserGuessDisplay = document.querySelector('.user-guess-number');
const clearFieldBtn = document.querySelector('.clear-number');
const resetGameBtn = document.querySelector('.reset');
const headerColor = document.querySelector('.header-h1');
const rangeMaxDisplay = document.querySelector('.range-numbers');
let guessCount = 0;
let randomNumber = 0;
let unicornCounter = 0;

guessBtn.addEventListener('click', theUsersGuess);
clearFieldBtn.addEventListener('click', clearInput);
resetGameBtn.addEventListener('click', resetTheGame);

newNumber(1, 15);

function theUsersGuess() {
  event.preventDefault();
  let guess = userGuess.value;
  let guessParse = parseInt(guess);
  showUserGuessDisplay.innerText = guess;
  feedbackOfGuess(guessParse);
  clearInput();
}

function clearInput() {
  event.preventDefault();
  userGuess.value = '';
}

function feedbackOfGuess(guessParse) {
  if (randomNumber === guessParse) {
    WinnerLevelUp();
    checkLevel();
  } else if (randomNumber > guessParse) {
    guessCount++;
    lowOrHighDisplay.innerText = 'That was too low';
  } else if (randomNumber < guessParse) {
    guessCount++;
    lowOrHighDisplay.innerText = 'That was too high';
  } else if (guessParse >= 110) {
    showUserGuessDisplay.innerText = 'That\'s not the in the range';
  } else {
    showUserGuessDisplay.innerText = '??';
    lowOrHighDisplay.innerText = 'Error';
  }
  document.querySelector('.guess-count').innerText = guessCount;
}

function newNumber(min, max) {
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min));
  rangeMaxDisplay.innerText = max;
  console.log('Cheater the answer is ' + randomNumber);
  return randomNumber;
}

function resetTheGame() {
  clearInput();
  newNumber(1, 15);
  guessCount = 0;
  unicornCounter = 0;
  document.querySelector('.guess-count').innerText = guessCount;
  document.querySelector('.unicorn-rescued').innerText = unicornCounter;
  lowOrHighDisplay.innerText = 'Guess a number between 1 and 15 to start, if you rescue an unicorn the range opens up by 15';
}

function levelClear() {
  event.preventDefault();
  clearInput();
}

function checkLevel() {
  if (unicornCounter === 1) {
    // orange
    levelColorChange('#EE6B2D', 'David');
    document.querySelector('.one').classList.remove('hide-one');
    newNumber(1, 30);
  } else if (unicornCounter === 2) {
    // yellow
    levelColorChange('#F9CC46', 'Pam');
    document.querySelector('.two').classList.remove('hide-two');
    newNumber(1, 45);
  } else if (unicornCounter === 3) {
    // green
    levelColorChange('#387D22', 'Nathaniel');
    document.querySelector('.three').classList.remove('hide-three');
    newNumber(1, 60);
  } else if (unicornCounter === 4) {
    // blue
    levelColorChange('#001A8E', 'Lousia')
    document.querySelector('.four').classList.remove('hide-four');
    newNumber(1, 75);
  } else if (unicornCounter === 5) {
    // purple
    levelColorChange('#43137D', 'Leta');
    document.querySelector('.five').classList.remove('hide-five');
    newNumber(1, 90);
  } else if (unicornCounter === 6) {
    // voliet
    levelColorChange('#AC47F6', 'Jhun');
    newNumber(1, 110);
  } else if (unicornCounter === 7) {
    winnerWinner();
  }
}

function WinnerLevelUp() {
  unicornCounter++;
  guessCount++;
  document.querySelector('.unicorn-rescued').innerText = unicornCounter;
  lowOrHighDisplay.innerText = 'BOOM!! Keep on Guessing';
}

function levelColorChange(color, name) {
  userGuess.style.color = color;
  headerColor.style.color = color;
  showUserGuessDisplay.style.color = color;
  showUserGuessDisplay.innerText = `You saved Unicorn ${name}`;
  guessBtn.style.backgroundColor = color;
  clearFieldBtn.style.backgroundColor = color;
  resetGameBtn.style.backgroundColor = color;
}

function winnerWinner() {
  userGuess.disabled = true;
  document.querySelector('.seven').classList.remove('hide-seven');
  showUserGuessDisplay.innerText = 'You saved Unicorn Jeff';
  lowOrHighDisplay.innerText = 'You have rescued all of the unicorns, hit reset to play again';
}
