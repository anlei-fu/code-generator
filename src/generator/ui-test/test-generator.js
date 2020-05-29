const { UiCommandBuilder, Point } = require("./UiCommandBuilder");


class GenerateConfig {

}


class TestGenerator {

        constructor (config) {
                this._config = config || {};
                this._config.select = this._config.select || {};
                this._config.timeRange = this._config.timeRange || {};

                // first select candidate offsets
                this._config.select.firstItem = this._config.select.firstItem || { offsetx: -80, offsety: 51 };

                // select item gutter
                this._config.select.gutter = this._config.select.gutter || 36;

                // max test count
                this._config.select.max = null;

                // select clear delay
                this._config.select.clearDlay = this._config.select.clearDlay || 500;

                // select drop delay
                this._config.select.dropDelay = this._config.select.dropDlay || 1000;

                // time range last month offsets
                this._config.timeRange.lastMonth = this._config.timeRange.lastMonth || { offsetx: -312, offsety: 80 };

                // time range last three month offsets
                this._config.timeRange.lastThreeMonth = this._config.timeRange.lastThreeMonth || { offsetx: -312, offsety: 100 };

                // time range last year button offsets
                this._config.timeRange.previousYear = this._config.timeRange.previousYear || { offsetx: -208, offsety: 63 };

                // time range start time offsets
                this._config.timeRange.startTime = this._config.timeRange.startTime || { offsetx: -189, offsety: 260 };

                // time range end time offsets
                this._config.timeRange.endTime = this._config.timeRange.endTime || { offsetx: 361, offsety: 260 };

                // time range test suits
                this._config.timeRange.testSuits = this._config.timeRange.testSuits || { lastMonth: true, lastThreeMonth: true };

                // show delay
                this._config.timeRange.showDlay = this._config.timeRange.showDlay || 1000;

                // query delay
                this._config.afterQueryDelay = this._config.afterQueryDelay || 1000;

                // change module delay
                this._config.changModuleDelay = this._config.changModuleDelay || 1000;

                // change menu delay
                this._config.changeMenuDelay = this._config.changeMenuDelay || 500;

                // expanding menus delay
                this._config.expandingMenuDelay = this._config.expandingMenuDelay || 500;

                // time range change delay
                this._config.timeRange.changeDelay = this._config.timeRange.changeDelay || 500;

                //radio group offset
                this._config.radioGroup=this._config.radioGroup||{};
                this._config.radioGroup.inputOffset=this._config.radioGroup.inputOffset||-60;


                this._builder = new UiCommandBuilder();
        }

        /**
         * 
         * @param {TestConfig} config 
         * @returns 
         */
        generate(config) {
                this.expandAllModules(config.modules);

                config.modules.forEach(module => {
                        this.generateModule(module);
                });

                return this._builder.name(config.name)
                        .description(config.name)
                        .build();
        }

        /**
         * 
         * @param {[ModuleConfig]} modules 
         */
        expandAllModules(modules) {
                this._builder.info("expand all module");
                modules.forEach(module => {
                        if (module.expanded)
                                return;

                        this._builder.click(module.location)
                                     .wait(this._config.expandingMenuDelay)
                                     .click(82, 205)
                                     .info(`${module.name} expanded!`);
                });
        }

        /**
         * 
         * @param {ModuleConfig} config 
         */
        generateModule(config) {
                this._builder.click(config.location)
                             .wait(this._config.changModuleDelay)
                             .info(`begin testting module ${config.name}`);

                config.menus.forEach(menu => {
                        this.generateMenu(menu);
                })
        }

        /**
         * 
         * @param {MenuConfig} config 
         */
        generateMenu(config) {
                this._builder
                        .click(config.location)
                        .wait(this._config.changeMenuDelay)
                        .info(`begin testting menu ${config.name}`);

                if (config.timeRange)
                        this.generateTimeRange(config.timeRange, config);

                config.selects.forEach(select => {
                        this.generateSelect(select, config);
                });

                if (config.radioGroup)
                        this.generateRadioGroup(config.radioGroup, config)
                
                        this._builder.click(config.queryButtonLocation)
                                     .info(`test menu ${config.name} finished`)

        }

