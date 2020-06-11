exports.Job = class Job {
        constructor (id, jobListener, jobScheduler, name, description) {
                this._id = id;
                this._listener = jobListener;
                this._name = name;
                this._jobScheduler = jobScheduler;
                this._description = description;
                this._innerJob = {};
        }

        get sheduled() {
                return this._jobScheduler != null;
        }

        get nextExecuteDate() {
                if (!this.sheduled)
                        return null;

                return this._innerJob.nextDate();
        }

        get name() {
                return this._name;
        }

        get description() {
                return this._description;
        }

        get id() {
                return this._id;
        }


        /**
         * Run method
         * 
         * @abstract
         */
        run() {
                throw new Error("this method has not been implemented");
        }

        cancel() {
                this._jobScheduler.cancel(this);
        }

        raiseJobExcuting() {
                if (this._listener)
                        this._listener.onJobExcuting(this);
        }

        raiseJobFinished() {
                if (this._listener)
                        this._listener.onJobFinished(this);
        }

        raiseJobError(error) {
                if (this._listener)
                        this._listener.onJobError(this, error);
        }
}