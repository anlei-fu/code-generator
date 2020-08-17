const { DownloadResult } = require("./model/DownloadResult");
const { PageResult, PageResultBuilder } = require("./model/PageResult");
const { BlockRule } = require("./model/BlockRule");
const { CheckType } = require("./constant/CheckType");
const { PageResultCode } = require("./constant/PageResult");
const { STR } = require("./utils/str");

class BlockRuleChecker {
        /**
         * Constructor of BlockRuleChecker
         * 
         * @constructor
         * @param {[BlockRule]} rules 
         */
        constructor (rules) {
                this._rules = rules;
        }

        /**
         * To check download result
         * 
         * @param {DownloadResult} downloadResult 
         * @returns {PageResult}
         */
        check(downloadResult) {
                for (const rule of this._rules) {

                        if (downloadResult.status == rule.status || rule.status == -1) {
                                let match = false;
                                switch (rule.compareType) {
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

                return PageResultCode.SUCCCESS;
        }
}

exports.BlockRuleChecker = BlockRuleChecker;