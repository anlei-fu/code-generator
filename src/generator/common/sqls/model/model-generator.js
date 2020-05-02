/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 09:10:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:53:37
 */
const { resolve } = require("./resolver");
const { OBJECT } = require("./../../../../libs/utils");
const sqlUtils = require("./../utils");
const { FILE } = require("./../../../../libs/file");
const { DIR } = require("./../../../../libs/dir");
const {LoggerFactory} =require("./../../logging/logger-factory");

const LOG=LoggerFactory.getLogger("sql-model-generator");
/**
 * 
 * @param {SqlConnectionConfig} config 
 * @param {String} schema 
 * @param {String} outputFolder 
 */
async function generate(config, schema,outputFolder="./output") {
        let tables = await resolve(config, schema);
        DIR.create(outputFolder);
        let main =  FILE.read(`${__dirname}/templates/main.js`);
        let allItem= FILE.read(`${__dirname}/templates/all-item.js`);
        let content="";
        tables.forEach(x => {
                let output = "";
                x.primaryColumn=sqlUtils.findPrimaryColumn(x);
                x.nameColumn=sqlUtils.findNameColumn(x);
                content +=allItem.replace(/@name/g, x.name);
                output = OBJECT.text(x, x.name);
                output += OBJECT.text(Object.keys(x.columns), "columnsArray");

                let instance = {};

                output += FILE.read(`${__dirname}/templates/create.js`).replace("@data",
                        OBJECT.text(instance, "")
                                .replace("let", "")
                                .replace("=", "")
                                .trim());
                output += FILE.read(`${__dirname}/templates/extend.js`).replace(/@x/g, x.name);

                FILE.write(`${outputFolder}/${x.name}.js`, output);
        });

        FILE.write(`${outputFolder}/all.js`, `\r\n// All Tables \r\n` + main.replace("@content",content.trimRight()));
        LOG.info("finish generate!");
}

exports.generate = generate;