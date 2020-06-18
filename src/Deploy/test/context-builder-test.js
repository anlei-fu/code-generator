const { NodeContextBuilder } = require("./../common/builder/NodeContextBuilder");
const { JsManager } = require("./../common/manager/JsManager");
const { ShellManager } = require("./../common/manager/ShellManager");
const { JsExecutor } = require("../common/excutor/JsExecutor");
const { ShellFileExecutor } = require("../common/excutor/ShellFileExecutor");
const { TaskExcutor } = require("./../common/excutor/TaskExcutor");
const { RestService } = require("./../common/RestService");
const { TaskService } = require("./../common/TaskService");
const { SqliteExecutor } = require("./../common/excutor/SqliteExecutor");
const { ConfigLoader } = require("./../common/ConfigLoader");
const { ExecuteResultFactory } = require("./../common/factory/ExecuteResultFactory");
const { TaskAccess } = require("./../DeployNode/db/TaskAccess");
const { TaskController } = require("./../DeployNode/controller/TaskController");
const { DebugUtils } = require("./../common/utils/debug-utils");
// const { NodeInfoBuilder } = require("./../common/builder/NodeInfoBuilder");

function test() {
        let builder = new NodeContextBuilder();
        let config = ConfigLoader.load("./config");
        let context = builder.withConfig(config)
                .useManagers((context) => {
                        return [
                                new JsManager(context.config.resource.js.dir),
                                new ShellManager(context.config.resource.shell.dir)
                        ]
                }).useAccesses(() => {
                        return [
                                new TaskAccess()
                        ]
                }).useExcutors((context) => {
                        return [
                                new JsExecutor(),
                                new ShellFileExecutor(),
                                new TaskExcutor(),
                                new SqliteExecutor(context.config.data.dir, context.config.data.file)
                        ]
                }).useRestService(context => {
                        return new RestService(
                                context.config.rest.port,
                                [
                                        new TaskController()
                                ]
                        );
                }).useTaskService(context => {
                        return new TaskService(context.taskConfig, null);
                }).useFactory(() => {
                        return new ExecuteResultFactory();
                }).useNotifiers(context => {
                        return []
                }).build();

        //     context.start();

        DebugUtils.setDebugMode();

        context.services.TaskService.start();

      // context.excutors.JsExecutor.excute("1.js","svg");

}

/**********************************************test*************************************************************/
test();