exports.ApiResponse = class {
        constructor(code, msg, data) {
                /**
                 * 
                 */
                this.code = code;

                /**
                 * 
                 */
                this.message = msg;

                /**
                 * 
                 */
                this.data = data;
        }
}