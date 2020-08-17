const { Initiable } = require("./../Initiable");
const { idUtils } = require("./../utils/Id-utils");
const { JobStatus } = require("./../constant/JobStatus");

/**
 * @BaseClass
 */
exports.Job = class Job extends Initiable {
        constructor ({
                jobListener = null,
                name = "unamed",
                description = "",
                expression = "",
        }) {
                super(name);

                /**
                 * Unique id of all job
                 */
                this.id = idUtils.nextId();

                /**
                 * Job event listening
                 */
                this.listener = jobListener;

                /**
                 * Job scheduler
                 */
                this.scheduler = null;

                /**
                 * Job description
                 */
                this.description = description;

                /**
                 * Inner job
                 */
                this.innerJob = {};

                /**
                 * Job satus
                 */
                this.status = JobStatus.UNSCHEDULED;

                /**
                 * Job execute plan string
                 */
                this.expression = expression;
        }

        /**
         * Get the time that job next executing
         * 
         * @returns {Date?}
         */
        get nextExecuteDate() {
                if (!this.scheduler)
                        return null;

                return this.innerJob.nextInvocation();
        }

        /**
         * Run method , async function
         * 
         * @abstract
         */
        execute(context) {
                throw new Error("this method has not been implemented");
        }

        /**
         * Cancel the job if has scheduled
         */
        cancel() {
                if (this.scheduler)
                        this.scheduler.cancelJob(this);
        }

        /**
         * Raise  job executing event
         */
        raiseJobExcuting() {
                if (this._listener)
                        this._listener.onJobExcuting(this);
        }

        /**
         * Raise job execute finished event
         */
        raiseJobFinished() {
                if (this._listener)
                        this._listener.onJobFinished(this);
        }

        /**
         * Raise the error when job excuting
         * 
         * @param {Error} error 
         */
        raiseJobError(error) {
                if (this._listener)
                        this._listener.onJobError(this, error);
        }
}