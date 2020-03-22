const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { isJavaBaseType } = require("./../utils");
const { STR } = require("./../../../libs/str");

const MAPPER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper-item.java`);
const MAPPER_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper.java`);

/**
 * Render mapper template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderMapper(config) {
        let content = STR.arrayToString1(config.items, "", "",
                x => MAPPER_ITEM_RENDER.renderTemplate(getMapperItemRenderConfig(x, config.name)));

        return MAPPER_RENDER.renderTemplate({ content });
}

/**
 * Get mapper item render config
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperItemRenderConfig(config, name) {
        return {
                name: config.id,
                mapperReturnType: getMapperItemReturnType(config, name),
                mapperParams: getMapperItemParams(config)
        }
}

/**
 * Get mapper item params text
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperItemParams(config) {

        // param generated
        if (config.params.doCreate)
                return `${config.params.type} params`;

        let mapperParams = "";
        if (config.reqs.length > 1) {
                mapperParams = STR.arrayToString1(config.reqs, "", "",
                        x => `@Param("${x.name}") ${x.type} ${x.name}, `)
                        .removeLastComa(mapperParams);
        } else {
                mapperParams = !isJavaBaseType(config.reqs[0].type)
                        ? `${config.reqs[0].type} ${config.reqs[0].name}`
                        : `@Param("${config.reqs[0].name}") ${config.reqs[0].type} ${config.reqs[0].name}`;
        }

        return mapperParams;
}

/**
 * Get mapper item return type text
 * 
 * @param {Config} config 
 * @param {String} name   table name
 * @returns {String}
 */
function getMapperItemReturnType(config, name) {

        if (config.type != "select")
                return "int";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                : config.resp.doCreate ? `List<${STR.upperFirstLetter(config.resp.type)}>` : `List<${name}>`;
}

exports.renderMapper = renderMapper;