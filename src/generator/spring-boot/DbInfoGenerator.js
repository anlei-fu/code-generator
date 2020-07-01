class DbInfoGenerator{
        generate(project,dbConfig){
                if (dbConfig.generateDb)
                        await resolve(dbConfig.dataSourceConfig, dbConfig.dataSourceConfig.db, `${__dirname}/output/${project}/db`, generateRelation);
        }
}

exports.DbInfoGenerator=DbInfoGenerator;