"use strict";
class User {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} Your salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}
let userOne = new User("Elzero", 6000);
console.log(userOne);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=classannotation.js.map