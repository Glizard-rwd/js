// what is the number of specific card type
export function cardTypeCheck(deck, cardType) {
    let cardNumber = 0;
    deck.forEach((x) =>{
        if (x === cardType) cardNumber++;
    });
    return cardNumber;
}

// how many odd?
export function determineOddEvenCards(deck, isEven) {
    let evenNums = 0;
    for (const card of deck) {
        if (card % 2 === 0) evenNums++;
    }
    return (isEven)? evenNums: deck.length-evenNums;
}

