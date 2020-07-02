const { FILE } = require("../../libs/file");
const { OBJECT } = require("../../libs/utils");
const { GenerateConfigItemBuilder } = require("./GenerateConfig");

class GenerateConfigGenerator {
        generate(tables,project) {
                let items = {};
                let builder = new GenerateConfigItemBuilder();
                Object.keys(tables).forEach(table => {
                        items[table] = builder.all()
                                .noBatch()
                                .noGetAll()
                                .noCount()
                                .build();
                });

                FILE.write(`./output/${project}/generateConfig.js`, OBJECT.export_(items, "config"))
        }
}

exports.GenerateConfigGenerator = GenerateConfigGenerator;