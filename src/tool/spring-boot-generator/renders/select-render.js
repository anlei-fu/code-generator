const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderJoin } = require("./join-render");
const { renderConditions } = require("./conditions-render");
const { renderIncludes } = require("./includes-render");


const SELECT_RENDER = new SimpleRender({}, `${__dirname}/templates/select.xml`);

/**
 * Render select statement
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderSelect(config) {
        let joins = "";
        config.joins.forEach(x => {
                joins += renderJoin(x);
        });

        let selectModel = {
                table: config.table.name,
                columns: renderIncludes(config),
                conditions: renderConditions(config),
                joins: joins,
                id: config.id
        };

        return SELECT_RENDER.renderTemplate(selectModel);
}

exports.renderSelect = renderSelect;
