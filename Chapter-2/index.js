"use strict";
// Program Structure
// Statement and Expression

// Bindings Or variable
/*
{
  let caught = 5 * 5;
  console.log(caught);

  //variable Keywords
  /****
   * let
   * const
   * var
   

  let ten = 10;
  console.log(ten + 2); //12
  console.log(ten * ten); //100
  console.log(ten);

  {
    let mood = "light";
    console.log(mood);
    mood = "dark";
    mood = "darker";
    console.log(mood);
  }

  // Binding Names
  let a = "boy";

  // Camel case
  let marksMassNow = 78;

  //Pascal case
  let JohnsMassNow = 55;

  //Snake case
  let eric_mass_now = 75;

  //constant
  let PI = 3.14;

  //
  const firstName = "Obeng";

  // Functions
  console.log("Eric");
}
*/

// const yourName = prompt("Enter your name?");
// const favoriteFood = prompt("Enter your favorite food");

// console.log(
//   `your favorite food is ${favoriteFood} and your name is ${yourName}`
// );

/*

{
  function firstName(name) {
    console.log(name);
  }

  firstName("Eric");
  firstName("Ruby");
  firstName("Jeff");
}

// console.log('Eric')

// Return  Values
console.log(Math.max(2, 4));
console.log(Math.min(2, 4));
*/

//Control Flow

//let, const, var
// let theNumber = Number(prompt("Pick a number"));

// console.log(`Your number is the squared root of ${theNumber ** 2}`);

//Conditional Executions
// let number = Number(prompt("Pick a number"));

// if (!Number.isNaN(number)) {
//   console.log("Your number is the square root of " + number * number);
// } else {
//   console.log("Enter a number");
// }

// 80 - 100 = 'A', 70 - 79 = 'B', 50- 69 = 'C' , anything else = 'Fail'
// let mark = Number(prompt("Enter your mark...."));

// if (Number.isNaN(mark)) {
//   console.log("Enter a number");
// } else if (mark >= 80) {
//   console.log("A");
// } else if (mark >= 70) {
//   console.log("B");
// } else if (mark >= 50) {
//   console.log("C");
// } else {
//   console.log("Fail");
// }

//While and Do loop
/*
  {
    let number = 0; //2,4,6,8,10,12,14

    while (number <= 12) {
      console.log(number);
      // number = number + 2;
      number += 2;
    }
    console.log("\n");
    console.log(number);

    let result = 1;
    let counter = 0;
    while (counter < 10) {
      result = result * 2;
      counter = counter + 1;
    }
    console.log(result);

    
  }

  
  
*/
console.log("\n");

//For loop
{
  //initialization
  //condition
  //increment or decrement

  for (let number = 0; number <= 12; number += 2) {
    console.log(number);
  }
  console.log("\n");

  let result = 1;
  for (let counter = 0; counter < 10; counter++) {
    result *= 2;
  }
  console.log(result);
}

//Breaking out of a loop
{
  for (let current = 20; ; current++) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
}

console.log("\n");

//Updating bindings
{
  let number = 5; //5, 4
  let newNumber = --number; //3
  let newNumber2 = newNumber--; //4

  console.log(newNumber); //3
  console.log(newNumber2); //4
  console.log(number); //4, 5

  //4, -5,
  // --variable, variable--
  //pre decrement
  //post decrement

  
}
