const {ResourceManager} =require("./manager/ResourceManager");
const {JavaProjectDdService} =require("./db/JavaProjectDbAccess");
const {JavaProjectNotifier} =require("./notifiers/JavaProjectNotifier");

class Notifiers{
        constructor(){
                this.javaProjectNotifier= new JavaProjectNotifier();
        }
}

class Db{
        constructor(){
                this.javaProjectDdService=new JavaProjectDdService();
        }
}


class DeployContext{
        constructor(){
           this.resourceManager =new ResourceManager();
           this.db=new Db();
           this.notifiers=new Notifiers();
        }


}

exports.DeployContext=DeployContext;