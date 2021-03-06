const { Service } = require("./../Service");
const { ServiceStatus } = require("./../po/constant/ServiceStatus");
const { TaskStatus } = require("./../po/constant/TaskStatus");
const { NodeContext } = require("./../NodeContext");
const { validateUtils } = require("./../utils/validate-utils");
const { DelayCaculator } = require("./../DelayCaculator");

/**
 * To execute task
 */
class TaskService extends Service {

        constructor () {
                super("TaskService");

                this._serverEventListerner = null;

                // init by context
                this._taskExcutor = null;
                this._context = null;
                this._taskAccess = null;
                this._taskNotifier = null;
                this._maxConcurrency = null;
                this._pollRate = null;

                // self properties
                this._excutingTask = new Map();
                this._waitToExcute = [];
                this._stoppedCallback = null;
                this._pausedCallBack = null;
                this._taskTimeout = null;
                this._delayCaculator = null;
        }

        /**
         * 
         * @param {NodeContext} context
         */
        init(context) {
                this._context = context;

                validateUtils.requireNotNull(context.accesses, "TaskAccess");
                validateUtils.requireNotNull(context.excutors, "TaskExecutor");

                this._taskExcutor = context.excutors.TaskExecutor;
                this._taskAccess = context.accesses.TaskAccess;
                this._taskNotifier = context.notifiers.TaskNotifier;

                this._taskFetchSize = context.config.task.fetchSize || 10;
                this._pollRate = context.config.task.pollRate || 10 * 1000;
                this._maxConcurrency = context.config.task.maxConcurrency || 10;

                this._delayCaculator = new DelayCaculator(
                        context.config.task.pollRateMIn || 200,
                        context.config.task.pollRateMax || 20000
                );
        }

        /**
         * To start task service
         */
        start() {
                if (this._status != ServiceStatus.STOPPED) {
                        this.warn(`to start service refused,cause current status is ${this._status}`);
                        return;
                }

                this._taskTimeout = setTimeout(
                        () => this._run.call(this),
                        this._delayCaculator.nextDelay()
                );
                this._status = ServiceStatus.RUNNING;
                this.info("service started");
                this._raiseServiceStarted();
        }

        /**
         * To stop task service
         */
        stop(callback, force = false) {
                this.info(`call 'stop' method and force=${force}`);

                if ((this._status == ServiceStatus.STOPPING || this._status == ServiceStatus.STOPPED)
                        && !force) {
                        this.warn(`to stop service refused,cause current status is ${this._status}`);
                        return;
                }

                this._stoppedCallback = callback;
                this._clearTimeoutCore();

                if (this._excutingTask.length > 0 && !force) {
                        this._status = ServiceStatus.STOPPING;
                        this.info(
                                `service status trigger to stoping,` +
                                `cause there's ${this._excutingTask.length} task still running`
                        );

                        return;
                }

                this._status = ServiceStatus.STOPPED;
                this.warn("service stopped");
                this._raiseServiceStopped();

                if (this._stoppedCallback)
                        this._stoppedCallback();
        }

        /**
         *To Puase service and pending task excuting
         * 
         * @param {()=>void} callback
         * @param {boolean} force
         */
        pause(callback, force = false) {

                if (this._status != ServiceStatus.RUNNING) {
                        this.warn("pause refused ,cause service status is not 'running'");
                        return;
                }

                this._pausedCallBack = callback;
                this._clearTimeoutCore();

                if (this._excutingTask.length > 0 && !force) {
                        this.warn(
                                `service status trigger to pausing ,` +
                                `cause there's ${this._excutingTask.length} tasks still running`
                        );
                        this._status = ServiceStatus.PAUSING;
                        return;
                }

                this._status = ServiceStatus.PAUSED;
                this.info(`service paused`);
                this._raiseServicePaused();

                if (this._pausedCallBack)
                        this._pausedCallBack();
        }

