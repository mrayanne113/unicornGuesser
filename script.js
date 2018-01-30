// varaibles
var userGuess = document.querySelector('.user-guess');
var guessBttn = document.querySelector('.guess-number');
var lowOrHigh = document.querySelector('.low-or-high');
var showUserGuess = document.querySelector('.user-guess-number');
var clearField = document.querySelector('.clear-number');
var resetGame = document.querySelector('.reset');
var headerColor = document.querySelector('.header-h1');
var rangeMax = document.querySelector('.range-numbers');

// counts
var count = 0;
var guessCount = 0;
var randomNumber = 0;
var unicorns = 0;

// event listeners
guessBttn.addEventListener('click', theUsersGuess);
userGuess.addEventListener('blur', theUsersGuess);
clearField.addEventListener('click', clearInput);
resetGame.addEventListener('click', resetTheGame);


// on page load
newNumber();


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
  } else if (guessParse >= 110) {
    showUserGuess.innerText = 'Thats not the in the range';
  } else if (guessParse.length = 3){
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } else {
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } 
  document.querySelector('.guess-count').innerText = guessCount;
}

function newNumber() {
  max = 15;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min));
  rangeMax.innerText = max; 
  console.log(randomNumber)
  return randomNumber;
}

function newNumberTwo() {
  max = 30;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
  console.log(randomNumber)
  return randomNumber;
}

function newNumberThree() {
  max = 45;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
  console.log(randomNumber)
  return randomNumber;
}

function newNumberFour() {
  max = 60;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
  console.log(randomNumber)
  return randomNumber;
}

function newNumberFive() {
  max = 85;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
  console.log(randomNumber)
  return randomNumber;
}

function newNumberSix() {
  max = 90;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
  console.log(randomNumber)
  return randomNumber;
}

function newNumberSeven() {
  max = 110;
  min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  rangeMax.innerText = max;
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
  lowOrHigh.innerText = 'Guess a number between 1 and 15 to start, if you rescue a unicorn the range opens up by 15';
}

function clearInput() {
  event.preventDefault();
  userGuess.value = '';
}


function levelClear() {
  event.preventDefault();
  clearInput();
}

function checkLevel() {
  if (unicorns === 1) {
    levelTwo();
    newNumberTwo();
  } else if (unicorns === 2) {
    levelThree();
    newNumberThree();
  } else if (unicorns === 3) {
    levelFour();
    newNumberFour();
  } else if (unicorns === 4) {
    levelFive();
    newNumberFive();
  } else if (unicorns === 5) {
    levelSix();
    newNumberSix();
  } else if (unicorns === 6) {
    levelSeven();
    newNumberSeven();
  } else if (unicorns === 7) {
    winnerWinner();
  }
}

function WinnerLevelUp() {
  count++;
  unicorns++;
  guessCount++;
  document.querySelector('.unicorn-rescued').innerText = unicorns;
  document.querySelector('.high-score').innerText = count;
  lowOrHigh.innerText = 'BOOM!! Keep on Guessing';
}

function levelTwo() {
  // orange
  userGuess.style.color = '#EE6B2D';
  headerColor.style.color = '#EE6B2D';
  showUserGuess.style.color = '#EE6B2D';
  showUserGuess.innerText = 'You saved Unicorn David';
  guessBttn.style.backgroundColor = '#EE6B2D';
  clearField.style.backgroundColor = '#EE6B2D';
  resetGame.style.backgroundColor = '#EE6B2D';
}

function levelThree() {
  // yellow
  userGuess.style.color = '#F9CC46';
  headerColor.style.color = '#F9CC46';
  showUserGuess.style.color = '#F9CC46';
  showUserGuess.innerText = 'You saved Unicorn Pam';
  guessBttn.style.backgroundColor = '#F9CC46';
  clearField.style.backgroundColor = '#F9CC46';
  resetGame.style.backgroundColor = '#F9CC46';
}

function levelFour() {
  // green
  userGuess.style.color = '#387D22';
  headerColor.style.color = '#387D22';
  showUserGuess.style.color = '#387D22';
  showUserGuess.innerText = 'You saved Unicorn Nathaniel';
  guessBttn.style.backgroundColor = '#387D22';
  clearField.style.backgroundColor = '#387D22';
  resetGame.style.backgroundColor = '#387D22';
}

function levelFive() {
  // blue
  userGuess.style.color = '#001A8E';
  headerColor.style.color = '#001A8E';
  showUserGuess.style.color = '#001A8E';
  showUserGuess.innerText = 'You saved Unicorn Leta';
  guessBttn.style.backgroundColor = '#001A8E';
  clearField.style.backgroundColor = '#001A8E';
  resetGame.style.backgroundColor = '#001A8E';
}

function levelSix() {
  // purple
  userGuess.style.color = '#43137D';
  headerColor.style.color = '#43137D';
  showUserGuess.style.color = '#43137D';
  showUserGuess.innerText = 'You saved Unicorn Louisa';
  guessBttn.style.backgroundColor = '#43137D';
  clearField.style.backgroundColor = '#43137D';
  resetGame.style.backgroundColor = '#43137D';
}

function levelSeven() {
  // voliet
  userGuess.style.color = '#AC47F6';
  headerColor.style.color = '#AC47F6';
  showUserGuess.style.color = '#AC47F6';
  showUserGuess.innerText = 'You saved Unicorn Jeff';
  guessBttn.style.backgroundColor = '#AC47F6';
  clearField.style.backgroundColor = '#AC47F6';
  resetGame.style.backgroundColor = '#AC47F6';
  winnerWinner();
}

function winnerWinner() {
  console.log('blonde')
  lowOrHigh.innerText = 'You have rescued all of the unicorns, hit reset to play again';
  alert('cool shit');
}


// userGuess.addEventListener('keyup', enableBttns)
// disableBttns();

// function disableBttns() {
//   clearField.disabled = 'true';
//   guessBttn.disabled = 'true';
//   resetGame.disabled = 'true';
// }

// function enableBttns() {
//   clearField.disabled = !clearField.disabled;
//   guessBttn.disabled = !guessBttn.disabled;
//   resetGame.disabled = !resetGame.disabled;
  
// }
