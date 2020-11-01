const { STR } = require("./libs/str")
const { PageSettingBuilder } = require("./PageSetting");
const { RadioGroupBuilder } = require("./RadioGroup");
class Page {
        constructor () {
                this.pageSetting = {};
                this.selects = [];
                this.radioGroup = null;
                this.add = false;
                this.edit = false;
                this.batchEdit = "";
                this._delete = false;
                this.batchDelete = false;
                this.timeRange = false;
        }
}

exports.Page = Page;

/**
 * Builder for Page
 */
class PageBuilder {
        constructor () {
                this._config = new Page();
        }

        /**
         * Set property pageSitting
         * 
         * @param {String} pageSitting
         * @returns {PageBuilder}
         */
        pageSitting(pageSitting) {
                let builder = new PageSettingBuilder();
                pageSitting(builder);
                this._config.pageSetting = builder.build();
                return this;
        }

        /**
         * Set property select
         * 
         * @param {String} selects
         * @returns {PageBuilder}
         */
        select(selects) {
                selects.forEach(s => {
                        this._config.selects.push({
                                model: s,
                                enum: STR.upperFirstLetter(s),
                        });
                })

                return this;
        }

        /**
         * Set property radioGroup
         * 
         * @param {[String]} radioGroup
         * @returns {PageBuilder}
         */
        radioGroup(items) {
                let group = {};
                let options = [];
                items.forEach(i => {
                        options.push({
                                label: STR.upperFirstLetter(i),
                                value: STR.upperFirstLetter(i)
                        });
                })

                group.options = options;
                this._config.radioGroup = group;
                return this;
        }

        /**
         * Set property add
         * 
         * @returns {PageBuilder}
         */
        add() {
                this._config.add = true;
                return this;
        }

        /**
         * Set property edit
         * 
         * @returns {PageBuilder}
         */
        edit() {
                this._config.edit = true;
                return this;
        }

        /**
         * Set property delete
         * 
         * @returns {PageBuilder}
         */
        _delete() {
                this._config._delete = true;
                return this;
        }

        /**
         * Set property editBatch
         * 
         * @returns {PageBuilder}
         */
        batchEdit() {
                this._config.batchEdit = true;
                return this;
        }

        /**
         * Set property deleteBatch
         * 
         * @returns {PageBuilder}
         */
        batchDelete(deleteBatch) {
                this._config.batchDelete = true;
                return this;
        }

        timeRange() {
                this._config.timeRange = true;
                return this;
        }


        /**
         * Build 
         * 
         * @returns {Page}
         */
        build() {
                if (this._config.timeRange) {
                        this._config.pageSetting.filters.options.push({
                                lable: "TimeRange",
                                value: "TimeRange"
                        })
                        this._config.pageSetting.filters.enabledFilters.push("TimeRange");
                }

                this._config.selects.forEach(s => {
                        this._config.pageSetting.filters.options.push({
                                lable: s.enum,
                                value: s.enum
                        })
                        this._config.pageSetting.filters.enabledFilters.push(s.enum);
                });

                if (this._config.radioGroup.options.length != 0) {
                        this._config.pageSetting.filters.options.push({
                                lable: "RadioGroup",
                                value: "RadioGroup"
                        })
                        this._config.pageSetting.filters.enabledFilters.push("RadioGroup");
                }
                
                this._chooseCheckColumn();
                this._chooseOperationColumn();
                return this._config;
        }

        _chooseCheckColumn() {
                let checkColumn = {
                        key: "Checkbox",
                        title: "Checkbox",
                        type: "selection",
                        width: 60,
                        align: "center",
                };

                if (this._config.batchDelete || this._config.batchEdit) {
                        this._config.pageSetting.table.defaultShowingColumns =
                                [checkColumn].concat(this._config.pageSetting.table.defaultShowingColumns);
                }


        }

        _chooseOperationColumn() {
                const optionColumn = {
                        title: "Operation",
                        key: "test",
                        slot: "test",
                        isOperation: true,
                        operations: [
                        ],
                }

                if (this._config.edit || this._config._delete) {
                        this._config.pageSetting.table.defaultShowingColumns.push(optionColumn);
                }

                const editOption = {
                        name: "edit",
                        match: function (row) {
                                return true;
                        },
                        label: "edit",
                };

                if (this._config.edit) {
                        optionColumn.operations.push(editOption);
                }

                const deleteOption = {
                        name: "delete",
                        match: function (row) {
                                return true;
                        },
                        label: "delete",
                };

                if(this._config._delete){
                        optionColumn.operations.push(deleteOption);
                }
        }
}

exports.PageBuilder = PageBuilder;
