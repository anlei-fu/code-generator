const { all } = require("./config/all")
const { Generator } = require("./../../code-generator")

/**
 * Jasmine spring boot CRUD web project code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

function build() {
        all.forEach(x => {

                // set output folders
                let root = "./src/spider/main/java/com/@project";
                x.mapperFolder = `./src/@project/main/resource/mapper`;
                x.mapperConfigFolder = `${root}/mapper`;
                x.controllerFolder = `${root}/controller`;
                x.serviceFolder = `${root}/service`;
                x.serviceImplFolder = `${root}/service/impl`;
                x.reqFolder = `${root}/pojo/req`;
                x.respFolder = `${root}/pojo/resp`;
                x.paramFolder = `${root}/pojo/params`;

                let generator = new Generator(x);
                generator.writeAll();
        });
}