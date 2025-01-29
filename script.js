'use strict';

//Initialization of the game

let secretNumber = getRandomNumber();

let score = 20;

let highscore = 0;

//Logic of the game and functionality

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');

    //Player wins
  } else if (guess === secretNumber) {
    displayMessage('You are correct!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    setDisplay(secretNumber);
    changeBgrndColorANDNumberWidth('#60b347', '30rem');

    //Player guesses incorrectly
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game');
      if (score !== 0) {
        setScore(0);
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  secretNumber = getRandomNumber();
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  setDisplay('?');
  changeBgrndColorANDNumberWidth('#222', '15rem');
});

//All functions

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
  return;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
  return;
}

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function changeBgrndColorANDNumberWidth(color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
  return;
}

function setDisplay(toDisplay) {
  document.querySelector('.number').textContent = toDisplay;
}
