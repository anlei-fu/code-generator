const chalk = require("chalk");
class ConsoleAppender {
        constructor () {
                this.name = "ConsoleAppender";
        }

        doWrite(logEvent) {
                if (logEvent.level == "error") {
                        console.log(chalk.redBright("[ERROR]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));

                        if (logEvent.error)
                                console.log(chalk.white(logEvent.error.toString()));

                        if (logEvent.obj) {
                                console.log("target:");
                                console.log(chalk.white(logEvent.obj));
                        }

                } else if (logEvent.level == "info") {
                        console.log(chalk.greenBright("[INFO]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));

                        if (logEvent.obj) {
                                console.log("target:");
                                console.log(chalk.white(logEvent.obj));
                        }
                } else if (logEvent.level == "warn") {
                        console.log(chalk.yellowBright("[WARN]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));

                        if (logEvent.obj) {
                                console.log("target:");
                                console.log(chalk.white(logEvent.obj));
                        }
                }else if(logEvent.level == "fatal"){
                        console.log(chalk.redBright("[FATAL]") + chalk.magentaBright(`[${logEvent.time}]` + chalk.blueBright(`[${logEvent.name}]: `) + chalk.white(`${logEvent.msg || ""}`)));

                        if (logEvent.error)
                                console.log(chalk.white(logEvent.error.toString()));

                        if (logEvent.obj) {
                                console.log("target:");
                                console.log(chalk.white(logEvent.obj));
                        }
                }
        }
}

exports.ConsoleAppender = ConsoleAppender;