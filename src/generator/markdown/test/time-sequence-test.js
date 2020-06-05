const { TimeSequenceBuilder } = require("./../timeSequence");
const { FILE } = require("../../../libs/file");

function main() {
        generateBuildSequence();
        generateDeploySequence();
}

function generateBuildSequence(){
        let builder = new TimeSequenceBuilder();

        const master = "master",
                build = "build",
                file = "file",
                git = "git";


        const content = builder.participants(master, build, git, file)
                .sendSync(master, build, "schedule build project task")
                .sendSync(build, master, "return shchedule result:[succeess|repeat|failed]")
                .sendSync(build, git, "pull new version code")
                .sendSync(git, build, "pulled new version code result:[success/failed] ")
                .sendAsync(build, master, "build failed:[pull git failed]")
                .sendSelfSync(build, "start build project")
                .sendAsync(build, master, "build failed:[build error]")
                .sendSync(build, file, "save new builds")
                .sendAsync(file, build, "save result:[success/failed]")
                .sendAsync(build, master, "build failed:[save file failed]")
                .sendAsync(build, master, "build success")
                .build();

        FILE.write("./output/build-sequence.md", content);
}

function generateDeploySequence() {
        let builder = new TimeSequenceBuilder();

        const master = "master",
                deploy = "deploy",
                file = "file",

           content = builder
                .participants(master, deploy, file)
                .sendSync(master, deploy, "schedule deploy task")
                .sendSync(deploy, master, "shcedule result:[succeess/repeat/failed]")
                .sendSync(deploy, file, "pull builds")
                .sendSync(file, deploy, "success/failed")
                .sendAsync(deploy, master, "deploy failed:[pull builds failed]")
                .sendSelfSync(deploy, "start run deploy")
                .sendSelfSync(deploy, "backup current builds")
                .sendSelfSync(deploy, "if failed then rollback")
                .sendAsync(deploy, master, "deploy failed:[deploy error]")
                .sendSelfSync(deploy,"update local build version(ignore error)")
                .sendAsync(deploy, master, "deploy success")
                .build();
        
                FILE.write("./output/deploy-sequence.md", content);
}


/******************************************main************************************************************** */
main();