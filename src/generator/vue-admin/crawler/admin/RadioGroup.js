class RadioGroup {
        constructor () {
                this.options = [];              
 
        }
}

exports.RadioGroup = RadioGroup;

/**
 * Builder for RadioGroup
 */
class RadioGroupBuilder{
        constructor(){
                this._config =new RadioGroup();
        }

        /**
         * Set property options
         * 
         * @param {[String]} options
         * @returns {RadioGroupBuilder}
         */
        options(options){
                options.forEach(o=>{
                    this._config.options.push({
                        label:o,
                        value:o
                    });
                });
                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {RadioGroup}
         */
        build(){
                return this._config;
        }      
}

exports.RadioGroupBuilder = RadioGroupBuilder;
