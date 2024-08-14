const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];


// marvel_heros.push(dc_heros);// Adding an array as a single element to another array


// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", Array(3)]// Log the array with the nested array added

// console.log(marvel_heros[3][1]); // "flash"// Accessing an element within the nested array

// Combining two arrays into a new array using concat
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Combining two arrays into a new array using spread syntax
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening a nested array to any depth
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array
console.log(Array.isArray("Hitesh")); // false

// Creating an array from an array-like object (string)
console.log(Array.from("Hitesh")); // ["H", "i", "t", "e", "s", "h"]

// Trying to create an array from a non-iterable object (returns empty array)
console.log(Array.from({name: "hitesh"})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Creating an array from individual elements
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

/*
### Explanation of Key Concepts and Methods

1. **`push`**:
   - Adds one or more elements to the end of an array.
   - In this example, it was used to add the entire `dc_heros` array as a single element to `marvel_heros`.

2. **`concat`**:
   - Merges two or more arrays into a new array without modifying the original arrays.

3. **Spread Syntax (`...`)**:
   - Spreads the elements of an array into another array or function call.
   - In this example, it was used to create a new array that combines all elements from `marvel_heros` and `dc_heros`.

4. **`flat`**:
   - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   - `flat(Infinity)` flattens the array to an arbitrary depth, making it a single-level array.

5. **`Array.isArray`**:
   - Checks if a given value is an array.

6. **`Array.from`**:
   - Creates a new array from an array-like or iterable object.
   - Converts a string into an array of characters and returns an empty array for non-iterable objects.

7. **`Array.of`**:
   - Creates a new array instance with a variable number of elements passed as arguments.
   - Useful for creating arrays with a fixed number of elements, especially when the number of elements might be `1`, which would be treated differently with the `Array` constructor.
*/