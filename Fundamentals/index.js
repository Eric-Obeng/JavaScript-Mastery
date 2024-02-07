// VAlues, Types, and Operators

/*
// 13
 1    2     4     8    16    32    64    128  

 1    0      1     1   0      0     0     0

 //Bit representation of 13
 10110000


//25
1    2    4    8    16    32     64      128

1    0    0    1     1     0      0       0

//Bit representation of 25
10011000


58
1    2    4     8     16    32     64      128

0    1    0     1     1      1      0        0

//Bit representation of 58
01011100
*/

//Values
// 1, 'Ruby', sum(), {}, []

//Numbers
/*
interger (-Infinity, Infinity) 
decimal values 
fractions
*/

// Data type
/*
1. Primitive data type
2. Objects
*/

//Primitive data type
/*****************
 * Numbers
 * Strings
 * Boolean
 * BigInt
 * undefined
 */

/*
console.log("Checking data type");
console.log(typeof 5);
console.log(typeof "Ruby");
console.log(typeof true);
console.log(typeof BigInt);
console.log(typeof undefined);
console.log(typeof NaN);

let myName = "Eric";
console.log(typeof (myName + 1));

//convension
//coercion
let num1 = "Ruby";
let num2 = 1;
let num3 = num1 - num2;
console.log(num3);
console.log(typeof num3)
*/

// Arithmetic

console.log(100 + 4 * 11);
console.log((100 + 4) * 11);

// - and + has the same precedence
// * and / and % has the same precedence
// % modulus or Reminder

// String
console.log("Jeff");
// string are been put in single or double quotation marks and also the backticks

console.log(`Jeff 2`);
console.log("\n");

console.log("I'm a boy");
console.log(`I'm a boy`);
console.log("\n");

console.log(`My name is Eric. \n I am a boy`);

console.log("\n");
console.log(`5 plus 2 is ${5 + 2}`);
console.log("\n");

//UNARY Operators
console.log(typeof 4.5);

console.log(-(10 - 2));
// -(8)

//BOOLEAN Values
/*****
 * true
 * false
 */

//Comparison operators
/***
 * <, <=, >, >=
 */
console.log(3 > 2); //true
console.log(3 <= 2); //true

// Equality operator
/***
 * == loosely equal
 * === stictly equal
 */

console.log("2" == 2); //true
console.log("2" === 2); //false
console.log("\n");

console.log("Aardvark" < "Zoroaster"); //true

// 65 < 90
//Not equal to
/****
 * != loose
 * !== strict
 */
console.log("\n");
console.log(NaN === NaN);
console.log(undefined === undefined);

// Logical Operators
// Truth table
/***
 * AND (&&)
 * OR (||)
 */

// AND Truth table
/*
true  &&  true   =  true
true  &&  false  =  false
false &&  true   =  false
false &&  false  =  false
*/

// OR Truth table
/*
true  ||  true   =  true
true  ||  false  =  true
false ||  true   =  true
false ||  false  =  false
*/

//Not Truth table
/*
!true    =   false
!false   =   true
*/

1 + 1 == 2 && 10 * 10 > 50;
true && true;
true;

//Ternary Operator
console.log(true ? 1 : 2);

console.log("2" === 2 ? "Yes" : "No");

console.log(!true ? "false" : "true");

// Empty Values
//Undefined
console.log("\n");
let firstname;
console.log(firstname);

//Conversion
console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51

console.log("five" * 2); // NaN
console.log("2" / 1); // 2

console.log("six" - 12); //six12

console.log(typeof NaN);

// False numbers
/*******
 * 0
 * ''
 * undefined
 * NaN
 * null
 * false
 */
console.log("\n");
console.log(0 == false);
// console.log(undefined === false);

let lastName;

lastName ? console.log("am a true value") : console.log("am a false value");

console.log(typeof lastName);

console.log(null || "user"); // user
console.log("Agnes" || "user"); // Agnes


