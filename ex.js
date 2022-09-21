class Usero {
    constructor(username, salary) {
        this.username = username;
        this.salary = salary;
        this.msg = function () {
            return `Hello ${this.username} Your salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}

let userO = new Usero("Elzero", 6000);
console.log(userO);
