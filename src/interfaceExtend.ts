// Learn Typescript In Arabic 2022 - #25 - Interface Extend
/*
interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator extends User {
  role: string | number;
}

let user: Moderator = {
  id: 100,
  username: "elzero",
  country: "Egypt",
  role: "Mod",
};

console.log(user.id);
*/

/*
interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

//super admin
interface Admin extends User, Moderator {
  protect?: boolean;
}

// let user: Admin = {
//   id: 100,
//   username: "elzero",
//   country: "Egypt",
//   role: "Mod",
//   protect: true,
// };

// console.log(user.id);

// //
//
//
//

//             interface final discussion
//              video 26
//       Interfcae vs type aliases
//        take A Look HTMLELement Interface

let el = document.getElementById("id") as HTMLElement;

//HomePage
//1- open interface
//
/*

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

/*
//  initialize
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

*/
