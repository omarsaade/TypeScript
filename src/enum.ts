// Enums1 video 17
//Data Types
//Enums => Enumerations
// ----Allow us to declare a set of named constants
// ---- used for logical Grouping collection of constants "collection of related values"

// ----it organize your code
// ----by default enums are number-based , First Element is 0
// ----Theres A Numeric Enums
// ----There A String-Based Enums
//--------Theres Heterogeneous Enums [String + Number]

/*
// bas shakel heda , ma mesta3mlino
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

//enums
// 3 types
// iza elet el kids hye 0 , btruh hye bt3abe la hala el be2e 1 ,2,  3...
enum Level {
  kids = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3,
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}

*/
// ========================================
// Enums PArt 2  - Data Types

// Data Types
// Enums => Enumerations
// ------Enum can Refer To other Enum
//------Enum Can Refer To Same Enum
//-------Enum Can Have Calculations
//---------Enum Can Have Functions

// const enum Level {         fina nekteba hik

/*
enum Level {
  kid = 15,
  Easy = 9,
  Medium = 6,
  Hard = 3,
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
/*
// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */

//
//
//====================================================

//how to refer from enum to another enum
enum kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum Level {
  kid = kids.Ten,
  Easy = 9,
  Medium = 6,
  Hard = 3,
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.kid}`);
}

// "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
