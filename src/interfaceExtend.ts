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

let user: Admin = {
  id: 100,
  username: "elzero",
  country: "Egypt",
  role: "Mod",
  protect: true,
};

console.log(user.id);
