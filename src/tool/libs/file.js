/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-20 14:11:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 11:25:04
 */
// import
const { requireNotNull } = require("./utils")
const fs = require("fs");
/**
 * @description check encoding by given ,if null return "utf-8" 
 * @param {String} encoding 
 */
const defaultEncoding = (encoding) => { encoding: encoding || "utf8" };
/**
 * @description Read all lines from file, read all data from file then split into lines
 * @param {String} path , file to read
 * @param {String?} encoding 
 * @param {boolean?} trim ,if true will remove every line' blank chars at start and end
 * @param {boolean?} ignoreEmpty, if true and line =="" will be ignored
 * Return an array of string
 */
function readLines(path, encoding, trim, ignoreEmpty) {
        let lines = read(path, encoding).split("\n");
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
 * @description Read data from file
 * @param {String} path , file to read
 * @param {String?} encoding ,charset name
 * @returns {String}
 */
function read(path, encoding) {
        requireNotNull(path);
        return fs.readFileSync(path, defaultEncoding(encoding)).toString();
}
/**
 *@description write data into  file
 * @param {String} path , file to write
 * @param {String} data ,data to write 
 * @param {String?} encoding, charset name 
 */
function write(path, data, encoding) {
        requireNotNull(path);
        requireNotNull(data);
        fs.writeFileSync(path, data, defaultEncoding(encoding));
}
/**
 * @descrip Append line  at the end of file,data+"\r\n"
 * @param {String} path , file path
 * @param {String} data ,data to append 
 * @param {String?} encoding, charset name 
 */
function appendLine(path, data, encoding) {
        append(path, data + "\r\n", encoding);

}
/**
 * @description Append data  at the end of file
 * @param {String} path , file path
 * @param {String} data  to append
 * @param {String?} encoding, charset name 
 */
function append(path, data, encoding) {
        requireNotNull(path);
        requireNotNull(data);
        fs.appendFileSync(path, data, defaultEncoding(encoding));
}
/**
 * @description copy file
 * @param {String} source 
 * @param {String} destination 
 * @param {boolean?} rmSource ,if true , after copy remove source file
 */
function copy(source, destination, rmSource) {
        requireNotNull(source);
        requireNotNull(destination);
        fs.copyFileSync(source, destination);

        if (rmSource)
                fs.unlinkSync(source);
}
/**
 * @description remove file 
 * @param {String} path 
 */
function remove(path) {
        if (exists(path))
                fs.unlinkSync(path);
}
/**
 * @description check file exists
 * @param {String} path 
 * @returns {boolean}
 */
function exists(path) {
        requireNotNull(path);
        return fs.existsSync(path);
}
/**
 * exports
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



