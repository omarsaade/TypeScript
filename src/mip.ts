// Learn Typescript In Arabic 2022 - #16 - Data Types - Void And Never
// Data Types
// ******************** Void
// -----function that will return nothing
//------function in javascript that not return a value will
// show undefined
//------ undefined is not void
//          mafi value lah terja3

//
//
//
//

function logging(msg: string) {
  console.log(msg);
  return msg;
}

console.log(logging("I am a message"));
// I am a message
// I am a message

// ================================
// void cz my function does not return a value
// it return nothing
function loggings(msg: string) {
  console.log(msg);
}

console.log(loggings("I am a message"));
// I am a message
// undefined

// ===============================================
// void cz my function does not return a value
// it return nothing
function loggin(msg: string): void {
  console.log(msg);
}

console.log(loggin("I am a message"));
// I am a message

// ===============================================
// void cz my function does not return a value
// it return nothing
function log(msg: string): void {
  console.log(msg);
  return;
}

console.log(log("I am a message"));
console.log("test");

// I am a message
// undefined
//test

// ===============================================

//------------------------
//********************* Never
//------Return Type Never Returns
//------The Function Doesn't Have A Normal Completion
//-------it Throws An Error or Never finishes Running at all inifite loop.
// mafi shi lah yerja3

const fail = (msg: string) => {
  throw new Error(msg);
  //   return 10;
};

//
//

function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
  //   return; //error
}
// alwaysLog("omar"); infinte loop

// "allowUnreachableCode": true /* Disable error reporting for unreachable code. */,
//
// =========================================================
