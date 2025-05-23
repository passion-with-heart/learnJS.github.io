//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
// var myFavNum = 5;
// console.log(myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName = "vinod"  //! without string through an error: Uncaught ReferenceError: vinod is not defined
// console.log(myName);
// console.log(typeof myName);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = false;
// console.log(isRaining);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var vinod;
// console.log(vinod);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var badMemories = null;
// console.log(badMemories);
// console.log(typeof badMemories);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber);

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓

// null: "Imagine an Empty Box"
//* Explanation: Think of a variable as a box. When we sat a box has null inside , It's like having an Empty Box. The box exists, but there's nothing valuable or  meaningfull inside it. 
//? Example you have a toy box, but if it's null it means there are no toy inside it, its not that box is broken; it just doesn't have anything interesting in it now.


// undefined:" Imagine a Box That Wasn't Opened Yet"
//* Explanation: Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.
//? Example: You have a gift box, and until you open it, you don't know what's inside. Right now, it's undefined because you haven't checked or filled it with anything yet.

// Putting It Together
// Summary: So, null is like having an empty box on purpose, and undefined is like having a box you haven't opened yet. Both tell us that there's nothing meaningful or known inside, but they imply different reasons why.
//todo Real-life Comparison: If you have an empty lunchbox (null), it means you decided not to put any food in it. If you have a closed lunchbox (undefined), it means you haven't checked or filled it yet.



//? 2: What is the purpose of typeof operator in JavaScript❓
//* The typeof operator in JavaScript is used to determine the data type of a variable or an expression. It returns a string representing the type of its operand.
//TODO 1. typeof is helpful for debugging and type checking. 2. Arrays and objects both return "object". 3. null returns "object" — this is a historical bug in JavaScript. 4. Functions are identified separately as "function".



//? 3: What is the result of `typeof null` in JavaScript❓
//todo object
// console.log(typeof null);

//? 4: What are primitive data types in JavaScript❓

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
// let conNum = "5";
// console.log(typeof +conNum);
// console.log(typeof Number(conNum));

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
// let str = 5;
// console.log(typeof String(str));
// console.log(typeof (str+""));
//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓


//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// var myString = "42";
// var myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// var myString = 42.5;
// var myNumber = parseInt(myString);
// console.log(myNumber);


//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// var myStr1 = 42.5;
// var myNum1 = parseFloat(myStr1);
// console.log(myNum1);


//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
// console.log(parseInt("123"));
// 123 (default base-10)
// console.log(parseInt("123", 10));
// console.log(parseInt(typeof "123"));

// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));

// 123 (whitespace is ignored)
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

// console.log(isNaN("vinod"));
// console.log(isNaN("5"));

// ? Nan === NaN, why is it false?
// if (5 == 5) {
//     console.log("both are equal");
// }else {
//     console.log("not equal");
// }

// if (NaN == NaN) {
//     console.log("both are equal");
// }else {
//     console.log("not equal");
// }
// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));



//? What is the purpose of the NaN value in JavaScript❓

//* ========== parseInt & parseFloat End Section ==========
