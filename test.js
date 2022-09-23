function add(n1, n2) {
    return n1 + n2;
}

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

console.log(add(10, "20"));
console.log(typeof add(10, "20"));




// function showData(name, age, country) {
//     return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama"));
// // Osama - undefined - undefined



// using                           default value
// function showData(name, age, country = "Un") {
//     return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama"));
// // Osama - undefined - Un




// using
/*                          default value
function showData(name = "Un", age, country) {
    return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama"));
// Osama - undefined - undefined
*/


// ==============================================


// function showData(name = "Un", age, country) {
//     return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama"));
// // Osama - undefined - undefined


// =================================


function showData(name = "Un", age, country) {
    return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, 40, "Egypt"));
// Un - 40 - Egypt

// ==============================================================

