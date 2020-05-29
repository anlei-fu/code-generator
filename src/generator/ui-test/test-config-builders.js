const { Point } = require("./UiCommandBuilder");

class BaseConfig {
        constructor () {
                /**
                 * @type {String}
                 */
                this.name;
                /**
                 * @type {Point}
                 */
                this.location;
        }
}

class SelectConfig extends BaseConfig {
        constructor () {
                super();
                /**
                 * @type {Number}
                 */
                this.count;
        }
}

class RadioGroupOption extends BaseConfig {
        constructor () {
                super();
        }
}

class RadioGroupConfig extends BaseConfig {
        constructor () {
                super();
                /**
                 * @type {[RadioGroupOption]}
                 */
                this.options = [];
                /**
                 * @type {Point}
                 */
                this.inputLocation;
        }
}

class TimeRangeConfig extends BaseConfig {
        constructor () {
                super();
        }
}

class MenuConfig extends BaseConfig {
        constructor () {
                super();
                /**
                 * @type {Point}
                 */
                this.queryButtonLocation;
                /**
                 * @type {[SelectConfig]}
                 */
                this.selects = [];
                /**
                 * @type {TimeRangeConfig}
                 */
                this.timeRange;
                /**
                 * @type {RadioGroupConfig}
                 */
                this.radioGroup;
        }
}


class ModuleConfig extends BaseConfig {
        constructor () {
                super();
                /**
                 * @type {[MenuConfig]}
                 */
                this.menus = [];
                /**
                 * @type {boolean}
                 */
                this.expanded = false;
        }
}

class TestConfig {
        constructor () {
                /**
                 * @type {[ModuleConfig]}
                 */
                this.modules = [];
                /**
                 * @type {String}
                 */
                this.name = "";
                /**
                 * @type {String}
                 */
                this.description = "";
        }
}

class RadioGroupBuilder {
        constructor () {
                this._radioGroup = new RadioGroupConfig();
        }
        input(x,y){
           this._radioGroup.inputLocation={x,y};
           return this;
        }
        option(x, y, text) {
                this._radioGroup.options.push({ location: { x, y }, text })
                return this;
        }

        build() {
                return this._radioGroup;
        }
}

/**
 * Build menu config
 */
class MenuBuilder {
        constructor () {
                this._menu = new MenuConfig();
        }
        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {MenuBuilder}
         */
        query(x, y) {
                this._menu.queryButtonLocation = { x, y };
                return this;
        }

        /**
         * 
         * @param {String} name 
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} count 
         * @returns {MenuBuilder}
         */
        select(name, x, y, count) {
                let select = new SelectConfig();
                select.name = name;
                select.location = { x, y };
                select.count = count;
                this._menu.selects.push(select);
                return this;
        }

        /**
         * 
         * @param {String} name 
         * @param {Number} x 
         * @param {Number} y 
         * @returns {Menubuilder}
         */
        timeRange(name, x, y) {
                this._menu.timeRange = { name, location: { x, y } };
                return this;
        }

        /**
         * 
         * @param {Name} name 
         * @param {(RadioGroupBuilder)=>void} configer 
         * @returns {MenuBuilder}
         */
        radioGroup(name, configer) {
                let builder = new RadioGroupBuilder();
                configer(builder);
                this._menu.radioGroup = builder.build();
                this._menu.radioGroup.name = name;
                return this;
        }

        build() {
                return this._menu;
        }

}

class ModuleBuilder {
        constructor () {
                this._module = new ModuleConfig();
        }

        /**
         * 
         * @param {string} name 
         * @param {number} x 
         * @param {number} y 
         * @param {(MenuBuilder)=>void} configer 
         * @returns {ModuleBuilder}
         */
        menu(name, x, y, configer) {
                let builder = new MenuBuilder();
                configer(builder);
                let menu = builder.build();
                menu.location = { x, y };
                menu.name = name;
                this._module.menus.push(menu);
                return this;
        }

        /**
         * @returns {ModuleConfig}
         */
        build() {
                return this._module;
        }
}


class TestBuilder {
        constructor () {
                this._modules = [];
                this._descripttion = "";
                this._name = "";
        }

        /**
         * 
         * @param {String} name 
         * @param {Number} x 
         * @param {Number} y 
         * @param {(ModuleBuilder)=>void} configer 
         * @param {boolean} expanded 
         * @returns {TestBuilder}
         */
        module(name, x, y, configer, expanded = false) {
                let builder = new ModuleBuilder();
                configer(builder);
                let module = builder.build();
                module.name = name;
                module.location = { x, y };
                module.expanded = expanded;
                this._modules.push(module);
                return this;
        }

        /**
         * 
         * @param {String} name 
         * @returns {TestBuilder}
         */
        name(name) {
                this._name = name;
                return this;
        }

        /**
         * 
         * @param {String} description 
         * @returns {TestBuilder}
         */
        description(description) {
                this._descripttion = description;
                return this;
        }

        /**
         * @returns {TestConfig}
         */
        build() {
                return {
                        name: this._name,
                        description: this._descripttion,
                        modules: this._modules
                };
        }
}

exports.TestBuilder = TestBuilder