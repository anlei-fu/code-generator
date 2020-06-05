/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 10:42:20
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 14:09:57
 */

 console.log("".say)

 String.prototype.say=()=>{
         console.log("i'm saying!");
 }

 "12".say();

function test1() {
        a=new Set();

        console.log("undefied")
        console.log(undefined==null);

        console.log([].constructor == Array);
        
        console.log(undefined instanceof Object);

        console.log("string test")
        console.log(typeof "as");
        console.log("stri" instanceof String);
        console.log("stri".constructor == String)
       
        console.log("\r\n\r\n");

        console.log("funtion test");
        console.log(test1 instanceof Function)
        console.log(test1.constructor==Function)
        console.log("\r\n\r\n");
      
        console.log("number test");
        console.log(123 instanceof Number);
        console.log((123).constructor == Number);
        console.log("\r\n\r\n");

        console.log("boolean test");
        console.log(true instanceof Boolean);
        console.log(true.constructor == Boolean);
}

test1();