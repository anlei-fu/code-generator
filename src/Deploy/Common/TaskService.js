const { Service } = require("./Service");
const { ServiceStatus } = require("./po/constant/ServiceStatus");
const { TaskStatus } = require("./po/constant/TaskStatus");
const { TaskExcutor } = require("./excutor/TaskExcutor");
/**
 * To execute task
 */
class TaskService extends Service {

        constructor () {
                super();

                this._taskExcutor = new TaskExcutor();

                this._excutingTask = {};
                this._waitToExcute = [];
                this._taskInterval = {};
                this._config = {};
                this._context = {};
                this._taskAccess = {};
                this._taskNotifier = {};
                this._serverEventListerner = {};

                this._stoppedCallback = {};
                this._pausedCallBack = {};
        }

        /**
         * @abstract
         */
        init() {

        }

        /**
         * @abstract
         */
        start() {
                if (this._status != ServiceStatus.STOPPED) {
                        this.warn(`to start service refused,cause current status is ${this._status}`);
                        return;
                }

                this._taskInterval = setInterval(run, this._config.interval);
                this._status = ServiceStatus.RUNNING;
                this.info("service started");
                this._raiseServiceStarted();
        }

        /**
         * @abstract
         */
        stop(callback, force = false) {
                this.info(`call stop force=${force}`);

                if ((this._status == ServiceStatus.STOPPING || this._status == ServiceStatus.STOPPED)
                        && !force) {
                        this.warn(`to stop service refused,cause current status is ${this._status}`);
                        return;
                }

                this._stoppedCallback = callback;
                this._clearIntervalCore();

                if (this._excutingTask.length > 0 && !force) {
                        this._status = ServiceStatus.STOPPING;
                        this.info(`service status trigger to stoping ,cause there's ${this._excutingTask.length} task still running`);
                        return;
                }

                this._status = ServiceStatus.STOPPED;
                this.warn("service stopped");
                this._raiseServiceStopped();

                if (this._stoppedCallback)
                        this._stoppedCallback();
        }

        /**
         * Puase service and pending task excuting
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
                this._clearIntervalCore();

                if (this._excutingTask.length > 0 && !force) {
                        this.warn(`service status trigger to pausing ,cause there's ${this._excutingTask.length} tasks still running`);
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
         * Resume service
         */
        resume() {
                if (this._status != ServiceStatus.PAUSED) {
                        this.warn(
                                `to resume service failed, cause current status is ${this.status}`
                        )
                        return;
                }

                this._taskInterval = setInterval(this._run, this._config.interval);

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
                        this.warn(`to stop service refused,cause current status is ${this._status}`);
                        return;
                }

                if (this._excutingTask > this._config.maxConcurrency) {
                        this.info(
                                `to start new task refused, cause over max concurrency,` +
                                `and there's ${this._excutingTask} tasks running`);
                        return;
                }

                if (this._waitToExcute.length == 0) {
                        let tasks = await this._taskAccess.getTaskToExcute();
                        this.info(`fetch new tasks from db, got ${tasks.length}`);
                        if (tasks.length == 0)
                                return;

                        this._waitToExcute.concat(tasks);
                }

                let task = this._waitToExcute.pop();
                this.info(`start excuting task '${task.id}'`);
                let result;
                try {
                        await this._beforeTaskExcuting(task);
                        result = await this._taskExcutor.excute(task);
                        await this._afterTaskFinished(task, result);
                } catch (ex) {
                        this.error(`excute task ${task.id} exceptionaly`, ex);
                }

                this.info(`finish excuting task id:${task.id},result code:${result.code}`);
        }

        /**
         * PreExecute task
         * 
         * @private
         * @param {Task} task 
         */
        async _beforeTaskExcuting(task) {
                await this._taskAccess.updateTaskStatus(task.id, { status: TaskStatus.EXCUTING });
                await this._taskNotifier.notifyTaskStarted(task.id);
        }

        /**
         * Process task  excute result
         * 
         * @private
         * @param {Task} task 
         * @param {ExecuteResult} result 
         */
        async _afterTaskFinished(task, result) {
                this._excutingTask.remove(task.id);
                await this._taskAccess.updateTaskStatus(task.id, { status: 1 });
                await this._taskNotifier.notifyTaskFinished();

                // process service status 'paussing' and 'stopping'
                if (this._excutingTask.size() == 0) {
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
        _clearIntervalCore() {
                if (this._taskInterval) {
                        clearInterval(this._taskInterval);
                        this._taskInterval == null;
                }
        }


}

exports.TaskService = TaskService;