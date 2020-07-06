class RadioItem {
        constructor () {
                this.label = "";              
                this.value = "";              
 
        }
}

exports.RadioItem = RadioItem;

/**
 * Builder for RadioItem
 */
class RadioItemBuilder{
        constructor(){
                this._config =new RadioItem();
        }

        /**
         * Set property label
         * 
         * @param {String} label
         * @returns {RadioItemBuilder}
         */
        label(label){
                this._config.label = label;
                return this;
        }

        /**
         * Set property value
         * 
         * @param {String} value
         * @returns {RadioItemBuilder}
         */
        value(value){
                this._config.value = value;
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {RadioItem}
         */
        build(){
                return this._config;
        }      
}

exports.RadioItemBuilder = RadioItemBuilder;
