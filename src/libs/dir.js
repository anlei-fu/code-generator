/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:43:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-11 16:45:16
 */
const { requireNotNull } = require("./utils")
const fs = require("fs");
/**
 * @description Dose directory exists;
 * @param {String} path 
 * @returns {boolean}
 */
function exists(path) {
        requireNotNull(path)

        return fs.existsSync(path)
                && fs.lstatSync(path).isDirectory();
}
/**
 * @description Create a new directory
 * @param {String} path 
 */
function create(path) {

        if (exists(path))
                return;

        fs.mkdirSync(path);
}
/**
 * @description Remove a directory
 * @todo  Want to remove a folder  msut remove sub-folder first,So need a recursive processing;
 * @param {String} path 
 */
function remove(path) {

        if(!exists(path))
            return;

        fs.readdirSync(path)
                .forEach(file => {
                        if (fs.statSync(`${path}/${file}`)
                                .isDirectory()) {
                                remove(`${path}/${file}`);
                        } else {
                                fs.unlinkSync(`${path}/${file}`);
                        }
                })

        fs.rmdirSync(path);

        return exports.FILE;
}
/**
 * @description Get all files in current directory
 * @param {String} path 
 * @returns {[String]} File names, relative path of  current folder
 */
function getFiles(path) {
        requireNotNull(path);
        var ls = [];
        fs.readdirSync(path)
                .forEach(file => {
                        if (!fs.statSync(`${path}/${file}`).isDirectory())
                                ls.push(file);
                })
        return ls;
}
/**
 * @description Get all sub-folders of current folder
 * @param {String} path 
 * @returns {[String]}  Sub folder names, relative path of current folder
 */
function getFolders(path) {
        requireNotNull(path);
        var ls = [];
        fs.readdirSync(path)
                .forEach(dir => {
                        if (fs.statSync(`${path}/${dir}`).isDirectory())
                                ls.push(dir);
                })

        return ls;
}
// Exports
exports.DIR = {
        getFiles,
        getFolders,
        remove,
        create,
        exists
}
