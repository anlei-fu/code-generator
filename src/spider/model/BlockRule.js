const { CheckType } = require("./../constant/CheckType");
const { PageResultCode } = require("../constant/PageResult");
class BlockRule {
        constructor () {
                /**
                 * Download http status code
                 */
                this.status = 200;

                /**
                 * Rule check type @see {CheckType}
                 */
                this.compareType = CheckType.STATUS_CHECK;

                /**
                 * Keywords to match
                 */
                this.keywords = [""];

                /**
                 * Pageresult if match @see {PageResultCode}
                 */
                this.pageResult = PageResultCode.SUCCCESS;
        }
}

exports.BlockRule = BlockRule;

/**
 * Builder for BlockRule
 */
class BlockRuleBuilder {
        constructor () {
                this._config = new BlockRule();
        }

        /**
         * Set property status
         * 
         * @param {Number} status
         * @returns {BlockRuleBuilder}
         */
        status(status) {
                this._config.status = status;
                return this;
        }

        /**
         * Set property checkType
         * 
         * @param {Number} checkType
         * @returns {BlockRuleBuilder}
         */
        checkType(checkType) {
                this._config.compareType = checkType;
                return this;
        }

        /**
         * Set property keywords
         * 
         * @param {[String]} keywords
         * @returns {BlockRuleBuilder}
         */
        keywords(keywords) {
                this._config.keywords = keywords;
                return this;
        }

        /**
         * Set property pageResult
         * 
         * @param {Number} pageResult
         * @returns {BlockRuleBuilder}
         */
        pageResult(pageResult) {
                this._config.pageResult = pageResult;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {BlockRule}
         */
        build() {
                return this._config;
        }
}

exports.BlockRuleBuilder = BlockRuleBuilder;
