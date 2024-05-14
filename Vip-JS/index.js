let name = "Ruby";
// console.log(name);

function name1(str) {
  console.log(str);
}

// name1("Ruby");

// Basic Conditional statements (if-else)
// console.log(typeof name);

//  If statement
let hungry = false;
hungry = !hungry; //true
hungry = !hungry; //false
hungry = !hungry; //true
hungry = !hungry; //false
hungry = !hungry; //true
hungry = !hungry; //false
hungry = !hungry; //true
hungry = hungry; //true
hungry = !hungry; //false
hungry = hungry; //false

if (hungry) {
  // code to run
  //statement
  console.log("Get something to eat!");
}

let greater = 7 > 5;

if (!greater) {
  console.log("7 is greater than 5");
} else {
  console.log("5 is less than 7");
}

//Variables let, var, const
let myName = "Ruby";
myName = "Chelsea";

console.log(myName);

if (true) {
  // let message = "JavaScript";
  var message = "JavaScript";
}

console.log(message, myName);

//const
const age = 21;
// age = 22;
console.log(age);

/*
let 1name = 'Eric'
let @myName = 'Obeng'
let $name = 'eric'
let _age = 50

const firstName
const nameOfStudent

let a = 'Ama'
*/

// Arithmetic Operators
// +, -, *,

//++ --

let firstValue = 3;
console.log(++firstValue); //4
console.log(firstValue++); //4
console.log(firstValue); //5

let number = 0; //1
console.log(number++); //0
console.log(++number); //2
console.log(number); //2
console.log("\n");

let newAge = 20;
console.log(newAge); //20
console.log(++newAge); //21
console.log(newAge++); //21
console.log(newAge++); //22
console.log(newAge); //23
console.log("\n");

let remainder = 7 % 2;
console.log(remainder);

let expo = 5 ** 0;
console.log(expo);

console.log("age " + 45);

const firstname = "Ruby";
const secondname = "Chelsea";
console.log(firstname + " " + secondname);

// Assignment Operator
const sum = "a";
{
  let age = 10;

  // Compound Assignment
  age = age + 5; //15
  // age += 5
  console.log(age);
}

// Comparison Operator
console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(5 != "5"); // false
console.log(5 !== "5"); // true

console.log(5 <= 5); // true
console.log(5 >= 8); // false

// Logical operators

// Functions
function add(a, b) {
  return a + b;
}

console.log(add(50, 10));
console.log(add(60, 20));

function multiplyByTwo(value) {
  if (isNaN(value)) {
    return `Value must be a number`;
  }

  const result = value * 2;
  return result;
}

console.log(multiplyByTwo(5));
console.log(multiplyByTwo("5"));
