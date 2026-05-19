// declaring object types
// yesma k hunxa bhane yeuta specific obj ma hune matra data type assign garinxa
let masalaTea: {
  //yo yeuta specific object ko lagi matra data type ho type use nagarikana
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
type Tea = {
  name: string;
  sugar: number;
};
const gingerTea: Tea = {
  name: "MasalaChai",
  sugar: 12,
};
const lemonTea: Tea = {
  name: "MasalaChai",
  sugar: 12,
};

//Ducktyping in ts
type Cup = {
  size: string;
};
// yesari direct additional property dina mildaina kinabhane type ma yesto xaina
// const smallCup: Cup ={ size:"small" , material:"steeel"}

//tara indirectly extra property dina milxa
let smallCup: Cup = { size: "small" };
const bigCup = { size: "bigCup", material: "large" };
smallCup = bigCup; // yesma error audaina
console.log(smallCup.size);
// console.log(smallCup.material) yesma error chai dekhauxa

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  name: string;
  items: Item[]; // yesari ni define hanna milxa
  address: Address; // yetai ni lekhna milxa tyo street and pin tara readability ko lagi separation gariyeko ho
};

//Partial and Required
type Chai = {
  name: string;
  price: Number;
};

const chaiobj: Partial<Chai> = {
  name: "masala chai",
};
//yesle chai k bhanxa bhane yo jun parameter xa tesma Chai ko sab properties auda ni hunxa naauda ni hunxa just like tyo? . Empty obj ni pass garna milxa yesma
const updateChai = (updates: Partial<Chai>) => {
  console.log(updates);
};

// const updateChai= (updates: Chai )=>{
//   console.log(updates);
// }
//yo gareko bhaye dutai name ra price pathauna parthyo function ma tara partial use garyo bhane sab field optional hunxa but tyo beyond ko properties rakhna mildaina

updateChai({}); // valid
updateChai({ name: "MasalaChai" });
updateChai({ name: "MasalaChai", price: 35 });
// updateChai({name: "MasalaChai", price: 35, isHot:false}) yo garna payena

// Partial ko thyakka opposite Required ho
// yesle chai sabai properties haru required xan bhanera bhanxa

type OrderChai = {
  name?: string;
  price?: number;
};

//Required le basically sab properties compulsory xa bhanera bhanxa
const newOrder: Required<OrderChai> = {
  name: "Masala Chai",
  price: 100,
};

const placeOrder = (order: Required<OrderChai>) => {
  console.log(order);
};

// placeOrder({name:"MasalaChai"}) error nai dinxa kina ki sabai properties deko xaina
placeOrder({ name: "Masala Chai", price: 100 });


//Pick and Omit
type PersonInfo={
  name:String,
  age:number,
  gender: "M"|"F",
  secretInformation: string
}

// Pick le chai yeuta type bata some properties arko type ma lina help garxa
type Information= Pick<PersonInfo, "name"|"age">

const obj1: Information={
  name:"Sameer",
  age:12,

}

//Omit le chai yeuta type bata kei properties hatauna help garxa
type Information2= Omit<PersonInfo, "secretInformation">
//yesma aba secretInformation bahek sab properties auxa
const obj2: Information2={
  name:"sameer",
  age:12,
  gender:"M"
}