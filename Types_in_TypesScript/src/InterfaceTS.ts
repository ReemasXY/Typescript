//interface ra type bhaneko usta ustai ho garne kam
// tara diff k ma xa bhane type class ko bhitra use garda error auna sakxa
// tesaile interface use garxam

// interface tyo clz ma padeko jastai same ho definition and all

type MasalaChai = {
  water: number;
  sugar: number;
};

interface MasalaChai1 {
  water: number;
  sugar: number;
}

//duitai ma garne same nai ho
// yo tala ko example ma duitai tarika le  garna milxa class ma
class serveChai implements MasalaChai {
  water = 10;
  sugar = 30;
}

class serveChai1 implements MasalaChai {
  water = 10;
  sugar = 30;
}

// mathi ko ma error naaye pani most cases ma class ko bhitra type use garyo bhane error auna sakxa so  JUST REMEMBER TO USE INTERFACE INSTEAD OF TYPE IN CLASS

// Intersection in ts

type waterRequirements = { water: number };
type SugarRequirements = { sugar: number };

//union
// type Chai= waterRequirements | SugarRequirements yo gareko bhaye ki water ki sugar ya duitai rakhna ni milyo

// intersection
type Chai = waterRequirements & SugarRequirements;
// yesma aba duitai sugar ra water rakhani  parxa

let Chaiobj: Chai = {
  water: 10,
  sugar: 10,
};

//optional property in type
//type ko bhitra optional key ya property ni rakhna milxa
type User = {
  name: string;
  age?: number; // age auda ni milyo naauda ni milyo
};

let user1: User = {
  name: "Sameer",
};

let user2: User = {
  name: "Reemas",
  age: 20,
};

//readonly mode
// kunai property of obj ya type lai read matra garna lai yo readonly use garinxa
// yesma ekchoti key ya property ko value initialize garisake si change hanna mildaina
type Config = {
  readonly appName: string;
  version: number;
};

let cfg:Config={
    appName: "Mobile Legends",
    version: 2.3
}

// cfg.appName= "sameer" yo change hanna mildaina
cfg.version= 23.3 // this is valid 
