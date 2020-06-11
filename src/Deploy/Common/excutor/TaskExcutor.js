
const { ExcutorBase } = require("./ExcutorBase");
const { JsExcutor } = require("./JsExcutor");
const { ShellFileExcutor } = require("./ShellFileExcutor");
exports.TaskExcutor = class TaskExcutor extends ExcutorBase {

        constructor (context) {
                super("TaskExcutor");
                this._excutors = new Map();
                context.excutors.forEach(excutor => {
                        this._excutors.set(excutor.taskType, excutor);
                });

                this._excuteResultFactory = context.excuteResultFactory;
        }

        async execute(task) {

                if (!task || task.taskType)
                        return this._excuteResultFactory.taskIncorrect(task);

                if (!this._excutors.has(task.taskType))
                        return this._excuteResultFactory.taskExcutorNotFound(task.id, task.taskType);

                let args;
                try {
                        if (task.args)
                                args = JSON.parse(task.args);
                } catch (ex) {
                        return this._excuteResultFactory.taskArgsIncorrect(task);
                }

                return this._excutors.get(task.taskType).execute(task.file, args);
        }
}