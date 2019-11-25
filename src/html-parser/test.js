/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-25 09:09:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 16:34:00
 */
const { FILE } = require("./../libs/file");
const { parse } = require("./parseCore");
const { NodeUtils } = require("./htmlParser");

function test() {
        let node = parse(FILE.read("./1.html"));
        console.log(NodeUtils.getInnerText(node,true));
}

test();    