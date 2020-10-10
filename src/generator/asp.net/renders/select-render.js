const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { STR } = require("./../../../libs/str")

const SELECT_RENDER = new SimpleRender({}, `${__dirname}/templates/select.js`);

/**
 * Render Select filter template
 * 
 * @param {SelectConfig} config 
 * @returns {String}
 */
function renderSelect(config) {

     config.text = STR.upperFirstLetter(config.text);
     config.value = STR.upperFirstLetter(config.value);

     if (config.table.toLowerCase().includes("dictionary")) {
          config.dicType = `"${config.name}"`;
          config.serviceName = config.dictionaryServiceName;
          config.serviceMethod = config.dictionaryMethod;

     } else {

          if (config.upperTowLetter) {
               config.serviceName = config.table.substr(0, 2).toUpperCase() + config.table.substr(2, config.table.length - 2);
          } else {
               config.serviceName = STR.upperFirstLetter(config.table);
          }

          config.dicType = "";
          config.serviceMethod = "GetDataList";
     }

     return SELECT_RENDER.renderTemplate(config);
}

exports.renderSelect = renderSelect;