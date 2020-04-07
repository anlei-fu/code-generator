const { all } = require("./config/all");
const { Generator } = require("./../../code-generator");
const { GeneratorContext } = require("./../../genetator-context");

/**
 * Jasmine spring boot CRUD web project code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

const CONTEXT = new GeneratorContext("@project","@company");

function build() {
        all.forEach(configGroup => {
                configGroup.items.forEach(configItem => {
                        configItem.context = CONTEXT;
                });
                configGroup.context = CONTEXT;

                let generator = new Generator(configGroup);
                generator.generate();
        });

        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();