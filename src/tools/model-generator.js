const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { FILE, STR } = require("./../libs");
const { JsTypeAnalyzer } = require("./js-type-analyzer")
const { builderGenerator } = require("./js-builder-generator");

let typeAnalyzer = new JsTypeAnalyzer();

const MODEL_RENDER = new SimpleRender({}, `./templates/model.js`);
const MODEL_ITEM_RENDER = new SimpleRender({}, `./templates/model-item.js`);

function main(modelName, items, withBuilder = true) {
        let content = "";
        items.forEach(item => {
                content += MODEL_ITEM_RENDER.renderTemplate({
                        name: item,
                        type1: typeAnalyzer.analyze(item)
                });
        });

        content = MODEL_RENDER.renderTemplate({
                model: STR.upperFirstLetter(modelName),
                content
        });

        if (withBuilder)
                content += builderGenerator(modelName, items);

        FILE.write(`D:/project/code-generator/src/generator/spring-boot/admin-generator/web/model/${modelName}.js`, content);
        return content;

}

/******************************************main**********************************8888*/
main(
        "Fields",
        [
                "field",
                "lable",
                "format",
                //     "queryField",
                //     "selectField",   
                //     "mutipleSelect",
                //     "timeRangeField",
                //     "radioField",
                //     "canEdit",
                //     "canAdd",
                //     "isPkField",
                //     "radioConfig",
                //     "selectConfig",
                //     "timeRangeConfig",
                "defaultShow",
                "show",
                "canExport",
                "canImport",
                "nullValuePlaceHolder",
                //     "addDefaultValue",
                "maxWidth",
                "minWidth",
                "sotable",
                "fixed",
                "fixedPosition",
                "otherTable",
                "otherTableField",
                //     "changeByField",
                "table",
                "alias",
                "javaType",
                //     "exportField",
                //     "importField"
        ],
);

main("RadioConfig",
        [
                "options",
                "label",
                "width"
        ]
)

main("CheckBoxConfig",
        [
                "options",
                "lable",
                "width"
        ]
)

main("CheckBoxGroupConfig",
        [
                "options",
                "lable",
                "width"
        ]
)

main("TimeRangeConfig",
        [
                "startTime",
                "endTime",
                "startTimeField",
                "endTimeField",
                "format",
                "clearable",
                "lable",
                "width"
        ]
)

main(
        "PageConfig",
        [
        "queryFields",
        "fields",
        "pkField",
        "mutitleEdit",
        "mutipleDelete",
        "mutipleOperations",
        "operations",
        "canEdit",
        "editCondition",
        "canAdd",
        "canDelete",
        "deleteConfig",
        "apiPrefix",
        "isPageResult",
        "pageSize",
        "table",
        "tableAlias",
        "menu",
        "routePath",
        "icon",
        "joinConfigs",
        "nameField",
        "exportCsv",
        "importCsv",
        "orderBys",
        "beforeQuery",
        "afterQuery",
        "fixedOperation",
        "apiPrefix",
        "dtoName",
        "voName",
        "methodName",
        "api"
]
)

main(
        "QueryField",
        [
                "field",
                "defaultValue",
                "controlType",
                "changeBy",
                "canEmpty",
                "defaultShow",
                "table",
                "show",
                "changeByFuncId",
                "sqlConditionType",
        ]
)

main(
        "JoinConfig",
        [
                "simpleJoin",
                "condition",

                "selfField",
                "selfTable",
                "selfTableAlias",
                "otherTable",
                "otherField",
                "otherTableAlias",
                "joinType"
        ]
)
main(
        "DeleteCheck",
        [
                "otherTable",
                "field",
                "msg"]
)

main(
        "EditField",
        [
                "validates",
                "canEdit",
                "canAdd",
                "controlType",
                "reuireExists",
                "defaultValue"

        ]
)

main(
        "Casscader",
        [
                "table",
                "filterField",
                "id",
                "valuefield",
                "nameField",
                "orderBys"
        ]

)

main(
        "AllList",
        [
                "table",
                "valuefield",
                "nameField",
                "orderBys"
        ]

)


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
main(
        "table",
        [
                "columns",
                "name",
                "lable",
                "description",
                "pkField",
                "nameField",
                "relations"
        ]
)

main(
        "Column",
        [
                "name",
                "label",
                "description",
                "javaType",
                "nullable",
                "defaultValue",
                "isPk",
                "isCreateUserField",
                "isUpdateUserField",
                "isCreateTimeField",
                "isUpdateTimeField"
        ]
)
main(
        "dictionary",
        [
                "name",
                "value",
                "order",
                "color",
                "icon"
        ]
)

main(
        "OrderBy",
        [
                "field",
                "orderByType"
        ]
)

main(
        "EditConfig",
        [
                "lableWidth",
                "rowColumnCount",
                "beforeSubmit",
                "afterSubmit",
                "editFields",
        ]
)

main(
        "Menu",
        [
                "icon",
                "path",
                "name",
                "parentMenu",
        ]
)

main(
        "DeleteConfig",
        [
                "deleteChecks",
                "deleteMsg",
        ]
)

main(
        "SqlConfig",
        [
                "sqlOutPutFields",
                "targetTable",
                "joins",
                "sqlWheres"
        ]
)

main(
        "sqlOutPutField",
        [
                "table",
                "tableAlias",
                "alias",
                "javaType"
        ]
)

main(
        "sqlWhere",
        [
                "table",
                "tableAlias",
                "tableFields",
                "queryFields",
                "canEmpty",
                "javaType",
                "customer"
        ]
)

main(
        "operation",
        [
                "name",
                "condition",
                "methodName",
                "operationResultType",
                "isGenerateJavaMethod",
        ]
)

main(
        "mutipleOperation",
        [
                "methodName",
                "valuePaires",
                "transcation",
                "customer",
                "editFields"
        ]
)