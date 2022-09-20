"use strict";
function logging(msg) {
    console.log(msg);
    return msg;
}
console.log(logging("I am a message"));
function loggings(msg) {
    console.log(msg);
}
console.log(loggings("I am a message"));
function loggin(msg) {
    console.log(msg);
}
console.log(loggin("I am a message"));
function log(msg) {
    console.log(msg);
    return;
}
console.log(log("I am a message"));
console.log("test");
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
//# sourceMappingURL=mip.js.map