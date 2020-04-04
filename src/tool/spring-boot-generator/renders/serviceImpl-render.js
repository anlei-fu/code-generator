const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { ReqUtils } = require("../req-utils")
const { STR } = require("./../../../libs/str")
const SERVICE_IMPL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_PAGE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-page.java`);
const SERVICE_IMPL_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

/**
 * Render service impl template
 * 
 * @param {Config} config 
 * @returns {String}
 */
function renderServiceImpl(config) {
        let content = "";
        config.items.forEach(x => {
                let item = getServiceImplItemConfig(x, config.name);
                content += x.type == "select" && !x.resp.single
                        ? STR.removeEmptyLine(SERVICE_IMPL_PAGE_ITEM_RENDER.renderTemplate(item)) + "\r\n"
                        : STR.removeEmptyLine(SERVICE_IMPL_ITEM_RENDER.renderTemplate(item)) + "\r\n";
        });

        content = content.trimRight() + "\r\n";
        return SERVICE_IMPL_RENDER.renderTemplate({ name: config.name, content, sname: STR.lowerFirstLetter(config.name) });
}

/**
 * Get service impl item config
 *  public @serviceImplReturnType  @name(@serviceImplParams){
 *         @content
 *       return @mapper(@serviceImplMapperParams)@suffix;
 *  }
 * 
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getServiceImplItemConfig(config, name) {
        return {
                name: config.id,
                serviceImplParams:ReqUtils.generateReqParamsWithType(config),
                serviceImplReturnType: getServiceImplItemReturnType(config, name),
                serviceImplMapperParams: config.params.doCreate ? "params" :ReqUtils.generateReqParamsWithoutType(config),
                suffix: config.type == "select" ? hasBatchReq(config)?"":" > 0":"",
                content: !config.params.doCreate ? "" : renderServiceImplContent(config),
                sname: STR.lowerFirstLetter(name)
        };
}

/**
 * Render service impl content  template
 * if params ,create instance and set default values
 * 
 * @private
 * @param {Config} config 
 * @returns {String}
 */
function renderServiceImplContent(config) {

        let content="";
        if (!hasBatchReq(config)) {
                 content = `${config.params.type} params = new ${config.params.type}(@params);`;
                content = content.replace("@params", ReqUtils.generateReqParamsWithoutType(config));

                // if has default values, generate set expression
                if (config.params.defaultValues) {
                        config.params.defaultValues.forEach((value, key) => {
                                content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                        });
                }

                return content;
        } else {
                let reqType="";
                let reqName="";
                 content=`List<${config.params.type}> params = new ArrayList<>;\r\n`;
                 content+=`        for ( final type item : req) {\r\n                params.add(new ${config.params.type}(@params)); \r\n        }`;
                 content = content.replace("@params", ReqUtils.generateReqParamsWithoutType(config));
        }

        return content;
}

function hasBatchReq(config) {
        for (const req of config.reqs) {
                if (req.isBatch)
                        return true;
        }

        return false;
}

/**
 * Get service impl item return type text
 * 
 * @param {Config} config 
 * @param {String} name
 * @returns {String} 
 */
function getServiceImplItemReturnType(config, name) {
        if (config.type == "select"){
                return hasBatchReq(config)?"int":"boolean";
        }
              

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>` : `PageInfo<${name}>`;
}





exports.renderServiceImpl = renderServiceImpl