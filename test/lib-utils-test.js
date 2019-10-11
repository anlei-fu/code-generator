/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 11:33:37
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-11 14:00:40
 */
const { parseValue } = require("./../src/libs/utils");
const assert = require('assert');

function testParseValue() {
        let s1 = "12",
                s2 = "false",
                s3 = "klk",
                s4 = "12.6";

        let t1 = typeof parseValue(s1),
                t2 = typeof parseValue(s2),
                t3 = typeof parseValue(s3),
                t4 = typeof parseValue(s4);

        console.log([t1, t2, t3, t4]);
        assert(t1 == "number");
        assert(t2 == "boolean");
        assert(t3 == "string");
        assert(t4 == "number");

}
testParseValue();