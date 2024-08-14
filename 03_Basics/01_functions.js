function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName //reference of function
// sayMyName() //execution of function

//....................parameters(num1, num2)
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }
//...........arguments(3,4)
addTwoNumbers(3, 4)


function addTwoNumbers(num1, num2){
    // let result = num1 + num2                                                                                                        
    // return result //last statement of function, anything won't execute after this
    return num1 + num2 //another way
}

const result = addTwoNumbers(3,5)

console.log("result: ",result); 
//result:  undefined, function is not returning anything, by line 14,15 
 
// function loginUserMessage(username) {
//declaring a minimum defualt parameter in function itself so it does not return undefined, null emptry string, etc
function loginUserMessage(username = "akt"){
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    //another way to write this is and check if the username is falsy(undefined, null emptry string, etc)
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Aayush") //this won't print anything as you are not logging or saving the value aywhere
// Calling the function with a valid username and overriding the defualt parameter
// console.log(loginUserMessage("Aayush")); //Aayush just logged in

//now if you don't pass a value // Calling the function without providing a username
// console.log(loginUserMessage());  //undefined just logged in
//can be fixed by line if statement above, or by declaring a minimum parameter in the function itself



//............Functions with objects and array 

//In array destructuring, the Rest Operator allows for capturing remaining elements of an array into a single variable,
// making it easier to work with arrays of varying lengths.
//for eg, adding products to cart in an ecomm website,
//the number of parameters may vary hence the rest operator, ...num1
function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}
//if we remove val1 and val2, all values will be stored in num1 as an array
console.log(calculateCartPrice(200, 400, 500, 2000)); //[ 500, 2000 ], 200 and 400 and stored in val 1 and val2 respectively

const user = {
    username: "Aayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//direct object bhi pass kar skte hai as an argument, without making it
handleObject({
    username: "akt",
    price: 399
})

//array me function
const myNewArray = [200, 300 ,400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500])); //same as object, line80