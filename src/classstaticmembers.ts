// class
// ---static Members
// ---------- Dont Use "name , length, call"
// hol bi 5asso el class nafso....mesh el object li mnenshe2a
// men el class

class User {
  static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} Objects Created`);
  }

  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("ammur");
let u2 = new User("abud");

console.log(User.created);
User.getCount();

class User {
  //static property
  // bta3mul nafes li bat3mlo el get wel set ta2riban
  private static created: number = 0;
  //he nafsa el get method , li2an 3m tjib el value men property private
  static getCount(): void {
    console.log(`${this.created} Objects Created`);
  }

  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("ammur");
let u2 = new User("abud");

// console.log(User.created); error cz its a private
User.getCount();

// CLass Static Members
/*
            el STATIC MEMBERS hene el properties wel methods
            li bi 5esso el class nafso
            mesh el OBJECT LI nehna
            mnenshe2a men el class


 */
