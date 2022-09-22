// Learn Typescript In Arabic 2022 - #31 - Class Implements Interface

//            Implement Interface

interface Settings {
  themes: boolean;
  font?: string;
  save(): void;
}

// class User lah yesta5dem el interface (adawat)
class Usero implements Settings {
  constructor(public username: string, public themes: boolean) {}
  save(): void {
    console.log(`Saved`);
  }

  update(): void {
    console.log(`Updated`);
  }
}

let userOne = new Usero("Elzero", true);

console.log(userOne);

//        ABstarct Classes and Members
// Vider 32

/*

CLass
---------Abstarct Classes and Members
------------we cannot Create An Instance of An Abstract Class

*/

//hayda asbtract class
// lama test3mel el abstract class btsir badak thet bel class el ra2ise el absract nabze 3an el mawdu3
// yaane metel ta3rife bas ...w bel class extends bet3abe el ma3lumet 3an hal sahgle.
//   based class
// class absract huwe ma3lum mishen be2e el classes touwres meno
// w fi kawanin w rules...
//
abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
}

//derived class
class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  //he darure tzida hon , li2ana abstract w iza ma zedta bay3mul machekel
  getCookingTime(): void {
    console.log(`Cooking Pizza take 1 hour`);
  }
}

//

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  //he darure tzida hon , li2ana abstract w iza ma zedta bay3mul machekel
  getCookingTime(): void {
    console.log(`Cooking Pizza take half hour`);
  }
}

let pizzaOne = new Pizza("pepperoni", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
