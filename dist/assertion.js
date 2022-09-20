"use strict";
let data = "1000";
console.log(data.repeat(3));
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: "String", two: 100, three: true, five: false });
//# sourceMappingURL=assertion.js.map