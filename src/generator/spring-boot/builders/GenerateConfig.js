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


class GenerateConfig {
        constructor () {
                this.add = false;
                this.addBatch = false;
                this.deleteById = false;
                this.deleteBatch = false;
                this.updateById = false;
                this.updateBatch = false;
                this.getById = false;
                this.getPage = false;
                this.getDetailById = false;
                this.getAll = false;
                this.count = false;
        }
}

class GenerateConfigGroupBuilder {
        constructor () {
                this._items = {};
        }

        item(name, configer) {
                let builder = new GenerateConfigBuilder();
                configer(builder);
                this._items[name] = builder.build();
                return this;
        }

        build() {
                return this._items;
        }
}

class GenerateConfigBuilder {
        constructor () {
                this._config = new GenerateConfig();
        }

        /**
         * 
         */
        all() {
                this._config.add = true;
                this._config.addBatch = true;
                this._config.deleteById = true;
                this._config.deleteBatch = true;
                this._config.updateById = true;
                this._config.updateBatch = true;
                this._config.getById = true;
                this._config.getPage = true;
                this._config.getDetailById = true;
                this._config.getDetailPage = true;
                this._config.getAll = true;
                this._config.count = true;
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
                        this._config[item] = false;
                });
                return this;
        }

        onlyQuery() {
                this._config.getAll = true;
                this._config.getById = true;
                this._config.getPage = true;
                this._config.getDetailById = true;
                this._config.getDeatailPage = true;
                return this;
        }

        noDetail() {
                this._config.getDetailById = false;
                this._config.getDeatailPage = false;
                return this;
        }

        noCount() {
                this._config.count = false;
                return this;
        }

        noBatch() {
                this._config.addBatch = false;
                this._config.deleteBatch = false;
                this._config.updateBatch = false;
                return this;
        }

        noGetAll() {
                this._config.getAll = false;
                return this;
        }

        build() {
                return this._config;
        }

}

exports.GenerateConfig = GenerateConfig;
exports.GenerateConfigBuilder = GenerateConfigBuilder;