// Learn Typescript In Arabic 2022 - #33 -
// Polymorphism And Method Override

//tsconfig.json
// "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */

class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log(`Attacking Now`);
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // iza badak he el meth ta3mul nafes el shagle li bel 2em
    // fo2 , bt2elo
    // super.attack();   //     console.log(`Attacking Now`);

    console.log("Attacking With Spear");

    this.spears -= 1;
  }
}

//
class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    console.log("Attacking With Spear");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("ammur", 5);
console.log(barOne.name);
console.log(barOne.axeDurability);
barOne.attack();

console.log("hello");
console.log("====================================");
console.log();
console.log("====================================");
