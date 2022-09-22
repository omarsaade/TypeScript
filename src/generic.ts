// Learn Typescript In Arabic 2022 - #34 - Generics Introduction

// without using generic
/*
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


*/

//using generic type nowww

// function returnType<GenericType>(val: GenericType): GenericType {
function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));
