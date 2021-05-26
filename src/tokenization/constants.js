/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 09:26:51
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 14:49:19
 */

const { ARRAY } = require("../libs/type");

const ops = ['=', '!', '&', '|', '.', '(', ')', '*', '/', '<', '>', ';', '"', '\'', ',', '%', '+', '-', '[', ']', '?', ':'];

exports.OPERATORS = ARRAY.toSet(ops);
