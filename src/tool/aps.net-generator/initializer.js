const { OBJECT } = require("./../../libs/utils")
const { STR } = require("./../../libs/str")
const { getCSharpType } = require("./utils")

const { SelectAnalyzer, AddAnalyzer, ControlAnlyzer } = require("./analyzer")
const selectAnalyzer = new SelectAnalyzer();
const addAnalyzer = new AddAnalyzer();
const controlAnlyzer = new ControlAnlyzer();


function init(table, config) {

        OBJECT.forEach(table.columns,(key,value)=>{
               value.type=getCSharpType(value.type);
               console.log(value.type);
        });

        if (config.add || config.edit)
                buildAddConfig(table, config);

        buildSelectConfig(table, config);
        buildTableConfig(table, config);

        if (config.exportExcel)
                buildExportExcel(table, config);

        if (config.importExcel)
                buildImportExcel(table, config);

}

function buildImportExcel(table, config) {
        let importExcelConfig = {
                items: []
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        hearder: value.description,
                        content: "",
                }

                if (controlAnlyzer.shouldBeSelect(value)) {
                        item.content = `@item.GetDataValue("${key}Name")`
                } else {
                        item.content = `@item.${key}`;
                }

                importExcelConfig.items.push(item);
        });

        config.tableConfig = importExcelConfig;
}


function buildExportExcel(table, config) {
        let exportExcelConfig = {
                items: []
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        hearder: value.description,
                        content: "",
                }

                if (controlAnlyzer.shouldBeSelect(value)) {
                        item.content = `@item.GetDataValue("${key}Name")`
                } else {
                        item.content = `@item.${key}`;
                }

                exportExcelConfig.items.push(item);
        });

        config.tableConfig = exportExcelConfig;
}


function buildSelectConfig(table, config) {
        let selectConfig = {
                selects: [],
                texts: [],
        }

        OBJECT.forEach(table.columns, (key, value) => {
                if (!selectAnalyzer.shouldBeCandidate(value))
                        return;

                if (controlAnlyzer.shouldBeSelect(value)) {
                        selectConfig.selects.push(getSelectConfig(value.name, value.description));
                } else {
                        selectConfig.texts.push(getTextConfig(value.name, value.description));
                }
        });

        config.selectConfig = selectConfig;
}

function buildTableConfig(table, config) {
        let tableConfig = {
                items: []
        };

        OBJECT.forEach(table.columns, (key, value) => {
                let item = {
                        hearder: value.description,
                        content: "",
                }

                if (controlAnlyzer.shouldBeSelect(value)) {
                        item.content = `@item.GetDataValue("${key}Name")`
                } else {
                        item.content = `@item.${key}`;
                }

                tableConfig.items.push(item);
        });

        config.tableConfig = tableConfig;
}


function buildAddConfig(table, config) {
        let addConfig = {
                selects: [],
                texts: [],
                required: [],
        };

        OBJECT.forEach(table.columns, (key, value) => {
                if (!addAnalyzer.shouldBeCandidate(value))
                        return;

                if (controlAnlyzer.shouldBeSelect(value)) {
                        addConfig.selects.push(getSelectConfig(value.name, value.description));
                } else {
                        addConfig.texts.push(getTextConfig(value.name, value.description));
                }
        });

        config.addConfig = addConfig;
}

function getSelectConfig(name, description) {
        return {
                name: name,
                service: "",
                lable: description,
                text: "Name",
                value: "Value",
                defaultText: "--请选择--",
        }
}

function getTextConfig(name, description) {
        return {
                name: name,
                lable: description
        }
}

exports.init=init