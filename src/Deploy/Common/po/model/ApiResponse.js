exports.ApiResponse = class {
        constructor (code,msg,data) {
                /**
                 * 
                 */
                this.code = code;

                /**
                 * 
                 */
                this.msg = msg;

                /**
                 * 
                 */
                this.data = data;
        }
}