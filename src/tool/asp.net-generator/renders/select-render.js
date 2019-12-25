const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");

const SELECT_RENDER = new SimpleRender({}, `${__dirname}/templates/select.js`);

/**
 * Render Select filter template
 * 
 * @param {SelectConfig} config 
 * @returns {String}
 */
function renderSelect(config) {
     config.service = config.service || "SystemDictionary";
     config.dicType = config.service == "SystemDictionary" ? "" : "";
     return SELECT_RENDER.renderTemplate(config);
}

exports.renderSelect = renderSelect;