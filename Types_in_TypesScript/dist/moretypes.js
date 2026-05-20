"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//type assertion
// yo bhaneko type cast bhane jastai ho 
let response = "hello world";
// yesma response lai any type jasari nai treat garxa rather than a string
//aba yeslai string jastai treat garna lai type assertion garna parxa
let responseLength = response.length;
let bookName = '{"name":"Atomic habits"}';
//type assertion
let newBookname = JSON.parse(bookName);
console.log(newBookname.name);
//type annotation
let anotherbookname = JSON.parse(bookName);
console.log(anotherbookname.name);
const inputElement = document.getElementById("input");
// const inputElement2: HTMLInputElement = document.getElementById("input")  
// yesma error auxa kina bhane document.get... le null return garyo kina ki xadai xaina testo kai tara inputElement2 le ta string store gara bhaenxa 
try {
}
catch (error) {
    // console.log(error.message) yetikai garda error unknown type ko ho ra kei gurantee xaina ki message bhanne property error mai xa bhanera 
    // so yeslai prevent garna 
    if (error instanceof Error) {
        console.log(error.message); // aba gurantee xa ki message property hunxa nai hunxa as error bhanne Error class ko instance ho
    }
    else {
        console.log(error);
    }
}
function roleBasedAccess(role) {
    if (role === "user") {
        console.log("user is there");
    }
    else if (role === "admin") {
        console.log("admin is there");
    }
    else {
        // yo else samma aune case nai hudaina thyo
        //tesaile yeta role ko type never xa kina ki kaile audai audaina yesma
        console.log(role);
    }
}
//yo case ma ni use hunxa never 
//jaba function kaile pani return huna sakdaina 
function infiniteloop() {
    while (true) {
    }
}
//# sourceMappingURL=moretypes.js.map