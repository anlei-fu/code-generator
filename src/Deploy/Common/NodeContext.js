const { Service } = require("./Service");

exports.NodeContext = class NodeContext extends Service {
        constructor () {
                super("NodeContext");

                this.nodeInfo = {};

                this.masterNodeInfo = {};

                this.services = {};

                this.accesses = {};

                this.excutors = {};

                this.notifiers = {};

                this.resourceManager = {};

                this.factories = {};

                this.gitHelper = {};

                this.config = {};

                this.jobs = {};
        }

        init() {

        }

        start() {

        }

        stop() {

        }
}
