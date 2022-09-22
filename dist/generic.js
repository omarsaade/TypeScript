"use strict";
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("elzero"));
console.log(returnType(true));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(11));
console.log(returnTypeArrowSyntax("elzero"));
function testType(val) {
    return `The value is ${val} and Type is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("elzero"));
function multipleTypes(valueOne, valueTwo) {
    return `The First value is ${valueOne} and  the Second Value is ${valueTwo}`;
}
console.log(multipleTypes(100, "sami"));
console.log(multipleTypes(200, true));
//# sourceMappingURL=generic.js.map