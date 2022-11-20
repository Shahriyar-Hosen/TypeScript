// Variable Type check
let playerOne = "Mash"; // type String
let playerTwo = "Sakib"; // type String

let age = 34; // type number

let playerName; // not decided type

console.log(playerName);

playerName = "Mash";

playerName = 34;

console.log(playerName);

// Function Type Check
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(4, 5)); // If provides ("4", 5) || (4, "5") then returns an error

// array
let fruits = ["apple", "banana", "orange"];

fruits.push("pineapple"); // If provides 34 || Number then returns an error

const any = [];

any.push(32, "apple", true);

const mixed = ["apple", 3, true];

mixed.push("string", 5, false); // If provides { name: "sakib" } || Object then returns an error

// Object
let person = {
  name: "Mashrafi",
  age: 35,
  isCaptain: true,
};

person.name = "sakib"; // If provides 55 || Number or other any type then returns an error

// Explicit & Union Types

// Explicit Types ==>
let a: string;
let b: number;

a = "salman"; // If provides 55 || Number or other any type then returns an error
b = 21; // If provides "string" || String or other any type then returns an error

//  Union Type ==>
let c: string | number;

c = "salman";
c = 15;
// If provides true || boolean or other any type then returns an error

// Array
// Explicit Types ==>
let arr: string[] = []; // Its only string array

// Union Type
let unionArr: (string | number)[] = []; // Its only string and number array

// Object
let d: object;
d = { a: "hello" };

let e: {
  name: string;
  age: number;
  adult: boolean;
};

e = {
  name: "salmna",
  age: 22,
  adult: true,
};
// If provides other any object schema then returns an error
