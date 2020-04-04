const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { ReqUtils } = require("../req-utils");
const { STR } = require("./../../../libs/str");
const { isJavaBaseType } = require("./../utils");

const CONTROLLER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/controller-item.java`);
const CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/controller.java`);

const HTTP_MAPPINGS = new Map();
HTTP_MAPPINGS.set("select", "@GetMapping")
        .set("update", "@PutMapping")
        .set("delete", "@DeleteMapping")
        .set("insert", "@PostMapping");

/**
 * Render controller template
 * 
 * @param {Config} config 
 * @returns {String}
 */
function renderController(config) {
        let content = STR.arrayToString1(config.items,
                x => CONTROLLER_ITEM_RENDER.renderTemplate(getControllerItemConfig(x, config.name)));

        content = content.trimRight() + "\r\n";

        let description = `${config.table.description || config.name}`;
        return CONTROLLER_RENDER.renderTemplate({ description, content, sname: STR.lowerFirstLetter(config.name) });
}

/**
 * Get controller item config
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemConfig(config, configName) {
        let description = config.controller.description || ""
        description = description.replace(/\r\n/g, "");
        return {
                name: config.id,
                httpMapping: getControllerItemHttpMappiAnnotationg(config),
                controllerReturnType: getControllerItemReturnType(config, configName),
                serviceParams: ReqUtils.generateReqParamsWithoutType(config),
                description,
                controllerParams: getControllerItemArgs(config),
                sname: STR.lowerFirstLetter(configName),
        };
}

/**
 * Get controler item params text
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemArgs(config) {
        let args = "";
        config.reqs.forEach(x => {

                if (isJavaBaseType(x.type)) {
                        if (!x.isBatch) {
                                args += `${x.from} ${x.type} ${x.name}, `.trimLeft();
                                return;
                        }
                        args += `${x.from} List<${x.type}> ${x.name}, `.trimLeft();

                        return;
                }

                x.from = x.from || "";
                if (!x.isBatch) {
                        args += `${x.from} @Validated @ModelAttribute ${x.type} ${x.name}, `.trimLeft();
                        return;
                }

                // batch with list
                args += `${x.from} @Validated @ModelAttribute List<${x.type}> ${x.name}, `.trimLeft();
        });

        return STR.removeLastComa(args);
}

/**
 * Get controller ite http mapping annotation text
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemHttpMappiAnnotationg(config) {
        if (!HTTP_MAPPINGS.has(config.type))
                throw new Error(`unexceted type(${config.type})`);

        let path = config.controller.path || `/${this.config.name}/${config.id}`;

        return `${HTTP_MAPPINGS.get(config.type)}(path = "${path}")`;
}

/**
 * Get controller item return type text
 * 
 * @private
 * @param {Config} config 
 * @param {String} configName
 * @returns {String}
 */
function getControllerItemReturnType(config, configName) {
        if (config.type != "select")
                return "R";

        // single or page info
        if (config.resp.single) {
                return config.resp.doCreate
                        ? `R<${STR.upperFirstLetter(config.resp.type)}>`
                        : `R<${configName}>`;
        } else {
                return config.resp.doCreate
                        ? `R<PageInfo<${STR.upperFirstLetter(config.resp.type)}>>`
                        : `R<PageInfo<${configName}>>`;
        }
}

exports.renderController = renderController;