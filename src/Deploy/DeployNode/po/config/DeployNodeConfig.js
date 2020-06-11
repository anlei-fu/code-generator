exports.NodeInfo = class {
        constructor () {
                this.ip = "";
                this.description = "";
                this.name = "";
                this.type = "";
                this.nodeType = 1;
        }
}

exports.MasterNodeInfo = class {
        constructor () {
                this.restServiceHost = "";
                this.fileSystemHost = "";
                this.gitServiceHost = "";
        }
}

exports.DeployNodeConfig = class {
        constructor () {

                // self info which will sysnc to master node
                this.info = new NodeInfo();

                // master info
                this.masterInfo = new MasterNodeInfo();

                // resour config
                this.jsBaseFolder = "";
                this.shellBaseFolder = "";
                this.dbFile = "";

                // restful service port
                this.restServicePort = 10032;

                // task service config
                // task loop interval
                this.taskLoopInterval = 100;
                // max concurret task threshold
                this.taskMaxConcurrency = 10;

                // system resource config
                // shell base folder
                this.systemShellFolder = "";
                // js base folder
                this.systemJsFolder = "";

        }
}