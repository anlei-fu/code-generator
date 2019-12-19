const { getIncludes } = require("./../includes-getter");
const { getConditions } = require("./../condition-getter");
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderColumn } = require("./column-render");
const { renderExpression } = require("./expression-render");

const UPDATE_RENDER = new SimpleRender({}, `${__dirname}/templates/update.xml`);

/**
 * Render update statement
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderUpdate(config) {
        let columns = "";
        getIncludes(config).forEach((x, i, array) => {
                columns + renderColumn(x);
        });

        let conditions = "";
        getConditions(config).forEach((x, i) => {
                conditions += renderExpression(x);
        });

        let updateModel = {
                id: config.id,
                columns: renderTrim({ content: columns }),
                conditions: renderWhere({ content: conditions })
        }

        return UPDATE_RENDER.renderTemplate(updateModel);
}

exports.renderUpdate = renderUpdate;
