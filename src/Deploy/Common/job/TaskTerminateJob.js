const { Job } = require("./Job");
const { validateUtils } = require("./../utils/validate-utils");
const { NodeContext } = require("./../NodeContext");
const { TaskStatus } = require("./../po/constant/TaskStatus");

class TaskTerminateJob extends Job {
        constructor (expression) {
                super({
                        jobListener:null,
                        name: "TaskTerminateJob",
                        expression,
                        description: " to terminate timeouted job"
                });

                this._taskAccess = null;
        }

        /**
         * Init 
         * 
         * @override
         * @param {NodeContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context.accesses, "TaskAccess");
                this._taskAccess = context.accesses.TaskAccess;
        }

        /**
         * Run job
         * 
         * @override
         */
        async execute() {
                let result = await this._taskAccess.execute(`
                 update  task
                 set  status= ${TaskStatus.TIMEOUT}
                 where  
                     status =${TaskStatus.EXCUTING}
                     and  strftime('%s','now') - strftime('%s',start_time) > timeout
              `);

                this.info(`terminate timeouted task finished , result :${result}`);
        }
}

exports.TaskTerminateJob = TaskTerminateJob;