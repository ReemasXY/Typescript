"use strict";
// yesle k bhanxa bhane union use bhaxa bhane just try to confirm the type of variable by using if else condition
function numberOrString(a) {
    // yesma a ki number huna sakxa ki string
    if (typeof a === "number") {
        // tara yesma a sure number nai hunxa dhukka ho yeslai nai bhanxa type narrowing
        console.log("a is a number");
    }
    else {
        // yesma a sure string nai hunxa dhukka ho yeslai nai bhanxa type narrowing
        console.log("a is number");
    }
}
// yo ? mark le a auna ni sakxa naauna ni sakxa bhanxa tara ayo bhane number nai auna parxa
function isNumber(a) {
    if (a) {
        console.log(typeof a); // number bhanera auxa
    }
    else {
        console.log("a is undefined"); // a undefined bhanera auxa
    }
}
isNumber(10);
isNumber();
