/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-16 09:15:03
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-16 10:39:14
 */
const assert=require("assert");
function testExtension(){
        let a=[1,2,4];
        b=[...a];
       // console.log(...a);
       // console.log(b);
}
//testExtensionOperator();

testExtension.prototype.a=()=>{return "扩展1";};
testExtension.prototype.b=()=>{return "扩展2";};

let c= new testExtension();
console.log(testExtension.a);
console.log(c.a());
console.log(c.b());


function testExtensionOperator(){
       
        let a=[1,2,4];
        console.log(...a);
        let b=[...a];
        a.push(3);
        console.log(b);
        assert.equal(b.length,3);

        let c={"g":1,"e":2};
        let {g,e}={...c};
        console.log("g is "+g);
        assert.equal(e,2);

        console.log([c]);

        console.log(Object);
}

testExtensionOperator();

function testDate(){
        let d= new Date(Date.now());
        console.log("raw toString:"+d);
        console.log("toLocalString"+d.toLocaleDateString());
        console.log("toLocalDateString"+d.toLocaleDateString());
        console.log("toLocalTimeString"+d.toLocaleTimeString());
}

testDate();
