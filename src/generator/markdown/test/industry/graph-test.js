const { GraphBuilder } = require("./../../graph");
const { FILE } = require("../../../../libs/file");

function main() {
        baseStructure();
        deployStructure();
        baseStructure();
        tasks();
        jobs();
}

function baseStructure() {
        const industry = "industry",
                health = "health",
                education = "education",
                food = "food",
                finance = "finance",
                ecommerce = "ecommerce",
                business = "busisness",
                content="content";
              

        const builder = new GraphBuilder("TD");

        const content = builder.path(e(industry), e(health))
                .path(e(industry), e(ecommerce))
                .build();

        FILE.write("./output/db.md", content);
}



function baseStructure() {
        const app = "app"
                , master = "master"
                , node = "node"
                , taskService = "taskService"
                , git = "git"
                , fileSystem = "fileSystem"
                , db = "dbService"
                , userInterface = "userInterface"
                , deployService = "deployService"
                , buildService = "buildService"
                , appService = "appService"
                , jobService = "jobService"
                , proxyService = "proxyService"
                , webUi = "webUi";


        const builder = new GraphBuilder("TD");

        let content = builder
                .path(e(app), e(git))
                .path(e(app), e(master))
                .path(e(app), e(fileSystem))
                .path(e(master), e(userInterface))
                .path(e(userInterface), e(webUi))
                .path(e(master), e(node))
                .path(e(master), e(db))
                .path(e(node), e(taskService))
                .path(e(node), e(deployService))
                .path(e(node), e(appService))
                .path(e(node), e(jobService))
                .path(e(node), e(proxyService))
                .path(e(node), e(buildService))
                .build();

        FILE.write("./output/app-structure.md", content);

}

function deployStructure() {
        const node = "node",
                db = "db",
                restService = "restService",
                taskService = "taskService",
                jobService = "jobService",
                exctutor = "excutor",
                resource_management = "resourceManagement",
                notifiers = "notifier";

        const builder = new GraphBuilder("TD");

        builder.path(e(node), e(db))
                .path(e(node), e(restService))
                .path(e(node), e(taskService))
                .path(e(node), e(jobService))
                .path(e(node), e(exctutor))
                .path(e(node), e(resource_management))
                .path(e(node), e(notifiers))

        const content = builder.build();

        FILE.write("./output/node.md", content);

}

function tasks() {
        const task = "task"
                , build = "build"
                , deploy = "deploy"
                , command = "command"
                , updateShell = "updateShell"
                , updateJs = "updateJs";

        const builder = new GraphBuilder("TD");

        const content = builder.path(e(task), e(build))
                .path(e(task), e(deploy))
                .path(e(task), e(command))
                .path(e(task), e(updateShell))
                .path(e(task), e(updateJs))
                .build();

        FILE.write("./output/tasks.md", content);

}

function jobs() {
        const job = "job",
                terminate = "task_terminate",
                masterHeartbaet = "master_heartbeat",
                systemHaelthCheck = "system_health_check",
                sync = "sync_job",
                appHealthCheck = "app_health_check";

        const builder = new GraphBuilder("TD");
        const content = builder.path(e(job), e(terminate))
                .path(e(job), e(masterHeartbaet))
                .path(e(job), e(systemHaelthCheck))
                .path(e(job), e(sync))
                .path(e(job), e(appHealthCheck))
                .build();

        FILE.write("./output/jobs.md", content);
}

function notifiers(){

}

function e(name, text) {
        return { name, text };
}

/*************************************main************************************************************* */
main();