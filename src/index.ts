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
