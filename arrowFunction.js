/* ---------- Task 1 ---------- */

// function greet(name) {
//     return `Hello, ${name}!`;
// }
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Sarah"));



/* ---------- Task 2 ---------- */

const sum = (x,y) => x + y;
console.log(sum(2,4));



/* ---------- Task 3 ---------- */

const square = (x) => Math.pow(x,2);
console.log(square(2));



/* ---------- Challenge ---------- */

const squareArray = (array) => {
    return array.map(num => num ** 2);
}
const array =[1,2,3];
console.log(squareArray(array));