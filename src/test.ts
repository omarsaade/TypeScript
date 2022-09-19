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

function add(n1: number, n2: number) {
  return n1 + n2;
}

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

console.log(add(10, 20));
console.log(typeof add(10, 20));

////////////////////////////////
// video 6
//                                     Type Annotations with arrays
let all: string | number | boolean = "omar";

all = "A";
all = 100;
all = true;

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

/*
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
*/
// ============================

/*

let showMsg = true;

function showDetails(name: string, age: number, salary: number) {

  if (showMsg) {
    return `Hello ${name} , Age Is ${age} , Salary Is`;
  }
  //imolicit return
  return `No data to show`;
}

console.log(showDetails("Osama", 40, 5000));

*/
// =========================================

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) {
//   // noUnusedLocals : true
//   // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name} , Age Is ${age} , Salary Is , test Variable ${test}`;
//   }
//   //imolicit return
//   return `No data to show`;
// }

// console.log(showDetails("Osama", 40, 5000));

// =================================================

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) {
//   // noUnusedLocals : true
//   // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
//   }
//   //imolicit return
//   return `No data to show`;
// }

// console.log(showDetails("Osama", 40, 5000));

// ============================================

// let showMsg = true;

// //                   input                                      output
// function showDetails(name: string, age: number, salary: number): string {
//   // noUnusedLocals : true
//   // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */

//   let test = 10;
//   if (showMsg) {
//     return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
//   }
//   //imolicit return
//   return `No data to show`;
// }

// console.log(showDetails("Osama", 40, 5000));

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
  //imolicit return
  return `No data to show`;
  // return 100;
}

console.log(showDetails("Osama", 40, 5000));

// ========================================================

//==
// Learn Typescript In Arabic 2022 - #09 - Function Optional and Default Parameters
//                                                       optional
// function showData(name: string , age: number, country?: string) {
//   return `${name} - ${age} - ${country}`;
// }

// //Expected 2-3 arguments, but got 1.ts(2554)
// console.log(showData("Osama"));

// ======================================================

// Learn Typescript In Arabic 2022 - #09 - Function Optional and Default Parameters
//                                                   optional
// function showData(name?: string, age: number, country: string) {
//   return `${name} - ${age} - ${country}`;
// }
// //A required parameter cannot follow an optional parameter.ts(1016)
// console.log(showData("Osama", 40, "Egypt"));

// answerrrrrrrrrrrrrrrrrrr

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}
//A required parameter cannot follow an optional parameter.ts(1016)
console.log(showData("Osama", 40));
// Osama - 40 - undefined

// ==========================================
