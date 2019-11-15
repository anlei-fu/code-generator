/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:10:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:53:37
 */
const { resolve } = require("./resolver");
const { OBJECT } = require("./../../libs/utils");
const { SQL_UTILS } = require("./../utils")
const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");

/**
 * 
 * @param {SqlConnectionConfig} config 
 * @param {String} schema 
 * @param {String} outputFolder 
 */
async function generate(config, schema,outputFolder="./output") {
        let tables = await resolve(config, schema);
        DIR.create(outputFolder);
        let main = "";
        tables.forEach(x => {
                let output = "";
                main += FILE.read("./template/main.js").replace(/@name/g, x.name);
                output = OBJECT.text(x, x.name);
                output += OBJECT.text(Object.keys(x.columns), "columnsArray");

                let instance = {};
                OBJECT.forEach(x.columns, (k, v) => {
                        instance[k] = SQL_UTILS.getTestValue(v.description, v.type);
                });

                output += FILE.read("./template/create.js").replace("@data",
                        OBJECT.text(instance, "")
                                .replace("let", "")
                                .replace("=", "")
                                .trim());
                output += FILE.read("./template/extend.js").replace(/@x/g, x.name);

                FILE.write(`${outputFolder}/${x.name}.js`, output);
        });

        FILE.write(`${outputFolder}/main.js`, `\r\n// All Tables \r\n` + main);
        console.info("finish generate!");
}

exports.generate = generate;