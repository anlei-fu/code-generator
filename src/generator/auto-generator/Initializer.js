const { MysqlExcutor } = require("./../../sql/excutor/");
const { COMMON_UTILS } = require("./../common/utils");
const { NamingStrategy } = require("./../../libs")


class Iniializer {
        /**
         * 
         * @param {import('mysql').PoolConfig} config 
         */
        constructor (config) {
                this._excutor = new MysqlExcutor(config);
        }

        async init(name, company, tables) {
                await this._excutor.execute(`
            insert into project(
             name,
             company
            ) values (
              '${name}',
              '${company}'
            )
        `);

                let projectId = await this._excutor.queryScalar(" select @@IDENTITY;");
                tables.forEach(async x => {
                      await  this._insertTable(x, projectId);
                })
        }

        async _insertTable(table, projectId) {
                await this._excutor.execute(`
           insert into table_info(
                    project_id,
                    name,
                    raw_name,
                    description,
                    api_prefix
           ) values (
                   ${projectId},
                   '${table.name}',
                   '${table.rawName}',
                   '${table.description}',
                   '${NamingStrategy.toSplash(table.name).toLowerCase()}'
           )`
                );

                let tableId = await this._excutor.queryScalar("select @@IDENTITY;");

                let columns = table.columns;
                Object.keys(columns).forEach(x => { 
                        this._insertField(columns[x], tableId);
                });
        }

        async _insertField(column, tableId) {
                await this._excutor.execute(`
           insert into field_info(
                    table_id,
                    name,
                    raw_name,
                    description,
                    is_pk,
                    java_type
           ) values (
                   '${tableId}',
                   '${column.name}',
                   '${column.rawName}',
                   '${column.description}',
                   '${column.isPk?1:0}',
                   '${COMMON_UTILS.getJavaType(column.type)}'
          )`);
        }

        async clear(projectId) {
                await this._excutor.execute(`
                    delete from project where id = ${projectId};
                    delete from validator where id in (select id from field_info where table_id in (select id from table_info where project_id = ${project_id}));
                    delete from field_info where table_id in (select id from table_info where project_id = ${projectId});
                    delete from table_info where project_id = ${projectId};
                    delete from theme_config where project_id = ${projectId};
                    delete from module where project_id = ${projectId};
                    delete from aditional_option where table_id in (select id from table_info where project_id = ${projectId});
             `);
        }
}

exports.Iniializer = Iniializer