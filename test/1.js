let  url="/info/{id}/{pic}";
let reg=/\{[a-zA-Z]*\}/g

console.log(url.match(reg));