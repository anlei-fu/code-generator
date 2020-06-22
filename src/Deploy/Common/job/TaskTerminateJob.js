const { Job } = require("./Job");
const { validateUtils } = require("./../utils/validate-utils");
const { NodeContext } = require("./../NodeContext");
const { TaskStatus } = require("./../po/constant/TaskStatus");

/**
 * Use to terminate timeouted task execution, just update db info
 * 
 * @SystemJob
 */
class TaskTerminateJob extends Job {
        constructor () {
                super({
                        jobListener:null,
                        name: "TaskTerminateJob",
                        description: "Use to terminate timeouted task execution"
                });

                this._taskAccess = null;
        }

        /**
         * Init : get @see {TaskAccess} and task expression from context
         * 
         * @override
         * @param {NodeContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context.accesses, "TaskAccess");
                this._taskAccess = context.accesses.TaskAccess;
                this.expression=context.config.task.taskTerminateJobExecuteExpression||"* 0/10 * * * *";
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