const user = {
    username: "hitesh",
    price: 999,

    // Method to display a welcome message
    welcomeMessage: function() {
        // 'this' refers to the current object 'user'
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage(); //"hitesh, welcome to website"
// user.username = "sam" //Changing the username property 
// user.welcomeMessage() //"sam, welcome to website"

// 'this' in the global context refers to the global object (window in browsers, global in Node.js)
// console.log(this); //logs the global object

// function chai(){
//      let username = "hitesh"
//     // In a regular function, 'this' refers to the global object (in non-strict mode)
//     console.log(this.username); // undefined (since 'username' is not a global variable)
// }

// chai()

//Function expression
// const chai = function () {
//     let username = "hitesh"
//     //In a regular function, 'this' refers to the global objecct
//     console.log(this.username); //undefined, username is not global varible
// }

// () => {} //arrow function 
const chai =  () => {
    let username = "hitesh";
    // In an arrow function, 'this' refers to the enclosing context (lexical scope)
    console.log(this); // Logs the global object (since arrow functions do not have their own 'this')
}


// chai() //logs the global object

// Function declaration to add two numbers with explicit return
// const addTwo = (num1, num2) => { 
//     return num1 + num2   //explicit return
// }

// Function declaration to add two numbers with implicit return
// const addTwo = (num1, num2) =>  num1 + num2  //implicit return
// curly braces use kia to return likhna hai, parenthese likhe to return keyword nhi likhna padega
// const addTwo = (num1, num2) => ( num1 + num2 )

// Returning an object from an arrow function
//object to return karne ke liye usko parentheses me wrap karna hi padega
//bracket se ek block ban jata hai aor uske andar bhi kam kiya ja skta hai
const addTwo = (num1, num2) => ({username: "hitesh"}) 


console.log(addTwo(3, 4)) // Logs {username: "hitesh"}

// Array method 'forEach' to iterate over each element in the array
const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// 'forEach' method requires a callback function to be passed
myArray.forEach((element) => {
    console.log(element); // Logs each element in the array
});