const { AddPageBuilder } = require("./../AddPage");
const { PageBuilder } = require("./../Page");
const { dispatchTaskRecord } = require("./../../db/dispatchTaskRecord");
const { FILE } = require("./../libs/file");
const { OBJECT, ARRAY } = require("./../libs/utils");
const { EjsRender } = require("./../render/EjsRender");
const { STR } = require("../libs/str");
const { DIR } = require("../libs/dir");

const tameplateFolder = "D:/test/all/crawler/admin/templates";
const modelName = "dispatchTaskRecord";
const outputFolder = `C:/Users/Administrator/Desktop/Projects/vue-admin/spider/src/components/page/dispatchTaskRecord`;

function main() {
        DIR.create(outputFolder);
        let queryPageBuilder = new PageBuilder();
        let queryPageConfig = queryPageBuilder
                .pageSitting(setting => {
                         setting.table(table => {
                        table.columns(dispatchTaskRecord.columnsArray)
                                .defaultShowingColumns([
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
])
                        })
                 })
                .select([
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
])
                .radioGroup([

                ])
                .batchEdit()
                .batchDelete()
                .add()
                .edit()
                ._delete()
                .timeRange()
                .build();

        queryPageConfig.filters = queryPageConfig.pageSetting.filters;
      
        if(queryPageConfig.batchEdit){
                generateBatachEdit();
        }

        if (queryPageConfig.add)
                generateAdd();
                if (queryPageConfig.edit)
                generateEdit();


        queryPageConfig.pageSetting = OBJECT.text1(queryPageConfig.pageSetting);

        let query = {};
        queryPageConfig.selects.forEach(s => {
                query[s.model] = null;
        })

        if (queryPageConfig.radioGroup) {
                queryPageConfig.radioGroup.options.forEach(o => {
                        query[STR.lowerFirstLetter(o.value)] = null;
                })

                queryPageConfig.radioOptions=OBJECT.text1(queryPageConfig.radioGroup.options);
        }

        if (queryPageConfig.timeRange) {
                query.createTimeStart = null;
                query.createTimeEnd = null;
        }

        query.pageIndex = 1;
        query.pageSize = 10;
        queryPageConfig.query = OBJECT.text1(query);
        queryPageConfig.name = modelName;
        const render = new EjsRender(tameplateFolder);

        FILE.write(`${outputFolder}/index.vue`, render.renderContentFromFile("page.ejs", queryPageConfig));

}

function generateAdd() {
        let builder = new AddPageBuilder();
        let config = builder
                .select(
                        [
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
]
                )
                .textAreas([])
                .texts(
                    [
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
]
                       )
                .requre(
                        [

                        ]
                )
                .range(0, 10, 
                        [
	"id",
	"crawlTaskId",
	"dispatchStatus",
	"dispatchMsg",
	"createTime"
]
                )
                .ip([])
                .port([])
                .phone([])
                .email([])
                .url([])
                .build();

        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = modelName;
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const addPageRender = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/add.vue`, addPageRender.renderContentFromFile("addPage.ejs", config));
}

function generateEdit() {
        let builder = new AddPageBuilder();
        let config = builder


        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = modelName;
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const addPageRender = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/edit.vue`, addPageRender.renderContentFromFile("editPage.ejs", config));
}

function generateBatachEdit() {
        let builder = new AddPageBuilder();
        let config = builder
             
        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = modelName;
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const render = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/batchEdit.vue`, render.renderContentFromFile("batchEditPage.ejs", config));
}

/**
 * 
 * @param {AddPage} config 
 * @param {Objec} rules 
 */
function mergeQuery(config, rules) {
        let requiredFields = [];
        let optionalFields = [];
        let optionalOptions = [];
        let query = {};
        config.selects.forEach(s => {
                query[s.model] = null;
                if (isRequire(s.model, rules)) {
                        requiredFields.push({
                                type: "select",
                                model: s.model,
                                enum: s.enum,
                                upperModelName: s.upperModelName
                        });
                } else {
                        optionalFields.push({
                                type: "select",
                                model: s.model,
                                enum: s.enum,
                                upperModelName: s.upperModelName
                        });
                        optionalOptions.push({
                                label: s.model,
                                value: s.upperModelName
                        })
                }
        });

        config.texts.forEach(t => {
                query[t] = null;
                if (isRequire(t, rules)) {
                        requiredFields.push({
                                type: "text",
                                name: t,
                                upperName: STR.upperFirstLetter(t)
                        });
                } else {
                        optionalFields.push({
                                type: "text",
                                name: t,
                                upperName: STR.upperFirstLetter(t)
                        });
                        optionalOptions.push({
                                label: t,
                                value: STR.upperFirstLetter(t)
                        })
                }
        });
        config.textAreas.forEach(t => {
                query[t] = null;
                if (isRequire(t, rules)) {
                        requiredFields.push({
                                type: "textArea",
                                name: t,
                                upperName: STR.upperFirstLetter(t)
                        });
                } else {
                        optionalFields.push({
                                type: "text",
                                name: t,
                                upperName: STR.upperFirstLetter(t)
                        });
                        optionalOptions.push({
                                label: t,
                                value: STR.upperFirstLetter(t)
                        })
                }
        });

        query.id=null;

        return {
                query,
                optionalFields,
                requiredFields,
                rules,
                optionalOptions
        }
}

function isRequire(name, rule) {
        if (!rule[name])
                return false;

        for (const item of rule[name]) {
                if (item.required)
                        return true;
        }

        return false;
}

function mergeRule(rules) {
        let ruleGroups = ARRAY.groupBy(rules, r => r.name);
        let newRules = {};
        ruleGroups.forEach((value, key) => {
                newRules[key] = [],
                        value.forEach(item => {
                                delete item.name;
                                newRules[key].push(item);
                        });
        });
        return newRules;

}

main();