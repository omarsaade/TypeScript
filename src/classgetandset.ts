// Learn Typescript In Arabic 2022 - #29 - Class Get And Set Accessors

// Property 'usernam' is private and only accessible within class 'User'!!
// kif fina n7ell el mechkle ?


class User {
  //type annotation
  msg: () => string;
  constructor(private _usernam: string, protected salary: number,public readonly address: string) {

    // fina nshil bi he el 7ale hawde el satren w ma mechkle
    // bi dall kello shegal
    //property
    this.msg = function () {
      return `Hello ${this._usernam} Your salary Is ${this.salary}`;
    };
  }
  //method
  sayMsg() {
    return `Hello ${this._usernam} Your Salary Is ${this.salary}`;
  }

  get usernam(): string {
    return this._usernam;
  }

  set usernam(value: string) {
    this._usernam = value;
  }
}

let userOne = new User("Elzero", 6000, "tripoli");
// console.log(userOne);
console.log(userOne.usernam);
userOne.usernam = "Ahmed";
console.log(userOne.usernam);

// getter and setter byesma7ule access 3al private properties men barra el class
//w hatta 3addel 3laya



//  Iza 3andak private property
// metel el username kif fina naccess
// 3laya men barra el class ? encapsulation

// answer : 3an tari2 el getter wel setter lah e2dar access 3laya
// men barra el class  w 3adel kamen


// fina na3mul el getter wel setter 3an tari2

                EL REFACTOR ?
                KIF 3MUL CLICK 3A usernam
                f2os refactor
                generate get and set accessors


