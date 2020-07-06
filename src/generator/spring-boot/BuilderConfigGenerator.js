const { FILE } = require("../../libs/file");
const { OBJECT } = require("../../libs/utils");
const { GenerateConfigBuilder } = require("./builders/GenerateConfig");

class GenerateConfigGenerator {
        generate(targetFolder,tables,project) {
                let items = {};
                let builder = new GenerateConfigBuilder();
                Object.keys(tables).forEach(table => {
                        items[table] = builder.all()
                                .noBatch()
                                .noGetAll()
                                .noCount()
                                .build();
                });

                FILE.write(`${targetFolder}/${project}/generateConfig.js`, OBJECT.export_(items, "config"))
        }
}

exports.GenerateConfigGenerator = GenerateConfigGenerator;