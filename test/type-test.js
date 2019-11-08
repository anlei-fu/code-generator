/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 10:42:20
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 14:09:57
 */

 String.prototype.say=()=>{
         console.log("i'm saying!");
 }

 "12".say();

function test1() {
        a=new Set();
        console.log([].constructor == Array);
        console.log(undefined instanceof Object);
        console.log("stri" instanceof String);
        console.log((123).constructor == Number);
        console.log(true.constructor == Boolean);
}
test1();