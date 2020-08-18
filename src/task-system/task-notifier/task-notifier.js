class TaskNotifyModel{

}

class TaskNotifier {
        notify(task) {
                try {
                        let notifyModel=new TaskNotifyModel();

                        if (task.notifyChannels) {
                              task.notifyChannels.forEach(channel=>{
                                  this.notifyTaskSheduler(channel,notifyModel);
                              });
                        }

                        if(task.notifyUrls){
                            task.notifyUrls.forEach(url=>{
                                  this.notifyURL(url,notifyModel);
                            });
                        }

                } catch (ex) {
                }
        }

        notifyTaskSheduler() {

        }

        notifyURL() {

        }
}

exports.TaskNotifier = TaskNotifier;