// Type Annotations With Class

/*


class User {
  //type annotation
  s: number;
  u: string;
  msg: () => string;
  constructor(username: string, salary: number) {
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


*/
// =================================

/* 
  Learn Typescript In Arabic 2022 - #28 -
Class Access Modifiers And Parameters Properties

Access Modifiers
yaane metel el public , protected , private



*/

/*
class User {
  //type annotation
  private usernam: string;
  protected salary: number;
  msg: () => string;
  constructor(usernam: string, salary: number) {
    this.usernam = usernam;
    this.salary = salary;
    //property
    this.msg = function () {
      return `Hello ${this.usernam} Your salary Is ${this.salary}`;
    };
  }
  //method
  sayMsg() {
    return `Hello ${this.usernam} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000);
console.log(userOne);
// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());

*/

/*







FIna NEKTOB LI FO2 BI TARI2A TENYE
*/

/*


class User {
  //type annotation
  msg: () => string;
  constructor(
    private usernam: string,
    protected salary: number,
    public readonly address: string
  ) {
    // fina nshil bi he el 7ale hawde el satren w ma mechkle
    // bi dall kello shegal
    //property
    this.msg = function () {
      return `Hello ${this.usernam} Your salary Is ${this.salary}`;
    };
  }
  //method
  sayMsg() {
    return `Hello ${this.usernam} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000, "tripoli");
console.log(userOne);
// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());


*/
