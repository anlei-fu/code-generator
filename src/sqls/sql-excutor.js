/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 14:53:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 16:09:34
 */
var oracledb = require('oracledb')

class DbVisitor {
        constructor({ connectString, user, password }) {
                this.config = { connectString, user, password };
        }
        async  query(sql, params) {
                let cnn;
                try {
                        cnn = await oracledb.getConnection(config);
                        let results = await cnn.execute("select * from fc_phone_charge");

                        for (e of results) {
                                console.log(e);
                        }
                        await cnn.close();

                } catch (ex) {
                        console.log(ex);
                }

        }
        async execute(sql, params) {

        }
        async excuteTransaction(sql, params) {

        }
}

exports=DbVisitor;