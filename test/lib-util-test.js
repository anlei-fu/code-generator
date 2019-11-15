/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-23 09:48:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 10:21:41
 */

const { OBJECT } = require("./../src/libs/utils");
const { FILE } = require("./../src/libs/file");
function testObject() {
        let a = {
                name: "aaa",
                age: 14,
                parent: {
                        name: "aaa",
                        age: 14,
                }
        }

        FILE.write("1.js", OBJECT.text(a, "a"));
}
testObject();