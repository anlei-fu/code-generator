class UpdatePage {
        constructor () {
                this.selects = "";              
                this.texts = "";              
                this.textareas = "";              
                this.checkBoxes = "";              
                this.withAdd = "";              
                this.withAddBatch = "";              
                this.withUpdate = "";              
                this.withUpdateBatch = "";              
                this.addMethod = "";              
                this.addBatchMethod = "";              
                this.updateMethod = "";              
                this.updateBatchMethod = "";              
                this.model = "";              
 
        }
}

exports.UpdatePage = UpdatePage;

/**
 * Builder for UpdatePage
 */
class UpdatePageBuilder{
        constructor(){
                this._config =new UpdatePage();
        }

        /**
         * Set property selects
         * 
         * @param {String} selects
         * @returns {UpdatePageBuilder}
         */
        selects(selects){
                this._config.selects = selects;
                return this;
        }

        /**
         * Set property texts
         * 
         * @param {String} texts
         * @returns {UpdatePageBuilder}
         */
        texts(texts){
                this._config.texts = texts;
                return this;
        }

        /**
         * Set property textareas
         * 
         * @param {String} textareas
         * @returns {UpdatePageBuilder}
         */
        textareas(textareas){
                this._config.textareas = textareas;
                return this;
        }

        /**
         * Set property checkBoxes
         * 
         * @param {String} checkBoxes
         * @returns {UpdatePageBuilder}
         */
        checkBoxes(checkBoxes){
                this._config.checkBoxes = checkBoxes;
                return this;
        }

        /**
         * Set property withAdd
         * 
         * @param {String} withAdd
         * @returns {UpdatePageBuilder}
         */
        withAdd(withAdd){
                this._config.withAdd = withAdd;
                return this;
        }

        /**
         * Set property withAddBatch
         * 
         * @param {String} withAddBatch
         * @returns {UpdatePageBuilder}
         */
        withAddBatch(withAddBatch){
                this._config.withAddBatch = withAddBatch;
                return this;
        }

        /**
         * Set property withUpdate
         * 
         * @param {String} withUpdate
         * @returns {UpdatePageBuilder}
         */
        withUpdate(withUpdate){
                this._config.withUpdate = withUpdate;
                return this;
        }

        /**
         * Set property withUpdateBatch
         * 
         * @param {String} withUpdateBatch
         * @returns {UpdatePageBuilder}
         */
        withUpdateBatch(withUpdateBatch){
                this._config.withUpdateBatch = withUpdateBatch;
                return this;
        }

        /**
         * Set property addMethod
         * 
         * @param {String} addMethod
         * @returns {UpdatePageBuilder}
         */
        addMethod(addMethod){
                this._config.addMethod = addMethod;
                return this;
        }

        /**
         * Set property addBatchMethod
         * 
         * @param {String} addBatchMethod
         * @returns {UpdatePageBuilder}
         */
        addBatchMethod(addBatchMethod){
                this._config.addBatchMethod = addBatchMethod;
                return this;
        }

        /**
         * Set property updateMethod
         * 
         * @param {String} updateMethod
         * @returns {UpdatePageBuilder}
         */
        updateMethod(updateMethod){
                this._config.updateMethod = updateMethod;
                return this;
        }

        /**
         * Set property updateBatchMethod
         * 
         * @param {String} updateBatchMethod
         * @returns {UpdatePageBuilder}
         */
        updateBatchMethod(updateBatchMethod){
                this._config.updateBatchMethod = updateBatchMethod;
                return this;
        }

        /**
         * Set property model
         * 
         * @param {String} model
         * @returns {UpdatePageBuilder}
         */
        model(model){
                this._config.model = model;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {UpdatePage}
         */
        build(){
                return this._config;
        }      
}

exports.UpdatePageBuilder = UpdatePageBuilder;
