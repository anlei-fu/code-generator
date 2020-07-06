const { all } = require("./config/all");
const { SpringBootGenerator } = require("libPath/SpringBootGenerator");
const { SpringBootGeneratorContext } = require("libPath/builders/SpringBootGeneratorContext");
const { mockConfig } = require("./mockConfig");

/**
 * Jasmine spring boot CRUD web project code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

const CONTEXT = new SpringBootGeneratorContext("project", "company", mockConfig);

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