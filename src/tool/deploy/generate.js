/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 13:33:33
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-16 16:28:37
 */
const { FILE } = require("./../../libs/file");
let moudules = "[";
FILE.read("moudules.txt").split(",").forEach(x => {
    moudules += `"${x.trim()}",`;
})

moudules = (moudules + "]").replace(",]", "]").trim();
console.log(moudules);
FILE.write("index.js",
    FILE.read("template.js")
        .replace("@moudules", moudules));
FILE.write("moudules.txt", "");
