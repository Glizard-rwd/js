'use strict';


const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;


let currentPlayer = document.querySelector('#name--0').textContent;
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
let totalScore1 = document.querySelector('#score--0');
let totalScore2 = document.querySelector('#score--1');

console.log(currentPlayer)
console.log(currentScore1, totalScore1);
console.log(currentScore2, totalScore2);

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
console.log(btnNewGame);
console.log(btnRoll);
console.log(btnHold);

btnNewGame.addEventListener('click', ()=> {
    resetScore();
})

btnRoll.addEventListener('click', ()=> {
    const random = Math.floor(Math.random() * 6 + 1);
    const img = document.querySelector('.dice');
    let imgSrc = `dice-${random}.png`;
    img.setAttribute('src', imgSrc);
    // a function to display dice image
    if (random === 1) {
        resetCurrentScore(currentPlayer)
        currentPlayer = switchPlayer(currentPlayer);
        // a function to reset currentScore = 0
    } else {
        addToCurrentScore(currentPlayer, random)
    }

})


btnHold.addEventListener('click', () => {
    holdScore(currentPlayer);
})

//


function switchPlayer(currentPlayer) {
    if (currentPlayer === 'Player 1') {
        return document.querySelector('#name--1').textContent;
    } else {
        return document.querySelector('#name--0').textContent;
    }
}
//
function addToCurrentScore(curPlayer, randomScore) {
    if (curPlayer === 'Player 1') {
        currentScore1.textContent = Number(currentScore1.textContent) + randomScore;
        console.log(currentScore1.textContent);

    }
    else {
        currentScore2.textContent = Number(currentScore2.textContent) + randomScore;
        console.log(currentScore2.textContent);
    }
}

function holdScore(curPlayer) {
    if (curPlayer === 'Player 1') {
       totalScore1.textContent = Number(totalScore1.textContent) + Number(currentScore1.textContent);
        console.log(totalScore1.textContent);
    } else {
        totalScore2.textContent = Number(totalScore2.textContent) + Number(currentScore2.textContent);
        console.log(totalScore2.textContent);
    }

    resetCurrentScore(curPlayer);

    if (Number(totalScore1.textContent) >= 100) {
        alert('Player 1 wins!');
    }
    else if (Number(totalScore2.textContent) >= 100) {
        alert('Player2 wins!');
    }
    else {
        currentPlayer = switchPlayer(currentPlayer);
    }
}

function resetScore() {
    currentPlayer = document.querySelector('#name--0');
    resetCurrentScore('Player 1');
    resetCurrentScore('Player 2');
    resetTotalScore('Player 1');
    resetTotalScore('Player 2');
}

function resetCurrentScore(curPlayer) {
    if (curPlayer === 'Player 1') {
        currentScore1.textContent = '0';
    } else {
        currentScore2.textContent = '0';
    }
}

function resetTotalScore(curPlayer) {
    if (curPlayer === 'Player 1') {
        totalScore1.textContent = '0';
    } else {
        totalScore2.textContent = '0';
    }
}
//
// function resetScore() {
//     currentPlayer = document.querySelector('#name--0');
//     totalScore1.textContent = '0';
//     totalScore2.textContent = '0';
//     currentScore1.textContent = '0';
//     currentScore2.textContent = '0';
// }
//
//

console.log(currentPlayer)