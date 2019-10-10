/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-20 14:11:25
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 11:09:48
 */
// import
const { requireNotNull } = require("./utils")
const fs = require("fs");
/**
 * @description Check encoding by given ,If null return "utf-8" ;
 * @param {String} charset 
 */
const defaultCharset = (charset) => { encoding: charset || "utf8" };
/**
 * @description Read all lines from file, read all data from file then split into lines;
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
 * @description Read data from file
 * @param {String} path , File to read
 * @param {String?} charset ,Charset name
 * @returns {String}
 */
async function read(path, charset) {
        requireNotNull(path);
        return await fs.readFile(path, defaultCharset(charset)).toString();
}
/**
 *@description Write data into  file
 * @param {String} path , File to write
 * @param {String} data ,Data to write 
 * @param {String?} charset, Charset name 
 */
function write(path, data, charset) {
        requireNotNull(path);
        requireNotNull(data);
        await fs.writeFile(path, data, defaultCharset(charset));
}
/**
 * @descrip Append line  at the end of file,data+"\r\n";
 * @param {String} path , File path
 * @param {String} data ,Data to append 
 * @param {String?} charset, Charset name 
 */
function appendLine(path, data, charset) {
        append(path, data + "\r\n", charset);

}
/**
 * @description Append data  at the end of file;
 * @param {String} path , File path
 * @param {String} data  to append
 * @param {String?} charset, Charset name 
 */
async function append(path, data, charset) {
        requireNotNull(path);
        requireNotNull(data);
        await fs.appendFile(path, data, defaultCharset(charset));
}
/**
 * @description Copy file
 * @param {String} source 
 * @param {String} destination 
 * @param {boolean?} rmSource ,If true , After copying complete , Remove source file
 */
async function copy(source, destination, rmSource) {
        requireNotNull(source);
        requireNotNull(destination);
        await fs.copy(source, destination);

        if (rmSource)
                await fs.unlink(source);
}
/**
 * @description Remove file 
 * @param {String} path 
 */
async function remove(path) {
        if (exists(path))
                await fs.unlink(path);
}
/**
 * @description Check does file exists
 * @param {String} path 
 * @returns {boolean}
 */
async function exists(path) {
        requireNotNull(path);
        return await fs.existsSync(path);
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



