//mostly used
//paila jastai ho interface additional k xa bhane yesle function ra methods define garna mostly use hunxa 
// java ma pade jasto yesma just kk methods,function , variables define hunxa tyo matra bhanxa actual implementation hudaina interface ma

import type ts = require("typescript")

interface Person{
    name:string,
    age:number,
    canTalk(talk: boolean): void, //method bho
   
}

const obj:Person ={
    name:"Sameer",
    age: 12,
    canTalk(talk){
        if(talk){
            console.log( this.name+ " can talk")
        }
    }
}
obj.canTalk(true)

//for functions
interface Person2 {
    (walk: boolean): void // yesma aru hudaina 
}
// This is called a call signature.

// It means:

// “An object that can be called like a function with (walk: boolean)”

const func:Person2 =(w)=>{
    if (w){
        console.log("Person is walking");
    }
}

// So:

// methodName(...) → method
// (...) alone → function signature / callable object

//index signatures
// basically key value pair lai type dine jastai ho 
interface IndexSigExample{
    [flavour:string]: number
// flavour ma j key auda ni bhayo jati ota auda ni bhayo
// tesko value number mai hunxa
}

const ChaiRatings:IndexSigExample ={
    masala: 2.4,
    lemon: 4.5  // ho yesari use hunxa index signatures 
}


// multiple interface xa same name xa bhane tesko sab properties merge hunxa
interface user{
    name:string
}

interface user{
    age: number
}


const person: user ={
    name:"Sameer",
    age: 12 // duitai ko properties auxa
}

// interface lai extends ni garna milxa
interface A {a:string}
interface B {b:string}

interface C extends A,B { //multiple inheritance
c:string
}


const cobj: C ={
    a:"A",
    b:"B",
    c:"C"
}