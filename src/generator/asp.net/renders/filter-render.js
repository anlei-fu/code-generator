const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderText } = require("./text-render");
const { renderSelect } = require("./select-render");

const FILTER_RENDER = new SimpleRender({}, `${__dirname}/templates/filter.html`);
const TIME_FILTER_RENDER = new SimpleRender({}, `${__dirname}/templates/time-filter.cshtml`);

/**
 * Render index.cshtml filters template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderFilter(config) {
   let content = "";

   if(config.selectConfig.timeFilter)
      content+= TIME_FILTER_RENDER.renderTemplate({lable:"创建时间"});

   config.selectConfig.selects.forEach(x => {
      content += renderSelect(x);
   });

   config.selectConfig.texts.forEach(x => {
      content += renderText(x);
   });

   return FILTER_RENDER.renderTemplate({ content }).trimRight();
}

exports.renderFilter = renderFilter;