var schedule = require('node-schedule');
const { Job } = require("./job/job");
const { LoggerSurpport } = require("./LoggerSurpport");
const { DebugUtils } = require("./utils/debug-utils");
const { JobStatus } = require("./po/constant/JobStatus");

exports.JobService = class JobService extends LoggerSurpport {
        constructor (context) {
                super("JobService");
                this._innrJobMap = new Map();
                this._outterJobMap = new Map();
                this.context = context;
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
        startNewJob(job) {

                job.status = JobStatus.SCHEDULED;
                let innerJob = schedule.scheduleJob(job.expression, async () => {
                        job.status = JobStatus.EXECUTING;
                        try {
                                job.raiseJobExcuting();
                                await job.run(this.context);
                                job.raiseJobFinished();
                        } catch (ex) {
                                job.raiseJobError(ex);
                                this.error(
                                        `job(${job.name}) execute failed ,job id is ${job.id}`,
                                        ex
                                );
                        } finally {
                                job.status = JobStatus.SCHEDULED;
                        }
                });

                if (DebugUtils.isDebugMode()) {
                        this.info(
                                `new job(${job.name}) scheduled id is ${job.id},` +
                                `expression is ${job.expression},` +
                                `first fire will be ${innerJob.nextInvocation()}`
                        );
                }

                this._innrJobMap.set(job.id, innerJob);
                this._outterJobMap.set(job.id, job);
                job.jobScheduler = this;
                job.innerJob = innerJob;
        }

        /**
         * Cancel a job
         * 
         * @param {Job} job 
         */
        cancelJob(job) {
                if (this._innrJobMap.has(job.id)) {
                        schedule.cancelJob(this._innrJobMap.get(job.id));
                        this._innrJobMap.delete(job.id);
                        this._outterJobMap.delete(job.id);
                        job.status = JobStatus.UNSCHEDULED;
                        job.jobScheduler = null;

                        if (DebugUtils.isDebugMode()) {
                                this.info(
                                        `job(${job.name}) scheduled id is ${job.id},` +
                                        `expression is ${job.expression}` +
                                        `canceled`
                                );
                        }
                }
        }
}