/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-25 09:09:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 16:12:51
 */
import { DownLoadError, ExtractError } from "./errors";

class Task {
        constructor() {
                this.taskId;
                this.localUrls;
                this.config;
                this.worker;
                this.recorder;
<<<<<<< HEAD:src/spider/task.js
                this.stillWork;
=======
                this.downloader;
                this.extractor;
>>>>>>> 879467355756ddc1af331bb82a0f7af6f691339f:src/html-parser/task.js
        }

        stop(){

        }

        start() {
                
                try {
                        // max concurrency
                        if (this.recorder.excuting < this.config.max) {

                                // task queue
                                if (this.localUrls.length > 0) {
                                        let url = this.localUrls.pop();
                                        let downloadResult = this.download(url);

                                        // download check
                                        if (downloadResult.status == 200) {
                                                let extractResult = this.extract(downloadResult);
                                                let result=extractResult.result
                                              
                                                // extract check
                                                if(result=="notMatch"){
 
                                                } else if(result=="cookieInvalid"){

                                                } else if(result=="blocked"){

                                                }else{

                                                }



                                        } else {
                                                this.recorder.failedCount++;
                                                this.recorder.errors;
                                                // record error
                                        }

                                } else {
                                        stillWork = false;
                                }

                        } else {
                                stillWork = true;
                        }

                } catch (error) {
                        this.failedCount++;
<<<<<<< HEAD:src/spider/task.js
                        stillwork = this.recorder.failedCount > this.recorder.maxFailedCount;
                }
=======
                         
                        if(error instanceof DownLoadError){

                        }else if(error instanceof ExtractError){

                        }else{
>>>>>>> 879467355756ddc1af331bb82a0f7af6f691339f:src/html-parser/task.js

                        }

                        stillwork = this.recorder.failedCount > this.recorder.maxFailedCount;
                        if (stillWork) {
                                setTimeout(this.schedule, this.delay);
                        } else {
                                this.finishTask();
                        }

                }
        }

<<<<<<< HEAD:src/spider/task.js
                schedule() {
                        this.start();
                }


                download() {

                        try {

                        } catch{

                        }
                }

                extract() {
                        try {
=======
        schedule() {
                this.run();
        }
>>>>>>> 879467355756ddc1af331bb82a0f7af6f691339f:src/html-parser/task.js


        download(url) {
                return this.downloader.download(url);
        }

        extract(html) {
               return this.extractor.extract(html);
        }

        taskFinished() {
               this.worker.finishTask(this.recorder);
        }
}