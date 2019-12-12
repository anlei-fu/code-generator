exports.respBuilder = () => {

        /**
         * 
         */
        function doCreate() {
                this.doCreate = true;
                return this;
        }

        /**
         * 
         */
        function single() {
                this.single = true;
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         * @returns {respBuilder}
         */
        function name(name) {
                this.name = name;
                return this;
        }

        /**
         * 
         * @param {String} description 
         */
        function description(description) {
                this.description = description;
                return this;
        }
}