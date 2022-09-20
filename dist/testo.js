"use strict";
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
let article = [11, "Title One", true];
article = [12, "Title Two", false];
article.push(100);
let articlo = [11, "Title One", true];
articlo = [12, "Title Two", false];
const [id, title, published] = articlo;
console.log(id);
console.log(title);
console.log(published);
//# sourceMappingURL=testo.js.map