const { resolve } = require("./../common/sqls/model/resolver");

class DbInfoGenerator {
        async generate(project, dbConfig) {
                if (dbConfig.generateDb)
                        await resolve(
                                dbConfig.dataSourceConfig,
                                dbConfig.dataSourceConfig.db,
                                `${__dirname}/output/${project}/db`,
                                dbConfig.generateRelation
                        );
        }
}

exports.DbInfoGenerator = DbInfoGenerator;