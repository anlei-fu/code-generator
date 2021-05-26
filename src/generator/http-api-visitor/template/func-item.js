        /**
         * @description
         * method:@method 
         * 
         * @param {Object} params
         * @return {Promise<Object>}
         */
        @name(params) {
                return this.request('@path', '@method' ,params);
        }

