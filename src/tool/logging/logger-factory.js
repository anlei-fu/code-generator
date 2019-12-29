
const chalk = require("chalk");
const { OBJECT } = require("./../../libs/utils");
const { Logger } = require("./logger")

// Init loggers
if (!global.LOGGERS)
        global.LOGGERS = {

        };

// Init write log
if (!global.WRITE_LOG)
        global.WRITE_LOG = log => {
                OBJECT.forEach(global.LOG_WRITERS, (_, writer) => {
                        writer.doWrite(log);
                });
        }

// Init log writers, add default console writer
if (!global.LOG_WRITERS) {
        global.LOG_WRITERS = {};
        global.LOG_WRITERS["console"] = {
                name: "console",
                doWrite: x => {
                        if (x.level == "error") {
                                console.log(chalk.redBright("[ERROR]") + chalk.magentaBright(`[${x.time}]` + chalk.blueBright(`[${x.name}]: `) + chalk.white(`${x.msg || ""}`)));
                                
                                if (x.error)
                                        console.log(chalk.white(x.error));
                        } else if (x.level == "info") {
                                console.log(chalk.greenBright("[INFO]") + chalk.magentaBright(`[${x.time}]` + chalk.blueBright(`[${x.name}]: `) + chalk.white(`${x.msg || ""}`)));
                        } else if (x.level == "warn") {
                                console.log(chalk.yellowBright("[WARN]") + chalk.magentaBright(`[${x.time}]` + chalk.blueBright(`[${x.name}]: `) + chalk.white(`${x.msg || ""}`)));
                        }
                }
        };
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