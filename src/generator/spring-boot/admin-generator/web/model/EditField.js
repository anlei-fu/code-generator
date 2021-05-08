class EditField {
        constructor () {
                /**
                 * @type {[Validate]}
                 */
                this.validates;              
                /**
                 * @type {String}
                 */
                this.canEdit;              
                /**
                 * @type {String}
                 */
                this.canAdd;              
                /**
                 * @type {String}
                 */
                this.controlType;              
                /**
                 * @type {[ReuireExist]}
                 */
                this.reuireExists;              
 
        }
}

exports.EditField = EditField;

/**
 * Builder for EditField
 */
class EditFieldBuilder{
        constructor(){
                this._config =new EditField();
        }

        /**
         * Set property validates
         * 
         * @param {[Validate]} validates
         * @returns {EditFieldBuilder}
         */
        validates(validates){
                this._config.validates = validates;
                return this;
        }

        /**
         * Set property canEdit
         * 
         * @param {String} canEdit
         * @returns {EditFieldBuilder}
         */
        canEdit(canEdit){
                this._config.canEdit = canEdit;
                return this;
        }

        /**
         * Set property canAdd
         * 
         * @param {String} canAdd
         * @returns {EditFieldBuilder}
         */
        canAdd(canAdd){
                this._config.canAdd = canAdd;
                return this;
        }

        /**
         * Set property controlType
         * 
         * @param {String} controlType
         * @returns {EditFieldBuilder}
         */
        controlType(controlType){
                this._config.controlType = controlType;
                return this;
        }

        /**
         * Set property reuireExists
         * 
         * @param {[ReuireExist]} reuireExists
         * @returns {EditFieldBuilder}
         */
        reuireExists(reuireExists){
                this._config.reuireExists = reuireExists;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {EditField}
         */
        build(){
                return this._config;
        }      
}

exports.EditFieldBuilder = EditFieldBuilder;
