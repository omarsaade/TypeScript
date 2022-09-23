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
console.log(userOno);
console.log("hi");
console.log(userOno.value);
let userTwo = new Uso(100);
console.log(userTwo.value);
userTwo.show("hello");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "follow your heart", isbn: 190880 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
//# sourceMappingURL=genericclasses.js.map