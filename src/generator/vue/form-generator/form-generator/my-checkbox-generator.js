const { EjsRender } = require("../../../../renders/EjsRender");
const { FILE } = require("../../../../libs");

function main(name, items) {
    let render = new EjsRender();

    let content = render.renderContent(FILE.read("./template/my-checkbox.ejs"), {items});
    FILE.write(`./output/${name}.vue`, content);

}

/*************************************************** */
main(
    "analyze-config",
    [
        {
            label: "数据库冗余分析",
            field: "tableRedundency"
        },
        {
            label: "自动识别外键",
            field: "foreignKeyAnalyze"
        },
        {
            label: "索引分析",
            field: "indexAnalyze"
        },
        {
            label: "自动重名称",
            field: "autoRename"
        },
        {
            label: "自动识别控件类型",
            field: "autoControlType"
        },
        {
            label: "自动识别JavaType",
            field: "autoJavaType"
        },
        {
            label: "拼写检查",
            field: "spellCheck"
        },
    ]
);