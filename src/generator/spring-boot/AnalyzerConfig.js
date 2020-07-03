class IncludeConfigItem {
        constructor () {
                this.name = "";
                this.type = "";
                this.matcher = "";
        }
}

/**
 * Builder for IncludeConfigItem
 */
class IncludeConfigItemBuilder {
        constructor () {
                this._config = new IncludeConfigItem();
        }

        /**
         * Set property name
         * 
         * @param {} name
         * @returns {IncludeConfigItemBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property type
         * 
         * @param {} type
         * @returns {IncludeConfigItemBuilder}
         */
        type(type) {
                this._config.type = type;
                return this;
        }

        /**
         * Set property matcher
         * 
         * @param {(string)=>boolean} matcher
         * @returns {IncludeConfigItemBuilder}
         */
        matcher(matcher) {
                this._config.matcher = matcher;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {IncludeConfigItem}
         */
        build() {
                return this._config;
        }
}

class AnalyzeConfig {
        constructor () {
                this.seletctConfig = "";
                this.updateConfig = "";
                this.insertConfig = "";

        }
}

exports.AnalyzeConfig = AnalyzeConfig;

/**
 * Builder for AnalyzeConfig
 */
class AnalyzeConfigBuilder {
        constructor () {
                this._config = new AnalyzeConfig();
        }

        /**
         * Use seletc include config
         * 
         * @param {string} type
         * @param {(IncludeConfigItemBuilder)=>void} configer
         * @returns {AnalyzeConfigBuilder}
         */
        useSeletctConfig(type, configer) {
                let builder = new IncludeConfigItemBuilder();
                configer(builder);
                let config = builder.build();
                this._config.seletctConfig[type][config.name] = config;
                return this;
        }

        /**
        * Use update include config
        * 
        * @param {string} type
        * @param {(IncludeConfigItemBuilder)=>void} configer
        * @returns {AnalyzeConfigBuilder}
        */
        useUpdateConfig(type, configer) {
                let builder = new IncludeConfigItemBuilder();
                configer(builder);
                let config = builder.build();
                this._config.updateConfig[type][config.name] = config;
                return this;
        }

        /**
        * Use insert include config
        * 
        * @param {string} type
        * @param {(IncludeConfigItemBuilder)=>void} configer
        * @returns {AnalyzeConfigBuilder}
        */
        useInsertConfig(type, configer) {
                let builder = new IncludeConfigItemBuilder();
                configer(builder);
                let config = builder.build();
                this._config.insertConfig[type][config.name] = config;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {AnalyzeConfig}
         */
        build() {
                return this._config;
        }
}

exports.AnalyzeConfigBuilder = AnalyzeConfigBuilder;