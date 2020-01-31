/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-22 09:15:20
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-22 11:06:32
 */
const { FILE } = require("./../../libs/file");

function setJavaEnviriments(javaHome) {
        return FILE.read("./templates/install-java.bat").replace("@home", javaHome);
}

function gitPull(dirver, path) {
        return FILE.read("./templates/git-pull.bat")
                .replace("@path", path)
                .replace("@driver", dirver);
}

function gitPush(){

}

function buildSolution(version, sln, clean, rebuild, release) {
        let output = FILE.read("./templates/msbuild.bat")
                .replace("@version", version)
                .replace("@sln", sln);

        output = clean ? output.replace("@clean", "\t:clean ") : output.replace("@clean", "");
        output = rebuild ? output.replace("@rebuild", "/t:rebuild") : output.replace("@rebuild", "/t:build");
        output = release ? output.replace("@release", "/p:Configuration=Release") : output.replace("@release", "");

        return output;
}


function runDevServer(){

}

function killDevServer(){

}

function installZookeeper(){

}

function installMySql(){

}

function installRedis(){

}

function installNgix(){

}

function installMongoDb(){

}

function publish(version, sln, pubDir, release) {
        let output = FILE.read("./templates/publish.bat")
                .replace("@version", version)
                .replace("@sln", sln)
                .replace("pubDir", pubDir);

        output = release ? output.replace("@mode", "Release") : output.replace("@mode", "Debug");
        return output;
}

