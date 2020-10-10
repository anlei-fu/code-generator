const { DownloadResult } = require("./model/DownloadResult");
const { BlockRule } = require("./model/BlockRule");
const { CheckType} = require("./constant/CheckType");
const { PageResult} = require("./constant/PageResult");
const { STR } = require("./../libs");

class BlockRuleChecker {
        /**
         * Constructor of BlockRuleChecker
         * 
         * @constructor
         * @param {[BlockRule]} rules 
         */
        constructor (rules) {
                this._rules = rules;
                this._init();
        }

        /**
         * To check download result
         * 
         * @param {DownloadResult} downloadResult 
         * @returns {Number}
         */
        check(downloadResult) {
                for (const rule of this._rules) {

                        if (downloadResult.status == rule.status || rule.status == -1) {
                                let match = false;
                                switch (rule.ruleType) {
                                        case CheckType.INCLUDES_ALL:
                                                match = STR.includesAll(downloadResult.html, rule.keywords);
                                                break;
                                        case CheckType.INCLUDES_ANY:
                                                match = STR.includesAny(downloadResult.html, rule.keywords);
                                                break;
                                        case CheckType.NOT_INCLUDES_ALL:
                                                match = !STR.includesAll(downloadResult.html, rule.keywords);
                                                break;
                                        case CheckType.NOT_INCLUDES_ANY:
                                                match = !STR.includesAny(downloadResult.html, rule.keywords);
                                                break;
                                        case CheckType.STATUS_CHECK:
                                                match = true;
                                                break;
                                        default:
                                                break;
                                }

                                if (match)
                                        return rule.pageResult;
                        }
                }

                return PageResult.SUCCESS;
        }

        /**
         * Parse keywords to array and check
         */
        _init(){
                this._rules.forEach(r=>{
                        r.keywords=JSON.parse(r.keywords);
                        if(!Array.isArray(r.keywords))
                           throw new TypeError("incorrect type of keywords");
                })
        }
}

exports.BlockRuleChecker = BlockRuleChecker;