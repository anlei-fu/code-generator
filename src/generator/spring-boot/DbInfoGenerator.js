const { resolve } = require("./../common/table-analyze/table-info-resolvers/mysql-table-info-resolver/resolve");

class DbInfoGenerator {
        async generate(targetFolder, dbConfig) {
                if (dbConfig.generateDb) {
                        await resolve(
                                dbConfig.dataSourceConfig,
                                dbConfig.dataSourceConfig.db,
                                `${targetFolder}/db`,
                                dbConfig.generateRelation
                        );
                }
        }
}

exports.DbInfoGenerator = DbInfoGenerator;