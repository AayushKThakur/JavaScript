// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for(const key of mao){
//     console.log(key);
    //prints the whole array
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
        //prints destructured array 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//this doesn't work because we can't iterate objects like this
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }