const ChaiFlavours: string[] = ["Masala", "Lemon"];
const ChaiPrice: number[] = [20, 30];

//another way of defining array type
const rating: Array<number> = [2.3, 4.5];

// Object type array

//used mostly
type Person = {
  name: String;
  age: number;
};

const PersonArr: Person[] = [
  { name: "sameer", age: 21 },
  { name: "sid", age: 21 },
  { name: "matina", age: 20 },
];

// readonly arrays
const readONlyArr: readonly string[] = ["ktm", "pokh"];
// readONlyArr.push("bhaktapur") mildain garna just read values

//multi dimensional arrays
const multi: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuples in ts
// js ma hudaina bhanam tuples

const ChaiTuples: [string, number] = ["Masala", 30]; // yesto lai bhanxa tuples
// const ChaiTuples: [string, number]=[30,"Masala "] // yesto garna mildaina

ChaiTuples.push("sameer"); // yesto garna chai milxa khas error nai ho tara dekhaudaina cuz tuples at the end of the day array nai ho

// const userInfo: [string, number, boolean?]
type userInfo = [string, number, boolean?]; // optional boolean
const userInfomation: userInfo = ["sameer", 10, true];

// readonly tuples
const location: readonly [number, number] = [12, 23];

//named tuples
const namedTuples: [name: string, age: number] = ["sameer", 23];

//enum
// enum basically options dina ra options lai restrict garna use hunxa

enum ChaiType {
    // enums ko bhitra ko data type usually ra praye thau ma same nai hunxa
  MASALA = "masala",
  LEMON = "lemon",
}

const s = ChaiType.LEMON // lemon resolve hunxa value

enum Numbers1{
    // YEUTA PROPERTY MA NUMBER INITIALIZE GARYO RA ARKO MA GARENA BHANE YO BY DEFAULT AUTO INCREMENT HUNXA
    ONE= 1,
    TWO, // 2 
    THREE// 3
}

const s1= Numbers1.TWO // s1=2 basxa

const chai: ChaiType = ChaiType.MASALA // as data type ni use garna milxa enum lai

//in function parameters using enum as data type
function enumExampleFunc(chai: ChaiType){
    console.log(chai)
}

enumExampleFunc(ChaiType.LEMON)

