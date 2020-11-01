const { all } = require("./config/all");
const { SpringBootGenerator } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/SpringBootGenerator");
const { SpringBootGeneratorContext } = require("C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/builders/SpringBootGeneratorContext");
const { mockConfig } = require("./mockConfig");

/**
 * Jasmine spring boot CRUD web crawler code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

const CONTEXT = new SpringBootGeneratorContext("crawler", "jasmine", mockConfig);

function build() {
        all.forEach(configGroup => {
                configGroup.items.forEach(configItem => {
                        configItem.context = CONTEXT;
                });
                configGroup.context = CONTEXT;

                let generator = new SpringBootGenerator(configGroup);
                generator.generate();
        });

        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();