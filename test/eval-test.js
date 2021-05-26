const { STR } = require("../src/libs");

let text = "(x)=>console.log(STR1.remove(x.name))";

let f = eval(text);
f({ name: 1 });