        /**
         * To Resume task service
         */
        resume() {
                if (this._status != ServiceStatus.PAUSED) {
                        this.warn(`to resume service failed, cause current status is ${this.status}`)
                        return;
                }

                this._taskTimeout = setTimeout(
                        () => this._run.call(self),
                        this._delayCaculator.nextDelay()
                );

                this._status = ServiceStatus.RUNNING;
                this.info("service resumed");
                this._raiseServiceResumed();
        }

        /**
         * Run a task
         * 
         * @private
         */
        async _run() {

                if (this._status != ServiceStatus.RUNNING) {
                        this.warn(`to run task refused,cause current status is ${this._status}`);
                        this._taskTimeout = setTimeout(
                                () => this._run.call(self),
                                this._delayCaculator.nextDelay(false)
                        );

                        return;
                }

                if (this._excutingTask.size > this._maxConcurrency) {
                        this.info(
                                `to run new task refused, cause over max concurrency,` +
                                `and there are ${this._excutingTask.size} tasks  running`
                        );

                        this._taskTimeout = setTimeout(
                                () => this._run.call(this),
                                this._delayCaculator.nextDelay(false)
                        );

                        return;
                }

                if (this._waitToExcute.length == 0) {
                        let tasks = await this._taskAccess.getTaskToExcute(this._taskFetchSize);
                        this.info(`fetch new tasks from db, got ${tasks.length}`);
                        if (tasks.length == 0) {
                                this._taskTimeout = setTimeout(
                                        () => this._run.call(this),
                                        this._delayCaculator.nextDelay(false)
                                );

                                return;
                        }

                        this._waitToExcute = this._waitToExcute.concat(tasks);
                }

                let task = this._waitToExcute.pop();
                this.info(`start excuting task '${task.id}'`);
                let result;
                try {
                        await this._beforeTaskExcuting(task);
                        result = await this._taskExcutor.execute(task);
                        await this._afterTaskFinished(task, result);
                } catch (ex) {
                        this.error(`excute task ${task.id} exceptionaly`, ex);
                }

                this._taskTimeout = setTimeout(
                        () => this._run.call(this),
                        this._delayCaculator.nextDelay(true)
                );

                this.info(
                        `finish excuting task id:${task.id},`
                        //        `result code:${result.code}`
                );
        }

        /**
         * PreExecute task
         * 
         * @private
         * @param {Task} task 
         */
        async _beforeTaskExcuting(task) {
                this._excutingTask.set(task.id, task);
                await this._taskAccess.updateById(task.id, { status: TaskStatus.EXCUTING, startTime: new Date() });
                //  await this._taskNotifier.notifyTaskStarted(task.id);
        }

        /**
         * Process task  excute result
         * 
         * @private
         * @param {Task} task 
         * @param {ExecuteResult} result 
         */
        async _afterTaskFinished(task, result) {
                this._excutingTask.delete(task.id);
                await this._taskAccess.updateById(
                        task.id,
                        {
                                resultCode: result.code,
                                status: TaskStatus.FINISHED,
                                log: result.log,
                                finishTime: new Date()
                        }
                );
                // await this._taskNotifier.notifyTaskFinished();

                // process service status 'paussing' and 'stopping'
                if (this._excutingTask.size == 0) {
                        if (this._status == ServiceStatus.STOPPING) {
                                this._status = ServiceStatus.STOPPED;
                                this.info("service stopped");
                                this._raiseServiceStopped();

                                if (this._stoppedCallback)
                                        this._stoppedCallback();
                        }

                        if (this._status == ServiceStatus.PAUSING) {
                                this._status = ServiceStatus.PAUSED;
                                this.info("service paused");
                                this._raiseServicePaused();

                                if (this._pausedCallBack)
                                        this._pausedCallBack();
                        }
                }
        }

        /**
         * Clear interval core
         */
        _clearTimeoutCore() {
                if (this._taskTimeout) {
                        clearTimeout(this._taskTimeout);
                        this._taskTimeout == null;
                }
        }


}

exports.TaskService = TaskService;