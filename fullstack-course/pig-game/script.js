'use strict';

let player1El = document.querySelector('.player--0');
let player2El = document.querySelector('.player--1');
let currentScore1El = document.querySelector('#current--0');
let currentScore2El = document.querySelector('#current--1');
let totalScore1El = document.querySelector('#score--0');
let totalScore2El = document.querySelector('#score--1');
let diceEL = document.querySelector('.dice');


const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
let currentScore = 0;
let totalScores = [0, 0];
let isPlaying = true;

btnNewGame.addEventListener('click', reset);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);


function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0)? 1: 0;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
}
//
function rollDice() {
    if (isPlaying) {
        const random = Math.floor(Math.random() * 6 + 1);
        const img = document.querySelector('.dice');
        let imgSrc = `dice-${random}.png`;
        img.setAttribute('src', imgSrc);
        // a function to display dice image
        if (random === 1) {
            switchPlayer();
            // a function to reset currentScore = 0
        } else {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
}
function holdScore() {
    if (isPlaying) {
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

        if (totalScores[activePlayer] >= 100) {
            isPlaying = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }

}

function reset() {
    activePlayer = 0;
    currentScore = 0;
    totalScores = [0, 0];
    isPlaying = true;

    currentScore1El.textContent = 0;
    currentScore2El.textContent = 0;
    totalScore1El.textContent = 0;
    totalScore2El.textContent = 0;

    // other later
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');
}