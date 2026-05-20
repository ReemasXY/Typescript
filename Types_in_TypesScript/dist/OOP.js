"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=OOP.js.map