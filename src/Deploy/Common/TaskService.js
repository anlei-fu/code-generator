const { Service } = require("./Service");
const { ServiceStatus } = require("../DeployNode/po/constant/ServiceStatus");
const { TaskStatus } = require("../DeployNode/po/constant/TaskStatus");
const { } = require("../DeployNode/po/constant/TaskResultCode");

/**
 * To execute task
 */
class TaskRunner extends Service {

        constructor () {
                super();
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
         * To pending task excuting
         * 
         * @param {()=>void} callback
         * @param {boolean} force
         */
        pause(callback,force=false) {

                if (this._status != ServiceStatus.RUNNING) {
                        this.warn("pause refused ,cause service status is not 'running'");
                        return;
                }

                this._pausedCallBack = callback;

                clearInterval(this._taskInterval);

                if (this._excutingTask.length > 0) {
                        this.warn(`service status trigger to pausing ,cause there's ${this._excutingTask.length} tasks still running`);
                        this._status = ServiceStatus.PAUSING;
                } else {
                        
                        this._status = ServiceStatus.PAUSED;
                        this._serverEventListerner.onServicePaused();
                        this.info(`service paused`);

                        if (this._pausedCallBack)
                                this._pausedCallBack();
                }
        }

        resume() {
                if (this._status != ServiceStatus.PAUSED) {
                        this.warn(
                                `to resume service failed, cause current status is ${this.status}`
                        )
                        return;
                }

                this._taskInterval = setInterval(run, this._config.interval);
                this._serverEventListerner.onServiceResumed();
        }

        /**
         * @abstract
         */
        start() {
                if (this._status != ServiceStatus.STOPPED) {
                        this.warn("to service refused,but start be called again");
                        return;
                }

                this._status = ServiceStatus.STARTED;
                this._taskInterval = setInterval(run, this._config.interval);
                this._serverEventListerner.onServiceStarted();
                this.info("service started");
        }

        /**
         * @abstract
         */
        stop(callback, force = false) {
                this.info(`call stop force=${force}`);

                if (this._status == ServiceStatus.STOPPING || this._status == ServiceStatus.STOPPED) {
                        this.warn("service status is stopped or stopping,stop already be called or service not started");
                        return;
                }

                this._stoppedCallback = callback;
                clearInterval(this._taskInterval);

                if (force) {
                        this._status = ServiceStatus.STOPPED;

                        this.warn("service stopped forecely");

                        this._serverEventListerner.onServiceStopped();

                        if (this._stoppedCallback)
                                this._stoppedCallback();

                        return;
                }

                if (this._excutingTask.length > 0) {
                        this._status = ServiceStatus.STOPPING;
                        this.info(`service status trigger to stoping ,cause there's ${this._excutingTask.length} task still running`);
                } else {

                        this._status = ServiceStatus.STOPPED;
                        this._serverEventListerner.onServiceStopped();

                        if (this._stoppedCallback)
                                this._stoppedCallback();

                        this.info("service stopped");
                }
        }

        async run() {
                
                if(this._status!=ServiceStatus.RUNNING){
                        this.warn(`run refused cause current status is ${this._status}`);
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
                await this.beforeTaskExcuting(task);

                let result;
                try {
                        result = await this._context.taskExcutor.excute(task);
                } catch (ex) {
                        this.error(`excute task ${task.id} exceptionaly`, ex);
                }

                this.info(`finish excuting task id:${task.id},result code:${result.code}`);
                await this.afterTaskFinished(task, result);
        }

        async afterTaskFinished(task, result) {
                this._excutingTask.remove(task.id);
                if (this._excutingTask.size() == 0) {
                        if (this._status == ServiceStatus.STOPPING) {
                                this._status = ServiceStatus.STOPPED;
                                this.info("service stopped");
                                this._serverEventListerner.onServiceStopped();
                                if (this._stoppedCallback)
                                        this._stoppedCallback();
                        }

                        if (this._status == ServiceStatus.PAUSING) {
                                this._status = ServiceStatus.PAUSED;
                                this.info("service paused");
                                this._serverEventListerner.onServicePaused();

                                if (this._pausedCallBack)
                                        this._pausedCallBack();
                        }
                }

                await this._taskAccess.updateTaskStatus(task.id, { status: 1 });
                await this._taskNotifier.notifyTaskStarted();
        }

        async beforeTaskExcuting(task) {
                await this._taskAccess.updateTaskStatus(task.id, { status: TaskStatus.EXCUTING });
                await this._taskNotifier.notifyTaskStarted();
        }


}

exports.TaskRunner = TaskRunner