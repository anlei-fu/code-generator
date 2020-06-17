const { formatUtils } = require("./../utils/formatUtils");
const { ExecuteResult } = require("./../po/model/ExcuteResult");

/**
 * Builder of @see {ExcuteResult}
 */
exports.ExecuteResultBuilder = class {
        constructor (type) {
                this._result = new ExecuteResult();
                this._result.type =`----------------------------------------------------------------${type}------------------------------------------------------------------------`;
        }

        /**
         * Set type of result
         * 
         * @param {string} type 
         * @returns {ExecuteResultBuilder}
         */
        type(type) {
                this._result.type = type;
                return this;
        }

        /**
         * Set code of result @see {ExecuteResultCode}
         * 
         * @param {*} code 
         * @returns {ExecuteResultBuilder}
         */
        code(code) {
                this._result.code = code;
                return this;
        }

        /**
         * Set description of result
         * 
         * @param {String} desc 
         * @returns {ExecuteResultBuilder}
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
         * @returns {ExecuteResultBuilder}
         */
        info(brief, detail) {
                return this._log("info", brief, detail);
        }

        /**
         * Append error msg into result
         * 
         * @param {String} brief 
         * @param {String} detail 
         * @returns {ExecuteResultBuilder}
         */
        error(brief, detail) {
                return this._log("error", brief, detail);
        }

        /**
         * Prepend result
         * 
         * @param {ExecuteResult} result
         * @returns {ExecuteResultBuilder}
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
                let content = "";
                if (this._result.description)
                        content = this._result.description + "\r\n";

                if (this._result.type)
                        content += `${this._result.type} ` + "\r\n";

                content += this._result.log;

                content += `Exit >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ${this._result.code}` + "\r\n";

                this._result.log = content;

                return this._result;
        }

        /**
         * Append line to the log
         */
        _appendLine() {
                this._result.log += "\n";
        }

        /**
         * Log sth
         * 
         * @param {String} type "info"|"error"
         * @param {String?} brief 
         * @param {String?} detail 
         * @returns {ExecuteResultBuilder}
         */
        _log(type, brief = "", detail) {
                this._appendEventTitle(type, brief);
                if (detail)
                        this._result.log += formatUtils.formatSingleObject("============detail===========", detail);
                return this;
        }

        /**
         * Append event title
         * 
         * @param {String} type 
         */
        _appendEventTitle(type, brief) {
                this._result.log += `[${type}][${new Date().toLocaleString()}]  ${brief}` + "\r\n";
        }
}
