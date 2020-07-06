class ListPage {
        constructor () {
                this.name = "";              
                this.controls = "";              
                this.pageConfig = "";              
                this._delete = "";              
                this.deleteBatch = "";              
                this.update = "";              
                this.updateBatch = "";              
                this.add = "";              
                this.addBatch = "";              
                this.columns = "";              
                this.pageSize = "";              
 
        }
}

exports.ListPage = ListPage;

/**
 * Builder for ListPage
 */
class ListPageBuilder{
        constructor(){
                this._config =new ListPage();
        }

        /**
         * Set property name
         * 
         * @param {String} name
         * @returns {ListPageBuilder}
         */
        name(name){
                this._config.name = name;
                return this;
        }

        /**
         * Set property controls
         * 
         * @param {String} controls
         * @returns {ListPageBuilder}
         */
        controls(controls){
                this._config.controls = controls;
                return this;
        }

        /**
         * Set property pageConfig
         * 
         * @param {String} pageConfig
         * @returns {ListPageBuilder}
         */
        pageConfig(pageConfig){
                this._config.pageConfig = pageConfig;
                return this;
        }

        /**
         * Set property _delete
         * 
         * @param {String} _delete
         * @returns {ListPageBuilder}
         */
        _delete(_delete){
                this._config._delete = _delete;
                return this;
        }

        /**
         * Set property deleteBatch
         * 
         * @param {String} deleteBatch
         * @returns {ListPageBuilder}
         */
        deleteBatch(deleteBatch){
                this._config.deleteBatch = deleteBatch;
                return this;
        }

        /**
         * Set property update
         * 
         * @param {String} update
         * @returns {ListPageBuilder}
         */
        update(update){
                this._config.update = update;
                return this;
        }

        /**
         * Set property updateBatch
         * 
         * @param {String} updateBatch
         * @returns {ListPageBuilder}
         */
        updateBatch(updateBatch){
                this._config.updateBatch = updateBatch;
                return this;
        }

        /**
         * Set property add
         * 
         * @param {String} add
         * @returns {ListPageBuilder}
         */
        add(add){
                this._config.add = add;
                return this;
        }

        /**
         * Set property addBatch
         * 
         * @param {String} addBatch
         * @returns {ListPageBuilder}
         */
        addBatch(addBatch){
                this._config.addBatch = addBatch;
                return this;
        }

        /**
         * Set property columns
         * 
         * @param {String} columns
         * @returns {ListPageBuilder}
         */
        columns(columns){
                this._config.columns = columns;
                return this;
        }

        /**
         * Set property pageSize
         * 
         * @param {String} pageSize
         * @returns {ListPageBuilder}
         */
        pageSize(pageSize){
                this._config.pageSize = pageSize;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {ListPage}
         */
        build(){
                return this._config;
        }      
}

exports.ListPageBuilder = ListPageBuilder;
