class TaskManager{
        constructor(){
                this._tasks= new Map();
        }
        addTask(taskConfig){
               this._tasks.set(taskConfig.taskId,taskConfig);
        }

        removeTask(taskId){
               this._tasks.delete(taskId);
        }

        getCurrentConcurrency(){
                let concurrency=0;
              this._tasks.forEach(t=>{
                    concurrency+=t.taskUrlMaxConcurrency;
              })

              return concurrency;
        } 

}

exports.TaskManager=TaskManager;