const { MasterNodeInfo } = require("./MasterNodeInfo");
const { NodeInfo } = require("./NodeInfo");


exports.NodeConfig = class {
        constructor () {

                // self info which will sysnc to master node
                this.info = new NodeInfo();

                // master info
                this.masterInfo = new MasterNodeInfo();

                // resour config
                this.jsBaseFolder = "./script/js";
                this.shellBaseFolder = "./script/shell";
                this.dbFile = "./data/db.db";

                // restful service port
                this.restServicePort = 10032;

                // task service config
                // task loop interval
                this.taskLoopInterval = 100;

                // max concurret task threshold
                this.taskMaxConcurrency = 10;

                // system resource config
                // shell base folder
                this.systemShellFolder = "./script/shell/system";
                
                // js base folder
                this.systemJsFolder = "./script/js/system";

        }
}