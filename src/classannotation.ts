// Type Annotations With Class

class User {
  s: number;
  u: string;
  msg: () => string;
  constructor(username, salary) {
    this.u = username;
    this.s = salary;
    //property
    this.msg = function () {
      return `Hello ${this.u} Your salary Is ${this.s}`;
    };
  }
  //method
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Elzero", 6000);
console.log(userOne);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
