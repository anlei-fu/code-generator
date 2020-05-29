const {ResourceManager} =require("./ResourceManager");

class DeployContext{
        constructor(){
           this.resourceManager =new ResourceManager();
        }
}

exports.DeployContext=DeployContext;