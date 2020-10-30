const {STR} =require("./libs/str")
class AddPage {
        constructor () {
                this.optionalFields = [];              
                this.selects = [];              
                this.texts = [];              
                this.textAreas = [];              
                this.rules = [];              
 
        }
}

exports.AddPage = AddPage;

/**
 * Builder for AddPage
 */
class AddPageBuilder{
        constructor(){
                this._config =new AddPage();
        }

        /**
         * Set property optionalFields
         * 
         * @param {String} optionalFields
         * @returns {AddPageBuilder}
         */
        optionalFields(optionalFields){
                this._config.optionalFields = optionalFields;
                return this;
        }

        /**
         * Set property selects
         * 
         * @param {[String]} selects
         * @returns {AddPageBuilder}
         */
        select(selects){
                 selects.forEach(s=>{
                        this._config.selects.push({
                                model:s,
                                enum:s,
                                upperModelName:STR.upperFirstLetter(s)
                        });
                 })
               
                return this;
        }

        /**
         * Set property texts
         * 
         * @param {[String]} texts
         * @returns {AddPageBuilder}
         */
        texts(texts){
                this._config.texts = texts;
                return this;
        }

        /**
         * Set property textArea
         * 
         * @param {[String]} textAreas
         * @returns {AddPageBuilder}
         */
        textAreas(textAreas){
                this._config.textAreas = textAreas;
                return this;
        }

        /**
         * Set property rules
         * 
         * @param {[String]} items
         * @returns {AddPageBuilder}
         */
        requre(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             required:true,
                             message:"field can not be empty",
                             trigger:"blur"
                        });
                })
              
                return this;
        }

        range(min,max,items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             min,
                             max,
                             message:`out of range ${min}-${max} `,
                             trigger:"blur"
                        });
                })

                return this;
        }

        phone(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             type:"phone",
                             message:"field can not be empty",
                             trigger:"blur"
                        });
                })

                return this;
        }

        email(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             type:"email",
                             message:"field can not be empty",
                             trigger:"blur"
                        });
                })

                return this;
        }

        url(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             type:"url",
                             message:"incorrect url",
                             trigger:"blur"
                        });
                })

                return this;
        }

        port(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             min:0,
                             max:63000,
                             message:"incorrect port number",
                             trigger:"blur"
                        });
                })

                return this;
        }

        ip(items){
                items.forEach(i=>{
                        this._config.rules.push({
                             name:i,
                             type:"ip",
                             message:"incorrect ip",
                             trigger:"blur"
                        });
                })

                return this;
        }

 
        /**
         * Build 
         * 
         * @returns {AddPage}
         */
        build(){
                return this._config;
        }      
}

exports.AddPageBuilder = AddPageBuilder;
