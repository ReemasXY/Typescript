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
  }
  else if (size === "medium" || size === "large") {
    console.log("size is medium or large");
  }
    else {
    console.log("size is number");
    }
}

//type check for class based
class GingerChai{
    server(){
        console.log("serving ginger chai");
    }
}
class MasalaChai{
    server(){
        console.log("serving masala chai");
    }   
}

//yesma  chai variable ki ta gingerchai obj hunxa kita ta masala ko
// if chai gingerchai obj raixa bhane tyo sure hunxa ki ginger chai ko serve call bhako bhanera
function serveChai(chai: GingerChai | MasalaChai){
    if(chai instanceof GingerChai){
        chai.server(); // yesma chai sure ginger chai nai hunxa
    }
    else{
        chai.server(); // yesma chai sure masala chai nai hunxa
    }
}
let gingerchaiobj= new GingerChai();
let masalachaiobj= new MasalaChai();
serveChai(gingerchaiobj);

