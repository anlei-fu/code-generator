/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:49:05
 */
const { all } = require("./config/all")
const { packages } = require("./packages")
const { Generator } = require("./../../code-generator")

/**
 * Jasmine spring boot CRUD web project code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

function build() {
        
        all.forEach(x => {
                x.packages=packages;
                // set output folders
                let root = "./@project/src/main/java/com/@project";
                x.mapperFolder = `${root}/mapper`;
                x.mapperConfigFolder = `./@project/src/main/resource/mapper`;
                x.controllerFolder = `${root}/controller`;
                x.serviceFolder = `${root}/service`;
                x.serviceImplFolder = `${root}/service/impl`;
                x.entityFolder = `${root}/pojo/entity`;
                x.reqFolder = `${root}/pojo/req`;
                x.respFolder = `${root}/pojo/resp`;
                x.paramsFolder = `${root}/pojo/param`;
                x.project="@project";

                let generator = new Generator(x);
                generator.writeAll();
        });
        
        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();