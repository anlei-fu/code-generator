const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const {STR} =require("./../../../libs/str")

const SELECT_RENDER = new SimpleRender({}, `${__dirname}/templates/select.js`);

/**
 * Render Select filter template
 * 
 * @param {SelectConfig} config 
 * @returns {String}
 */
function renderSelect(config) {
     config.service = STR.upperFirstLetter(config.table);
     config.dicType = config.service.toLowerCase().includes("dictionary") ? `"${config.name}"` : "";
     return SELECT_RENDER.renderTemplate(config);
}

exports.renderSelect = renderSelect;