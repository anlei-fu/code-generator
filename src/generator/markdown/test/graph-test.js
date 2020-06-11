const { GraphBuilder } = require("./../graph");
const { FILE } = require("../../../libs/file");

function main() {
        generateDb();
        deployStructure();
        appStructure();
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

function appStructure(){
        const  app="app" 
              ,master="master"
              ,node="node"
              ,taskService="taskService"
              ,git="git"
              ,fileSystem="fileSystem"
              ,db="dbService"
              ,userInterface="userInterface"
              ,deployService="deployService"
              ,buildService="buildService"
              ,appService="appService"
              ,jobService="jobService"
              ,proxyService="proxyService"
              ,webUi="webUi";

        
              const builder = new GraphBuilder("TD");

           let content=   builder
                     .path(e(app),e(git))
                     .path(e(app),e(master))
                     .path(e(app),e(fileSystem))
                     .path(e(master),e(userInterface))
                     .path(e(userInterface),e(webUi))
                     .path(e(master),e(node))
                     .path(e(master),e(db))
                     .path(e(node),e(taskService))
                     .path(e(node),e(deployService))
                     .path(e(node),e(appService))
                     .path(e(node),e(jobService))
                     .path(e(node),e(proxyService))
                     .path(e(node),e(buildService))
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