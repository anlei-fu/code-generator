class DownLoadError extends Error {
        constructor() {
                super();
                this.url;
                this.downloadConfig;
                this.statusCode;
        }
}

class ExtractError extends Error {
        constructor() {
                super();
                this.url;
                this.html;
        }
}