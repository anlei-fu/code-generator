const { Service } = require("./../common");
const { TimerJob } = require("./timerJob");
const { JobStatus } = require("./JobStatus");

class TimerService extends Service {
        constructor () {
                super("TimerService");
                this._jobs = new Map();
                this._jobTimeout = new Map();
                this._context = null;
        }

        /**
         * Init the service
         * 
         * @param {NodeContext} context 
         * @override
         */
        init(context) {
                this._context = context;
        }

        /**
         * To stop the service
         * 
         * @override
         */
        stop() {
                Array.from(this._jobs.values()).forEach(job => {
                        this.cancelJob(job);
                });

                this.info("TimerService stopped");
        }

        /**
         * Schedule new job
         * 
         * @param {TimerJob} job 
         */
        scheduleJob(job) {

                if (!job instanceof TimerJob) {
                        this.error(`job is not right timer job type`, null, job);
                        return;
                }

                if (this._jobs.has(job.id)) {
                        this.warn(`job(${job.name},${job.id}) already shceduled,repeate refused`);
                        return;
                }

                this._jobs.set(job.id, job);
                job.scheduler = this;
                job.status = JobStatus.SCHEDULED;

                this.info(`job(${job.name},${job.id},${job.description}) scheduled`);
                this._run(job);
        }

        /**
         * Cancel job executing
         * 
         * @param {TimerJob} job 
         */
        cancelJob(job) {
                let id = job.id || job;
                job = this._jobs.get(id);
                if (!job) {
                        this.warn(`cancel job failed no such a job(${job.name},${job.id})`);
                        return;
                }

                job.schedule = null;
                job.status = JobStatus.UNSCHEDULED;
                if (this._jobTimeout.has(id)) {
                        clearTimeout(this._jobTimeout.get(id));
                        this._jobTimeout.delete(id);
                }

                this._jobs.delete(id);

                this.info(`job(${job.name},${job.id}) canceled`);
        }

        /**
         * Run job core
         * 
         * @param {TimerJob} job 
         */
        _run(job) {
                let timeout = job.nextFireTimeout;
                this.info(`job(${job.name},${job.id}) next fire will be ${timeout}`);
                let time = setTimeout(async () => {
                        try {
                                this.info(`job(${job.name},${job.id}) begin executing`);
                                await job.execute(this._context);
                        } catch (ex) {
                                this.error(`job(${job.name},${job.id}) execute failed`, ex);
                        } finally {
                                if (job.status != JobStatus.UNSCHEDULED)
                                        this._run(job);
                        }
                }, timeout);

                this._jobTimeout.set(job.id, time);
        }
}

exports.TimerService = TimerService;