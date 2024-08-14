const studentId = 12114900;

let studentEmail = "aayush@google.com";

var studentCity = "Mumbai";
let studentPassword = "4900";

// studentId = 21100; //NOT ALLOWED, This will throw an error because studentId is a constant
studentEmail = "thakur@google.com";
studentPassword = "1211";

let studentState;

console.log(studentId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([studentId, studentEmail, studentCity, studentPassword, studentState]);
