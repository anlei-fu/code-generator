const { TaskManager } = require("./task-manager");

/**
 * Fetch and excute task
 */
class TaskExcutor extends Service {

        /**
         * 
         * @param {TakManager} taskManager 
         */
        constructor (taskManager) {
                super("task-excuter");
                this._taskManager = taskManager;
                this._scriptManager;
                this._taskFetcher;
                this._maxConcurrency = 100;
                this._rerunScheduled = false;
        }

        /**
         * @override
         */
        start() {
                if (!super.start())
                        return;

                this.run();
        }

        run() {
                while (this._status == "running") {
                        if (this._taskManager.getExcutingTakCount < this._maxConcurrency) {
                                if (this._status == "running") {
                                        let task = this._taskFetcher.fetch();

                                        /* no task to run,no task callback to trigger run
                                         * and has not sheduled run callback, shedule run callback
                                         */
                                        if (!task
                                                && this._taskManager.getExcutingTakCount == 0
                                                && !this._rerunScheduled) {
                                                this._rerunScheduled = true;
                                                setTimeout(() => { this._rerunScheduled = false; this.run() }, 1000);
                                        } else {
                                                this.excute(task);
                                        }
                                }
                        } else {
                                break; // over max concurrency break
                        }
                }
        }

        async  excute(task) {
                try {
                        this._taskManager.add(task);
                        
                        // get task runner
                        let runner = this._scriptManager.get(task.script);
                        if (!runner) {
                                this._taskManager.setError(task.id, "script not fount");
                                return;
                        }

                        let result = await runner(task.params);
                        this._taskManager.setReult(task.id, result);

                } catch (error) {
                        this._taskManager.setError(task.id, error);
                }
                finally {
                        // fully stop
                        if (this._status == "stopping" && this._taskManager.excutingTaskCount == 0) {
                                this._status = "stopped";
                        } else if (this._status == "running") {
                                // run new task
                                this.run();
                        }
                }
        }
}