exports.StopWatch = class StopWatch {
        constructor () {
                this._start;
        }

        get elased() {
                if (!this._start)
                        throw new Error("watch has not been started");

                return new Date().getTime() - this._start.getTime();
        }

        get elasedString() {
                return "";
        }

        start() {
                this._start = new Date();
        }

        reset() {
                this.start();
        }
}