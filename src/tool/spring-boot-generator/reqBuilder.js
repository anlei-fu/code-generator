const { fieldBuilder } = require("./fieldBuilder")
exports.reqBuilder = function () {
        this.fields = [];
        this.exclude = [];
        this.novalidated = true;

        /**
         * Remove columns
         * 
         * @param {String|[String]} items 
         * @returns {reqBuilder}
         */
        function exclude(items) {
                this.exclude = items;
                return this;
        }

        /**
         * Add a field
         * 
         * @param {any =>void} configer 
         * @returns {reqBuilder}
         */
        function field(configer) {
                let builder = new fieldBuilder();
                configer(builder);
                this.fields.push(builder);
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         * @returns {reqBuilder}
         */
        function name(name) {
                this.name = name;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         * @returns {reqBuilder}
         */
        function description(description) {
                this.description = description;
                return this;

        }

        /**
         * Mark as no need validate-operation
         * 
         * @returns {readonly}
         */
        function novalidated() {
                this.novalidated = false;
                return this;
        }

        /**
         * Set extends from page
         * 
         * @returns {reqBuilder}
         */
        function page() {
                this.extendPage = true;
                return this;
        }

        /**
         * Set from property
         * 
         * @param {String} from 
         * @returns {reqBuilder}
         */
        function from(from) {
                this.from = from;
                return this;
        }
}