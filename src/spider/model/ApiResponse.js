exports.ApiResponse = class {
        constructor (code,message,data) {
                /**
                 * 
                 */
                this.code = code;

                /**
                 * 
                 */
                this.message = message;

                /**
                 * 
                 */
                this.data = data;

                /**
                 * 
                 */
                this.status=true;
        }
}