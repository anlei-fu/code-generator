/**
 * Builder for @config
 */
class @configBuilder{
        constructor(){
                this._config =new @config();
        }

@content 
        /**
         * Build 
         * 
         * @returns {@config}
         */
        build(){
                return this._config;
        }      
}

exports.@configBuilder = @configBuilder;
