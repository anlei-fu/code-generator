/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-23 09:48:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-23 09:56:51
 */

const { OBJECT } = require("./../src/libs/utils");
function testObject() {
        let obj = {a:{name:"1", age:2},b:{name:"1", age:2}};
        console.log(OBJECT.toArray(obj));
}
testObject();