class Task {
        constructor() {
                this.taskId;
                this.localUrls;
                this.taskConfig;
                this.worker;
                this.recorder;
        }

        run() {
                let stillWork;

                try {
                        if (this.excuting < this.max) {
                                
                                if (this.localUrls.length > 0) {
                                        let url = this.localUrls.pop();
                                        let html = this.download(url);
                                        let result = this.extract(html);

                                } else {
                                        stillWork = false;
                                }

                        } else {
                                stillWork = true;
                        }

                } catch (error) {
                        this.failedCount++;
                        stillwork = this.recorder.failedCount > this.recorder.maxFailedCount;

                        if (stillWork) {
                                setTimeout(this.schedule, this.delay);
                        } else {
                                this.finishTask();
                        }

                }

                schedule() {
                        this.run();
                }


                download() {

                        try {

                        } catch{

                        }
                }

                extract() {
                        try {

                        } catch{

                        }

                }

                taskFinished() {
                        worker.finishTask(this.recorder);
                }
        }