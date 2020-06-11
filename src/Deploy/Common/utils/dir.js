/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:43:26
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 14:09:03
 */
const fs = require("fs");
const { LoggerFactory } = require("./../generator/common/logging/logger-factory")

const LOG = LoggerFactory.getLogger("DIR");

/**
 * Dose directory exists
 * 
 * @param {String} path 
 * @returns {boolean}
 */
function exists(path) {
        return fs.existsSync(path)
                && fs.lstatSync(path).isDirectory();
}

/**
 * Create manay folders
 * 
 * @param  {...String} paths 
 */
function createMany(...paths){
        paths.forEach(path=>{
                create(path);
        })
}

/**
 * Create folder
 * 
 * @param {String} path 
 */
function create(path) {

        if (exists(path))
                return;

        let segs =path.split("/");
        let tempPath="";
        for(const item of segs){
                tempPath+=item+"/";
                if(!exists(tempPath)){
                        fs.mkdirSync(tempPath);
                }
        }

        LOG.info(`create ${path}`);
}

/**
 * Remove folder
 * 
 * @todo  Want to remove a folder  msut remove sub-folder first,So needs a recursive processing
 * @param {String} path 
 */
function remove(path) {
        if (!exists(path))
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
        LOG.info(`remove ${path}`);
}

/**
 * Get all files in current folder
 * 
 * @param {String} path 
 * @returns {[String]} File names, relative path of  current folder
 */
function getFiles(path) {
        let ls = [];
        fs.readdirSync(path)
                .forEach(file => {
                        if (!fs.statSync(`${path}/${file}`).isDirectory())
                                ls.push(file);
                })

        return ls;
}

/**
 * Get all sub-folders of current folder
 * 
 * @param {String} path 
 * @returns {[String]}  Sub folder names, relative path of current folder
 */
function getFolders(path) {
        var ls = [];
        fs.readdirSync(path)
                .forEach(dir => {
                        if (fs.statSync(`${path}/${dir}`).isDirectory())
                                ls.push(dir);
                })

        return ls;
}

/**
 * Copy directory
 * 
 * @param {String} target 
 */
function copy(target, destination) {
        if (!exists(target))
                return;

        let segs = target.split("/");
        let desFolder = destination + "/" + segs[segs.length - 1];
        create(desFolder);

        fs.readdirSync(target).forEach(f => {
                if (fs.statSync(f).isDirectory()) {
                        fs.copyFileSync(target + "/" + f, desFolder + "/" + f);
                } else {
                        copy(target + "/" + f, desFolder);
                }
        })

}

exports.DIR = {
        getFiles,
        getFolders,
        remove,
        create,
        createMany,
        exists,
        copy
}
