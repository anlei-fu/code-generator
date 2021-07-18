/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-6-30 9:48:55 AM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
const { ConfigGenerator } = require(
        "D:/project/code-generator/src/generator/spring-boot/ConfigGenerator"
);

const { analyzeConfig } = require("./analyzeConfig");


function main() {
        let generator = new ConfigGenerator(analyzeConfig);
        generator.generate(
                "D:/project/code-generator/src/generator/spring-boot/project",
                "D:/project/code-generator/src/generator/spring-boot",
                "crud1"
        );
        console.log("config finished!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
main();