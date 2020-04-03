class TaskResult{
        constructor(){
                this.startTime=new Date();
                this.finishTime=new Date();
                this.taskId=100;
                this.taskResult={};
                this.errorMsg="";
        }
}

exports.TaskResult =TaskResult