"use strict";
class Chai {
    flavour;
    price;
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
        console.log(this);
    }
}
const obj = new Chai("Masala", 30);
console.log(obj.flavour);
//Access Modifiers
// public private and protected
class ModifierExample {
    name = "sameer"; // can be accessed from every where
    secretInfo = "Matina"; // can be accessed inside class only and through getters
    // #secretInfo this is also private modifier #
    sharedInfo = "BIM B"; // can be accessed inside class and inherited class
    getSecretInfo() {
        //geter haina just a method ho
        return this.secretInfo;
    }
}
class example extends ModifierExample {
    getSharedInfo() {
        return this.sharedInfo;
    }
}
const obj1 = new example();
console.log(obj1.name);
console.log(obj1.getSecretInfo());
console.log(obj1.getSharedInfo());
class Cup {
    capacity = 230;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
const newCup = new Cup(120);
console.log(newCup.capacity); // output: 120 cuz 1choti initialize garna dinxa tespaxi cannot be changed
// getter and setter
// duitai method nai ho
class Sugar {
    _sugar = 0;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        this._sugar = value;
    }
}
const s = new Sugar();
console.log(s.sugar); // getter yesari chaluxa
s.sugar = 123; //setter yesari chaluaxa
console.log(s.sugar);
//static variable j class ma padyo tei ho
class staticExample {
    static ShopName = "Narsimha opticals"; // this can be acccessed wihtout creating an object
}
console.log(staticExample.ShopName);
// abstract class
class Myname {
}
class displayName extends Myname {
    display() {
        console.log("My Name is Sameer Maharjan");
    }
}
