const { TimeSequenceBuilder } = require("./../timeSequence");
const { FILE } = require("../../../libs/file");

function main() {
        generateBuildSequence();
        generateDeploySequence();
        generateAppService();
}

function generateBuildSequence() {
        let builder = new TimeSequenceBuilder();

        const master = "master",
                rest="rest",
                taskExcutor = "taskExcutor",
                fileSystem = "fileSystem",
                db="db",
                git = "git";


        const content = builder.participants(master,rest, taskExcutor, git, fileSystem,db)
                .sendSync(master, rest, "schedule build project task")
                .sendSync(rest,db,"save task")
                .sendSync(db,rest,"save task result")
                .sendSync(rest,master,"return schedule task result")
                .sendSelfAsync(taskExcutor,"excute build task")
                .sendSync(taskExcutor, git, "pull new version code")
                .sendSync(git, taskExcutor, "return pulled new version code result")
                .sendSync(taskExcutor,db,"save task result failed(pull code failed)")
                .sendAsync(taskExcutor,master,"notify task failed(pull code failed)")
                .sendSelfSync(taskExcutor, "start build project")
                .sendSync(taskExcutor,db,"save task result failed(build failed)")
                .sendAsync(taskExcutor,master,"notify task failed(build failed)")
                .sendSync(taskExcutor, fileSystem, "save new builds")
                .sendSync(fileSystem, taskExcutor, "return save result")
                .sendSync(taskExcutor,db,"save task result failed(save file failed)")
                .sendAsync(taskExcutor,master,"notify task failed(save file failed)")
                .sendSync(taskExcutor,db,"save task result success")
                .sendAsync(taskExcutor, master, "notify build success")
                .build();

        FILE.write("./output/build-sequence.md", content);
}

function generateDeploySequence() {
        let builder = new TimeSequenceBuilder();

        const master = "master",
                taskExecutor = "taskExcutor",
                db="db",
                rest="rest",
                fileSystem = "fileSystem",

                content = builder
                        .participants(master, rest, taskExecutor, fileSystem,db)
                        .sendSync(master, rest, "schedule deploy task")
                        .sendSync(rest,db,"save task")
                        .sendSync(db,rest,"return save db result")
                        .sendSync(rest,master,"return task schedule result")
                        .sendSelfAsync(taskExecutor,"execute deploy task")
                        .sendSync(taskExecutor, fileSystem, "pull new version")
                        .sendSync(fileSystem, taskExecutor, "return pull result")
                        .sendSync(taskExecutor,db,"save task result")
                        .sendAsync(taskExecutor,master,"notify task failed (pull file failed)")
                        .sendSelfSync(taskExecutor, "backup current version")
                        .sendSelfSync(taskExecutor,"shutdown app if need")
                        .sendSelfSync(taskExecutor,"deploy")
                        .sendSelfSync(taskExecutor, "if failed then rollback")
                        .sendSelfSync(taskExecutor,"restart old app")
                        .sendSync(taskExecutor,db,"save task result failde (deploy failed)")
                        .sendAsync(taskExecutor, master, "notify task failed(deploy failed)")
                        .sendSelfSync(taskExecutor,"start new app")
                        .sendSelfAsync(taskExecutor,"wait period time to check is deploy success")
                        .sendSelfSync(taskExecutor, "if failed then rollback")
                        .sendSelfSync(taskExecutor,"restart old app")
                        .sendSync(taskExecutor,db,"save task result failed (deploy failed)")
                        .sendAsync(taskExecutor, master, "notify task failed(deploy failed)")
                        .sendSync(taskExecutor,db,"save new version info to db")
                        .sendSync(taskExecutor,db,"save task result success")
                        .sendAsync(taskExecutor, master, "notify deploy success")
                        .build();

        FILE.write("./output/deploy-sequence.md", content);
}

function generateAppService() {
        let master = "master"
                , taskExcutor = "taskExcutor"
                , db = "db"
                , rest = "rest"
                , healthCheckJob = "healthCheckJob";


        let builder = new TimeSequenceBuilder();

        let content = builder.participants(master, rest, taskExcutor, healthCheckJob, db)
                .sendSync(master, rest, "schedule install task")
                .sendSync(rest, db, "save new task(refuse repeated task)")
                .sendSync(db, rest, "return save result")
                .sendSync(rest, master, "return schedule install task result")
                .sendSelfAsync(taskExcutor, "execute install task")
                .sendSync(taskExcutor, db, "if install success, save app info to db")
                .sendAsync(taskExcutor, master, "notify install task execute result")
                .sendSync(master, rest, "schedule command task")
                .sendSync(rest, db, "save new task")
                .sendSync(db, rest, "return save result")
                .sendSync(rest, master, "return schedule command task result")
                .sendSelfAsync(taskExcutor, "execute command task")
                .sendSync(taskExcutor, db, "update app status")
                .sendAsync(taskExcutor, master, "notify command task result")
                .sendSync(master, rest, "query app status/ list apps")
                .sendSync(rest, db, "query data")
                .sendSync(db, rest, "retunr query result")
                .sendSync(rest, master, "return query result")
                .sendSelfAsync(healthCheckJob, "if app running, check app status")
                .sendAsync(healthCheckJob,master,"notify health check result")
                .sendSync(healthCheckJob, db, "update app status if changed")
                .sendAsync(healthCheckJob, master, "if app status changed,update master data")
                .build();
        FILE.write("./output/app-service.md", content);
}


/******************************************main************************************************************** */
main();