const { formatUtils } = require("./../utils/formatUtils");

class ExecuteResult {
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

/**
 * Builder of @see {ExcuteResult}
 */
class ExcuteResultBuilder {
        constructor (description) {
                this._result = new ExecuteResult();
                this._result.description = description;
        }

        /**
         * Set type of result
         * 
         * @param {*} type 
         * @returns {ExcuteResultBuilder}
         */
        type(type) {
                this._result.type = type;
                return this;
        }

        /**
         * Set code of result @see {ExecuteResultCode}
         * 
         * @param {*} code 
         * @returns {ExcuteResultBuilder}
         */
        code(code) {
                this._result.code = code;
                return this;
        }

        /**
         * Set description of result
         * 
         * @param {String} desc 
         * @returns {ExcuteResultBuilder}
         */
        description(desc) {
                this._result.description = desc;
                return this;
        }

        /**
         * Append log into result
         * 
         * @param {String} brief 
         * @param {String} detail 
         * @returns {ExcuteResultBuilder}
         */
        info(brief, detail) {
                return this._log("info", brief, detail);
        }

        /**
         * Append error msg into result
         * 
         * @param {String} brief 
         * @param {String} detail 
         * @returns {ExcuteResultBuilder}
         */
        error(brief, detail) {
                return this._log("info", brief, detail);
        }

        /**
         * Prepend result
         * 
         * @param {ExecuteResult} result
         * @returns {ExcuteResultBuilder}
         */
        prependResult(result) {
                return this._result.log = result.log + this._result.log;
        }

        /**
         * Prepend result and build
         * 
         * @param {ExecuteResult} result 
         * @returns {ExecuteResult}
         */
        prependResultAndBuild(result) {
                return this.prependResult(result).build();
        }

        /**
         * Build result
         * 
         * @returns {ExecuteResult}
         */
        build() {
                if (this._result.description)
                        this._result.log = this._result.description + "\r\n" + this._result.log;

                if (this._result.type) {

                }

                this._result.log += `Exit Code ${this._result.code}`;

                return this._result;
        }

        /**
         * Append line to the log
         */
        _appendLine() {
                this._result.log += "\r\n";
        }

        /**
         * Log sth
         * 
         * @param {String} type "info"|"error"
         * @param {String?} brief 
         * @param {String?} detail 
         * @returns {ExcuteResultBuilder}
         */
        _log(type, brief = "", detail = "") {
                this._result.info += this._appendEventTitle(type, brief);
                if (detail)
                        this._result += formatUtils.formatObject(detail) + "\r\r";
                return this;
        }

        /**
         * Append event title
         * 
         * @param {String} type 
         */
        _appendEventTitle(type, brief) {
                this._result.log += `[${type}][${new Date().toLocaleString()}]  ${brief}\r\n`;
        }
}

exports.ExcuteResultBuilder = ExcuteResultBuilder;