const { MasterNodeInfo } = require("./MasterNodeInfo");
const { NodeInfo } = require("./NodeInfo");
const { ResourceConfig } = require("./ResourseConfig");
const { RestServiceConfig } = require("./RestServiceConfig");
const { TaskServiceConfig } = require("./TaskServiceConfig");


exports.NodeConfig = class {
        constructor () {

                // self info which will sysnc to master node
                this.info = new NodeInfo();

                // master info
                this.masterNodeInfo = new MasterNodeInfo();

                this.resource = new ResourceConfig();

                this.rest = new RestServiceConfig();

                this.task = new TaskServiceConfig();
        }
}