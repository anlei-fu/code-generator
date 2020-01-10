/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-1-10 5:35:37 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
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
        
        let packageRender=new PackegeRender("delivery");
        let writer =new Writer("delivery");
        all.forEach(x => {
                // set output folders
                let root = "./delivery/src/main/java/com/delivery";
                x.mapperFolder = `${root}/mapper`;
                x.mapperConfigFolder = `./delivery/src/main/resource/mapper`;
                x.controllerFolder = `${root}/controller`;
                x.serviceFolder = `${root}/service`;
                x.serviceImplFolder = `${root}/service/impl`;
                x.entityFolder = `${root}/pojo/entity`;
                x.reqFolder = `${root}/pojo/req`;
                x.respFolder = `${root}/pojo/resp`;
                x.paramsFolder = `${root}/pojo/param`;
                x.project="delivery";

                let generator = new Generator(x,writer,packageRender);
                generator.generate();
        });
        
        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();