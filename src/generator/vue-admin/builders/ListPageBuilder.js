class ListPage {
        constructor () {
                this.timeRange = "";              
                this.selects = "";              
                this.checkBoxGroup = "";              
                this.model = "";              
                this.getPage = "";              
                this.deletById = "";              
                this.withAdd = "";              
                this.withDelete = "";              
                this.withUpdate = "";              
                this.withUpdateBatch = "";              
                this.withDeleteBatch = "";              
                this.withPage = "";              
                this.withGetAll = "";              
                this.getAll = "";              
                this.name = "";              
                this.columns = "";              
 
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
         * Set property timeRange
         * 
         * @param {String} timeRange
         * @returns {ListPageBuilder}
         */
        timeRange(timeRange){
                this._config.timeRange = timeRange;
                return this;
        }

        /**
         * Set property selects
         * 
         * @param {String} selects
         * @returns {ListPageBuilder}
         */
        selects(selects){
                this._config.selects = selects;
                return this;
        }

        /**
         * Set property checkBoxGroup
         * 
         * @param {String} checkBoxGroup
         * @returns {ListPageBuilder}
         */
        checkBoxGroup(checkBoxGroup){
                this._config.checkBoxGroup = checkBoxGroup;
                return this;
        }

        /**
         * Set property model
         * 
         * @param {String} model
         * @returns {ListPageBuilder}
         */
        model(model){
                this._config.model = model;
                return this;
        }

        /**
         * Set property getPage
         * 
         * @param {String} getPage
         * @returns {ListPageBuilder}
         */
        getPage(getPage){
                this._config.getPage = getPage;
                return this;
        }

        /**
         * Set property deletById
         * 
         * @param {String} deletById
         * @returns {ListPageBuilder}
         */
        deletById(deletById){
                this._config.deletById = deletById;
                return this;
        }

        /**
         * Set property withAdd
         * 
         * @param {String} withAdd
         * @returns {ListPageBuilder}
         */
        withAdd(withAdd){
                this._config.withAdd = withAdd;
                return this;
        }

        /**
         * Set property withDelete
         * 
         * @param {String} withDelete
         * @returns {ListPageBuilder}
         */
        withDelete(withDelete){
                this._config.withDelete = withDelete;
                return this;
        }

        /**
         * Set property withUpdate
         * 
         * @param {String} withUpdate
         * @returns {ListPageBuilder}
         */
        withUpdate(withUpdate){
                this._config.withUpdate = withUpdate;
                return this;
        }

        /**
         * Set property withUpdateBatch
         * 
         * @param {String} withUpdateBatch
         * @returns {ListPageBuilder}
         */
        withUpdateBatch(withUpdateBatch){
                this._config.withUpdateBatch = withUpdateBatch;
                return this;
        }

        /**
         * Set property withDeleteBatch
         * 
         * @param {String} withDeleteBatch
         * @returns {ListPageBuilder}
         */
        withDeleteBatch(withDeleteBatch){
                this._config.withDeleteBatch = withDeleteBatch;
                return this;
        }

        /**
         * Set property withPage
         * 
         * @param {String} withPage
         * @returns {ListPageBuilder}
         */
        withPage(withPage){
                this._config.withPage = withPage;
                return this;
        }

        /**
         * Set property withGetAll
         * 
         * @param {String} withGetAll
         * @returns {ListPageBuilder}
         */
        withGetAll(withGetAll){
                this._config.withGetAll = withGetAll;
                return this;
        }

        /**
         * Set property getAll
         * 
         * @param {String} getAll
         * @returns {ListPageBuilder}
         */
        getAll(getAll){
                this._config.getAll = getAll;
                return this;
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
         * Build 
         * 
         * @returns {ListPage}
         */
        build(){
                return this._config;
        }      
}

exports.ListPageBuilder = ListPageBuilder;
