/**
 *  Properties of log item
 */
class LogEvent {
        constructor () {
                this.name = "";
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
        constructor (name) {
                this._name = name;
        }

        /**
         * Record infomation
         * 
         * @param {String} msg 
         */
        info(msg, obj) {
                this._doWrite("info", msg, null, obj);
        }

        /**
         * Record warnning
         * 
         * @param {String} msg 
         */
        warn(msg, obj) {
                this._doWrite("warn", msg, null, obj);
        }

        /**
         * Record error
         * 
         * @param {String} msg 
         * @param {Error} error 
         */
        error(msg, error, obj) {
                this._doWrite("error", msg, error, obj);
        }

        fatal(msg, error, obj) {
                this._doWrite("fatal", msg, error, obj);
        }

        /**
         * Write log 
         * 
         * @param {String} level 
         * @param {String} msg 
         * @param {Error} error 
         */
        _doWrite(level, msg, error, obj) {
                if (typeof msg != "string") {
                        try {
                                msg = JSON.stringify(msg);
                        } catch {
                                msg = msg.toString();
                        }
                }

                global.WRITE_LOG({
                        msg,
                        level,
                        error,
                        name: this._name,
                        obj: obj,
                        time: new Date().toLocaleString()
                });
        }
}

module.exports = {
        Logger,
        LogEvent
}
