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
d = [];

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

// Dynamic Type

let an: any;
an = 5;
an = "string";

let anr: any[] = [];
anr.push(5);
anr.push("Bangladesh");

let ano: {
  name: any;
  age: any;
};

ano = {
  name: "Bangladesh",
  age: 66,
};

// Functions Type

// number, string (void type if nothing is returned)
const myFun = (a: number, b: number, c?: boolean, d: string = "OK"): number => {
  console.log(`optional: ${c} & default value: ${d} `);

  return a * b;
};

myFun(1, 2);

// Type Aliases

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."}`);
};

// Function Signatures
let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(1, 3, "minus"));

let userDetail: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetail = (
  id: number | string,
  info: {
    name: string;
    age: number;
  }
) => {
  console.log(`User Id: ${id}, User Info: ${info}`);
};

// TypeScript Classes

class Player {
  /*
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
      this.name = n;
      this.age = a;
      this.country = c;
    } 
  */

  // Access Modifiers
  /* 
   // By default Public
  private name: string;
  public age: number;
  readonly country: string;
  */
  constructor(
    // By default Public
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  Play() {
    console.log(`${this.name} from ${this.country} is Player`);
  }
}

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const sakib = new Player("sakib", 40, "Bangladesh");

const players: Player[] = [];

players.push(mashrafi);
players.push(sakib);
