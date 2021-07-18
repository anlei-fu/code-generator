const { all } = require("./config/all");
const { SpringBootGenerator } = require("D:/project/code-generator/src/generator/spring-boot/SpringBootGenerator");
const { SpringBootGeneratorContext } = require("D:/project/code-generator/src/generator/spring-boot/builders/SpringBootGeneratorContext");
const { mockConfig } = require("./mockConfig");

/**
 * Jasmine spring boot CRUD web crud1 code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

const CONTEXT = new SpringBootGeneratorContext("crud1", "jasmine", mockConfig);

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