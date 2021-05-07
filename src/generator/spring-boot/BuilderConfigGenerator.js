const { FILE, OBJECT } = require("../../libs");
class GenerateConfigGenerator {
        generate(targetFolder, tables, project) {
                let items = {};
                Object.keys(tables).forEach(table => {
                        // Set default generate config
                        items[table] = {
                                add: true,
                                addBatch: false,
                                deleteById: true,
                                deleteBatch: false,
                                updateById: true,
                                updateBatch: false,
                                getById: false,
                                getPage: false,
                                getDetailById: false,
                                getAll: false,
                                count: false,
                                getDetailPage: true
                        };
                });

                FILE.write(`${targetFolder}/${project}/generateConfig.js`, OBJECT.export_(items, "config"))
        }
}

exports.GenerateConfigGenerator = GenerateConfigGenerator;