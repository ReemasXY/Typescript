"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//defining types in the parameter
function MakeChai(name, cups) {
    console.log(name, cups);
}
MakeChai("MasalaChai", 12);
// return value types
function getChaiPrice() {
    return 35;
    // return "30"// yo garna mildaina
}
function makeOrder(order) {
    if (!order)
        return null;
    return order;
}
makeOrder("this is order");
function Noreturn() {
    console.log("This function does not return anything");
}
//optional and default parameters
//optional and default parameters are writeen at last of parameters
// optional Parameter
function OrderChai1(type) {
    if (type) {
        console.log("this chai is of type" + type);
    }
    console.log("No type defined");
}
OrderChai1();
OrderChai1("Masala");
//default Parameter
// similar to optinal just farak diyena bhane tyo default value rakhdinxa
function DefaultValue(name = "Guest") {
    console.log("Hello " + name);
}
DefaultValue();
DefaultValue("sameer");
// complex datatype 
function Objectfunc(person) {
    console.log(person);
}
//# sourceMappingURL=FuntionTS.js.map