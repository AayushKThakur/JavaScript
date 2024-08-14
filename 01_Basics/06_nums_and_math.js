const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //to keep precision values, like in ecomm websites

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); by deafult in US standarss

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //negative into positive
// console.log(Math.round(4.6)); // round off 4.6 ka 5, 4.3 ka 4
// console.log(Math.ceil(4.2)); //round off to upper value, 4.2 ka 5
// console.log(Math.floor(4.9)); // round off to niche vali value, 4.9 to 4
// console.log(Math.min(4, 3, 6, 8)); // lowest value in array
// console.log(Math.max(4, 3, 6, 8)); // max value in array

console.log(Math.random()); // value will be between 0 to 1, mostly decimal
console.log((Math.random()*10) + 1); //to get single digit value, and plus 1 for the case like 0.01
console.log(Math.floor(Math.random()*10) + 1); //floor for lowest value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //for in the range, +1 to avoid zero
//+min taki atleast minimum value mile