// varaibles
var userGuess = document.querySelector('.user-guess');
var guessBttn = document.querySelector('.guess-number');
var lowOrHigh = document.querySelector('.low-or-high');
var showUserGuess = document.querySelector('.user-guess-number');
var clearField = document.querySelector('.clear-number');
var resetGame = document.querySelector('.reset');
var headerColor = document.querySelector('.header-h1');

// counts
var count = 0;
var guessCount = 0;
var randomNumber = 0;
var unicorns = 0;

// event listeners
guessBttn.addEventListener('click', theUsersGuess);
userGuess.addEventListener('blur', enableBttns)
clearField.addEventListener('click', clearInput);
resetGame.addEventListener('click', resetTheGame);


// on page load
newNumber();
disableBttns();


// functions
function theUsersGuess() {
  event.preventDefault();
  var guess = userGuess.value;
  var guessParse = parseInt(guess);
  clearInput();
  showUserGuess.innerText = guess;
  feedbackOfGuess(guessParse);
}

function feedbackOfGuess(guessParse) {
  if (randomNumber === guessParse) {
    WinnerLevelUp();
    checkLevel();
  } else if (randomNumber > guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too low';
  } else if (randomNumber < guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too high'
  } else {
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } 
  document.querySelector('.guess-count').innerText = guessCount;
}

function newNumber() {
  var max = 100;
  var min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  console.log(randomNumber)
  return randomNumber;
}

function resetTheGame() {
  clearInput();
  newNumber();
  count = 0;
  guessCount = 0;
  unicorns = 0;
  document.querySelector('.high-score').innerText = count;
  document.querySelector('.guess-count').innerText = guessCount;
  document.querySelector('.unicorn-rescued').innerText = unicorns;
}

function clearInput() {
  event.preventDefault();
  userGuess.value = '';
}

function disableBttns() {
  clearField.disabled = 'true';
  guessBttn.disabled = 'true';
  resetGame.disabled = 'true';
}

function enableBttns() {
  clearField.disabled = !clearField.disabled;
  guessBttn.disabled = !guessBttn.disabled;
  resetGame.disabled = !resetGame.disabled;
}

function levelClear() {
  event.preventDefault();
  clearInput();
}

function checkLevel() {
  if (unicorns === 1) {
    levelTwo();
  } else if (unicorns === 2) {
    levelThree();
  } else if (unicorns === 3) {
    levelFour();
  } else if (unicorns === 4) {
    levelFive();
  } else if (unicorns === 5) {
    levelSix();
  } else if (unicorns === 6) {
    levelSeven();
  } else if (unicorns === 7) {
    winnerWinner();
  }
  newNumber(); 
}

function WinnerLevelUp() {
  count++;
  unicorns++;
  guessCount++;
  document.querySelector('.unicorn-rescued').innerText = unicorns;
  document.querySelector('.high-score').innerText = count;
  lowOrHigh.innerText = 'BOOM!!';
}

function levelTwo() {
  // orange
  userGuess.style.color = '#EE6B2D';
  headerColor.style.color = '#EE6B2D';
  showUserGuess.style.color = '#EE6B2D';
  showUserGuess.innerText = 'You saved unicorn David';
  guessBttn.style.backgroundColor = '#EE6B2D';
  clearField.style.backgroundColor = '#EE6B2D';
  resetGame.style.backgroundColor = '#EE6B2D';
}

function levelThree() {
  // yellow
  userGuess.style.color = '#FFFD54';
  headerColor.style.color = '#FFFD54';
  showUserGuess.style.color = '#FFFD54';
  showUserGuess.innerText = 'You saved unicorn Pam';
  guessBttn.style.backgroundColor = '#FFFD54';
  clearField.style.backgroundColor = '#FFFD54';
  resetGame.style.backgroundColor = '#FFFD54';
}

function levelFour() {
  // green
  userGuess.style.color = '#387D22';
  headerColor.style.color = '#387D22';
  showUserGuess.style.color = '#387D22';
  showUserGuess.innerText = 'You saved unicorn Nathaniel';
  guessBttn.style.backgroundColor = '#387D22';
  clearField.style.backgroundColor = '#387D22';
  resetGame.style.backgroundColor = '#387D22';
}

function levelFive() {
  // blue
  userGuess.style.color = '#0025F5';
  headerColor.style.color = '#0025F5';
  showUserGuess.style.color = '#0025F5';
  showUserGuess.innerText = 'You saved unicorn Leena';
  guessBttn.style.backgroundColor = '#0025F5';
  clearField.style.backgroundColor = '#0025F5';
  resetGame.style.backgroundColor = '#0025F5';
}

function levelSix() {
  // purple
  userGuess.style.color = '#43137D';
  headerColor.style.color = '#43137D';
  showUserGuess.style.color = '#43137D';
  showUserGuess.innerText = 'You saved unicorn Louisa';
  guessBttn.style.backgroundColor = '#43137D';
  clearField.style.backgroundColor = '#43137D';
  resetGame.style.backgroundColor = '#43137D';
}

function levelSeven() {
  // voliet
  userGuess.style.color = '#AC47F6';
  headerColor.style.color = '#AC47F6';
  showUserGuess.style.color = '#AC47F6';
  showUserGuess.innerText = 'You saved unicorn Jeff';
  guessBttn.style.backgroundColor = '#AC47F6';
  clearField.style.backgroundColor = '#AC47F6';
  resetGame.style.backgroundColor = '#AC47F6';
}

function winnerWinner() {
  alert('cool shit');
}

