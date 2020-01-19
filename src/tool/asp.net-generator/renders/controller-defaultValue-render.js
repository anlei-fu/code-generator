const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { OBJECT } = require("./../../../libs/utils");
const { STR } = require("./../../../libs/str");

const CONTROLLER_DEFAULT_VALUE_RENDER = new SimpleRender({}, `${__dirname}/templates/controller-defaultValue.cs`);

/**
 * 
 * @param {Config} config
 * @returns {String} 
 */
function renderControllerDefaultValue(config) {
        let updateContent = renderUpdateConfig(config);
        let insertContent = renderInsertConfig(config);
        if (updateContent == "" && insertContent == "")
                return "";

        return CONTROLLER_DEFAULT_VALUE_RENDER.renderTemplate({ updateConfig: updateContent, insertConfig: insertContent });
}

/**
 * 
 * @param {GeneratorConfig} config
 * @returns {String} 
 */
function renderUpdateConfig(config) {
        let content = "";
        OBJECT.forEach(config.table.columns, (columnName, _) => {

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["edituser", "updateuser"]))
                        content += `                    entity.${STR.upperFirstLetter(columnName)}= LoginStatus.UserName;\r\n`;

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["edittime", "updatetime", "editdate", "updatedate"]))
                        content += `                    entity.${STR.upperFirstLetter(columnName)}= DateTime.Now;\r\n`;
        });

        return content;
}

/**
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderInsertConfig(config) {
        let content = "";
        OBJECT.forEach(config.table.columns, (columnName, _) => {

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["createuser"]))
                        content += `                    entity.${STR.upperFirstLetter(columnName)}= LoginStatus.UserName;\r\n`;

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["createtime", "createdate"]))
                        content += `                    entity.${STR.upperFirstLetter(columnName)}= DateTime.Now;\r\n`;
        });

        return content;
}

exports.renderControllerDefaultValue=renderControllerDefaultValue;