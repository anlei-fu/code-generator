const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { OBJECT } = require("./../../../libs/utils");
const { STR } = require("./../../../libs/str");
const { renderExportExcelController } = require("./export-excel-render");

const CONTROLLER_RENDER = new SimpleRender({}, `${__dirname}/templates/controller.cs`);

/**
 * Render controller template
 * 
 * @param {GeneratorConfig} config 
 */
function renderController(config) {
        let content = "";
        if (config.exportExcel)
                content += renderExportExcelController(config);

        if (config.importExcel)
                content += "";

        let controllerModel = {
                content,
                addContent:renderInsertConfig(config),
                updateContent:renderUpdateConfig(config)
        }

        return CONTROLLER_RENDER.renderTemplate(controllerModel);
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
                        content += `entity.${STR.upperFirstLetter(columnName)}= LoginStatus.UserName;\r\n`;

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["edittime", "updatetime", "editdate", "updatedate"]))
                        content += `entity.${STR.upperFirstLetter(columnName)}= DateTime.Now;\r\n`;
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
                        content += `entity.${STR.upperFirstLetter(columnName)}= LoginStatus.UserName;\r\n`;

                if (STR.includesAny(columnName.toLocaleLowerCase(), ["createtime", "createdate"]))
                        content += `entity.${STR.upperFirstLetter(columnName)}= DateTime.Now;\r\n`;
        });

        return content;
}

exports.renderController = renderController;