const { LoggerSurpport } = require("./../LoggerSurpport");
const {idUtils} =require("./../utils/Id-utils");


exports.Job = class Job extends LoggerSurpport {
        constructor ({
                id=idUtils.nextId(),
                jobListener = null,
                name = "unamed",
                description = "",
                expression="",
        }) {

                super(name);

                /**
                 * Unique id of all job
                 */
                this.id = id;

                /**
                 * Job event listening
                 */
                this.listener = jobListener;

                /**
                 * Job name
                 */
                this.name = name;

                /**
                 * Job scheduler
                 */
                this.jobScheduler = null;

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
                this.status = 1;

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
                if (!this.jobScheduler)
                        return null;

                return this.innerJob.nextInvocation();
        }

        /**
         * Run method , async function
         * 
         * @abstract
         */
        run(context) {
                throw new Error("this method has not been implemented");
        }

        /**
         * Cancel the job if has scheduled
         */
        cancel() {
                if (this.status)
                        this.jobScheduler.cancelJob(this);
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