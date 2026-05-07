"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union means | in ts
//for example
let a; // yesma aba a ma ki number ki string duitai rakhna milxa bhana khojeko ho
// tara SAKESAMMA AVOID USING UNION TYPES
// unions ma just default datatype matra haina ki custom type ya value ni rakhna milxa
let b; // yesma aba b ma ki sameer ki suman rakhna milxa bhana khojeko ho
// yesma aba b ma sameer ya suman matra rakhna milxa 
// aru rakhna mildaina
// let c: "minisha"= "sammer"// yesto garna milena
let c;
c = "minisha"; // yesma aba c ma minisha matra rakhna milxa
//ANY any bhanna le variable ma j sukai type ko value rakhna milxa
let d; // yo bhaneko any infer garxa yesle default kinaki thanaixaina k auxa bhanera
d = 10; // d ma number rakhna milxa
d = "sameer"; // d ma string rakhna milxa
//yesto kei error audaina 
// tara sakesamma union ra any use garnu hudaina natra typescript use gareko sense nai banaudaina
//# sourceMappingURL=union&and.js.map