const METHODS = {
        ADD: "add",
        ADD_BATCH: "addBatch",
        DELETE_BY_ID: "deleteById",
        DELETE_BATCH: "deleteBatch",
        UPDATE_BY_ID: "updateById",
        UPDATE_BATCH: "updateBatch",
        GET_BY_ID: "getById",
        GET_PAGE: "getPage",
        GET_DETAIL_BY_ID: "getDetailById",
        GET_DETAIL_PAGE: "getDetailBatch",
        GET_ALL: "getAll",
        COUNT: "count",
}


class GenerateItemConfig {
        constructor () {
                this.add = null;
                this.addBatch = null;
                this.deleteById = null;
                this.deleteBatch = null;
                this.updateById = null;
                this.updateBatch = null;
                this.getById = null;
                this.getPage = null;
                this.getDetailById = null;
                this.getDeatailPage = null;
                this.getAll = null;
                this.count = null;
        }
}

class GenerateConfigGroupBuilder {
        constructor () {
                this._items = {};
        }

        item(name, configer) {
                let builder = new GenerateConfigItemBuilder();
                configer(builder);
                this._items[name] = builder.build();
                return this;
        }

        build() {
                return this._items;
        }
}

class GenerateConfigItemBuilder {
        constructor () {
                this._config = new GenerateItemConfig();
        }

        /**
         * 
         */
        all() {
                this._config.add = METHODS.add;
                this._config.addBatch = METHODS.ADD_BATCH;
                this._config.deleteById = METHODS.DELETE_BY_ID;
                this._config.deleteBatch = METHODS.DELETE_BATCH;
                this._config.updateById = METHODS.UPDATE_BY_ID;
                this._config.updateBatch = METHODS.UPDATE_BATCH;
                this._config.getById = METHODS.GET_BY_ID;
                this._config.getPage = METHODS.GET_PAGE;
                this._config.getDetailById = METHODS.GET_DETAIL_BY_ID;
                this._config.getDeatailPage = METHODS.GET_DETAIL_PAGE;
                this._config.getAll = METHODS.GET_ALL;
                this._config.count = METHODS.COUNT;
                return this;
        }

        include(...items) {
                items.forEach(item => {
                        this._config[item] = item;
                });
                return this;
        }

        except(...items) {
                items.forEach(item => {
                        this._config[item] = null;
                });
                return this;
        }

        onlyQuery() {
                this._config.getAll = METHODS.GET_ALL;
                this._config.getById = METHODS.GET_BY_ID;
                this._config.getPage = METHODS.GET_PAGE;
                this._config.getDetailById = METHODS.GET_DETAIL_BY_ID;
                this._config.getDeatailPage = METHODS.GET_DETAIL_PAGE;
                return this;
        }

        noDetail() {
                this._config.getDetailById = null;
                this._config.getDeatailPage = null;
                return this;
        }

        noCount() {
                this._config.count = null;
                return this;
        }

        noBatch() {
                this._config.addBatch = null;
                this._config.deleteBatch = null;
                this._config.updateBatch = null;
                return this;
        }

        noGetAll() {
                this._config.getAll = null;
                return this;
        }

        build() {
                return this._config;
        }

}

exports.GenerateItemConfig = GenerateItemConfig;
exports.GenerateConfigItemBuilder=GenerateConfigItemBuilder;