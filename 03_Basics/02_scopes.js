//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//child function can aceess the varibales in parent function, but not vice versa
//explanation: child parent se ice cream mang sakte hai, par parent child se nahi
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()
}
// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); //hitesh youtube
    }
    // console.log(website); // Error: website is not defined (website is block-scoped)
}

// console.log(username); // Error: username is not defined (username is block-scoped)


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function declaration, which is hoisted
console.log(addone(5)); // Logs 6

function addone(num) {
    return num + 1; // Adds 1 to the given number and returns the result
}

// Function expression, which is not hoisted
addTwo(5); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2; // Adds 2 to the given number and returns the result
};