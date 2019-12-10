const { fieldBuilder } = require("./fieldBuilder")
exports.reqBuilder = function () {
        this.items = [];
        this.exclude = [];
        this.novalidated = true;

        /**
         * 
         * @param {String|[String]} items 
         */
        function exclude(items) {
                this.exclude = items;
                return this;
        }

        /**
         * Add a field
         * 
         * @param {any =>void} configer 
         */
        function field(configer) {
                let builder = new fieldBuilder();
                configer(builder);
                this.items.push(builder);
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         */
        function name(name) {
                this.name = name;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         */
        function description(description) {
                this.description = description;
                return this;

        }

        /**
         * Mark as no need validate-operation
         */
        function novalidated() {
                this.novalidated = false;
                return this;
        }

        /**
         * Set extends from page
         */
        function page() {
                this.extendPage = true;
                return this;
        }
}