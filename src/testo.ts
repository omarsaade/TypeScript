// video 14
//Literal Types

type nums = 0 | 1 | -1;

function compare(num1: number, num2: number): nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); //0
console.log(compare(20, 15)); //1
console.log(compare(20, 30)); //-1

// let myNumber: nums = 100;
// Type '100' is not assignable to type 'nums'.ts(2

// ==================================================================

// video 15
// Data Types
// Tuple  metel el array

let article: [number, string, boolean] = [11, "Title One", true];
// article[0].
article = [12, "Title Two", false];
article.push(100); // we can add
// console.log(article); [ 12, 'Title Two', false, 100 ]

//
// ==========================================================
// Now Read Only

let articlo: readonly [number, string, boolean] = [11, "Title One", true];
articlo = [12, "Title Two", false];
// articlo.push(100); // we can add
// console.log(article); [12, "Title Two", false];

// =============================================================

//Destructuring
const [id, title, published] = articlo;
console.log(id);
console.log(title);
console.log(published);

// =====================================================
