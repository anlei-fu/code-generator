/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 09:51:15
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 15:25:15
 */

const mysql = require("mysql");
const { NamingStrategy } = require("./../../../libs/naming-strategy");
const { OBJECT } = require("./../../../libs/utils");
const {LoggerFactory}=require("./../../logging/logger-factory");

const LOG=LoggerFactory.getLogger("mysql-excutor");

class MysqlExcutor {
        /**
         * 
         * @param {{host?: string;
                     port?: number;

                 timezone?: string;
connectTimeout?: number;
insecureAuth?: boolean;
supportBigNumbers?: boolean;
bigNumberStrings?: boolean;
dateStrings?: boolean | Array<'TIMESTAMP' | 'DATETIME' | 'DATE'>;
ssl?: string | (tls.SecureContextOptions & { rejectUnauthorized?: boolean });
acquireTimeout?: number;
waitForConnections?: boolean;
connectionLimit?: number;
queueLimit?: number;}} config 
         */
        constructor(config) {
                this.pool = mysql.createPool(config);
        }

        /**
         * 
         * @param {String} sql
         * @returns {Promise<[any]]>} 
         * @exception {SqlError}
         */
        query(sql) {
                return new Promise((resolve, reject) => {
                        this.pool.query(sql, (error, results) => {
                                if (error) {
                                        reject(error)
                                } else {
                                        resolve(merge(results));
                                }
                        });
                });
        }

        /**
         * @param {String} sql
         * @returns {Promise<number>}  fields effected
         * @exception {SqlError}
         */
        excute(sql) {
                return new Promise((resolve, reject) => {
                        this.pool.query(sql, (error, results, fields) => {
                                if (error) {
                                        LOG.error(`sql is (${sql})`,error);
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
                        this.pool.getConnection((getCnnError, cnn) => {
                                if (getCnnError)
                                        reject(getCnnError);

                                cnn.beginTransaction(transanctionError => {
                                        if (transanctionError)
                                                reject(transanctionError);

                                        cnn.query(sql, (queryError, results, fields) => {
                                                if (queryError)
                                                        reject(queryError);

                                                let t = 0;

                                                cnn.commit(commitError => {
                                                        if (commitError)
                                                                reject(commitError);

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
 * 
 * @param {[object]} results 
 */
function merge(results) {
        let datas = [];
        results.forEach(x => {
                let data = {};
                OBJECT.forEach(x, (key, value) => {
                        let name = NamingStrategy.toCamel(key);
                        data[name] = value;
                })

                datas.push(data);
        })

        return datas;
}

exports.MysqlExcutor = MysqlExcutor;