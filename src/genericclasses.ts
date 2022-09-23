/*
Genreic classes
video 36

*/

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
console.log(userOno);
console.log("hi");

console.log(userOno.value);
// userOno.show("hisham");

// hon darure nektob li2an sat3mlana number and string
let userTwo = new Uso<number | string>(100);
console.log(userTwo.value);
userTwo.show("hello");
//
//
//
//
//
//
//
//
//
//  Learn Typescript In Arabic 2022 - #37 - Generics And Interfaces

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = []; //array fADYE
  add(item: T): void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "follow your heart", isbn: 190880 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({
  itemType: "Game",
  title: "Uncharted",
  style: "Action",
  price: 150,
});
console.log(itemTwo);
