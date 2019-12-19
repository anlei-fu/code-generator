const { getConditions } = require("./../condition-getter");
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderExpression } = require("./expression-render");

const DELETE_RENDER = new SimpleRender({}, `${__dirname}/templates/delete.xml`);


/**
 * Render delete statement
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderDelete(config) {
        let conditions = "";
        getConditions(config).forEach((x, i) => {
                conditions += renderExpression(x);
        });

        let deleteConfig = {
                id: config.id,
                conditions: renderWhere({ content: conditions })
        }

        return DELETE_RENDER.renderTemplate(deleteConfig);
}

exports.renderDelete = renderDelete;