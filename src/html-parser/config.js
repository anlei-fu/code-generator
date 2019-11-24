class TaskConfig {
    constructor() {
        this.max;
        this.delay;
        this.taskId;
        this.urlQueue;
        this.urlQueueId;
        this.dataUrl;
        this.maxFailedCount;
        this.dowloadConfig;
    }
}

class DownloadConfig {
    constructor() {
        this.method;
        this.timeout;
        this.cookie;
        this.agent;
        this.headers;
    }
}