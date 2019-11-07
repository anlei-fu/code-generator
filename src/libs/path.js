/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:02:29
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 16:04:26
 */
const path =require("path");

/**
 * 
 * @param {String} from 
 * @param {String} to
 * @returns {String} 
 */
function resolve(from,to) {
    return    path.relative(from,to);
}

exports.PATH={
        resolve,
}