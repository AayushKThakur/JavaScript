// array

const myArr = [0, 1, 2, 3, 4, 5] //declaration of array
const myHeors = ["shaktiman", "naagraj"] // any datatype, string

const myArr2 = new Array(1, 2, 3, 4) // also declaration 
// console.log(myArr[1]);

// ARRAY METHODS

// myArr2.push(6) //adds an element at the end of the array
// myArr2.push(7) 
// myArr2.pop() //removes an element from the end of the array
// console.log(myArr2) 

// myArr.unshift(9) //adds an element at the beginning 
// myArr.shift() //removes an element from the beginning

// console.log(myArr.includes(9)); //boolean, checks if the element is included in the array
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //Adds all the elements of an array into a string
// console.log(newArr);

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const mynew1 = myArr.slice(1, 3) //Returns a copy of a section of an array. 1,3 index, 1 including 3 excluding
//For both start and end, a negative index can be used to indicate an offset from the end of the array. 
//For example, -2 refers to the second to last element of the array.

console.log(mynew1);
console.log("B ", myArr);


const mynew2 = myArr.splice(1, 3) //Removes elements from an array and, 
// if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C ", myArr);
console.log(mynew2);