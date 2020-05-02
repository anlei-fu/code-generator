/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-20 14:11:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-16 15:41:18
 */

// import
const fs = require("fs");
const { LoggerFactory } = require("./../generator/common/logging/logger-factory")

const LOG = LoggerFactory.getLogger("FILE");

/**
 * Read all lines from file, read all data from file then split into lines
 * 
 * @param {String} path , File to read
 * @param {String?} charset 
 * @param {boolean?} trim ,If true will remove every line' blank chars at start and end;
 * @param {boolean?} ignoreEmpty, If true and line.trim() =="" will be ignored;
 * @returns {[String]} 
 */
function readLines(path, charset, trim, ignoreEmpty) {
        let lines = read(path, charset).split("\n");
        let ls = [];
        ignoreEmpty = typeof ignoreEmpty == "undefined" ? true : ignoreEmpty;
        trim = typeof trim == "undefined" ? true : trim;

        for (let line of lines) {
                if (trim)
                        line = line.trim();

                if (!ignoreEmpty) {
                        ls.push(line);
                } else {
                        if (line.length != 0) {
                                ls.push(line);
                        }
                }
        }
        return ls;
}

/**
 * Read data from file
 * 
 * @param {String} path , File to read
 * @param {String?} charset ,Charset name
 * @returns {String}
 */
function read(path, charset="utf-8") {
        return fs.readFileSync(path, charset).toString();
}

/**
 * Write data to file
 * 
 * @param {String} path , File to write
 * @param {String} data ,Data to write 
 * @param {String?} charset, Charset name 
 */
function write(path, data, charset="utf-8") {
        fs.writeFileSync(path, data, charset);
        // LOG.info(`write ${path}`);
}

/**
 * Append line  at the end of file,data+"\r\n"
 * 
 * @param {String} path , File path
 * @param {String} data ,Data to append 
 * @param {String?} charset, Charset name 
 */
function appendLine(path, data, charset="utf-8") {
        append(path, data + "\r\n", charset);
        LOG.info(`append line ${path}`);
}

/**
 * Append data  at the end of file
 * 
 * @param {String} path , File path
 * @param {String} data  to append
 * @param {String?} charset, Charset name 
 */
function append(path, data, charset="UTF-8") {
        fs.appendFileSync(path, data, charset);
        LOG.info(`append ${path}`);
}

/**
 * Copy file
 * 
 * @param {String} source 
 * @param {String} destination 
 * @param {boolean?} rmSource ,If true , After copying complete , Remove source file
 */
function copy(source, destination, rmSource) {
        fs.copyFileSync(source, destination);

        if (rmSource)
                fs.unlinkSync(source);

        LOG.info(`copy ${source} to ${destination}`);
}

/**
 * Remove file 
 * 
 * @param {String} path 
 */
function remove(path) {
        if (exists(path)) {
                fs.unlinkSync(path);
                LOG.info(`remove ${path}`);
        }
}

/**
 * Check does file exists
 * 
 * @param {String} path 
 * @returns {boolean}
 */
function exists(path) {
        return fs.existsSync(path);
}

/**
 * Exports
 */
exports.FILE = {
        read,
        readLines,
        write,
        append,
        appendLine,
        exists,
        copy,
        remove
}



