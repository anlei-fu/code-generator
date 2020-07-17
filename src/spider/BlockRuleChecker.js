const { DownloadResult } = require("./model/DownloadResult");
const { PageResult, PageResultBuilder } = require("./model/PageResult");
const { BlockRule } = require("./model/BlockRule");
const { CheckType } = require("./constant/CheckType");
const { PageResultCode } = require("./constant/PageResultCode");
const { STR } = require("./utils/str");

class BlockRuleChecker {
        /**
         * Constructor of BlockRuleChecker
         * 
         * @constructor
         * @param {[BlockRule]} rules 
         */
        constructor (rules) {
                this._rules = [new BlockRule()];
        }

        /**
         * To check download result
         * 
         * @param {DownloadResult} downloadResult 
         * @returns {PageResult}
         */
        check(downloadResult) {
                let builder = new PageResultBuilder();
                for (const rule of this._rules) {

                        if (downloadResult.status == rule.status || rule.status == -1) {
                                let match = false;
                                switch (rule.checkType) {
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
                                        return builder.pageResultCode(rule.pageResult).build();
                        }
                }

                return builder.pageResultCode(PageResultCode.SUCCCESS).build();
        }
}

exports.BlockRuleChecker = BlockRuleChecker;