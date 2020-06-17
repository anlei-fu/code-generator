
const { ExcutorBase } = require("./ExcutorBase");
const { TaskType } = require("../po/constant/TaskType");

exports.TaskExcutor = class TaskExcutor extends ExcutorBase {

        constructor () {
                super("TaskExcutor", TaskType.ALL);

                // self properties
                this._excutors = new Map();
        }

        init(context) {
                super(context);

                let keys = Object.keys(context.excutors);
                keys.forEach(excutorName => {
                        if (this._excutors.has(context.excutors[excutorName].taskType)) {
                                throw new Error(
                                        `there already is a excutor for task type ${excutorName.taskType},` +
                                        ` repeat is not allowed`
                                );
                        }

                        this._excutors.set(context.excutors[excutorName].taskType, context.excutors[excutorName]);
                });
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

                // every excutor has its try catch block, process it internally
                // and return a certain task result 
                return this._excutors.get(task.taskType).execute(task.file, args);
        }


}