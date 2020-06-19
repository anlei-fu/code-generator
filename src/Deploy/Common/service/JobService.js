const schedule = require('node-schedule');
const { Job } = require("./../job/job");
const { Service } = require("./../Service");
const { JobStatus } = require("./../po/constant/JobStatus");
const { NodeContext } = require("./../NodeContext");

class JobService extends Service {
        constructor () {
                super("JobService");
                this._innrJobMap = new Map();
                this._outterJobMap = new Map();
                this._context = null;
        }

        /**
         * Init
         * 
         * @override
         * @param {NodeContext} context 
         */
        init(context) {
                this._context = context;
        }

        /**
         * To start all default jobs in context
         * 
         *  @override
         */
        start() {
                Object.keys(this._context.jobs).forEach(jobName => {
                        this.scheduleJob(this._context.jobs[jobName]);
                });

                this.info("JobService Started");
        }

        /**
         * To shutdown all scheduled job then stopped
         * 
         * @override
         */
        stop() {

                this._outterJobMap.values().forEach(job => {
                        this.cancelJob(job);
                });

                this.info("JobService Stopped")
        }

        /**
         * Get scheduled jobs
         * 
         * @returns {[Job]}
         */
        get scheduledJobs() {
                return this._outterJobMap.values();
        }

        /**
         * Get the jobs that status is executing
         * 
         * @returns {[Job]}
         */
        get excutingJobs() {
                return Array.from(this._outterJobMap.values())
                        .filter(x => x.status == JobStatus.EXECUTING);
        }

        /**
         * Schedule a job
         * 
         * @param {Job} job 
         */
        scheduleJob(job) {

                if (!job instanceof Job) {
                        this.error("unexcepted job type", null, job);
                        return;
                }

                if (this._outterJobMap.has(job.id)) {
                        this.warn(`job(${job.name, job.id}) has already been scheduled, repeat refused`);
                        return;
                }

                job.status = JobStatus.SCHEDULED;
                let innerJob = schedule.scheduleJob(job.expression, async () => {
                        job.status = JobStatus.EXECUTING;
                        try {
                                this.info(`job(${job.name},${job.id}) begin excuting`)
                                job.raiseJobExcuting();
                                await job.execute(this._context);
                                job.raiseJobFinished();
                        } catch (ex) {
                                job.raiseJobError(ex);
                                this.error(
                                        `job(${job.name},${job.id}) execute failed`,
                                        ex
                                );
                        } finally {
                                job.status = JobStatus.SCHEDULED;
                                this.info(`job(${job.name},${job.id}) next fire time will be ${innerJob.nextInvocation()}`);
                        }
                });

                this.info(
                        `new job(${job.name},${job.id},${job.description || ""}) scheduled,` +
                        `expression is ${job.expression},` +
                        `first fire time will be ${innerJob.nextInvocation()}`
                );

                this._innrJobMap.set(job.id, innerJob);
                this._outterJobMap.set(job.id, job);
                job.scheduler = this;
                job.innerJob = innerJob;
        }

        /**
         * Cancel a job
         * 
         * @param {Job} job 
         */
        cancelJob(job) {
                let id = typeof job == "object" ? job.id : id;
                if (!id || this._innrJobMap.has(id))
                        return;

                job = this._innrJobMap.get(id);
                schedule.cancelJob(this._innrJobMap.get(id));
                this._innrJobMap.delete(id);
                this._outterJobMap.delete(id);
                job.status = JobStatus.UNSCHEDULED;
                job.scheduler = null;

                this.info(`job(${job.name},${job.id}) canceld`);
        }
}

exports.JobService = JobService;