// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
// const myDate = new Date();
// console.log(myDate) //Output : 2024-07-10T17:03:38.801Z

// // We can use various methods to convert this date into more readable value.

// console.log(myDate.toString()) //Output : Wed Jul 10 2024 22:33:38 GMT+0530 (India Standard Time) 

// console.log(myDate.toLocaleString()) // Output : 10/7/2024, 10:33:38 pm
// console.log(myDate.toLocaleDateString()) //Output : 10/7/2024
// console.log(myDate.toLocaleTimeString()) // Output : 10:33:38 pm

// console.log(myDate.toDateString()) //Output : Wed Jul 10 2024
// console.log(myDate.toTimeString()) //Output: 22:33:38 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()) // Output : 2024-07-10T17:03:38.801Z
// console.log(myDate.toJSON()) //Output : 2024-07-10T17:03:38.801Z

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //milliseconds since jan1. 1970 till now, that is myTimeStamp
// console.log(myCreatedDate.getTime()); // we get the milliseconds of this
// to compare both value, mycreated value and mytimestamp
// console.log(Math.floor(Date.now()/1000)); //to get value in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //+1 because months starts from zero
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` //String interpolation

newDate.toLocaleString('default', { // to customize locale string
    weekday: "long",
    
})
