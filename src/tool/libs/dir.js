/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:43:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 14:35:08
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
 * msut empty sub folder first,so it need a recursive process
 * @param {String} path 
 */
function remove(path) {
        requireNotNull(path);
        fs.readdirSync(path).forEach(f => {
                if (fs.statSync(`${path}/${f}`).isDirectory()) {
                        remove(`${path}/${f}`);
                } else {
                        fs.unlinkSync(`${path}/${f}`);
                }
        })
        fs.rmdirSync(path);
}
/**
 * @description ge all files in directory
 * @param {String} path 
 * @returns {[String]}
 */
function getFiles(path) {
        requireNotNull(path);
        var ls = [];
        fs.readdirSync(path)
                .forEach(e => {
                        if (!fs.statSync(`${path}/${e}`).isDirectory())
                                ls.push(e);
                })
        return ls;
}
/**
 * @description get all folders' name of current directory
 * @param {String} path 
 * @returns {[String]}
 */
function getFolders(path) {
        requireNotNull(path);
        var ls = [];
        fs.readdirSync(path)
                .forEach(e => {
                        if (fs.statSync(`${path}/${e}`).isDirectory())
                                ls.push(e);
                })

        return ls;
}

exports.DIR = {
        getFiles,
        getFolders,
        remove,
        create,
        exists
}
