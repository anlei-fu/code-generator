import { request } from "http";

class Worker {
        constructor() {
                this.stillWork;
                this.maxCount;
                this.currentCount;
                this.connected;
                this.stopping;
        }

        start(){
                this.stopping=false;
                this.doWork();
        }

        stop() {
                this.stopping=true;
        }

        doWork() {
                if(!this.stopping) {
                        if(!connected){
                                setTimeout(this.connet, this.config.connectIntever);
                        }
                        else if(this.currentCount<this.config.maxCount ) {
                                setTimeout(()=>{
                                     this.startTask();
                                     this.doWork();
                                }, 
                                this.config.taskInterver);
                        }else{
                                setTimeout();
                        }
                }
        }

        connet(){
               request();
        }

        heartBeat(){
                if(!this.stopping){
                        if(this.connected){

                        }

                        setTimeout(this.heartBeat);
                }
        }

        startTask() {
               let taskConfig=getTask();
               if(taskConfig!=null){
               let task=new Task(taskConfig);
               task.start();
               }
        }

        finishTask(task) {
                this.currentCount-=task.config.maxCount;
        }

        getTask() {
                request(this)
        }
}