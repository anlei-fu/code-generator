const { NodeContextBuilder } = require("./../common/builder/NodeContextBuilder");
const { JsManager } = require("./../common/manager/JsManager");
const { ShellManager } = require("./../common/manager/ShellManager");
const { JsExecutor } = require("../common/excutor/JsExecutor");
const { ShellFileExecutor } = require("../common/excutor/ShellFileExecutor");
const { TaskExcutor } = require("./../common/excutor/TaskExcutor");
const { RestService } = require("./../common/service/RestService");
const { TaskService } = require("./../common/service/TaskService");
const { SqliteExecutor } = require("./../common/excutor/SqliteExecutor");
const { ConfigLoader } = require("./../common/ConfigLoader");
const { ExecuteResultFactory } = require("./../common/factory/ExecuteResultFactory");
const { TaskAccess } = require("./../DeployNode/db/TaskAccess");
const { TaskController } = require("./../DeployNode/controller/TaskController");
const { DebugUtils } = require("./../common/utils/debug-utils");
const { JobService } = require("./../common/service/JobService");
const { TaskTerminateJob } = require("./../common/job/TaskTerminateJob");
const { EchoJob } = require("./echo-job");

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
                }).useTaskService(() => {
                        return new TaskService();
                }).useFactory(() => {
                        return new ExecuteResultFactory();
                }).useNotifiers(context => {
                        return []
                }).useService(() => {
                        return new JobService()
                }).useJobs(() => {
                        return [
                                new TaskTerminateJob("30 * * * * *"),
                                new EchoJob()
                        ];
                }).build();

        //     context.start();

        DebugUtils.setDebugMode();

        context.services.TaskService.start();
        context.services.RestService.start();
        context.services.JobService.start();

        // context.excutors.JsExecutor.excute("1.js","svg");

}

/**********************************************test*************************************************************/
test();