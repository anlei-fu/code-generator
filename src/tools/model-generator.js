const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { FILE, STR } = require("./../libs");
const {JsTypeAnalyzer} =require("./js-type-analyzer")
const { builderGenerator } = require("./js-builder-generator");

let typeAnalyzer = new JsTypeAnalyzer();

const MODEL_RENDER = new SimpleRender({}, `./templates/model.js`);
const MODEL_ITEM_RENDER = new SimpleRender({}, `./templates/model-item.js`);

function main(modelName, items, withBuilder = true) {
        let content = "";
        items.forEach(item => {
                content += MODEL_ITEM_RENDER.renderTemplate({
                        name: item,
                        type1:typeAnalyzer.analyze(item)
                });
        });

        content = MODEL_RENDER.renderTemplate({
                model:STR.upperFirstLetter(modelName),
                content
        });

        if (withBuilder)
                content += builderGenerator(modelName, items);

        FILE.write(`C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/admin-generator/web/model/${modelName}.js`, content);
        return content;

}

/******************************************main**********************************8888*/
// main(
//         "ListColumn",
//         [
//             "field",
//             "lable",
//             "format",
//             "queryField",
//             "selectField",   
//             "mutipleSelect",
//             "timeRangeField",
//             "radioField",
//             "canEdit",
//             "canAdd",
//             "isPkField",
//             "radioConfig",
//             "selectConfig",
//             "timeRangeConfig",
//             "defaultShow",
//             "show",
//             "canExport",
//             "nullValuePlaceHolder",
//             "addDefaultValue",
//             "maxWidth",
//             "minWidth",
//             "sotable",
//             "fixed",
//             "otherTable",
//             "otherTableField",
//             "changeByField",
//             "table",
//             "alias",
//             "javaType",
//             "exportField",
//             "importField"
//         ],
// );

// main("RadioConfig",
// [
//         "options",
//         "defaultSelect",
//         "defaultValue"
// ]
// )

// main("CheckBoxConfig",
// [
//         "options",
//         "defaultSelect",
//         "lable",
//         "width"
// ]
// )

// main("CheckBoxGroupConfig",
// [
//         "options",
//         "defaultSelects",
//         "lable",
//         "width"
// ]
// )

// main("TimeRangeConfig",
// [
//         "startTime",
//         "endTime",
//         "startTimeField",
//         "endTimeField",
//         "format",
//         "clearable",
//         "lable",
//         "width"
// ]
// )

// main(
//         "PageConfig",
//         [
//         "queryFields",
//         "columns",
//         "pkField",
//         "mutitleEdit",
//         "mutipleDelete",
//         "canEdit",
//         "canAdd",
//         "canDelete",
//         "apiPrefix",
//         "pageResult",
//         "pageSize",
//         "table",
//         "tableAlias",
//         "menuName",
//         "routePath",
//         "deleteChecks",
//         "parentMenu",
//         "icon",
//         "joinConfigs",
//         "nameField",
//         "exportCsv",
//         "importCsv",
//         "orderBys"
// ]
// )

// main(
//         "QueryField",
//         [
//                 "field",
//                 "defaultValue",
//                 "type",
//                 "changeBy",
//                 "canEmpty",
//                 "require",
//                 "defaultShow",
//                 "table",
//                 "alias"
//         ]
// )

// main(
//         "JoinConfig",
//         [
//                 "simpleJoin",
//                 "condition",
//                 "selfField",
//                 "selfTable",
//                 "otherTable",
//                 "otherField",
//                 "joinType"
//         ]
// )
// main(
//         "DeleteCheck",
//         ["otherTable",
//         "field",
//         "msg"]
// )

// main(
//         "EditField",
//         [
//                 "validates",
//                 "canEdit",
//                 "canAdd",
//                 "controlType",
//                 "reuireExists"
//         ]
// )
// main(
//         "Casscader",
//         [
//                 "filterField",
//                 "name",
//                 "valuefield",
//                 "nameField"
//         ]

//         )


// main(
//         "manage",
//         [
//                 "tableManage",
//                 "dictionaryManage",
//                 "pageConfigManage",
//                 "menuManage",
//                 "globalConfig"
//         ]
// )
// 2
// main(
//         "table",
//         [
//                 "columns",
//                 "name",
//                 "lable",
//                 "description",
//                 "pkField",
//                 "nameField",
//                 "relations"
//         ]
// )

// main(
//         "Column",
//         [
//                 "name",
//                 "label",
//                 "description",
//                 "javaType",
//                 "nullable",
//                 "defaultValue",
//                 "isPk"
//         ]
// )
// main(
//         "dictionary",
//         [
//                 "name",
//                 "value",
//                 "order",
//                 "color"
//         ]
// )

// main(
//         "OrderBy",
//         [
//                 "field",
//                 "orderByType"
//         ]
// )

// main(
//         "EditConfig",
//         [
//                 "lableWidth",
//                 "rowColumnCount"
//         ]
// )