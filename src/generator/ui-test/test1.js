const { UiCommandBuilder,Point } = require("./UiCommandBuilder");
const { FILE } = require("./../../libs/file");

let builder = new UiCommandBuilder();

function getLocation(x, y) {
        return { x, y }
}











let _modules = {
        contract: getLocation(59, 133),
        user: getLocation(162, 123),
        asset: getLocation(259, 134),

}

let contract = {
        contract: getLocation(107, 276),
        sign: getLocation(114, 331),
}

let config = {
        meal: getLocation(180, 287),
        dic: getLocation(95, 326),
        log: getLocation(95, 378),
        account: getLocation(86, 421),
}


function expand(modules) {
        Object.keys(modules).forEach(x => {
                builder.click(modules[x].x, modules[x].y)
                        .click(30, 193)
                        .wait(1000);
        })
}


function main() {


        let root = "C:/Users/Administrator/Desktop/Projects/ui-test/UiTets/bin/Debug/project/新建文件夹";
        builder.name("test1")
                .description("test1 description")
                // .click(1158,458)
                // .type("fual")
                // .wait(500)
                // .click(1183,501)
                // .type("1qaz2wsx")
                // .click(1206,546)

        expand(_modules);

        _modules.config = getLocation(359, 132);
        gotoPage(_modules.contract, contract.contract);
        builder.click(965,349)
               .wait(500)
               .click(342,290)
               .wait(1000)
               .click(132,345)
               .click(191,453)
               .click(633,489)
               .click(811,291)
               .wait(500)
               .click(811,320)
               .click(965,349)
               .wait(500)
               .click(965,349)
               .wait(10000)
        gotoPage(_modules.contract, contract.sign);
        gotoPage(_modules.config, config.meal);
        gotoPage(_modules.config, config.dic);
        gotoPage(_modules.config, config.log);
        gotoPage(_modules.config,config.account);


        var commands = builder.build();
        FILE.write(`${root}/${commands.Name}.json`, JSON.stringify(commands, null, "\t"));
}

/**
 * 
 * @param {UiCommandBuilder} builder 
 * @param {*} x 
 * @param {*} y 
 * @param {*} x1 
 * @param {*} y1 
 */
function gotoPage(modulePos, menuPos) {
        builder
                .click(modulePos.x, modulePos.y)
                .wait(1500)
                .click(menuPos.x, menuPos.y)
                .wait(3000);
}

main();