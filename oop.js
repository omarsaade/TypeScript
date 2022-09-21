// class type Annotations
//
//
//           *******************in javascript************8
/*     constructor huwe 3ibara 3an mo5atat
       fik 3an tari2o tenshe2 object ktir meno w ta3mul
       fia yalli enta
       3ayzo 
 */

/*kell mobile 3ando serial w lon
 kell mobile badak ta3mlo badak tenshe2lo object bi hayda el 
 shakel w tab3an he kerse ,tayeb ana iza bade teba2 functionalaty
 m3ayane bade a3mela w tabe2a 3a kell el mobiles li 3ande
 ? shu lah a3mul , lah ettar ru7 3a kell mobile 3addel li2an enta
 MMMMA 3ndak shagle meske el teleponete kella.
 MA 3ANDAK constructor tam inshe2 kell hal object meno mishen
                     tethakam fion

 */

// Problem if we want to create like this
/*


const phone1 = {
  serial: 123,
  color: "red",
  price: 500,
};

const phone2 = {
  serial: 159,
  color: "black",
  price: 500,
};

const phone3 = {
  serial: 167,
  color: "Silver",
  price: 500,
};


=================================================
*/

// Constructor Function
// he enta lah tebne mena ktir objects
/*
//             parameter
function Phone(serial, color, price) {
  //this.serial taba3 el object li enta lah tenshe2o
  // huwe equal lal serial li el sha5es lah yektebo
  // li huwe el argument
  this.serial = serial;
  this.color = color;
  this.price = price - 100;
}

//new object 
let phone1 = new Phone(129, "red", 2000); //argument
hayda huwe instance men el Phone
let phone2 = new Phone(169, "black", 2000); // Argument
let phone3 = Phone(169, "black", 2000); // Argument
console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);


console.log(phone1.serial); //129
console.log(phone1.color); //red
console.log(phone1.price); //2000
console.log(window.serial);

console.log(phone1.constructor === Phone); true
console.log(phone2.constructor === Phone);  true
console.log(phone3.constructor === Phone); Error


================================================
*/

/*
             function constructor

function User(name, email) {
  this.name = name;
  this.email = email;
  this.sayHello = function () {
    return `Hello ${this.name}`;
  };
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

console.log(user1);
console.log(user2);

*/

//           class syntax

//
/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.sayHello = function () {
            return `Hello ${this.name}`;
        };
    }
    sayHi() {
        return `Hi ${this.name}`;
    }
    showEmail() {
        return `Your Email is ${this.email}`;
    }
}

let user1 = new User("Osama", "omar@gmail.com");
let user2 = new User("Ahmed");

console.log(user1.sayHi());
console.log(user1.showEmail());
console.log(user2);


*/
// =========================================================

class User {

    //Static Properties
    static counter = 0;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        User.counter++;
        this.sayHello = function () {
            return `Hello ${this.name}`;
        };
    }
    sayHi() {
        return `Hi ${this.name}`;
    }
    showEmail() {
        return `Your Email is ${this.email}`;
    }

    writeMsg() {
        return `Message from Parent Class`;
    }

    //static Methods
    static countObjects = function () {
        return `${this.counter} Objects Created.`;
    }

}



let user1 = new User("Osama", "omar@gmail.com");
let user2 = new User("Ahmed");
let user3 = new User("Ahmed");
let user4 = new User("Ahmed");

// console.log(user1.sayHi());
//
// console.log(user1.showEmail());
//
// console.log(user2);
// console.log(User);[class User] { counter: 2, countObjects: [Function: countObjects] }
console.log(User.counter);
console.log(User.countObjects());

// console.log(user1.counter); he bta3ti error li2an hye ma ela 3ale2a abadan'
// bel object li enta btenshe2o...he 5asa bel class nafso
// iza bshil el "static " bisir ader ye2ria

// console.log(User.countObjects());


//             Class Inheritance


// Child class (derived Class)

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    adminMsg() {
        return `You Are Admin`
    }
    //method override
    writeMsg() {
        return `Message from child Class`;
    }

}


let admin1 = new Admin("ammur", "a@gmail.com");
console.log(admin1);
console.log(admin1.sayHi()); //we can
// console.log(admin1.counter); we cant bcz its static
// console.log(admin1.);

//                     How to override a method ?

console.log(admin1.writeMsg());