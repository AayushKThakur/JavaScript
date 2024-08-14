// const tinderUser = new Object() // this is singleton object

const tinderUser = {} // this is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Aayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "aayush@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aayush",
            lastname: "Thakur"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// const obj4 = { obj1, obj2 }
// const obj5 = Object.assign(obj1, obj2)

const obj6 = Object.assign({}, obj1, obj2) 
//the object is stores in the target, thath is the first one mentioned
//hence the empty object to store the value in it

const obj7 = {...obj1, ...obj2} //spread operator, spreaded and combined
// console.log(obj7);


//database se values jab aati hai, ther are mostly array of objects
const users = [
    {
        id: 1,
        email: "akt@gmail.com"
    },
    {
        id: 1,
        email: "akt@gmail.com"
    },
    {
        id: 1,
        email: "akt@gmail.com"
    },
]
//accessing the values
users[1].email
console.log(tinderUser);

//accessing keys and values in object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//shows all the entries
console.log(Object.entries(tinderUser)); 
//to check if a key property exist
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/*
to learn more methods used in obejcts, declare on in the console and see the prototypes.
const obj1 = {1: "a", 2: "b"}
*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// //react example of destructuring
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")


//json api example
//as an object
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
//as an array
[
    {},
    {},
    {}
]

//https://api.github.com/users/hiteshchoudhary
//random user me api
//jsonformatter.org

