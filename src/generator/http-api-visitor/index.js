const { ApiGenerator } = require("./ApiGenerator");
const { ControllerApiAnalyzer } = require("./ControllerApiAnalyzer");
const { SimpleRender } = require("./../common");
const { STR ,FILE} = require("../../libs");
const IMPORT_ITEM_RENDER = new SimpleRender({}, `${__dirname}/template/import-item.js`);
const INDEX_WEB_RENDER = new SimpleRender({}, `${__dirname}/template/index-web.js`);


function main(outputFolder) {
        let generator = new ApiGenerator(outputFolder);
        let analyzer = new ControllerApiAnalyzer();
        let configs = analyzer.analyze("D:/project/code-generator/src/generator/spring-boot/project/crud/crud/src/main/java/com/jasmine/crud/controller");
        configs.forEach(x => {
                generator.generateWeb(x);
        });

        let imports = STR.arrayToString1(configs, x => IMPORT_ITEM_RENDER.renderTemplate(x));
        let items = STR.arrayToString1(configs, x => x.sname+",\r\n",);
        FILE.write(`${outputFolder}/index.js`, INDEX_WEB_RENDER.renderTemplate({ imports, items }));
}

main("./output/crud");