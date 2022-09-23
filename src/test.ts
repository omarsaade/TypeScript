// console.log(Math.round(10.6)); // create TS File
let theName: string = "Elzero";
let theAge: number = 40;
//         type annotations
let hire: boolean = true;

theName = "osama";

// iza jeyik data w mesh 3aref el type taba3a shu bta3mul?

// Answer
let al: any = "elzero web school";
al = 100;
//fik ta3mul update 3ade w mafi mechkle.

//or
// Answer
let allo: any;
allo = 100;
//fik ta3mul update 3ade w mafi mechkle.
let allVars; //Any

function addo(n1: number, n2: number) {
  return n1 + n2;
}

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

console.log(addo(10, 20));
console.log(typeof addo(10, 20));

////////////////////////////////
// video 6
//                                     Type Annotations with arrays
let allmo: string | number | boolean = "omar";

allmo = "A";
allmo = 100;
allmo = true;

let myFriends: string[] = ["osama", "ali", "ahmed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}

////////////////////////////////////////////////

// video 7
// Type Annotations with Multidimenisonal Arrays

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[])[] = [
  1,
  2,
  3,
  4,
  "A",
  "B",
  "C",
  ["C", "D"],
];

let arrayFours: (string | number | string[] | boolean[])[] = [
  1,
  2,
  3,
  4,
  "A",
  "B",
  "C",
  ["C", "D"],
  [true, false],
];

let arrayFive: (string | number | string[] | boolean)[] = [
  1,
  2,
  3,
  4,
  "A",
  "B",
  "C",
  ["C", "D"],
  true,
  false,
];

// w fi y3almak hik iza bta3mul hover 3laya

let arraysix = [1, 2, 3, 4, "A", "B", "C", ["C", "D"], true, false];

//         Learn Typescript In Arabic 2022 - #08 - Type
//        Annotations With Function

let showMsg = true;

function showDetails(name: string, age: number, salary: number) {
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is`;
  }
}

console.log(showDetails("Osama", 40, 5000));

// ============================

let showMsg = true;

function showDetails(name: string, age: number, salary: number) {
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is`;
  }
  //imolicit return
  return `No data to show`;
}

console.log(showDetails("Osama", 40, 5000));

// =========================================

let showMsg = true;

function showDetails(name: string, age: number, salary: number) {
  // noUnusedLocals : true
  // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

  let test = 10;
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is , test Variable ${test}`;
  }
  //imolicit return
  return `No data to show`;
}

console.log(showDetails("Osama", 40, 5000));

// =================================================

let showMsg = true;

function showDetails(name: string, age: number, salary: number) {
  // noUnusedLocals : true
  // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

  let test = 10;
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
  }
  //implicit return
  return `No data to show`;
}

console.log(showDetails("Osama", 40, 5000));

// ============================================

let showMsg = true;

//                   input                                      output
function showDetails(name: string, age: number, salary: number): string {
  // noUnusedLocals : true
  // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

  let test = 10;
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
  }
  //imolicit return
  return `No data to show`;
}

console.log(showDetails("Osama", 40, 5000));

// ___________________________________________________________

let showMsg = true;

// output string yaane lezem el function tabe3te traje3le string
//                   input                                      output
function showDetails(name: string, age: number, salary: number): string {
  // noUnusedLocals : true
  // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

  let test = 10;
  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
  }
  //implicit return
  return `No data to show`;
  // return 100;
}

console.log(showDetails("Osama", 40, 5000));

// ========================================================

==
Learn Typescript In Arabic 2022 - #09 - Function Optional and Default Parameters
                                                      optional
function showData(name: string , age: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

//Expected 2-3 arguments, but got 1.ts(2554)
console.log(showData("Osama"));

// ======================================================

// Learn Typescript In Arabic 2022 - #09 - Function Optional and Default Parameters
//                                                   optional
function showData(name?: string, age: number, country: string) {
  return `${name} - ${age} - ${country}`;
}
//A required parameter cannot follow an optional parameter.ts(1016)
console.log(showData("Osama", 40, "Egypt"));

// answerrrrrrrrrrrrrrrrrrr

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}
//A required parameter cannot follow an optional parameter.ts(1016)
console.log(showData("Osama", 40));
// Osama - 40 - undefined

// ==========================================

function addAll(...nums: number[]): number {
  let result = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   result += nums[i];
  // }
  nums.forEach((num) => (result += num));
  return result;
}

// console.log(addAll(10, 20, 30, 100, true));
// Argument of type 'boolean' is not assignable to parameter of type 'number'.

//answer , sar jaweba +1
console.log(addAll(10, 20, 30, 100, 10.5, +true));
// testing
//    tsc
//  node dist/test.js
//                           171,5

// =================================

//anonymous function
//                                       lezem tarje3 e5er shi number
const adds = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(adds(10, 20)); //30

// =========================================================

// arrow function

const addwithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addwithArrow(10, 20)); //30

// =================================================================

//                          Alias
type st = string;

let theNamo: st = "Elzero";
theNamo = "sami";
// ============================================

type standnum = string | number;
let allm: standnum = 10;
allm = 100;
allm = "hello";

// ====================================================

// video 13

/*

Data Types
--Advanced Type Alias

*/

type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type Last = Buttons & {
  x: boolean;
};

function getAction(btns: Last) {
  console.log(`Actions For Button Up Is ${btns.up}`);
  console.log(`Actions For Button Right Is ${btns.right}`);
  console.log(`Actions For Button Down Is ${btns.down}`);
  console.log(`Actions For Button Left Is ${btns.left}`);
}

getAction({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
  x: true,
});

// ==========================================================================================================
