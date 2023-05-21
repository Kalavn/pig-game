'use strict';
//total 2 players
const total0Score = document.getElementById('score--0');
const total1Score = document.getElementById('score--1');
const score = document.querySelectorAll('.score');

const current0Score = document.getElementById('current--0');
const current1Score = document.getElementById('current--1');
const currentScore = document.querySelectorAll('.current-score');

const dice = document.querySelector('.dice');

let activePlayer = 1;
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
const player = document.querySelectorAll('.player');
let totalScore = 0;

//switch player
const switchPlayer = function () {
  player[`${activePlayer}`].classList.remove('player--active');
  current = 0;
  currentScore[`${activePlayer}`].textContent = current;
  activePlayer = activePlayer == 1 ? 0 : 1;
  player[`${activePlayer}`].classList.add('player--active');
  //totalScore = Number(score[`${activePlayer}`].textContent);
};

//win case
const winCase = function () {
  score[`${activePlayer}`].textContent = totalScore;
  player[`${activePlayer}`].classList.add('win');
};

//init game
total0Score.textContent = 0;
total1Score.textContent = 0;
let current = 0;
// hidden dice
dice.classList.add('hidden');

//click button roll
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
  if (totalScore < 10) {
    let randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomDice}.png`;
    dice.classList.remove('hidden');
    //random dice !== 1
    if (randomDice !== 1) {
      current += randomDice;
      currentScore[`${activePlayer}`].textContent = current;
    } else {
      switchPlayer();
    }
  }
});
// click button hold
const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
  totalScore = Number(currentScore[`${activePlayer}`].textContent);
  if (totalScore >= 10) {
    return winCase();
    // score[`${activePlayer}`].textContent = totalScore;
    // player[`${activePlayer}`].classList.add('win');
  } else if (totalScore < 10) {
    totalScore = Number(score[`${activePlayer}`].textContent);
    current = Number(currentScore[`${activePlayer}`].textContent);
    totalScore += current;
    score[`${activePlayer}`].textContent = totalScore;
    if (totalScore > 10) return winCase();
    switchPlayer();
  }
});

const btnReset = document.querySelector('.btn--new');

btnReset.addEventListener('click', function () {
  current = 0;
  totalScore = 0;
  dice.classList.add('hidden');
  activePlayer = 1;
  total0Score.textContent = 0;
  total1Score.textContent = 0;
  player[`${activePlayer}`].classList.add('player--active');
  player[`${activePlayer}`].classList.remove('win');
  current0Score.textContent = 0;
  current1Score.textContent = 0;
});
