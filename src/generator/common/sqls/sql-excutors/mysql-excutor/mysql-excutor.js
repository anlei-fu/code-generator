/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 09:51:15
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 15:25:15
 */

const mysql = require("mysql");
const { NamingStrategy,OBJECT } = require("./../../../../../libs");
const { LoggerFactory } = require("./../../../logging/logger-factory");

const LOG = LoggerFactory.getLogger("mysql-excutor");

class MysqlExcutor {
        /**
         * 
         * @param { import ("mysql").PoolConfig} config 
         */
        constructor (config) {
                this._pool = mysql.createPool(config);
        }

        /**
         * Query statement
         * 
         * @param {String} sql
         * @returns {Promise<[any]]>} 
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
         * Execute statement
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
                                                resolve(results.affectedRows);
                                        } else {
                                                reject("unexcepted result!");
                                        }
                                }
                        });
                });
        }

        /**
         * Mutiple statement
         * 
         * @param {String} sql
         * @returns {Promise<number>}  fields effected
         * @exception {SqlError}
         */
        excuteTransanction(sql, isolateLevel) {
                return new Promise((resolve, reject) => {
                        this._pool.getConnection((getCnnError, cnn) => {
                                if (getCnnError) {
                                        reject(getCnnError);
                                        return;
                                }

                                cnn.beginTransaction(transanctionError => {
                                        if (transanctionError) {
                                                reject(transanctionError);
                                                return;
                                        }

                                        cnn.query(sql, (queryError, _, __) => {
                                                if (queryError)
                                                        reject(queryError);

                                                let t = 0;

                                                cnn.commit(commitError => {
                                                        if (commitError) {
                                                                reject(commitError);
                                                                return;
                                                        }

                                                        cnn.release();

                                                        resolve(t);
                                                })
                                        })
                                })

                        })
                });
        }
}

/**
 * Convert field name from hungery to camel
 * 
 * @param {[object]} results 
 * @returns {[]}
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