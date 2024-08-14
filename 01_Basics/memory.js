// stack ( primitive). heap (non-primitive)

let myYoutubename = "aayushkunalthakur"

let anothername = myYoutubename
anothername  = "AKunalTech"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne
//accessing object values
userTwo.email = "aayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);