/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 14:53:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 17:11:02
 */
var oracledb = require('oracledb');

// Oracle Accessor
class SqlExcutor {
        constructor({ connectString, user, password }) {
                this.config = { connectString, user, password };
        }
        /**
         * 
         * @param {String} sql 
         * @param {Option} parameters 
         */
        async  query(sql, parameters) {
                let cnn;
                try {
                        cnn = await oracledb.getConnection(this.config);
                     console.log(cnn);

                } catch (ex) {
                       throw `sql is :\r\n${sql}\r\nerror:\r\n${ex}`;
                }

        }
        async execute(sql, params) {

        }
        async excuteTransaction(sql, params) {

        }
}

exports.OracleExcutor=SqlExcutor;