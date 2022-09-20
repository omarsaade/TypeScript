"use strict";
var kids;
(function (kids) {
    kids[kids["Five"] = 25] = "Five";
    kids[kids["Seven"] = 20] = "Seven";
    kids[kids["Ten"] = 15] = "Ten";
})(kids || (kids = {}));
var Level;
(function (Level) {
    Level[Level["kid"] = 15] = "kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.kid}`);
}
//# sourceMappingURL=enum.js.map