//* ====================================
//* Values and Variable in JavaScript
//* ====================================

//TODO In JavaScript, values and variables are fundamental concepts that form the basis of programming.

//TODO Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.

//TODO Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.


// console.log("welcome to best JS Course.");
//! Let's test
// var my_firstName = "John";
// console.log(my_firstName);
//? Explanation: This is a valid variable name. Variables can contain letters, numbers, underscores (_), and dollar signs ($). They cannot start with a number, but _ is perfectly fine at the start.


// var _myLastName$ = "Doe";
// console.log(_myLastName$);
//? Explanation: This is a valid variable name. Variables can start with _ or $. This one also contains letters and $, which are all allowed.


// var 123myAge = 25;
// console.log(123myAge);
//! Explanation: This is not a valid variable name. Variable names cannot start with a number. 123 at the beginning breaks the rules. If you try to run this, it throws an error: "Uncaught SyntaxError: Invalid or unexpected token".


// var $cityName = "New York";
// console.log($cityName);
//? Explanation: This is a valid variable name. Variables can start with $. This is commonly used in libraries like jQuery but is fully valid in JavaScript.


// var my@Email = "john@example.com";
// console.log(my@Email);
//! Explanation:This is not a valid variable name. Variable names cannot contain special characters like @. Only letters, numbers, _, and $ are allowed. This will throw an error: "Uncaught SyntaxError: Invalid or unexpected token".
