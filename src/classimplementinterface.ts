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
