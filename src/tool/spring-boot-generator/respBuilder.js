exports.respBuilder = () => {
        /**
         * Set type
         * 
         * @param {String} type 
         * @returns {respBuilder}
         */
        function type(type) {
                this.type = type;
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
}