const { TaskService } = require("./../common/TaskService");

exports.TaskServiceBuilder = class {
        static build() {
             return new TaskService();
        }
}