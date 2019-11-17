/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:02:29
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 16:23:43
 */
const path =require("path");

/**
 * @description Get absolute path by relative path
 * @param {String} from  absolute path
 * @param {String} to   relative
 * @returns {String}  absolute path of to
 */
function resolve(from,to) {
   return path.resolve(from, path.relative(from, to))
}

exports.PATH={
        resolve,
}