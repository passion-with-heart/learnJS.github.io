//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? We can also use an else if clause to check additional conditions:
// Example
// var tem = 19;
// if (tem >= 30) {
//     console.log("let's go to beach to enjaoy");
// }else if (tem >= 20 && tem < 30) {
//     console.log("Watch TV at home"); 
// } else {
//     console.log("kambal oodo so jawo");
// }

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
// If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
// If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
var age = 19;
var isCitizen = true;
var isRegistered = false;

// if (age >= 18 && isCitizen && isRegistered) {
//     console.log("You are eligible to vote.")
// }else if (!isCitizen) {
//     console.log("They are not eligible due to citizenship status.");
// } else if (!isRegistered) {
//     console.log("They are not eligible due to registration status.");    
// } else {
//     console.log("You are not eligible to vote (under 18).");
// }


// if (age >= 18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("You are eligible to vote");  
//         }else {
//             console.log("You are not eligible to vote due to registration status");
//         }
//     }else {
//         console.log("You are not eligible to vote due to citizenship status."); 
//     }
// }else {
//     console.log("You are not eligible to vote (under 18).");
// }

// Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 22;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using if...else statements with multiple conditions

//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.
// var num = 8;
// if (num % 2 === 0) {
//     console.log("This is even number");
// }else {
//     console.log("Not even");
// }

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.
// var num = 6;
// var isPrime = true;

// for (i=2; i<num; i++){
//     if(num % i === 0)
//         isPrime = false
// }
// if(isPrime) {
//     console.log(`Prime Number`);
// }else {
//     console.log(`Not Prime Number`);
// }

//! 3: Write a program to check if a number is positive, negative, or zero.
// var num = -0;
// if (num > 0) {
//     console.log("Positive Number");
// }else if (num < 0) {
//     console.log("Negative Number");
// }else {
//     console.log("it is Zero");
// }

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.
// var day = "Sunday";
// switch (day) {
//     case "Monday": 
//         console.log("Today is Monday.");
//         break;

//     case "Friday":
//         console.log("we have to go Moaque.");
//         break;

//     case "Sunday":
//         console.log("Let's go to movie.");
//         break;

//     default:
//         console.log("No condition matched");
//         break;
// }

//?=========================
// ? Challenge time
//? ==========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.
// var areaOfShapes = "Circle";
// var a = 5;
// var b = 10;
// var r = 6;
// var result;

// switch (areaOfShapes) {
//     case "Square":
//         result = a*a;
//         console.log(result);
//         break;

//     case "Rectangle":
//         result = a*b;
//         console.log(result);
//         break;

//     case "Circle":
//         result = Math.PI*r*r;
//         console.log(result.toFixed(2));
//         break;

//     default:
//         console.log("No shape found.");
//         break;
// }


//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻
// var num =1;
// while (num <= 10) {
//     console.log(num);
//     num++
// }

//! practice 🧑‍💻
//? let's create a table of 5
// var num = 1;
// while (num <= 10) {
//     // console.log("5 * " + num + " = " + 5*num);
//     console.log(`5 * ${num} = ${5*num}`);
//     num++
// }

//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻
// var num = 1;
// do {
//     console.log(num);
//     num++
// } while (num <= 10);

//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

// ? Example: Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻
// let userInput;
// let positiveNumber;
// do {
//     userInput = prompt("Enter a valid positive number");
//     positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log(`You entered a valid positive number: ${positiveNumber}`);


//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//? Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

// var sum = 0;
// for (var num = 1; num <= 10; num++ ) {
//     sum = sum + num  
// }
// console.log(sum);


//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.
// var num = 5;
// for (k=1; k<=10; k++) {
//     console.log(`${num} + ${k} = ${num * k}`);   
// }

//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?
// var num = x;
// for (k=1; k<=10; k++) {
//     console.log(`${num} + ${k} = ${num * k}`);   
// }
//? More Practice
//!1: program To check if a year is a leap year🧑‍💻

// leap year comes after 4 year
// 1 year has 365 days
// If the year is divisible by 400 → it is a leap year.
// If the year is divisible by 100 → it is not a leap year.
// If the year is divisible by 4 → it is a leap year.
// var userInput = 2001;
// var year;
// var isLeap = false;

// for (k=0; k<1; k++){
//     year = prompt("Enter year");
//     userInput = parseInt(year);
//     if (userInput % 400 === 0){
//         isLeap = true
//     }else if(userInput % 100 ===0) {
//         isLeap = false
//     }else if (userInput % 4 === 0) {
//         isLeap = true
//     }
// }
// if (isLeap) {
//     console.log(`${userInput} is a leap year`);
// }else {
//     console.log(`${userInput} is not a leap year`);
// }

// year should be divisible by 400 and not dividible by 100 or divisible by 4 
// let year = 2025;
// if ((year % 400 === 0 && year % 100 !== 0) || year % 4 === 0) {
//     console.log(`${year} is a leap year`);
// }else {
//     console.log(`${year} is not a leap year`);
// }

 //? cratea pattern of half christmas tree with star
 // star will be printed when the value of i=j
 
 for (var i=1; i<=10; i++){
    pattern = " ";
    // console.log(pattern);
    for (var j=1; j<=i; j++){
    pattern = pattern + " * "
    }    
    console.log(pattern);
 }