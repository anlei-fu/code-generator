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
         * @param {ConfigGroup} configGroup 
         * @returns {String}
         */
        renderMapper(configGroup) {
                let content = STR.arrayToString1(configGroup.items,
                        config => MAPPER_ITEM_RENDER.renderTemplate(this._getMethodConfig(config, configGroup.name)));

                return MAPPER_RENDER.renderTemplate({ content });
        }

        /**
         * Get mapper item render config
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getMethodConfig(configItem, name) {
                return {
                        name: configItem.id,
                        mapperReturnType: this._getReturnType(configItem, name),
                        mapperParams: this._getArgs(configItem)
                }
        }

        /**
         * Get mapper item params text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _getArgs(configItem) {

                // param generated
                if (configItem.params.doCreate) {
                        if (ReqUtils.hasBatchReq(configItem)) {
                                return `@Param("list")  List<${configItem.params.type}> params`
                        } else {
                                return `${configItem.params.type} param`;
                        }
                }

                let mapperParams = "";
                if (configItem.reqs.length > 1) {
                        mapperParams = STR.arrayToString1(configItem.reqs, x => {
                                return x.isBatch
                                        ? `@Param("${x.name}s") List<${x.type}> ${x.name}, `
                                        : `@Param("${x.name}") ${x.type} ${x.name}, `
                        })
                                .removeLastComa(mapperParams);
                } else {

                        if (configItem.reqs[0].isBatch) {
                                mapperParams = `@Param("list") List<${configItem.reqs[0].type}> ${configItem.reqs[0].name}`;
                        } else {
                                mapperParams = !isJavaBaseType(configItem.reqs[0].type)
                                        ? `${configItem.reqs[0].type} ${configItem.reqs[0].name}`
                                        : `@Param("${configItem.reqs[0].name}") ${configItem.reqs[0].type} ${configItem.reqs[0].name}`;
                        }
                }

                return mapperParams;
        }

        /**
         * Get mapper item return type text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName 
         * @returns {String}
         */
        _getReturnType(configItem, tableName) {

                if (configItem.type != "select")
                        return "int";

                return configItem.resp.single
                        ? configItem.resp.doCreate ? STR.upperFirstLetter(configItem.resp.type) : tableName
                        : configItem.resp.doCreate ? `List<${STR.upperFirstLetter(configItem.resp.type)}>` : `List<${tableName}>`;
        }
}

exports.MapperRender = MapperRender