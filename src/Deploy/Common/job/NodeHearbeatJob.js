const { NodeContext } = require("../NodeContext");
const { validateUtils } = require("../utils/validate-utils");
const { Job } = require("./Job");

/**
 * Use to keep alive with master node
 * 
 * @SystemJob
 */
class NodeHeartbeatJob extends Job {
  constructor () {
    super({
      name: "HeartbeatJob",
      description: "Use to let master know that the node is still alive",
    });

    this._notifier = {};
  }

  /**
   * Get @see {NodeHeartbeatNotifier} from context and get job expression(or set default expression if absent)
   * 
   * @param {NodeContext} context 
   */
  init(context) {
    validateUtils.requireNotNull(context.notifiers, "NodeHeartbeatNotifier");
    this._notifier = context.notifiers.NodeHeartbeatNotifier;
    this.expression = context.config.task.nodeHeartbeatJobExpression || "* 10 * * * *";
  }

  /**
   * Send heartbeat to master node
   */
  async execute() {
    try {
      await this._notifier.heartBeat();
      this.info("send heartbeat success");
    } catch (ex) {
      this.error("send heartbeat failed", ex);
    }
  }
}

exports.HeartbeatJob = NodeHeartbeatJob;