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

function loginUserMessage(username) {
    return `${username} just logged in`
}

loginUserMessage("Aayush") //this won't print anything as you are not logging or saving the value aywhere
console.log(loginUserMessage("Aayush"));