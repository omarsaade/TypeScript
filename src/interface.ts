//    Interface Declartion

// interface same as Type

//-------------server like Types
//-----------------the interface Describes the shape of an object
//-----------------it defines the syntax to follow

//---------Use with object
//--------use with function
//---Use Read Only and Optional Operator

// ================================================
/*
interface User {
  id?: number;
  readonly username: string;
  country: string;
}

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "osama", country: "ksa" });
// getData({username: "osama", country: "ksa" });
*/
// ======================

/*
let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
};

user.country = "Syria";

console.log(user);
*/
// ====================================

//                          Video 23
//    Interface Method And Parameters

/*
interface User {
  id: number;
  username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number; //btarje3 number
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "leb",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `welcome ${user.username}`;
  },
  getDouble(n) {
    return n * 2;
  },
};

console.log(user.id);
console.log(user.username);
console.log(user.country);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(2));

*/
// =====================================================
// Learn Typescript In Arabic 2022 - #24 - Interface Reopen And Use Cases
//
//

/*
//HomePage
//1- open interface
//
interface Settings {
  readonly theme: boolean;
  font: string;
}

//articles
// 2- added something ReOpen
interface Settings {
  sidebar?: boolean;
}

//Contact Page
interface Settings {
  external: boolean;
}

//initialize
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

*/
