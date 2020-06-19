const { AccessBase } = require("../../common/AcccessBase");

class TaskAccess extends AccessBase {
        constructor () {
                super("TaskAccess", "task");
        }

        getTaskToExcute(max){
              return this._query("status = 1  order by id asc",{index:0,size:max});
        }

}

exports.TaskAccess = TaskAccess;