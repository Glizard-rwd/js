const  HOUR_PER_DAY  = 8;
const BILLABLE_DAY = 22;
function dayRate(dayRate) {
    return dayRate * HOUR_PER_DAY;
}

function daysInBudget(budget, hourlyRate) {
    return Math.floor(budget / dayRate(hourlyRate));
}

function priceWithMonthlyDiscount(hourlyRate, numberOfDays, discount) {
    let numOfMonths = Math.floor(numberOfDays/ BILLABLE_DAY);
    let remainDays = numberOfDays % BILLABLE_DAY;
    let monthPrice = dayRate(hourlyRate) * BILLABLE_DAY * numOfMonths *(1 - discount);
    let remainPrice = dayRate(hourlyRate) * remainDays;
    return Math.ceil(monthPrice + remainPrice);
}

console.log(dayRate(89));
console.log(daysInBudget(20000, 89));
console.log(priceWithMonthlyDiscount(89, 230, 0.42));

function frontDoorResponse(line) {
    return line[0].toUpperCase();
}

console.log("Stand so high!");
console.log(frontDoorResponse("Stand so high!"))

function frontDoorPassword(line) {
    return frontDoorResponse(line) + line.substring(1).toLowerCase();
}

console.log(frontDoorPassword("Stand so high!"));
console.log(frontDoorPassword("STAND SO hIgh!"));
console.log(frontDoorPassword("sTAND SO hIgh!"));

function backDoorResponse(line) {
    line = line.trim();
    return line[line.length-1];
}

console.log(backDoorResponse("Stand so high"));

function backDoorPassword(line) {
    return frontDoorPassword(line).concat(', please');
}
console.log(backDoorPassword('horse'));

// insert at the top of stack
function getItem(stack, position) {
    if (position < 0 || position > stack.length)  return -1;
    else return stack[position];
}

console.log(getItem([1,2,3,4], 2));


function insertItemAtTop(stack, item) {
    return stack.unshift(item);
}

// replace value
let stack = [1,2,3,4];


function setItem(stack, position, replacementItem) {
    if (position < 0 || position > stack.length) {
        throw new Error('Cannot replace item');
    }
    stack.splice(position, 1, replacementItem);
}
setItem(stack, 3, 400);
console.log(stack);
// remove a card from the stack
const pos = 2;
const arr = [1,2,3,4];

function removeItem(stack, position) {
    if (position < 0 || position > stack.length) {
        throw new Error('Cannot remove item');
    }
    return stack.splice(position, 1);
}

console.log(removeItem(arr, pos));
console.log(arr);

// remove the top card
function removeItemFromTop(stack) {
    stack.shift();
    console.log(stack);
}
removeItemFromTop([1,2,3,4]);


// insert a card at a bottom
function insertItemAtBottom(stack, newCard) {
    stack.push(newCard);
    console.log(stack);
}

insertItemAtBottom(stack, 100);

function removeItemAtBottom(stack) {
    return stack.pop();
}

console.log(removeItemAtBottom(stack));
console.log(stack);
//-------------------------------------
// ELyses Analytic Enchantments
const numbers = [1, 'two', 3, 'four'];
console.log(numbers.includes(1));
console.log(numbers.includes('six'));

const numbers1 = [1, 3, 5, 7, 9];
let ans = numbers1.some((x) => x === 3);
let ans1 = numbers1.find((x) => x > 3);
console.log(ans, ans1);

// find the position of card
function getIndex(stack, card) {
    return stack.indexOf(card);
}

function doesStackIncludeCard(stack, card) {
    return stack.some((x) => x === card);
}

export function isEachCardEven(stack) {
    return !stack.some((x) => x % 2 === 1);
}
console.log(isEachCardEven([2, 5, 6]));

function doesStackIncludeOddCard(stack) {
    return stack.some((x) => x % 2 === 1);
}

function getFirstOddCard(stack) {
    return stack.find((x) => x % 2 === 1);
}

function getFirstEvenCardPosition(stack) {
    let firstEven = stack.find((x) => x % 2 === 0);
    return stack.indexOf(firstEven);
}

// array destructuring
const numberOfMoons = [0, 2, 14]
const [a, b, c] = numberOfMoons;
console.log(a);
console.log(b);
console.log(c);

const [x, y, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];
console.log(everythingElse);
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6,7,8,9,10];
console.log(oneToTen);

function getFirstCard(array) {
    return array.shift();
}

function getSecondCard(array) {
    return array[1];
}

function swapTopTwoCard(deck){
    let tmp = deck[0];
    deck[0] = deck[1];
    deck[1] =tmp;
    return  deck;
}

const deck = [2,5,4,9,3];
function discardTopCard(deck) {
    let firstCard = deck.shift();
    return [firstCard, deck];
}

function discardTopCard1(deck) {
    const [topCard, ...rest] = deck;
    return [topCard, rest];
}
console.log(discardTopCard1(deck));

const INSERT_CARD = ['jack', 'queen', 'king'];
function insertFaceCards(deck) {
    const [topCard, ...rest] =deck;
    return [topCard, ...INSERT_CARD, ...rest];
}

console.log(insertFaceCards([5,4,7,10]));