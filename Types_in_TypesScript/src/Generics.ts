//Generics just like java ho
// Yesma yesto function banauna khojxa jasle jasto type ko ni data ni lina sakos with typesafety

// mostly used in building libraries, frameworks testo 
function GenericsExample<T>(data:T): T[]{ //yesari jun pani data type haru lina sakinxa yesbata
    return [data];
}
GenericsExample("Sameer");
GenericsExample(78);
GenericsExample({name:"Sameer",age:23});

function pair<A,B>(a:A,b:B) : [A,B]{ // A and B are datatype that can be both same or diffierent
return [a,b]
// return[b,a]// yo garna mildaina tuples concept nai ho yo
}

pair("masala","chai");
pair("masala", 23)
pair({name:"sameer"},{age:23})

//interface banauna ni milxa interface bata
interface Box<T>{
    content: T
}

const NumberBox: Box<number> = {content: 12}
const StringBox: Box<string> = {content: "sameer"}
