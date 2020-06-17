const { ExecuteResultBuilder } = require("../builder/ExecuteResultBuilder");
const { ExcuteResultCode } = require("../po/constant/ExecuteResultCode");
const { formatUtils } = require("../utils/formatUtils")
class ExecuteResultFactory {

        /**
         * Create shell not found result
         * 
         * @param {String} shellFile 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static shellNotExist(shellFile, previousResult) {
                return this._fileNotFoundResult("shell", shellFile, previousResult);
        }

        /**
         * Create execute shell failed result
         * 
         * @param {String} shellFile 
         * @param {params:Object|Array,log:String,error:Error} param1 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static shellFailed(shellFile, { params, log, error }, previousResult) {
                let builder = new ExecuteResultBuilder("shell");

                let detail = formatUtils.formatObjects({ params, log, error }) + "\r\n";
                builder.error(`execute shell '${shellFile}' failed`, detail)
                        .code(ExcuteResultCode.EXECUTE_SHELL_FAILE);

                return this._build(builder, previousResult);
        }

        /**
         * Create execute shell succeed result
         * 
         * @param {String} shellFile 
         * @param {String} log 
         * @param {ExecuteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static shellSuccessed(shellFile, log, previousResult) {
                let builder = new ExecuteResultBuilder("shell");

                let detail = formatUtils.formatObjects({ log }) + "\r\n";
                builder.error(`execute shell '${shellFile}' successfully`, detail)
                        .code(ExcuteResultCode.SUCCESSED);

                return this._build(builder, previousResult);
        }

        /**
         * Create js not exists result
         * 
         * @param {String} jsFile 
         * @param {ExecuteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static jsNotExist(jsFile, previousResult) {
                return this._fileNotFoundResult("js", jsFile, previousResult);
        }

        static mainNotFound(jsFile) {
                let builder = new ExecuteResultBuilder("js");
                return builder.code(ExcuteResultCode.MAIN_NOT_FOUND)
                        .error(`main function can not be found in (${jsFile})'s exports`)
                        .build();
        }

        /**
         * Create js incorrect result
         * 
         * @param {String} jsFile 
         * @param {Error} error 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static jsIncorrect(jsFile, error, previousResult) {
                let builder = new ExecuteResultBuilder("Js");

                builder.error(`js file '${jsFile}' incorrect`, error)
                        .code(ExcuteResultCode.JS_FILE_INCORRECT);

                return this._build(builder, previousResult);
        }

        /**
         * Create excute js failed result
         * 
         * @param {String} jsFile 
         * @param {Any} args 
         * @param {Error} error 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static jsFailed(jsFile, args, error, previousResult) {
                let builder = new ExecuteResultBuilder("js");

                let detail = formatUtils.formatObjects({ args, error }) + "\r\n";
                builder.error(`execute js '${jsFile}' failed`, detail)
                        .code(ExcuteResultCode.EXECUTE_JS_FAILED);

                return this._build(builder, previousResult);
        }

        /**
         * Create execute js succeed result
         * 
         * @param {String} jsfile 
         * @param {String} log 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static jsSuccessed(jsfile, log, previousResult) {
                let builder = new ExecuteResultBuilder("js");

                let detail = formatUtils.formatObjects({ log }) + "\r\n";
                builder.info(`execute js '${jsfile}' successfully`, detail)
                        .code(ExcuteResultCode.SUCCESSED);

                return this._build(builder, previousResult);
        }

        /**
         * Create file not found result
         * 
         * @param {String} type 
         * @param {String} file 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static _fileNotFoundResult(type, file, previousResult) {
                let builder = new ExecuteResultBuilder(type);
                builder.error(`${type} file '${file}' not found`)
                        .code(ExcuteResultCode.FILE_NOT_FOUND);

                return this._build(builder, previousResult);
        }

        /**
         * Build result
         * 
         * @param {ExecuteResultBuilder} builder 
         * @param {ExecueteResult} previousResult 
         * @returns {ExecueteResult}
         */
        static _build(builder, previousResult) {
                return previousResult
                        ? builder.prependResultAndBuild(previousResult) : builder.build();
        }
}

exports.ExecuteResultFactory = ExecuteResultFactory;