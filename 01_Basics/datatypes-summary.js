//  Primitive , pass by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) // pass by refernce, address is passed instead of the value

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

// object inside a varible, anything inside {} is object
let myObj = {
    name: "hitesh",
    age: 22,
}

//function(){}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number    => number
//        String    => string
//        Boolean   => boolean
//        null      => object
//        undefined =>  undefined
//        Symbol    =>  symbol
//        BigInt    =>  bigint

// 2) Non-primitive Datatypes
//        Arrays    =>  object
//        Function  =>  function object
//        Object    =>  object