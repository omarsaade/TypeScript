"use strict";
class User {
    constructor(username) {
        this.username = username;
        User.created++;
    }
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
}
User.created = 0;
let u1 = new User("ammur");
let u2 = new User("abud");
console.log(User.created);
User.getCount();
//# sourceMappingURL=classstaticmembers.js.map