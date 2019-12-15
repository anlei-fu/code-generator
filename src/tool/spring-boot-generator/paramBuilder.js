exports.paramBuilder = () => {
        this.defaultValues = new Map();

        /**
         * Add default value item
         * 
         * @param {String} key 
         * @param {String} value 
         * @returns {paramBuilder}
         */
        function defaultValue(key, value) {
                this.map.add(key, value);
                return this;
        }
}