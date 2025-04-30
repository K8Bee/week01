// this javascript file will be read top to bottom
// I want to log (action) a message (argument) into the console (object)

console.log("Hello World!");

// data types - different ways of organising data

// string is just a piece of text - below line is just a piece of string (it's not doing anything at the moment)
("Hello World!");

// number, integer
9;

//boolean (it has to be true or false)
true;
false;

// I want to log a message into the console - "Hello World!" 9 False
// concatenation - we can add multiple values in one message ot our console
console.log("Hello World" + 9 + false);

// variables - data containers

// I want to store "Hello World!" in a container
let welcomeMessage = "Hello World!";
let myNumber = 9;
let myBoolean = false;
console.log(welcomeMessage + myNumber + myBoolean);
console.log(welcomeMessage + " " + myNumber + " " + myBoolean);
// use a keyword, "let" and
//  "  " = empty string which is a space

// I want to change the value of myNumber
// For further uses of the same variable, I can just use the variable name
myNumber = 5;
console.log(myNumber);
// number

// I want to know he data type of a value stored in a variable
// I can use the typeof operator
console.log(typeof myNumber);

// I want to store two values in one variable
//  = means asign not equals, I will assigna value
let numberBoolean = 9 + true;
// I want to check the data type of the values inside the variable
console.log(typeof numberBoolean);

// if there's "" it's a string not a number
let strings = "8" + "3";
// I want to check the data type of the values inside the variable
console.log(typeof strings);

// operators:
// typeof - it tells the data type of a value
// + - to add numbers OR to concatenate values
// == or === - equals (= is NOT, it assigns)
// < - less than
// > - greater than
