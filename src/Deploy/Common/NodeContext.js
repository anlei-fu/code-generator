const { Service } = require("./Service");

exports.NodeContext = class NodeContext extends Service {
        constructor () {
                super("NodeContext");

                this.nodeInfo = config.nodeInfo;

                this.masterNodeInfo = {};

                this.services = {};

                this.accesses = {};

                this.excutors = {};

                this.notifiers = {};

                this.resourceManager = {};

                this.factory={};

                this.gitHelper={};
        }

        init() {

        }

        start() {
              
        }

        stop() {

        }
}
