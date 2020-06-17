const { NodeContextBuilder } = require("./../common/builder/NodeContextBuilder");
const { JsManager } = require("./../common/manager/JsManager");
const { ShellManager } = require("./../common/manager/ShellManager");
const { JsExcutor } = require("./../common/excutor/JsExcutor");
const { ShellFileExcutor } = require("./../common/excutor/ShellFileExcutor");
const { TaskExcutor } = require("./../common/excutor/TaskExcutor");
const { RestService } = require("./../common/RestService");
const { TaskService } = require("./../common/TaskService");
// const { NodeInfoBuilder } = require("./../common/builder/NodeInfoBuilder");

function test() {
        let builder = new NodeContextBuilder();
        let context = builder.withNodeInfo(context => {

        }).withMasterInfo(context => {

        }).useManagers(() => {
                return [
                        new JsManager(""),
                        new ShellManager("")
                ]
        }).useAccesses(() => {
                return [

                ]
        }).useExcutors(() => {
                return [
                        new JsExcutor(),
                        new ShellFileExcutor(),
                        new TaskExcutor()
                ]
        }).useRestService(context => {
                return new RestService(
                        context.config.restPort,
                        [

                        ]
                );
        }).useTaskService(context => {
                return new TaskService(context.taskConfig,null);
        }).useNotifiers(context => {

        }).build();

        context.start();

}

/**********************************************test*************************************************************/
test();