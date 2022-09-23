// Learn Typescript In Arabic 2022 - #34 - Generics Introduction

// without using generic

function returnNumber(val: number): number {
  return val;
}

function returnString(val: string): string {
  return val;
}

function returnBoolean(val: boolean): boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("ammur"));
console.log(returnBoolean(true));

//using generic type nowww

// function returnType<GenericType>(val: GenericType): GenericType {

function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

//
//
//
// Learn Typescript In Arabic 2022 - #35 - Generics Multiple Types

/*
Generics
-------Arrow Function
-------Multiple Types
-------Discussion
*/

function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("elzero"));
console.log(returnType<boolean>(true));
//
//
//
//
//
// const a                     = (val) =>

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(11));
console.log(returnTypeArrowSyntax<string>("elzero"));
//
//
//
//
//
//                           string
function testType<T>(val: T): string {
  return `The value is ${val} and Type is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("elzero"));
//
//
//
//
//
//
//                Multiple Type

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First value is ${valueOne} and  the Second Value is ${valueTwo}`;
}

console.log(multipleTypes<number, string>(100, "sami"));
console.log(multipleTypes<number, boolean>(200, true));
