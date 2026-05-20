"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChaiFlavours = ["Masala", "Lemon"];
const ChaiPrice = [20, 30];
//another way of defining array type
const rating = [2.3, 4.5];
const PersonArr = [
    { name: "sameer", age: 21 },
    { name: "sid", age: 21 },
    { name: "matina", age: 20 },
];
// readonly arrays
const readONlyArr = ["ktm", "pokh"];
// readONlyArr.push("bhaktapur") mildain garna just read values
//multi dimensional arrays
const multi = [
    [1, 2, 3],
    [4, 5, 6],
];
// tuples in ts
// js ma hudaina bhanam tuples
const ChaiTuples = ["Masala", 30]; // yesto lai bhanxa tuples
// const ChaiTuples: [string, number]=[30,"Masala "] // yesto garna mildaina
ChaiTuples.push("sameer"); // yesto garna chai milxa khas error nai ho tara dekhaudaina cuz tuples at the end of the day array nai ho
const userInfomation = ["sameer", 10, true];
// readonly tuples
const location = [12, 23];
//named tuples
const namedTuples = ["sameer", 23];
//enum
// enum basically options dina ra options lai restrict garna use hunxa
var ChaiType;
(function (ChaiType) {
    // enums ko bhitra ko data type usually ra praye thau ma same nai hunxa
    ChaiType["MASALA"] = "masala";
    ChaiType["LEMON"] = "lemon";
})(ChaiType || (ChaiType = {}));
const s = ChaiType.LEMON; // lemon resolve hunxa value
var Numbers1;
(function (Numbers1) {
    // YEUTA PROPERTY MA NUMBER INITIALIZE GARYO RA ARKO MA GARENA BHANE YO BY DEFAULT AUTO INCREMENT HUNXA
    Numbers1[Numbers1["ONE"] = 1] = "ONE";
    Numbers1[Numbers1["TWO"] = 2] = "TWO";
    Numbers1[Numbers1["THREE"] = 3] = "THREE"; // 3
})(Numbers1 || (Numbers1 = {}));
const s1 = Numbers1.TWO; // s1=2 basxa
const chai = ChaiType.MASALA; // as data type ni use garna milxa enum lai
//in function parameters using enum as data type
function enumExampleFunc(chai) {
    console.log(chai);
}
enumExampleFunc(ChaiType.LEMON);
//# sourceMappingURL=ArrayEnum.js.map