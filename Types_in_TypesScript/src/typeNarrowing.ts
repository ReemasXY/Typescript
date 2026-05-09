// yesle k bhanxa bhane union use bhaxa bhane just try to confirm the type of variable by using if else condition
function numberOrString(a: number | string) {
  // yesma a ki number huna sakxa ki string
  if (typeof a === "number") {
    // tara yesma a sure number nai hunxa dhukka ho yeslai nai bhanxa type narrowing
    console.log("a is a number");
  } else {
    // yesma a sure string nai hunxa dhukka ho yeslai nai bhanxa type narrowing
    console.log("a is number");
  }
}

// yo ? mark le a auna ni sakxa naauna ni sakxa bhanxa tara ayo bhane number nai auna parxa
function isNumber(a?: number) {
  if (a) {
    console.log(typeof a); // number bhanera auxa
  } else {
    console.log("a is undefined"); // a undefined bhanera auxa
  }
}

isNumber(10);
isNumber();

function ordeChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    console.log("size is small");
  } else if (size === "medium" || size === "large") {
    console.log("size is medium or large");
  } else {
    console.log("size is number");
  }
}

//type check for class based
class GingerChai {
  server() {
    console.log("serving ginger chai");
  }
}
class MasalaChai {
  server() {
    console.log("serving masala chai");
  }
}

//yesma  chai variable ki ta gingerchai obj hunxa kita ta masala ko
// if chai gingerchai obj raixa bhane tyo sure hunxa ki ginger chai ko serve call bhako bhanera
function serveChai(chai: GingerChai | MasalaChai) {
  if (chai instanceof GingerChai) {
    chai.server(); // yesma chai sure ginger chai nai hunxa
  } else {
    chai.server(); // yesma chai sure masala chai nai hunxa
  }
}
let gingerchaiobj = new GingerChai();
let masalachaiobj = new MasalaChai();
serveChai(gingerchaiobj);

//creating customtype guard for object
type chai = {
  name: string;
  price: number;
};
// yo chai ma parxa ki nai yesari check gare ni bho
let myChai: chai = {
  name: "ginger chai",
  price: 100,
};
// nabhaye function banara check ganda ni bho ki chai type lai follow garxa ki nai bhanera
function isChai(obj: any): obj is chai {
  //: obj is chai chai if funciton le true return garyo bhane tyo obj surely chai type bhanera bujauxa
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.price === "number"
  );
}

let obj1 = {
  name: "masala chai",
  price: 150,
};

let obj2 = {
  name: "Sameer",
};
console.log(isChai(obj1));
console.log(isChai(obj2));

type LemonChai = { type: "lemon"; price: number };
type CardamomChai = { type: "cardamom"; spicelevel: "high" };

function brew(chai: LemonChai | CardamomChai) {
  if ("spicelevel" in chai) {
    // chai ma spicelevel xa ki nai check garxa
    console.log("brewing cardamom chai with spice level: " + chai.spicelevel);
  }
}

// any and unknwn
let a: any = 10;
a.toUpperCase(); // No error in TS, may crash later

let b: unknown = 10;
// b.toUpperCase(); // Error
if (typeof b === "string") {
  b.toUpperCase(); // yesto check garera matra unknown ma kei action lina milxa
}

// any ra unkonwn usta ustai ho tara unknown is much safer than any because it forces you to do type checking before using the variable, while any allows you to use it without any checks, which can lead to runtime errors.
