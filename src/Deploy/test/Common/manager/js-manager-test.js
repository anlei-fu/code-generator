const { JsManager } = require("./../../../common/manager/JsManager");

function test() {
        let manager = new JsManager(`${__dirname}/../../resource`);
        let main = manager.getMain("1.js");
        main("haha");
}

/*********************************************test****************************************************** */
test();
