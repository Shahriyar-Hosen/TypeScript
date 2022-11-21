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
function multiply(a, b) {
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
let a;
let b;
a = "salman"; // If provides 55 || Number or other any type then returns an error
b = 21; // If provides "string" || String or other any type then returns an error
//  Union Type ==>
let c;
c = "salman";
c = 15;
// If provides true || boolean or other any type then returns an error
// Array
// Explicit Types ==>
let arr = []; // Its only string array
// Union Type
let unionArr = []; // Its only string and number array
// Object
let d;
d = { a: "hello" };
d = [];
let e;
e = {
    name: "salmna",
    age: 22,
    adult: true,
};
// If provides other any object schema then returns an error
// Dynamic Type
let an;
an = 5;
an = "string";
let anr = [];
anr.push(5);
anr.push("Bangladesh");
let ano;
ano = {
    name: "Bangladesh",
    age: 66,
};
// Functions Type
// number, string (void type if nothing is returned)
const myFun = (a, b, c, d = "OK") => {
    console.log(`optional: ${c} & default value: ${d} `);
    return a * b;
};
myFun(1, 2);
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}`);
};
// Function Signatures
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(1, 3, "minus"));
let userDetail;
userDetail = (id, info) => {
    console.log(`User Id: ${id}, User Info: ${info}`);
};
// TypeScript Classes
// class Player {
//   /*
//   name: string;
//   age: number;
//   country: string;
//   constructor(n: string, a: number, c: string) {
//       this.name = n;
//       this.age = a;
//       this.country = c;
//     }
//   */
//   // Access Modifiers
//   /*
//    // By default Public
//   private name: string;
//   public age: number;
//   readonly country: string;
//   */
//   constructor(
//     // By default Public
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   Play() {
//     console.log(`${this.name} from ${this.country} is Player`);
//   }
// }
import { Player } from "./class/Player.js";
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("sakib", 40, "Bangladesh");
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(players);
