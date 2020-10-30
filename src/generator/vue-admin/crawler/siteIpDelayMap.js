const { AddPageBuilder } = require("./../AddPage");
const { PageBuilder } = require("./../Page");
const { siteIpDelayMap } = require("./../../db/siteIpDelayMap");
const { FILE } = require("./../libs/file");
const { OBJECT, ARRAY } = require("./../libs/utils");
const { EjsRender } = require("./../render/EjsRender");
const { STR } = require("../libs/str");
const { DIR } = require("../libs/dir");

const columns=[
	"id",
	"siteId",
	"delayTimeoutTime",
	"ip"
];

const tameplateFolder = "D:/test/all/crawler/admin/templates";
const modelName = "siteIpDelayMap";
const outputFolder = `C:/Users/Administrator/Desktop/Projects/vue-admin/spider/src/components/page/siteIpDelayMap`;

function main() {
        DIR.create(outputFolder);
        let queryPageBuilder = new PageBuilder();
        let queryPageConfig = queryPageBuilder.pageSitting(setting => {
                setting.filters(filter => {
                        filter.options([

                        ]).enabledFilters([
                        ])
                }).table(table => {
                        table.columns(siteIpDelayMap.columnsArray)
                                .defaultShowingColumns(siteIpDelayMap.columnsArray)
                })
        })
                .select([

                ]
                )
                .add()
                .edit()
                .timeRange()
                .build();

        queryPageConfig.filters = queryPageConfig.pageSetting.filters;
        queryPageConfig.pageSetting = OBJECT.text1(queryPageConfig.pageSetting);

        let query = {};
        queryPageConfig.selects.forEach(s => {
                query[s.model] = null;
        })

        if (queryPageConfig.radioGroup) {
                queryPageConfig.radioGroup.options.forEach(o => {
                        query[s.value] = null;
                })
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

        if (queryPageConfig.add)
                generateAdd();

        if (queryPageConfig.edit)
                generateEdit();

        if (queryPageConfig.batchEdit)
                generateBatachEdit();

}

function generateAdd() {
        let builder = new AddPageBuilder();
        let config = builder
                .select([
                ]
                )
                .textAreas([])
                .texts([

                ])
                .requre([

                ])
                .range(100, 100, [
                ])
                .url([])
                .build();

        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = "site";
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const addPageRender = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/add.vue`, addPageRender.renderContentFromFile("addPage.ejs", config));
}

function generateEdit() {
        let builder = new AddPageBuilder();
        let config = builder
                .select([
                ]
                )
                .textAreas([])
                .texts([

                ])
                .range(100, 100, [
                ])
                .url([])
                .build();

        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = "site";
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const addPageRender = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/edit.vue`, addPageRender.renderContentFromFile("editPage.ejs", config));
}

function generateBatachEdit() {
        let builder = new AddPageBuilder();
        let config = builder
                .select([
                ]
                )
                .textAreas([])
                .texts([

                ])
                .requre([

                ])
                .range(100, 100, [
                ])
                .url([])
                .build();

        config = mergeQuery(config, mergeRule(config.rules));
        config.query = OBJECT.text1(config.query);
        config.name = "site";
        config.optionalOptionsStr = OBJECT.text1(config.optionalOptions);
        config.rules = OBJECT.text1(config.rules);
        const render = new EjsRender(tameplateFolder);
        FILE.write(`${outputFolder}/batchEdit.vue`, addPageRender.renderContentFromFile("batchEditPage.ejs", config));
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