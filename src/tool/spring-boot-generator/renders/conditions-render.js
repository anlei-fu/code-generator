const { getConditions } = require("./../condition-getter");
const { renderAsign } = require("./assign-render");
const { renderExpression } = require("./expression-render");
const { renderWhere } = require("./where-render");

/**
 * Render sql where clause
 * 
 * @param {Config} config 
 */
function renderConditions(config) {
        let conditions = "";
        getConditions(config).forEach((x, i) => {
                x.prefix = i == 0 ? "" : "and ";
                conditions += x.expression ? renderExpression(x) : renderAsign(x);
        });

        return renderWhere({ content: conditions });
}

exports.renderConditions = renderConditions;