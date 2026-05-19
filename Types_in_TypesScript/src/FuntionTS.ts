
//defining types in the parameter
function MakeChai(name:String, cups:number){
    console.log(name,cups)
}

MakeChai("MasalaChai", 12)


// return value types
function getChaiPrice():number{ // return type number huna parxa natra error auxa
    return 35
    // return "30"// yo garna mildaina
}

function makeOrder(order: String): String| null{ //by default ni yeii infer garxa String|null bhanera
    if (!order) return null
    return order
}
makeOrder("this is order")


function Noreturn():void{// yo funciton le kei pani return gardaina
    console.log("This function does not return anything")

}

//optional and default parameters
//optional and default parameters are writeen at last of parameters

// optional Parameter
function OrderChai1(type?: String){
if(type){
    console.log("this chai is of type"+ type);
}
console.log("No type defined")
}
OrderChai1()
OrderChai1("Masala")

//default Parameter
// similar to optinal just farak diyena bhane tyo default value rakhdinxa

function DefaultValue(name:string = "Guest"){
    console.log("Hello "+name)
}

DefaultValue();
DefaultValue("sameer")

// complex datatype 
function Objectfunc(person:{name:String, age: number}){
    console.log(person)
}