import * as lag from './lasagna.js';
import * as loope from './elyses-looping-enchantment.js';


console.log(lag.preparationTimeInMinute(2));
console.log(lag.remainingMinuteInOven(30))
console.log(lag.totalTimeInMinutes(3, 20));

console.log(loope.cardTypeCheck([1,5,3,3], 3));
console.log(loope.determineOddEvenCards([1, 2, 3, 1, 5, 6], true));