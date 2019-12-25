const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderAddJs } = require("./addRender");
const { renderBatchSelectJs } = require("./batch-select-render");
const { renderDeleteJs } = require("./delete-render");

const JS_RENDER = new SimpleRender({}, `${__dirname}/templates/js.js`);

/**
 * Render index js template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderJs(config) {
  let content = "";

  if (config.batchOperation)
    content += renderBatchSelectJs();

  if (config.delete)
    content += renderDeleteJs(config);

  if (config.add || config.edit)
    content += renderAddJs(config);

  if (config.exportExcel) {

  }

  if (config.importExcel) {

  }

  return JS_RENDER.renderTemplate({ content });

}

exports.renderJs = renderJs;