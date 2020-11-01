const { Initiable } = require("./../common");
const { idUtils } = require("./../libs");
const { JobStatus } = require("./JobStatus");
const { DelayCaculator } = require("./../compute");

class TimerJob extends Initiable {
        constructor ({ name, description = "" }) {
                super(name || "TimerJob");
                this.id = idUtils.nextId();
                this.description = description;
                this.scheduler = null;
                this._jobStatus = JobStatus.UNSCHEDULED;
        }

        /**
         * Default init set default delay caculator
         */
        init() {
                this._delayCaculator = new DelayCaculator(200, 60000);
        }

        /**
         * Abstract method ,if want to change execute frequncy then 
         * change delay caculator currect delay million seconds
         * 
         * @param {NodeContext} context 
         */
        execute(context) {

        }

        /**
         * Cancel executing if has been scheduled
         */
        cancel() {
                if (!this.scheduler) {
                        this.warn(`job(${this.name},${this.id}) has not been shcduled`);
                        return;
                }

                this.scheduler.cancel(this);
        }

        /**
         * Get the jon status @see {JobStatus}
         * 
         * @returns {number}
         */
        get status() {
                return this._jobStatus;
        }

        /**
         * Call by @see {TimerService} ,return next execute timeout
         * 
         * @returns {number}
         */
        get nextFireTimeout() {
                return this._delayCaculator.currentDelay;
        }
}

exports.TimerJob = TimerJob;