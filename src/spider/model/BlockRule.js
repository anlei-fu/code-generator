class BlockRule {
        constructor () {
                this.status = "";
                this.checkType = "";
                this.keywords = "";
                this.pageResult = "";
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
         * @param {String} status
         * @returns {BlockRuleBuilder}
         */
        status(status) {
                this._config.status = status;
                return this;
        }

        /**
         * Set property checkType
         * 
         * @param {String} checkType
         * @returns {BlockRuleBuilder}
         */
        checkType(checkType) {
                this._config.checkType = checkType;
                return this;
        }

        /**
         * Set property keywords
         * 
         * @param {String} keywords
         * @returns {BlockRuleBuilder}
         */
        keywords(keywords) {
                this._config.keywords = keywords;
                return this;
        }

        /**
         * Set property pageResult
         * 
         * @param {String} pageResult
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
