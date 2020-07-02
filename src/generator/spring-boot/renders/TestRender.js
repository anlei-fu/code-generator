const { EjsRender } = require("./../../common/renders/EjsRender");
const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { ReqUtils } = require("./../ReqUtils");
const { MockGenerator } = require("./../../mock/mock-generator");
const { STR } = require("./../../../libs/str");
class Field {
        constructor () {
                this.value = "";
                this.name = "";
        }
}
class Req {
        constructor () {
                isDocreateReq = false;
                value = "";
        }
}
class TestItemModel {
        constructor () {
                this.methodName = "";
                this.isQuery = false;
                this.returnType = "";
                this.description = "";
                this.hasDoCreateReq = false;
                this.doCreateReqType = "";
                this.fileds = new [new Field()];
                this.args = [new Req()];
        }
}

class TestRender {
        constructor () {
                this._render = new EjsRender(`${__dirname}/templates`);
                this._mockGenerator = new MockGenerator();
                this._simplePatternRender = new SimpleRender(null, `${__dirname}/templates/test.java`);
        }

        renderTest(configGroup) {
                let content = "";
                configGroup.items.forEach(item => {
                        if(item.id.includes("Batch"))
                            return;
                        content += this.renderTestItem(item);
                });

                let model = {
                        content,
                        name: configGroup.name,
                        date:new Date()
                }

                return this._simplePatternRender.renderTemplate(model);
        }

        renderTestItem(configItem) {
                let model = {};
                model.isQuery = configItem.type == "select";
                model.description = configItem.description || configItem.id;
                model.hasDoCreateReq = ReqUtils.hasDoCreateReq(configItem);

                if (model.hasDoCreateReq) {
                        let req = ReqUtils.getDoCreateReq(configItem);
                        model.doCreateReqType = req.type;
                        model.fields = [];
                        req.fields.forEach(field => {
                                let mockValue = this._mockGenerator.getMockData(field.name, field.type);
                                if (typeof mockValue == "string" && field.type != "Date")
                                        mockValue = `"${mockValue}"`

                                model.fields.push({
                                        name: STR.upperFirstLetter(field.name),
                                        value: mockValue
                                });
                        });


                }

                model.args = [];
                configItem.reqs.forEach(req => {
                        let mockValue = req.name;
                        if (!req.doCreate)
                                mockValue = this._getMockValue(req.name, req.type)

                        model.args.push({
                                name: "req",
                                value: mockValue
                        })
                });

                model.methodNames = configItem.id;
                model.methodName = STR.upperFirstLetter(configItem.id);
                model.returnType = this._getReturnType(configItem, STR.upperFirstLetter(configItem.table.name));

                return this._render.renderContentFromFile("test-item.ejs", model);
        }

        /**
         * Get mock value by given name and field type
         * 
         * @private
         * @param {String} name 
         * @param {String} type
         * @returns {Any} 
         */
        _getMockValue(name, type) {
                let mockValue = this._mockGenerator.getMockData(name, type);
                if (typeof mockValue == "string" && type != "Date")
                        mockValue = `"${mockValue}"`

                return mockValue;
        }

        /**
         * Get service return type text
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName
         * @returns {String} 
         */
        _getReturnType(configItem, tableName) {
                if (configItem.type != "select")
                        return ReqUtils.hasBatchReq(configItem) ? "int" : "boolean";

                return configItem.resp.single
                        ? configItem.resp.doCreate ? STR.upperFirstLetter(configItem.resp.type) : tableName
                        : configItem.resp.doCreate ? `PageResult<${STR.upperFirstLetter(configItem.resp.type)}>` : `PageResult<${tableName}>`;
        }
}

exports.TestRender = TestRender;