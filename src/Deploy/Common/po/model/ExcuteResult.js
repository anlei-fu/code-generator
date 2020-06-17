exports.ExecuteResult = class {
    constructor () {
        /**
         * Executing type
         */
        this.type = 0;
        
        /**
         * Description
         */
        this.description = "";

        /**
         * Excecute infomation and output
         */
        this.log = "";

        /**
         * Execute result code
         */
        this.code = 100;
    }
}