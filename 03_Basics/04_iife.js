
// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution se problem hoti hai kai bar, 
//so global scope ke jo declaration or variables hai unhe hatane ke liye iife ka use krte hai 
// English: Global scope pollution can be problematic, so we use IIFE to avoid adding variables and declarations to the global scope


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); //runs immediately after it's defined
})(); //function is defined and immediately invoked
//iife invoke to hogya par usko pata nhi hai context rokna kaha hai, hence the semicolon to end the line

//()() //first parenthese hogya jahan pe hum function ki definition likhne vale hai
//second vala hogya execution call, jaise chai()

//IIFE using arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //chai('hitesh') argument passed 'hitesh'



// Explanation:
// The first set of parentheses wraps the function definition
// The second set of parentheses calls (executes) the function
