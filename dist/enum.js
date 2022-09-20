"use strict";
function getHardSeconds() {
    return 3;
}
var kids;
(function (kids) {
    kids[kids["Five"] = 25] = "Five";
    kids[kids["Seven"] = 20] = "Seven";
    kids[kids["Ten"] = 15] = "Ten";
})(kids || (kids = {}));
var Level;
(function (Level) {
    Level[Level["kid"] = 15] = "kid";
    Level[Level["Normal"] = 4] = "Normal";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Medium}`);
}
//# sourceMappingURL=enum.js.map