// console.log (2 > 1);
// console.log (2 >= 1);
// console.log (2 < 1);
// console.log (2 == 1);
// console.log (2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

//comparison and equality check are two different things 
//and work in different manner
//thier are inconsistency in language, so these could be confusing
//this comaparisons are avoided in most cases, this is not clean code
console.log(null > 0);
console.log(null == 0); //null was converted into zero
console.log(null >= 0); //thats's why this comes as true 0 >=0

//value false milega for all three below
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check

console.log("2" === 2);