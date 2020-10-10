const { Logger } = require("./logger");
const { ConsoleAppender } = require("./ConsoleAppender");
const { FileAppender } = require("./FileAppender");

// Init loggers
if (!global.LOGGERS) {
        global.LOGGERS = {

        };

        global.INFO_LEVEL_CONFIG = [];
        global.LOG_WRITERS = {};
        global.LOG_WRITERS["ConsoleAppender"] = new ConsoleAppender();
        global.WRITE_LOG = log => {
                let match = false;
                for (const pattern of global.INFO_LEVEL_CONFIG) {
                        if (pattern.test(log.name)) {
                                match = true;
                                break;
                        }
                }

                if (log.level == "info" && !match)
                        return;

                Object.keys(global.LOG_WRITERS).forEach(writerName => {
                        global.LOG_WRITERS[writerName].doWrite(log);
                });
        }
}

/**
 * Logger factory
 */
class LoggerFactory {

        /**
         * Create a logger with "name" if absent ,or return directly 
         * 
         * @param {String} name 
         * @returns {Logger}
         */
        static getLogger(name) {
                if (global.LOGGERS[name])
                        return global.LOGGERS[name];

                global.LOGGERS[name] = new Logger(name);
                return global.LOGGERS[name];
        }

        /**
         * Use log writer with "name" if absent
         * writer should has property "name" and method "doWrite" 
         * @see {({level:String,msg:"String",time:String,error:Erro,name:String})=>Void}
         * 
         * @param {LogWriter} writer 
         */
        static useWriter(writer) {
                if (!global.LOG_WRITERS[writer.name])
                        global.LOG_WRITERS[writer.name] = writer;
        }

        /**
         * Disable a write with "name"
         * 
         * @param {String} name 
         */
        static disableWriter(name) {
                delete global.LOG_WRITERS[name];
        }

        /**
         * 
         * @param {String} pattern 
         */
        static allowInfos(pattern) {
                global.INFO_LEVEL_CONFIG.push(new RegExp(pattern));
        }

        /**
         * 
         * @param {String} logFoler 
         */
        static useFileAppender(logFoler) {
                global.LOG_WRITERS["FileApender"] = new FileAppender(logFoler);
        }
}

exports.LoggerFactory = LoggerFactory;