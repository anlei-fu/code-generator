const { STR } = require("../../libs/str");
const { UserColumnAnalyzer } = require("./Analyzer");

const USER_ANALYZER = new UserColumnAnalyzer();

class ReqUtils {
        /**
         * Get req params with type 
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        generateReqArgsWithType(configItem) {
                return this._generateReqArgsCore(configItem, true);
        }

        /**
         * Get req params
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        generateReqArgsWithoutType(configItem) {
                return this._generateReqArgsCore(configItem, false);
        }

        /**
         * Check is there any req is need to do create
         * 
         * @param {ConfigItem} configItem 
         */
        hasDoCreateReq(configItem){
              for(const req of configItem.reqs){
                      if(req.doCreate)
                        return true;
              }

              return false;
        }

        /**
         * Get the do create rea from reqs
         * 
         * @param {ConfigItem} configItem 
         * @returns {Req}
         */
        getDoCreateReq(configItem){
                for(const req of configItem.reqs){
                        if(req.doCreate)
                          return req;
                }
  
                return null;
        }

        /**
         * Generate Req entity fields
         * 
         * @param {ConfigItem} configItem 
         * @param {ReqConfig} req 
         * @returns {[ColumnConfig]}
         */
        analyzeReqFields(configItem, req) {

                // excludes other reqs fields
                configItem.reqs.forEach(x => {
                        if (!x.doCreate)
                                req.excludes.add(x.name);
                });

                // excludes user column fields
                let userColumn = USER_ANALYZER.findUserColumnByConfig(configItem);
                if (userColumn)
                        req.excludes.add(userColumn.name);

                // get req by conditions
                let conditions;
                if (configItem.type == "select" || configItem.type == "delete") {
                        conditions = configItem.context.columnMerger.mergeConditions(configItem);
                } else if (configItem.type == "insert") {
                        // insert case: fields =includes
                        conditions = configItem.context.columnMerger.mergeIncludes(configItem);
                } else {

                        // update case: fields = includes + conditions
                        conditions = configItem.context.columnMerger.mergeConditions(configItem)
                               .concat(configItem.context.columnMerger.mergeIncludes(configItem));
                }

                let result = [];

                // generate validates and expression reqs
                conditions.filter(condition => !req.excludes.has(condition.name))
                        .forEach(condition => {

                                // set validate if name matched and absent
                                if (req.validates.has(condition.name))
                                        condition.validates = req.validates.get(condition.name);

                                // generate additional req fields by expression, and excludes sourece field
                                let exp = condition.exp;
                                if (exp == "range") {
                                        result.push({ name: `${condition.name}Min`, type: condition.type, validates: condition.validates, description: `${condition.description} min` });
                                        result.push({ name: `${condition.name}Max`, type: condition.type, validates: condition.validates, description: `${condition.description} max` });
                                } else if (exp == "timeRange") {
                                        result.push({ name: `${condition.name}Start`, type: condition.type, validates: condition.validates, description: `${condition.description} start time` });
                                        result.push({ name: `${condition.name}End`, type: condition.type, validates: condition.validates, description: `${condition.description} end time` });
                                } else {
                                        result.push(condition);
                                }
                        });

                return result;
        }

        /**
         * Check is there any batch req of config
         * 
         * @param {ConfigItem} configItem 
         * @returns {Boolean}
         */
        hasBatchReq(configItem) {
               return this.getBatchReqName(configItem)!=null;
        }

        /**
         * Get first batch req or req-field except 'select' type
         * 
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        getBatchReqName(configItem){
                if(configItem.type=="select")
                  return null;

                for (const req of configItem.reqs) {
                        if (req.isList)
                                return req.name;
                        
                        if(req.doCreate){
                                for(const item of req.fields){
                                        if(item.isList)
                                         return item.name;
                                }
                        }
                }

                return null;
        }

        /**
         * Get decrete-req's 'type' and 'name' properties from config
         * 
         * @param {ConfigItem} configItem 
         * @returns {CoreReqTypeAndNameResult}
         */
        getDoCreateReqNameAndType(configItem) {
                for(const req of configItem.reqs){
                        if(req.doCreate){
                              return {
                                      name:req.name,
                                      type:req.type
                              }
                        }
                }

                return null;
        }

        /**
         * Get req params 
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {boolean} withType 
         * @returns {String}
         */
        _generateReqArgsCore(configItem, withType) {
                let params = "";
                configItem.reqs.forEach(x => {
                        let item = "";
                        if (withType) {

                                // batch with list
                                if (x.isList) {
                                        item += `List<${x.type}>`
                                } else {
                                        item += `${x.type}`
                                }
                        } 

                        item += `${x.name}, `;
                        params += item;
                });

                params = STR.removeLastComa(params);
                return params;
        }
}

exports.ReqUtils = new ReqUtils();