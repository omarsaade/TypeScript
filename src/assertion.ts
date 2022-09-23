// ========================================
// video 19
//                    INTERFACE
 let myImg = document.getElementById("my-img") as HTMLImageElement;
//
 let myImg = <HTMLImageElement>document.getElementById("my-img");
 console.log(myImg.src);
 console.log(myImg.value);
 Property 'value' does not exist on type 'HTMLImageElement'.ts(2339)

// ====================================

let data: any = "1000";
console.log((data as string).repeat(3));

// ==============================

// video 20 / union And Intesection Types

let all: number | string = 100;

type standnum = string | number;

//                              //

type A = {
  one: string;
  two: number;
  three: boolean;
};

// let am: A = { one: "String", two: 100, three: true };
// console.log(am);

type B = A & {
  four: number;
};

function getActions(btns: B) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.four}`);
}

getActions({ one: "String", two: 100, three: true, four: 20 });


//=======================================================================
//

type A = {
  one: string;
  two: number;
  three: boolean;
};

// let am: A = { one: "String", two: 100, three: true };
// console.log(am);

type B = A & {
  four: number;
};

type C = {
  five: boolean;
};

type mix = A & C;

function getActions(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({ one: "String", two: 100, three: true, five: false });
