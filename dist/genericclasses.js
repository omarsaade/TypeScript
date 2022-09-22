"use strict";
class Uso {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userOno = new Uso("elzero");
console.log(userOno.value);
userOno.show("hisham");
let userTwo = new Uso(100);
console.log(userTwo.value);
userTwo.show("hello");
//# sourceMappingURL=genericclasses.js.map