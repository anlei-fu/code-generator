const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { OBJECT } = require("../../../libs/utils");
const { renderGetCountSql } = require("./get-count-render");
const { renderGetListSql } = require("./getList-sql-render");

const ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/entity-config-item.xml`);
const ENTITY_RENDER = new SimpleRender({}, `${__dirname}/templates/entity-config.xml`);

/**
 * Render entity config template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderEntityConfig(config) {
        let renderConfig = {
                name: config.table.rawName,
                getList: renderGetListSql(config),
                getCount: renderGetCountSql(config),
                fields: renderFields(config.table)
        }

        return ENTITY_RENDER.renderTemplate(renderConfig);
}

/**
 * Render fields template
 * 
 * @param {Table} table 
 * @returns {String}
 */
function renderFields(table) {
        let content = "";
        OBJECT.forEach(table.columns, (key, value) => {
                let itemConfig = {
                        isPk: "",
                        valueSql: "",
                        buildType: "",
                        lable: value.description,
                        name: value.name,
                        rawName: value.rawName
                };

                // process primary key column
                if (value.isPk) {
                        itemConfig.isPk = ` isPk="true" `;
                        itemConfig.valueSql = ` valueSql=""`;
                        itemConfig.buildType = ` buildType="0" `;
                }

                content += ITEM_RENDER.renderTemplate(itemConfig);
        });

        return content.trimRight();
}

exports.renderEntityConfig = renderEntityConfig;