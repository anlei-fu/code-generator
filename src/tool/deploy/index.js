/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 10:22:34
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 14:23:52
 */
/**
 * Macros need to config
 */
const PRODUCT_NAME = "QXFC";
const BASE_PATH = "E:/guoweicode/非充发布";

const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
const { arrayToSet } = require("./../libs/utils");

/**
 *  bins to keep
 */
const BINS = new Set()
        .add(`${PRODUCT_NAME}.DBAccess.dll`)
        .add(`${PRODUCT_NAME}.Entity.dll`)
        .add(`${PRODUCT_NAME}.Interfaces.dll`)
        .add(`${PRODUCT_NAME}.Logic.dll`)
        .add(`${PRODUCT_NAME}.Model.dll`)
        .add(`${PRODUCT_NAME}.UserService.dll`)
        .add(`${PRODUCT_NAME}.UserWeb.dll`)
/**
 *@description delete all files of bins excepts in @see BINS
 */
function clearBin() {
        let bin_dir = `${BASE_PATH}/bin`;
        let files = DIR.getFiles(bin_dir);
        for (f of files) {
                if (!BINS.has(f))
                        FILE.remove(`${bin_dir}/${f}`);
        }
        console.log("Clear bins completed!");
}
/**
 * @description remove view folders excepts 
 * @param {Set} views  views to keep
 */
function clearView(views) {
        let view_path = `${BASE_PATH}/Views`;
        DIR.getFolders(view_path)
                .forEach(dir => {
                        if (!views.has(dir))
                                DIR.remove(`${view_path}/${dir}`);
                });
        DIR.getFiles(view_path)
                .forEach(file => {
                        FILE.remove(`${view_path}/${file}`);
                })
        console.log("Clear views completed!");
}
/***
 * @description delete all file excepts in given dbs
 * @param {Set} dbs to keep
 */
function clearConfig(dbs) {
        var config_path = `${BASE_PATH}/Config`;
        var files = DIR.getFiles(config_path);
        files.forEach(file => {
                if (file != "UrlMappingConfig.xml")
                        FILE.remove(`${config_path}/${file}`);
        });

        var db_files = DIR.getFiles(`${config_path}/EConfig`);
        db_files.forEach(file => {
                if (!dbs.has(file.replace(".xml", "")))
                        FILE.remove(`${config_path}/EConfig/${file}`);
        });
        console.log("Clear configs completed!");
}
function removeUselessFiles() {
        DIR.remove(`${BASE_PATH}/Content`);
        DIR.remove(`${BASE_PATH}/Scripts`);
        FILE.remove(`${BASE_PATH}/Global.asax`);
        FILE.remove(`${BASE_PATH}/Web.config`);
}

/**
 * @description extracts deplay files
 * @param {[String]} modules 
 */
function main(modules) {
        clearBin();
        clearView(arrayToSet(modules));
        clearConfig(arrayToSet(modules));
        removeUselessFiles();
}
// run mainmain(["FCOrderBind"]);