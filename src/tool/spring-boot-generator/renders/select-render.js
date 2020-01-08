const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderJoin } = require("./join-render");
const { renderConditions } = require("./conditions-render");
const { getIncludes } = require("./../includes-getter");
const { renderColumn } = require("./column-render");
const { STR } = require("./../../../libs/str");

const SELECT_RENDER = new SimpleRender({}, `${__dirname}/templates/select.xml`);

/**
 * Render select sql template
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderSelect(config) {
        let joins = "";
        config.joins.forEach(join => {
                joins += renderJoin(join);
        });

        let columns = "";
        getIncludes(config).forEach((x, i, array) => {
                x.suffix = i == array.length - 1 ? "" : ",";
                columns += renderColumn(x);
        });

        let parameterType;
        if (config.params.doCreate) {
                parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
        } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
        }

        let selectModel = {
                alias:config.alias||"",
                columns,
                resultType: config.resp.doCreate ? `resp.${config.resp.type}` : `entity.${STR.upperFirstLetter(config.table.name)}`,
                where: renderConditions(config),
                joins: joins,
                id: config.id,
                parameterType: parameterType || ""
        };

        return SELECT_RENDER.renderTemplate(selectModel);
}

exports.renderSelect = renderSelect;
