const { STR } = require("../../libs/str");
const { DIR } = require("./../../libs/dir");
const { FILE } = require("../../libs/file");
const COMPYRIGHT = FILE.read(`${__dirname}/templates/copyright.java`).replace("@date", new Date().toLocaleString());
const { ConfigBuilderGenerator } = require("./ConfigBuilderGenerator");

class ConfigGenerator {
        constructor (analyzeConfig) {
                this._configBuilderGenerator = new ConfigBuilderGenerator(analyzeConfig);
        }

        generate(targetPath, libPath, project) {
                
                DIR.getFiles(`${targetPath}/${project}/config`).forEach(f => {
                        FILE.remove(`${targetPath}/${project}/config/${f}`);
                });
                
                // generate all items config
                let tables = require(`${targetPath}/${project}/db/all.js`).all;
                let relations = require(`${targetPath}/${project}/db/relations.js`).relations;
                let root = `${targetPath}/${project}/config`;
                let builderConfigs = require(`${targetPath}/${project}/generateConfig.js`).config;
                let generatorItems = Object.keys(builderConfigs);
                generatorItems.forEach(item => {
                        let table = tables[item];
                        this._generateConfigBuilderItem(
                                builderConfigs[item],
                                libPath,
                                root,
                                table,
                                table.columns[table.primaryColumn],
                                tables,
                                relations
                        );
                });

                // create all.js which integrated all config
                let allContent = "";
                generatorItems.forEach(x => {
                        allContent += `        require("./${x}.js").${x}Config,\r\n`;
                });

                FILE.write(`${root}/all.js`,
                        COMPYRIGHT + FILE.read(
                                `${__dirname}/templates/config-all.js`).replace("@content", allContent.trimRight())
                );

                console.log(`project ${project} config finished finished!`);
        }

        /**
       * Generate config item
       * 
       * @private
       * @param {String} configRoot 
       * @param {String} tableName 
       * @param {Column} pkColumn
       * @param {Tables} tables
       * @param {Relations} relations
       */
        _generateConfigBuilderItem(config, libPath, configRoot, table, pkColumn, tables, relations) {
                let template = this._configBuilderGenerator.generate(
                        config,
                        libPath,
                        table,
                        pkColumn,
                        tables,
                        relations
                );

                let replacePatternPairs = {
                        "@name": STR.upperFirstLetter(table.name),
                        "@sname": table.name,
                };

                template = STR.replace(template, replacePatternPairs);
                FILE.write(`${configRoot}/${table.name}.js`, COMPYRIGHT + template);
        }
}

exports.ConfigGenerator = ConfigGenerator;