exports.DownLoadError = class DownLoadError extends Error {
        constructor(config, status) {
                super();
                this.downloadConfig = config;
                this.statusCode = status;
        }
}

exports.ExtractError = class ExtractError extends Error {
        constructor() {
                super();
                this.url;
                this.html;
                this.extractorFile;
                this.extractorVersion;
        }
}