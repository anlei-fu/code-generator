const { STR, DIR, FILE } = require("../../libs");
const { SimpleRender } = require("./../common");

class ConfigGroup {
        constructor () {
                this.name;
                this.configItems;
        }
}

class ConfigItem {
        constructor () {
                this.name;
                this.method;
                this.path;
                this.description;
        }
}

const ITEM_RENDER = new SimpleRender({}, `${__dirname}/template/func-item.js`);
const CLASS_RENDER = new SimpleRender({}, `${__dirname}/template/class.js`);
const WEB_CLASS_RENDER = new SimpleRender({}, `${__dirname}/template/class-web.js`);



class ApiGenerator {
        constructor (outputFolder = `${__dirname}/output`) {
                this._outputFolder = outputFolder;
                DIR.create(outputFolder);
        }

        /**
         * Generate http visitor
         * 
         * @param {ConfigGroup} configGroup 
         */
        generate(configGroup) {
                configGroup.content = STR.arrayToString1(configGroup.items, x => ITEM_RENDER.renderTemplate(x));
                FILE.write(`${this._outputFolder}/${configGroup.name}.js`, CLASS_RENDER.renderTemplate(configGroup));
        }

        generateWeb(configGroup){
                configGroup.content = STR.arrayToString1(configGroup.items, x => ITEM_RENDER.renderTemplate(x));
                FILE.write(`${this._outputFolder}/${configGroup.name}.js`, WEB_CLASS_RENDER.renderTemplate(configGroup));
        }
}

exports.ApiGenerator = ApiGenerator