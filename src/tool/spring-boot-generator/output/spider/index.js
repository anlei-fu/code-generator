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
const {PackegeRender } = require("./../../renders/package-render");
const {Writer} =require("./../../writer")
const { Generator } = require("./../../code-generator")

/**
 * Jasmine spring boot CRUD web project code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

function build() {
        
        let packageRender=new PackegeRender("spider");
        let writer =new Writer("spider");
        all.forEach(x => {
                // set output folders
                let root = "./spider/src/main/java/com/spider";
                x.mapperFolder = `${root}/mapper`;
                x.mapperConfigFolder = `./spider/src/main/resource/mapper`;
                x.controllerFolder = `${root}/controller`;
                x.serviceFolder = `${root}/service`;
                x.serviceImplFolder = `${root}/service/impl`;
                x.entityFolder = `${root}/pojo/entity`;
                x.reqFolder = `${root}/pojo/req`;
                x.respFolder = `${root}/pojo/resp`;
                x.paramsFolder = `${root}/pojo/param`;
                x.project="spider";

                let generator = new Generator(x,writer,packageRender);
                generator.generate();
        });
        
        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();