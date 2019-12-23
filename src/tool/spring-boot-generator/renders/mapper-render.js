const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const {isSimpleJavaType}=require("./../utils");
const {STR} =require("./../../../libs/str")

const MAPPER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper-item.java`);
const MAPPER_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper.java`);

/**
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderMapper(config) {
        let content = "";
        config.items.forEach(x => {
                let item = getMapperItem(x, config.name);
                content += MAPPER_ITEM_RENDER.renderTemplate(item);
        });

        content=content.trimRight()+"\r\n";

        return MAPPER_RENDER.renderTemplate({ content });
}

/**
 * Get mapper interface item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperItem(config, name) {
        return {
                name: config.id,
                mapperReturnType: getMapperReturnType(config, name),
                mapperParams: getMapperParams(config)
        }
}

/**
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperParams(config) {

        if (config.params.doCreate)
                return `${STR.upperFirstLetter(config.params.name)} params`;

        let mapperParams = "";
        if (config.reqs.length > 1) {
                config.reqs.forEach(x => {
                        mapperParams += `@Params("${x.name}") ${x.type} ${x.name}, `;
                });
                mapperParams = STR.removeLastComa(mapperParams);
        } else {
                mapperParams = !isSimpleJavaType(config.reqs[0].type)
                        ? `${config.reqs[0].type} ${config.reqs[0].name}`
                        : `@Params("${config.reqs[0].name}") ${config.reqs[0].type} ${config.reqs[0].name}`;
        }

        return mapperParams;
}

/**
 * 
 * @param {Config} config 
 * @param {String} name   table name
 * @returns {String}
 */
function getMapperReturnType(config, name) {

        if (config.type != "select")
                return "int";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `List<${STR.upperFirstLetter(config.resp.type)}>` : `List<${name}>`;
}

exports.renderMapper = renderMapper;