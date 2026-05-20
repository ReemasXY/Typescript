"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declaring object types
// yesma k hunxa bhane yeuta specific obj ma hune matra data type assign garinxa
let masalaTea;
masalaTea = {
    name: "MasalaChai",
    sugar: 12,
};
const gingerTea = {
    name: "MasalaChai",
    sugar: 12,
};
const lemonTea = {
    name: "MasalaChai",
    sugar: 12,
};
// yesari direct additional property dina mildaina kinabhane type ma yesto xaina
// const smallCup: Cup ={ size:"small" , material:"steeel"}
//tara indirectly extra property dina milxa
let smallCup = { size: "small" };
const bigCup = { size: "bigCup", material: "large" };
smallCup = bigCup; // yesma error audaina
console.log(smallCup.size);
const chaiobj = {
    name: "masala chai",
};
//yesle chai k bhanxa bhane yo jun parameter xa tesma Chai ko sab properties auda ni hunxa naauda ni hunxa just like tyo? . Empty obj ni pass garna milxa yesma
const updateChai = (updates) => {
    console.log(updates);
};
// const updateChai= (updates: Chai )=>{
//   console.log(updates);
// }
//yo gareko bhaye dutai name ra price pathauna parthyo function ma tara partial use garyo bhane sab field optional hunxa but tyo beyond ko properties rakhna mildaina
updateChai({}); // valid
updateChai({ name: "MasalaChai" });
updateChai({ name: "MasalaChai", price: 35 });
//Required le basically sab properties compulsory xa bhanera bhanxa
const newOrder = {
    name: "Masala Chai",
    price: 100,
};
const placeOrder = (order) => {
    console.log(order);
};
// placeOrder({name:"MasalaChai"}) error nai dinxa kina ki sabai properties deko xaina
placeOrder({ name: "Masala Chai", price: 100 });
const obj1 = {
    name: "Sameer",
    age: 12,
};
//yesma aba secretInformation bahek sab properties auxa
const obj2 = {
    name: "sameer",
    age: 12,
    gender: "M"
};
//# sourceMappingURL=Object.js.map