// declaring object types
// yesma k hunxa bhane yeuta specific obj ma hune matra data type assign garinxa
let masalaTea: { //yo yeuta specific object ko lagi matra data type ho type use nagarikana
  name: string;
  sugar: number;
};
masalaTea = {
  name: "MasalaChai",
  sugar: 12,
};

// let gingerTea: masalaTea={ yo garna milena mathi ko follow gareraixa bhane

// }

// type use hanyo bhane tyo multiple object ko data type dina milxa
//type alias ni bhanxa
type Tea={
    name: string;
  sugar: number;
}
const gingerTea: Tea={
    name: "MasalaChai",
  sugar: 12,
}
const lemonTea:Tea={
    name: "MasalaChai",
  sugar: 12,
}

//Ducktyping in ts
type Cup={
    size: string
}
// yesari direct additional property dina mildaina kinabhane type ma yesto xaina 
// const smallCup: Cup ={ size:"small" , material:"steeel"}

//tara indirectly extra property dina milxa 
let smallCup: Cup= {size:"small"}
const bigCup={size:"bigCup", material:"large"}
smallCup=bigCup // yesma error audaina
console.log(smallCup.size)
// console.log(smallCup.material) yesma error chai dekhauxa