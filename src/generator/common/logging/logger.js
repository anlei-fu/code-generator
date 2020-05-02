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
        info(msg,obj) {
                this._doWrite("info", msg,null,obj);
        }

        /**
         * Record warnning
         * 
         * @param {String} msg 
         */
        warn(msg,obj) {
                this._doWrite("warn", msg,null,obj);
        }

        /**
         * Record error
         * 
         * @param {String} msg 
         * @param {Error} error 
         */
        error(msg, error,obj) {
                this._doWrite("error", msg, error,obj);
        }

        /**
         * Write log 
         * 
         * @param {String} level 
         * @param {String} msg 
         * @param {Error} error 
         */
        _doWrite(level, msg, error,obj) {
                global.WRITE_LOG({
                        msg: msg,
                        level: level,
                        erro: error,
                        name: this._name,
                        obj:obj,
                        time: new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()
                });
        }
}

exports.Logger = Logger;