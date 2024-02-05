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


