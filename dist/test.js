"use strict";
let theName = "Elzero";
let theAge = 40;
let hire = true;
theName = "osama";
let al = "elzero web school";
al = 100;
let allo;
allo = 100;
let allVars;
function addo(n1, n2) {
    return n1 + n2;
}
console.log(addo(10, 20));
console.log(typeof addo(10, 20));
let allmo = "omar";
allmo = "A";
allmo = 100;
allmo = true;
let myFriends = ["osama", "ali", "ahmed"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
let arrayFour = [
    1,
    2,
    3,
    4,
    "A",
    "B",
    "C",
    ["C", "D"],
];
let arrayFours = [
    1,
    2,
    3,
    4,
    "A",
    "B",
    "C",
    ["C", "D"],
    [true, false],
];
let arrayFive = [
    1,
    2,
    3,
    4,
    "A",
    "B",
    "C",
    ["C", "D"],
    true,
    false,
];
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name} , Age Is ${age} , Salary Is ${salary} , test Variable ${test}`;
    }
    return `No data to show`;
}
console.log(showDetails("Osama", 40, 5000));
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Osama", 40));
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => (result += num));
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
const adds = function (num1, num2) {
    return num1 + num2;
};
console.log(adds(10, 20));
const addwithArrow = (num1, num2) => num1 + num2;
console.log(addwithArrow(10, 20));
let theNamo = "Elzero";
theNamo = "sami";
let allm = 10;
allm = 100;
allm = "hello";
function getAction(btns) {
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
}
getAction({
    up: "Jump",
    right: "Go Right",
    down: "Go Down",
    left: "Go Left",
    x: true,
});
//# sourceMappingURL=test.js.map