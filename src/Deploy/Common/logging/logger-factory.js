
const chalk = require("chalk");
const { Logger } = require("./logger");

// Init loggers
if (!global.LOGGERS)
        global.LOGGERS = {

        };

// Init log writers, add enable default console writer
if (!global.LOG_WRITERS) {
        global.LOG_WRITERS = {};
        global.LOG_WRITERS["console"] = {
                name: "console",
                doWrite: logEvent => {
                        if (logEvent.level == "error") {
                                console.log(chalk.redBright("[ERROR]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));

                                if (logEvent.error)
                                        console.log(chalk.white(logEvent.error));
                                
                                if(logEvent.obj){
                                   console.log("target");
                                   console.log(chalk.white(logEvent.obj));
                                }
                                
                        } else if (logEvent.level == "info") {
                                console.log(chalk.greenBright("[INFO]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));
                               
                                if(logEvent.obj){
                                        console.log("target");
                                        console.log(chalk.white(logEvent.obj));
                                     }
                        } else if (logEvent.level == "warn") {
                                console.log(chalk.yellowBright("[WARN]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));
                              
                                if(logEvent.obj){
                                        console.log("target");
                                        console.log(chalk.white(logEvent.obj));
                                     }
                        }
                }
        };
}

// Init write log
if (!global.WRITE_LOG)
        global.WRITE_LOG = log => {
                Object.keys(global.LOG_WRITERS).forEach(writerName => {
                        global.LOG_WRITERS[writerName].doWrite(log);
                });
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
}

exports.LoggerFactory = LoggerFactory;