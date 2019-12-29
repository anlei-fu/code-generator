const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderColumn } = require("./column-render");
const { renderConditions } = require("./conditions-render");
const { renderIncludes } = require("./includes-render");

const UPDATE_RENDER = new SimpleRender({}, `${__dirname}/templates/update.xml`);

/**
 * Render update sql template
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderUpdate(config) {
        let updateModel = {
                id: config.id,
                columns: renderIncludes(config),
                conditions: renderConditions(config)
        }

        return UPDATE_RENDER.renderTemplate(updateModel);
}

exports.renderUpdate = renderUpdate;
