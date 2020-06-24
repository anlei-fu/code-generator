

const mysql = require("mysql");
const { ExecutorBase } = require("./ExecutorBase");
const { NamingStrategy } = require("./../utils/naming-strategy");
const { TaskType } = require("../po/constant/TaskType");
const { OBJECT } = require("./../utils/utils");


class MysqlExcutor extends ExecutorBase {
        /**
         * 
         * @param {DbConfig} config 
         */
        constructor (config) {
                super("MysqlExecutor", TaskType.MYSQL);
                this._pool = mysql.createPool(config);
        }

        /**
         * Query data
         * 
         * @param {String} sql
         * @returns {Promise<[Entity]]>} 
         * @exception {SqlError}
         */
        query(sql) {
                return new Promise((resolve, reject) => {
                        this._pool.query(sql, (error, results) => {
                                if (error) {
                                        reject(error)
                                } else {
                                        resolve(convert(results));
                                }
                        });
                });
        }

        /**
         * Query single data
         * 
         * @param {String} sql 
         * @return {Promise<Entity>}
         */
        async querySingle(sql) {
                let result = await this.query(sql);
                return result[0];
        }

        /**
         * Execute a sql command
         * 
         * @param {String} sql
         * @returns {Promise<number>}  fields effected
         * @exception {SqlError}
         */
        execute(sql) {
                return new Promise((resolve, reject) => {
                        this._pool.query(sql, (error, results, _) => {
                                if (error) {
                                        LOG.error(`sql is (${sql})`, error);
                                        reject(error)
                                } else {
                                        // is strict mode ?
                                        if (typeof results.affectedRows == "number") {
                                                resolve(results.affectedRows > 0);
                                        } else {
                                                reject("unexcepted result!");
                                        }
                                }
                        });
                });
        }


}

/**
 * 
 * @param {[object]} results 
 */
function convert(results) {
        let result = [];
        results.forEach(x => {
                let data = {};
                OBJECT.forEach(x, (key, value) => {
                        let name = NamingStrategy.toCamel(key);
                        data[name] = value;
                })

                result.push(data);
        })

        return result;
}

exports.MysqlExcutor = MysqlExcutor;