        /**
         * 
         * @param {SelectConfig} selectConfig 
         * @param {MenuConfig} menuConfig 
         */
        generateSelect(selectConfig, menuConfig) {
                let points = {
                        anchor: selectConfig.location,
                        firstItem: {
                                x: selectConfig.location.x + this._config.select.firstItem.offsetx,
                                y: selectConfig.location.y + this._config.select.firstItem.offsety
                        }
                }

                this._builder.info(`begin test select ${selectConfig.name}`);

                // get max test item
                let t = this._config.select.max;
                t = t || selectConfig.count;
                t = Math.min(t, selectConfig.count);

                for (let i = 0; i < t; i++) {
                        let currentItemPosition = {
                                x: points.firstItem.x,
                                y: points.firstItem.y + i * this._config.select.gutter
                        };
                        this._builder.info(`test select item ${i}`)
                                .click(points.anchor)
                                .wait(this._config.select.dropDelay)
                                .click(currentItemPosition)
                                .click(menuConfig.queryButtonLocation)
                                .wait(this._config.afterQueryDelay)
                                .click(points.anchor)
                                .wait(this._config.select.clearDlay);
                }

                this._builder.info(`finish test select ${selectConfig.name}`);
        }

        generateRadioGroup(radioGroupConfig,menuConfig) {
             let points={
                     clear:radioGroupConfig.inputLocation,
                     input:{
                             x:radioGroupConfig.inputLocation.x+this._config.radioGroup.inputOffset,
                             y:radioGroupConfig.inputLocation.y
                        }
             }

             this._builder.info("start test radio group");

             radioGroupConfig.options.forEach(option=>{
                  this._builder.click(points.clear)
                               .wait(1000)
                               .click(option.location)
                               .click(points.input)
                               .type(option.text)
                               .wait(500)
                               .click(menuConfig.queryButtonLocation)
                               .wait(this._config.afterQueryDelay)
             });

             this._builder.click(points.clear)
                          .click(menuConfig.queryButtonLocation)
                          .info("radio group test finished")
        }

        /**
         * 
         * @param {TimeRangeConfig} timeRangeConfig 
         * @param {MenuConfig} menuConfig 
         */
        generateTimeRange(timeRangeConfig, menuConfig) {
                let points = {
                        anchor: timeRangeConfig.location,
                        lastMonth: {
                                x: timeRangeConfig.location.x + this._config.timeRange.lastMonth.offsetx,
                                y: timeRangeConfig.location.y + this._config.timeRange.lastMonth.offsety
                        },
                        lastThreeMonth: {
                                x: timeRangeConfig.location.x + this._config.timeRange.lastThreeMonth.offsetx,
                                y: timeRangeConfig.location.y + this._config.timeRange.lastThreeMonth.offsety
                        },
                        previousYear: {
                                x: timeRangeConfig.location.x + this._config.timeRange.previousYear.offsetx,
                                y: timeRangeConfig.location.y + this._config.timeRange.previousYear.offsety
                        },
                        startTime: {
                                x: timeRangeConfig.location.x + this._config.timeRange.startTime.offsetx,
                                y: timeRangeConfig.location.y + this._config.timeRange.startTime.offsety
                        },
                        endTime: {
                                x: timeRangeConfig.location.x + this._config.timeRange.endTime.offsetx,
                                y: timeRangeConfig.location.y + this._config.timeRange.endTime.offsety
                        }
                }

                this._builder.info(`start test time range ${timeRangeConfig.name}`);

                if (this._config.timeRange.testSuits.lastMonth) {
                        this._builder.info("last month")
                                .click(points.anchor)
                                .wait(this._config.timeRange.showDlay)
                                .click(points.lastMonth)
                                .wait(this._config.timeRange.changeDelay)
                                .click(menuConfig.queryButtonLocation)
                                .wait(this._config.afterQueryDelay);
                }

                if (this._config.timeRange.lastThreeMonth) {
                        this._builder.info("last three month")
                                .click(points.anchor)
                                .wait(this._config.timeRange.showDlay)
                                .click(points.lastThreeMonth)
                                .wait(this._config.timeRange.changeDelay)
                                .click(menuConfig.queryButtonLocation)
                                .wait(this._config.afterQueryDelay);
                }

                this._builder.info("last year")
                        .click(points.anchor)
                        .wait(this._config.timeRange.showDlay)
                        .click(points.previousYear)
                        .wait(this._config.timeRange.showDlay)
                        .click(points.startTime)
                        .wait(500)
                        .click(points.endTime)
                        .wait(this._config.timeRange.changeDelay)
                        .click(menuConfig.queryButtonLocation)
                        .wait(this._config.afterQueryDelay)
                        .info(`timeRange ${timeRangeConfig.name} finished`);
        }


}

exports.TestGenerator = TestGenerator
