'use strict';


let message = document.querySelector('.message').textContent;
let between = document.querySelector('.between').textContent;
let left = document.querySelector('.left').textContent;
let right = document.querySelector('.right').textContent;

// message = "Um si la bum";
// between = "Ba la bum ba la bum"
//
// console.log(message);
// console.log(between);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;

// get familiar to the query selector
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 234;
console.log(document.querySelector('.guess').value);

// add even listener
document.querySelector('.check').addEventListener('click', function() {
    let checkContent = document.querySelector('.guess').value;
    console.log(checkContent);
    }
)

// apply guessing game logic
// display different random secret number. The number will change when the user click on button
// display the score. first score will be 20. The score will be decrease in each wrong number!
// if the score react to 0 => the player lose the game!
// change the UI of webpage when the player wins the game!
// only display the answer when the player win the game!
// restore the input number, score, and message to the initial state
let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.check').addEventListener('click', function() {
//     const guessValue = Number(document.querySelector('.guess').value);
//     if (!guessValue) {
//         document.querySelector('.message').textContent = 'No input number!';
//     } else if (guessValue === secretNum) {
//         document.querySelector('.number').textContent = secretNum;
//         document.querySelector('.message').textContent = 'Correct number!';
//         document.querySelector('.score').textContent = score;
//         document.querySelector('body').style.backgroundColor = 'red';
//         document.querySelector('.number').style.width = '30rem';
//         if (score > hightScore) {
//             highScore = score;
//             document.querySelector('.highscore').textContent = highScore;
//         }
//     } else if (guessValue < secretNum) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lose the game!'
//             document.querySelector('.score').textContent = 0;
//         }
//     } else if (guessValue > secretNum) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lose the game!'
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// })
document.querySelector('.check').addEventListener('click', function() {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber, typeof guessNumber);

    if (!guessNumber) {
        document.querySelector('.message').textContent = 'No input number!';
    } else if (guessNumber === secretNum) {
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guessNumber !== secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent = (guessNumber > secretNum)? 'Too high!': 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose the game!'
            document.querySelector('.score').textContent = 0;
        }
    }

})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = 23;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

