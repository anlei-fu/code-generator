const { ColumnMerger } = require("./ColumnMerger");
const { ConfigItem } = require("./builders/ConfigItem")
const { ReqUtils } = require("./ReqUtils");

let merger = new ColumnMerger();
class FieldAnalyzer {
        /**
         * Analyze req fields
         * 
         * @param {ConfigItem} configItem 
         */
        static analyzeReq(configItem) {
                let reqs = configItem.reqs.filter(x => x.doCreate);
                if (reqs.length < 0)
                        return null;

                let req = reqs[0];
                let entityConfig = {};
                entityConfig.fields = ReqUtils.analyzeDocreateReqFields(configItem, req);
                entityConfig.description = req.description;
                entityConfig.name = req.type;
                entityConfig.type = "req";
                req.fields = entityConfig.fields;

                entityConfig.extends =
                        configItem.type == "select" && !configItem.resp.single && !configItem.resp.list
                                ? "PageReq" : "";

                return entityConfig;
        }

        /**
         * Analyze page detail resp
         * 
         * @param {ConfigItem} configItem 
         */
        static analyzeResp(configItem) {
                if (configItem.resp.doCreate) {
                        let entityConfig = {};
                        entityConfig.type = "resp";
                        entityConfig.description = configItem.resp.description;

                        entityConfig.fields =
                                merger.mergeIncludes(configItem);

                        configItem.resp.type = configItem.resp.name;
                        entityConfig.name = configItem.resp.type;
                        configItem.resp.fields = entityConfig.fields;

                        return entityConfig;
                }
        }
}

exports.FieldAnalyzer = FieldAnalyzer