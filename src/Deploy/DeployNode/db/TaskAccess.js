const { AccessBase } = require("../../common/AcccessBase");

class TaskAccess extends AccessBase {

        constructor (excutor) {
                super("task", "task",excutor);
        }

        listPendingTasks() {
                return this.list({ status: 1 });
        }

        getTaskToExcute(max) {
                return this.list({ status: 2 }, { index: 1, size: max });
        }

        getExecutingTask() {
                return this.list({ status: 1 });
        }

        async getTaskStatus(id) {
                let task = await this.getById(id);
                return task ? task.status : null;
        }

        updateTaskStatus(id, status) {
                return this.updateById(id, { status });
        }

        updateTaskStatusBatch(ids, status) {
                return this.updateBatch(ids, { status });
        }
}

exports.TaskAccess = TaskAccess;