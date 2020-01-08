const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderConditions } = require("./conditions-render");

const DELETE_RENDER = new SimpleRender({}, `${__dirname}/templates/delete.xml`);


/**
 * Render delete sql template
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderDelete(config) {
        let deleteModel = {
                id: config.id,
                where: renderConditions(config)
        }

        return DELETE_RENDER.renderTemplate(deleteModel);
}

exports.renderDelete = renderDelete;