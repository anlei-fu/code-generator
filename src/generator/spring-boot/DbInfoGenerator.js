const { resolve } = require("./../common/sqls/model/resolver");

class DbInfoGenerator {
        async generate(targetFolder, dbConfig) {
                if (dbConfig.generateDb)
                        await resolve(
                                dbConfig.dataSourceConfig,
                                dbConfig.dataSourceConfig.db,
                                `${targetFolder}/db`,
                                dbConfig.generateRelation
                        );
        }
}

exports.DbInfoGenerator = DbInfoGenerator;