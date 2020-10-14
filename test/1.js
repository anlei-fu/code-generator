const url = require("url");

let parsed = url.parse("https://zhidao.baidu.com/question/567578621.html");
console.log(parsed.host);