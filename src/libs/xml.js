/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-22 12:41:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-22 14:24:54
 */
const xml2js = require('xml2js');
/**
 * 
 * @param {String} text 
 * @returns {Any}
 */
async function toJson(text) {
        return await new xml2js.Parser().parseStringPromise(text);
}
/**
 * 
 * @param {Any} data 
 * @returns {String}
 */
function toXml(data) {
        return new xml2js.Builder().buildObject(data);
}

exports.XML = {
        toJson,
        toXml
}