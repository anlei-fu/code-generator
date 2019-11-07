/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:44:43
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 17:26:44
 */
const { NamingStrategy } = require("./../src/libs/naming-stratey");


function test1() {
        let result = NamingStrategy.toCamel("DamageRespository");
        console.log(result);

}

///////////////////////////////////////////

test1();