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
 * @description Dose directory exists;
 * @param {String} path 
 * @returns {boolean}
 */
async function exists(path) {
        requireNotNull(path)

        return await fs.exists(path)
                && await fs.lstat(path).isDirectory();
}
/**
 * @description Create a new directory
 * @param {String} path 
 */
async function create(path) {
        requireNotNull(path);
        
        await fs.mkdir(path);

        return exports.FILE;
}
/**
 * @description Remove a directory
 * @todo  Want to remove a folder  msut remove sub-folder first,So need a recursive processing;
 * @param {String} path 
 */
async function remove(path) {
        requireNotNull(path);

        fs.readdirSync(path)
                .forEach(file => {
                        if (await fs.stat(`${path}/${file}`)
                                .isDirectory()) {
                                remove(`${path}/${file}`);
                        } else {
                                await fs.unlink(`${path}/${file}`);
                        }
                })

        await fs.rmdir(path);

        return exports.FILE;
}
/**
 * @description Get all files in current directory
 * @param {String} path 
 * @returns {[String]} File names, relative path of  current folder
 */
async function getFiles(path) {
        requireNotNull(path);
        var ls = [];
        await fs.readdir(path)
                .forEach(file => {
                        if (! await fs.stat(`${path}/${file}`).isDirectory())
                                ls.push(file);
                })
        return ls;
}
/**
 * @description Get all sub-folders of current folder
 * @param {String} path 
 * @returns {[String]}  Sub folder names, relative path of current folder
 */
async function getFolders(path) {
        requireNotNull(path);
        var ls = [];
        fs.readdirSync(path)
                .forEach(dir => {
                        if (await fs.stat(`${path}/${dir}`).isDirectory())
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
