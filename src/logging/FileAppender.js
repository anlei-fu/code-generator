const fs = require("fs");
const { DATE, DIR } = require("./../libs")
class FileAppender {
        constructor(logFolder = ".") {
                this.logFolder = logFolder;
                this.error = "";
                this.info = "";
                this.fatal = "";
                this.name = "FileAppender";
                this.init();
        }

        init() {
                DIR.create(this.logFolder);
                DIR.create(`${this.logFolder}/error`);
                DIR.create(`${this.logFolder}/info`);
                DIR.create(`${this.logFolder}/fatal`);
                setInterval(() => this.doWriteCore.call(this), 10000);
        }

        doWrite(log) {
                if (log.level == "error") {
                        this.error += `[ERROR][${log.time}][${log.name}] ${log.msg || ""}\r\n`;
                        if (log.error) {
                                this.error += log.error.msg || "" + "\r\n";
                                this.error += log.error.stack + "\r\n";
                        }
                } else if (log.level == "fatal") {
                        this.error += `[FATAL][${log.time}][${log.name}] ${log.msg || ""}\r\n`;
                        if (log.error) {
                                this.fatal += log.error.msg || "" + "\r\n";
                                this.fatal += log.error.stack + "\r\n";
                        }
                }
                else {
                        this.info += `[${log.level.toUpperCase()}][${log.time}][${log.name}] ${log.msg}\r\n`;
                }
        }

        doWriteCore() {
                try {
                        if (this.error)
                                fs.appendFileSync(`${this.logFolder}/error/${this.fileName}.log`, this.error);

                        if (this.info)
                                fs.appendFileSync(`${this.logFolder}/info/${this.fileName}.log`, this.info);

                        if (this.fatal)
                                fs.appendFileSync(`${this.logFolder}/fatal/${this.fileName}.log`, this.fatal);
                } catch (ex) {

                }

                this.error = "";
                this.info = "";
                this.fatal = "";
        }

        get fileName() {
                return DATE.toyyyy_MM_dd(new Date());
        }
}

exports.FileAppender = FileAppender;