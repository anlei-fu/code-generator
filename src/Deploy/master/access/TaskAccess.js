const { AccessBase } = require("../../common/AcccessBase");
const { TaskStatus } = require("./../../common/po/constant/TaskStatus");
const { NodeStatus } = require("./../../common/po/constant/NodeStatus")

class TaskAccess extends AccessBase {
        constructor () {
                super("TaskAccess", "task");
        }

        getTaskToDispatch(max=10) {
                return this.query(
                        `select * from task t
                         left join node nd on t.node_id =nd.id
                         where  
                                t.task_status= ${TaskStatus.WAIT}
                                and  t.next_execute_time < current_timestamp
                                and  nd.node_status = ${NodeStatus.RUNNING}
                         order by t.next_execute_time desc
                         limit 0 ${max}`);
        }

}

exports.TaskAccess = TaskAccess;