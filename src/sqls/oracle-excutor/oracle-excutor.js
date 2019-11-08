/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 14:53:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 16:09:34
 */
var oracledb = require('oracledb');
var {parse}=require("./sql-template-parser");
var {render}=require("./sql-template-render");
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
                        cnn = await oracledb.getConnection(config);
                        sql=render(parse(sql),parameters);
                        let results = await cnn.execute(sql);

                        await cnn.close();

                        return results;

                } catch (ex) {
                       throw `sql is :\r\n${sql}\r\nerror:\r\n${ex}`;
                }

        }
        async execute(sql, params) {

        }
        async excuteTransaction(sql, params) {

        }
}

exports=SqlExcutor;