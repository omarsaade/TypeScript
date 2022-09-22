"use strict";
class Usero {
    constructor(username, themes) {
        this.username = username;
        this.themes = themes;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userOne = new Usero("Elzero", true);
console.log(userOne);
//# sourceMappingURL=classimplementinterface.js.map