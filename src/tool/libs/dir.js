/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:43:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 13:49:35
 */
const { requireNotNull } = require("./utils")
const fs = require("fs");
/**
 * @description dose directory exists
 * @param {String} path 
 * @returns {boolean}
 */
function exists(path) {
        requireNotNull(path)
        return fs.exists(path) && fs.lstatSync(path).isDirectory();
}
/**
 * @description Create a new directory
 * @param {String} path 
 */
function create(path) {
        requireNotNull(path);
        fs.mkdirSync(path);
}
/**
 * @description remove directory
 * @param {String} path 
 */
function remove(path) {
        requireNotNull(path);
        fs.rmdirSync(path);
}
/**
 * @description ge all files in directory
 * @param {String} path 
 * @returns {[String]}
 */
function files(path) {

}
