var schedule = require('node-schedule');
const { Job } = require("./job/job");

exports.JobService = class {
        constructor () {
                this._innrJobMap = new Map();
                this._outterJobMap = new Map();
        }

        /**
         * Get scheduled jobs
         */
        get scheduledJobs() {
                return this._outterJobMap.values();
        }


        /**
         * Schedule a job
         * 
         * @param {Job} job 
         */
        startNewJob(expression, job) {
                let innerJob = schedule.scheduleJob(expression, () => {
                        job.run();
                });

                this._innrJobMap.set(job.id, innerJob);
                this._outterJobMap.set(job.id, job);
                job._jobScheduler = this;
                job._innerJob = innerJob;
        }

        /**
         * Cancel a job
         * 
         * @param {Job} job 
         */
        cancelJob(job) {
                if (this._innrJobMap.has(job.id)) {
                        schedule.cancelJob(this._innrJobMap.has(job.id));
                        this._innrJobMap.delete(job.id);
                        this._outterJobMap.delete(job.id);
                }
        }
}