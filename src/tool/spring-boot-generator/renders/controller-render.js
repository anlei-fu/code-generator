const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { getReqParamsWithoutType } = require("./../req-common");
const { STR } = require("./../../../libs/str");
const { isJavaBaseType: isSimpleJavaType } = require("./../utils");

const _controllerItemRender = new SimpleRender({}, `${__dirname}/templates/controller-item.java`);
const _controllerRender = new SimpleRender({}, `${__dirname}/templates/controller.java`);

const HTTP_MAPPINGS = new Map();
HTTP_MAPPINGS.set("select", "@GetMapping")
        .set("update", "@PutMapping")
        .set("delete", "@DeleteMapping")
        .set("insert", "@PostMapping");

/**
 * Render controller template
 * 
 * @param {Controller} config 
 * @returns {String}
 */
function renderController(config) {
        let content = "";
        config.items.forEach(x => {
                let item = _controllerItemRender.renderTemplate(getControllerItemConfig(x, config.name))
                content += item;

        });

        content = content.trimRight() + "\r\n";

        let description = `${config.table.description || config.name}`;
        return _controllerRender.renderTemplate({ description, content, sname: STR.lowerFirstLetter(config.name) });
}

/**
 * Get controller item config
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemConfig(config, name) {
        return {
                name: config.id,
                httpMapping: getControllerItemHttpMappiAnnotationg(config),
                controllerReturnType: getControllerItemReturnType(config, name),
                serviceParams: getReqParamsWithoutType(config),
                description: config.controller.description || "",
                controllerParams: getControllerItemParams(config),
                sname: STR.lowerFirstLetter(name),
        };
}

/**
 * Get controler item params text
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemParams(config) {
        let params = "";
        config.reqs.forEach(x => {
                x.from = x.from || "";
                params += isSimpleJavaType(x.type)
                        ? `${x.from} ${x.type} ${x.name}, `.trimLeft()
                        : `${x.from} @Validated @ModelAttribute ${x.type} ${x.name}, `.trimLeft();
        });

        return STR.removeLastComa(params);
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

        let path = config.controller.path || `/${this.config.table.name}/${config.id}`;

        return `${HTTP_MAPPINGS.get(config.type)}(path = "${path}")`;
}

/**
 * Get controller item return type text
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItemReturnType(config, name) {
        if (config.type != "select")
                return "R";

        // single or page info
        if (config.resp.single) {
                return config.resp.doCreate
                        ? `R<${STR.upperFirstLetter(config.resp.type)}>`
                        : `R<${name}>`;
        } else {
                return config.resp.doCreate
                        ? `R<PageInfo<${STR.upperFirstLetter(config.resp.type)}>>`
                        : `R<PageInfo<${name}>>`;
        }
}

exports.renderController = renderController;