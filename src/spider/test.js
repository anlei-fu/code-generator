const { FILE } = require("./../libs/file");
const { parse } = require("./parseCore");
const { NodeUtils } = require("./htmlParser");

function test() {
        let node = parse(FILE.read("./1.html"));
        console.log(NodeUtils.getInnerText(node,true));
}

test();    