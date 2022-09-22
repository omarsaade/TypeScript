"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log(`Attacking Now`);
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("Attacking With Spear");
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("ammur", 5);
console.log(barOne.name);
console.log(barOne.axeDurability);
barOne.attack();
//# sourceMappingURL=poly.js.map