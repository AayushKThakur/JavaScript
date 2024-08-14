//2 tways to make objects, constructors and literals

// singleton //constructors se singleton banega, one of it's kind

// Object.create //constructor method

// object literals //object to declare karne ka tarika, isme singleton nhi banta hai

const mySym = Symbol("key1") //declaring a symbol


const JsUser = {
    name: "Hitesh",  //keys: values 
    //behind the  scene the name is stored as a string, line28
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //way of acessing symbol as a propety key, verna it will be declared as a string and not symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//JsUser.name // accessing object 

// console.log(JsUser.email) 
// console.log(JsUser["email"]) 
//so, while using this way of printing object, isko string ti tarah hi access dena hai so the sqaure brackets and colons "" 
// console.log(JsUser["full name"]) //this line can't be accessed using the dot method, line24
// console.log(JsUser[mySym])//printing symbol data type

JsUser.email = "hitesh@chatgpt.com" //making changes to the value
// Object.freeze(JsUser) //locking down values
JsUser.email = "hitesh@microsoft.com" //won't work as the object is freezed
// console.log(JsUser);

//function can be used as a variable in javascript
//fucntions stored as object properties are METHODS in JS 
//adding a method to the object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
//another method thath uses 'this' tp access object properties
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation
}

// Calling the methods
console.log(JsUser.greeting()); // "Hello JS user"
// The method 'greeting' doesn't return a value, so this logs 'undefined' after executing the method
console.log(JsUser.greetingTwo()); // "Hello JS user, Hitesh"
// The method 'greetingTwo' doesn't return a value, so this logs 'undefined' after executing the method