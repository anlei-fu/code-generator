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
 * Convert xml(string) to json
 * 
 * @param {String} xml 
 * @returns {Any}
 */
async function toJson(xml) {
        return await new xml2js.Parser().parseStringPromise(xml);
}

/**
 * Convert json(string) to xml(string)
 * 
 * @param {Any} json 
 * @returns {String}
 */
function toXml(json) {
        return new xml2js.Builder().buildObject(json);
}

exports.XML = {
        toJson,
        toXml
}