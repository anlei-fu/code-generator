const {TaskResult} =require("./task-result");
const {TaskNotifier} =require("./task-notifier/task-notifier");

class TaskManager{

        constructor(){
                this._tasks=new Map();
                this._notifier;
        }


        addTask(task){
            if(this._tasks.has(task.id)){

            }else{
                    this._tasks.set(task.id,new TaskResult(task))
            }
        }

        setResult(id,result){
            let taskResult =this._tasks.get(id);
            if(!taskResult){
                    return;
            }

            taskResult.set(result);
            this._removeTask(taskResult);
        }

        setError(id,error){
                let taskResult =this._tasks.get(id);
                if(!taskResult){
                        return;
                }
                taskResult.setError(error);
                this._removeTask(taskResult);
        }

        getExcutoingTaskCount(){
                return this._tasks.size;
        }

        _removeTask(taskResult){
                this._notifier.add(taskResult);
                this._tasks.delete(taskResult.id);
        }
}

exports.TaskManager=TaskManager;