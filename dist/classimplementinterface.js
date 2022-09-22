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
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Pizza take 1 hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Pizza take half hour`);
    }
}
let pizzaOne = new Pizza("pepperoni", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
//# sourceMappingURL=classimplementinterface.js.map