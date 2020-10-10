const fs = require("fs");
const { DATE, DIR } = require("./../libs")
class FileAppender {
        constructor (logFolder = ".") {
                this.logFolder = logFolder;
                this.error = "";
                this.infos = "";
                this.name = "FileAppender";
                this.init();
        }

        init() {
                DIR.create(this.logFolder);
                DIR.create(`${this.logFolder}/error`);
                DIR.create(`${this.logFolder}/info`);
                setInterval(() => this.doWriteCore.call(this), 10000);
        }

        doWrite(log) {
                if (log.level == "error" && log.error) {
                        this.error += `[ERROR][${log.time}][${log.name}] ${log.msg || ""}\r\n`;
                        if (log.error) {
                                this.error += log.error.msg || "" + "\r\n";
                                this.error += log.error.stack + "\r\n";
                        }
                } else {
                        this.infos += `[${log.level.toUpperCase()}][${log.time}][${log.name}] ${log.msg}\r\n`;
                }
        }

        doWriteCore() {
                try {
                        if (this.error)
                                fs.appendFileSync(`${this.logFolder}/error/${this.fileName}.log`, this.error);

                        if (this.infos)
                                fs.appendFileSync(`${this.logFolder}/info/${this.fileName}.log`, this.infos);
                } catch (ex) {

                }

                this.error = "";
                this.infos = "";
        }

        get fileName() {
                return DATE.toyyyy_MM_dd(new Date());
        }
}

exports.FileAppender = FileAppender;