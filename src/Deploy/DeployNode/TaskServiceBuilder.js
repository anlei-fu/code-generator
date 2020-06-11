const { TaskService } = require("./../Common/TaskService");

exports.TaskServiceBuilder = class {
        static build() {
             return new TaskService();
        }
}