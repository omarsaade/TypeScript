// Learn JavaScript OOP in Arabic #23 - JavaScript Accessors Getters & Setters

// Getters and Setters

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    sayHello() {
        return `Hello ${this.name}`;
    }
    //lama zedna get showInfo() t7awalet men msg la property
    //computed property
    get showInfo() {
        return `Name : ${this.name}, Email" ${this.email}`
    }

    changeName(newName) {
        this.name = newName;
    }

    set changeEmail(newEmail) {
        this.email = newEmail;
    }
}


let user1 = new User("osama", "o@nn.sa");
console.log(user1.name);
console.log(user1.email);
// console.log(user1.showInfo()); it will not work like this bcz its a property
console.log(user1.showInfo);// it will work 

//   get line 16 hye bta3tik simple syntax ..he awalan
// btsir fik t3ayet lal function bi tore2 tenye w hik

// how to change without using set
// user1.changeName("Mahmoud");
// console.log(user1);

// Using Set
//better or simple syntax
user1.changeEmail = "ooo@gmail.com";
console.log(user1.email);
console.log(user1.name);
console.log(user1.showInfo);









