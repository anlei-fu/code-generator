const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { isJavaBaseType } = require("./../utils");
const { STR } = require("./../../../libs/str");
const { ReqUtils } = require("./../req-utils");

const MAPPER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper-item.java`);
const MAPPER_RENDER = new SimpleRender({}, `${__dirname}/templates/mapper.java`);

class MapperRender {
        /**
         * Render mapper template
         * 
         * @param {GeneratorConfig} config 
         * @returns {String}
         */
        renderMapper(config) {
                let content = STR.arrayToString1(config.items,
                        x => MAPPER_ITEM_RENDER.renderTemplate(this._getMapperItemRenderConfig(x, config.name)));

                return MAPPER_RENDER.renderTemplate({ content });
        }

        /**
         * Get mapper item render config
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getMapperItemRenderConfig(config, name) {
                return {
                        name: config.id,
                        mapperReturnType: this._getMapperItemReturnType(config, name),
                        mapperParams: this._getMapperItemParams(config)
                }
        }

        /**
         * Get mapper item params text
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getMapperItemParams(config) {

                // param generated
                if (config.params.doCreate) {
                        if (ReqUtils.hasBatchReq(config)) {
                                return `@Param("list")  List<${config.params.type}> params`
                        } else {
                                return `${config.params.type} param`;
                        }
                }

                let mapperParams = "";
                if (config.reqs.length > 1) {
                        mapperParams = STR.arrayToString1(config.reqs, x => {
                                return x.isBatch
                                        ? `@Param("${x.name}s") List<${x.type}> ${x.name}, `
                                        : `@Param("${x.name}") ${x.type} ${x.name}, `
                        })
                                .removeLastComa(mapperParams);
                } else {

                        if (config.reqs[0].isBatch) {
                                mapperParams = `@Param("list") List<${config.reqs[0].type}> ${config.reqs[0].name}`;
                        } else {
                                mapperParams = !isJavaBaseType(config.reqs[0].type)
                                        ? `${config.reqs[0].type} ${config.reqs[0].name}`
                                        : `@Param("${config.reqs[0].name}") ${config.reqs[0].type} ${config.reqs[0].name}`;
                        }
                }

                return mapperParams;
        }

        /**
         * Get mapper item return type text
         * 
         * @private
         * @param {Config} config 
         * @param {String} name   table name
         * @returns {String}
         */
        _getMapperItemReturnType(config, name) {

                if (config.type != "select")
                        return "int";

                return config.resp.single
                        ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : name
                        : config.resp.doCreate ? `List<${STR.upperFirstLetter(config.resp.type)}>` : `List<${name}>`;
        }
}

exports.MapperRender = MapperRender