const { GraphBuilder } = require("./../graph");
const { FILE } = require("../../../libs/file");

function main() {
        generateDb();
        deployStructure();
}

function generateDb() {
        const db = "db",
                javaProject = "java_project_",
                version = "version",
                task = "task";

        const builder = new GraphBuilder("TD");

        const content = builder.path(e(db), e(javaProject))
                .path(e(db), e(version))
                .path(e(db), e(task))
                .build();

        FILE.write("./output/db.md", content);

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

                builder.path(e(node),e(db))
                       .path(e(node),e(restService))
                       .path(e(node),e(taskService))
                       .path(e(node),e(jobService))
                       .path(e(node),e(exctutor))
                       .path(e(node),e(resource_management))
                       .path(e(node),e(notifiers))

              const content=   builder.build();

              FILE.write("./output/node.md", content);

}

function e(name, text) {
        return { name, text };
}

/*************************************main************************************************************* */
main();