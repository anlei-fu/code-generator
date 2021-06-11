/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 09:51:15
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 15:25:15
 */

const mysql = require("mysql");
const { NamingStrategy, ARRAY } = require("./../../../libs");
const { OBJECT } = require("./../../../libs");
const { LoggerSurpport } = require("../../../logging");

class MysqlExcutor extends LoggerSurpport {
        /**
         * 
         * @param {import('mysql').PoolConfig} config 
         */
        constructor(config) {
                super("mysql-excutor")
                this._pool = mysql.createPool(config);
        }


        /**
         * query single value
         * 
         * @param {String} sql 
         */
        queryScalar(sql) {
                this._printSql(sql);
                return new Promise((resolve, reject) => {
                        this._pool.query(sql, (error, results) => {
                                if (error) {
                                        reject(error)
                                } else {
                                        let value = results[0];
                                        let keys = Object.keys(value);
                                        if (keys.length == 0)
                                                resolve(value);

                                        resolve(value[keys[0]]);
                                }
                        });
                });
        }

        /**
         * 
         * @param {String} sql
         * @returns {Promise<[any]]>} 
         * @exception 
         */
        query(sql) {
                this._printSql(sql);
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

        async querySingle(sql) {
                this._printSql(sql);
                let result = await this.query(sql);
                return ARRAY.firstOrDefault(result);
        }

        /**
         * @param {String} sql
         * @returns {Promise<number>}  fields effected
         * @exception {SqlError}
         */
        execute(sql) {
                this._printSql(sql);
                return new Promise((resolve, reject) => {
                        this._pool.query(sql, (error, results, _) => {
                                if (error) {
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

        _printSql(sql) {
                this.info("statement:");
                this.info(sql);
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