/*
Genreic classes
video 36

*/

/*

class Uso<T> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOno = new Uso("imam");
console.log(userOno.value);
userOno.show("hisham");



let userTwo = new Uso(100);
console.log(userTwo.value);
userTwo.show(100);

*/

//
//
//
//
//
// Default Parameter Value
//       default parameter
class Uso<T = string> {
  constructor(public value: T) {}

  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}
// hala2 iza kenet fadye hon el 3ade ano thet number hayda el default
//w fina nhet shi ger...iza 5alayneha fadye w ma hatayna fo2 el default
// bi 2ellak unknwon
let userOno = new Uso("elzero"); // fina ma nektob el type hon <> , huwe byestantej la halo
console.log(userOno.value);
userOno.show("hisham");

// hon darure nektob li2an sat3mlana number and string
let userTwo = new Uso<number | string>(100);
console.log(userTwo.value);
userTwo.show("hello");
