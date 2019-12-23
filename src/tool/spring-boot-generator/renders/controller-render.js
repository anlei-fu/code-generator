const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { getReqParamsWithoutType } = require("./../req-common")
const { STR } = require("./../../../libs/str")
const { isSimpleJavaType } = require("./../utils")

const _controllerItemRender = new SimpleRender({}, `${__dirname}/templates/controller-item.java`);
const _controllerRender = new SimpleRender({}, `${__dirname}/templates/controller.java`);

const HTTP_MAPPINGS = new Map();
HTTP_MAPPINGS.set("select", "@GetMapping")
        .set("update", "@PutMapping")
        .set("delete", "@DeleteMapping")
        .set("insert", "@PostMapping");

/**
 * 
 * @param {Controller} config 
 * @returns {String}
 */
function renderController(config) {
        let content = "";
        config.items.forEach(x => {
                let item=_controllerItemRender.renderTemplate(getControllerItem(x, config.name))
                content +=item;
        });

        content=content.trimRight()+"\r\n";

        return _controllerRender.renderTemplate({ content,sname:STR.lowerFirstLetter(config.name) });
}

/**
 * Get controller item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getControllerItem(config, name) {
        return {
                name: config.id,
                httpMapping: getHttpMapping(config),
                controllerReturnType: getControllerReturnType(config, name),
                serviceParams: getReqParamsWithoutType(config),
                description: config.controller.description || "",
                controllerParams: getControllerParams(config),
                sname: STR.lowerFirstLetter(name),
        };
}

/**
 * Get controler params 
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerParams(config) {
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
 * Get http mapping annotation
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getHttpMapping(config) {
        if (!HTTP_MAPPINGS.has(config.type))
                throw new Error(`unexceted type(${config.type})`);

        let path = config.controller.path || `/${this.config.table.name}/${config.id}`;

        return `${HTTP_MAPPINGS.get(config.type)}(path = "${path}")`;
}

/**
 * Get controller return type
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function getControllerReturnType(config, name) {
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