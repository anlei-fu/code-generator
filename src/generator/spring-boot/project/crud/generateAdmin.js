const {ListPageGenerator} = require("../../../vue-admin/listPageGenerator")

const { all } = require("./config/all");
/**
 * Jasmine spring boot CRUD web crud code generator
 * Wrote in Chengdu,SiChuan ,China
 * All rights reserved by fuanlei since 2019
 */

function build() {
        let generator = new ListPageGenerator();
        all.forEach(configGroup => {
               generator.generate(configGroup);
        });

        console.log("completed!");
}

/*-------------------------------------------------run--------------------------------------------------------*/
build();