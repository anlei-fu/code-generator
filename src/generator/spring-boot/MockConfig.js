class MockItem {
        constructor () {
                this.name = "";
                this.type = "";
                this.matcher = name => true;
                this.cadidates = [];
                this.generator = name => "";

        }
}

/**
 * Builder for MockItem
 */
class MockItemBuilder {
        constructor () {
                this._config = new MockItem();
        }

        /**
         * Set property name
         * 
         * @param {string} name
         * @returns {MockItemBuilder}
         */
        name(name) {
                this._config.name = name;
                return this;
        }

        /**
         * Set property matcher
         * 
         * @param {(string)=>boolean} matcher
         * @returns {MockItemBuilder}
         */
        matcher(matcher) {
                this._config.matcher = matcher;
                return this;
        }

        /**
         * Set property cadidates
         * 
         * @param {[any]} cadidates
         * @returns {MockItemBuilder}
         */
        cadidates(cadidates) {
                this._config.cadidates = cadidates;
                return this;
        }

        /**
         * Set property generator
         * 
         * @param {(string)=>string} generator
         * @returns {MockItemBuilder}
         */
        generator(generator) {
                this._config.generator = generator;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {MockItem}
         */
        build() {
                return this._config;
        }
}

class MockConfigBuilder {
        constructor () {
                this.mock = {};
        }

        /**
         * Use mock config
         * 
         * @param {string} type 
         * @param {(MockItemBuilder)=>void} configer 
         */
        use(type, configer) {
                let mockItemBuilder = new MockItemBuilder();
                configer(mockItemBuilder);
                let item = mockItemBuilder.build();
                if (!this.mock[type])
                        this.mock[type] = {};

                this.mock[type][item.name] = item;

                return this;
        }

        /**
         * @returns {MockConfig}
         */
        build() {
                return this.mock;
        }
}

exports.MockConfigBuilder = MockConfigBuilder;