class DBType {
        constructor () {
                this.name = "";
                this.length = 0;
                this.direction = "";
        }
}

class DBParameter {
        constructor () {
                this.name = "";
                this.type = new DBType();
        }
}

class Function {
        constructor () {
                this.name = "";
                this.returnType = new DBType();
                this.parameters = [new DBType()];
                this.joinTables = [""];
                this.joinFunctions = [""];
        }
}


class FunctionResolver {

        /**
         * 
         * 
         * @param {String} funcText 
         * @returns {Function}
         */
        resolve(funcText) {
              
        }

        /**
         * 
         */
        detectTables(){

        }

        /**
         * 
         */
        detectFunction(){

        }
}

