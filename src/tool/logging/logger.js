/**
 *  Properties of log item
 */
class LogCotent {
        constructor() {
                this.name="";
                this.msg = "";
                this.level = "";
                this.time = new Date();
                this.error = new Error();
        }
}

/**
 * Logger
 */
class Logger {
        constructor(name) {
                this._name = name;
        }

        /**
         * Record infomation
         * 
         * @param {String} msg 
         */
        info(msg) {
                this._doWrite("info", msg);
        }

        /**
         * Record warnning
         * 
         * @param {String} msg 
         */
        warn(msg) {
                this._doWrite("warn", msg);
        }

        /**
         * Record error
         * 
         * @param {String} msg 
         * @param {Error} error 
         */
        error(msg, error) {
                this._doWrite("error", msg, error);
        }

        /**
         * Write log 
         * 
         * @param {String} level 
         * @param {String} msg 
         * @param {Error} error 
         */
        _doWrite(level, msg, error) {
                global.WRITE_LOG({
                        msg: msg,
                        level: level,
                        erro: error,
                        name: this._name,
                        time: new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()
                });
        }
}

exports.Logger = Logger;