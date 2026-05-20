class Chai {
  flavour: string;
  price: number;

  constructor(flavour: string, price: number) {
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
  public name: string = "sameer"; // can be accessed from every where
  private secretInfo: string = "Matina"; // can be accessed inside class only and through getters

  // #secretInfo this is also private modifier #
  protected sharedInfo: string = "BIM B"; // can be accessed inside class and inherited class

  getSecretInfo(): string {
    //geter haina just a method ho
    return this.secretInfo;
  }
}

class example extends ModifierExample {
  getSharedInfo(): string {
    return this.sharedInfo;
  }
}

const obj1 = new example();
console.log(obj1.name);
console.log(obj1.getSecretInfo());
console.log(obj1.getSharedInfo());

class Cup {
  readonly capacity: number = 230;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
const newCup = new Cup(120);
console.log(newCup.capacity); // output: 120 cuz 1choti initialize garna dinxa tespaxi cannot be changed

// getter and setter
// duitai method nai ho
class Sugar {
  private _sugar: number = 0;

  get sugar(): number {  // normal method jasari call garna mildaina
    return this._sugar;
  }

  set sugar(value: number) { // normal method jasari call garna mildaina
    this._sugar = value;
  }
}

const s= new Sugar();
console.log(s.sugar)// getter yesari chaluxa
s.sugar= 123 //setter yesari chaluaxa
console.log(s.sugar)


//static variable j class ma padyo tei ho
class staticExample{
    public static  ShopName= "Narsimha opticals";// this can be acccessed wihtout creating an object
}

console.log(staticExample.ShopName)

// abstract class
abstract class Myname{
    abstract display():void 
}

class displayName extends Myname{
    display(): void {
        console.log(
            "My Name is Sameer Maharjan"
        )
    }
}