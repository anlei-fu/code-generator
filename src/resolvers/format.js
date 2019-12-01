/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 09:21:02
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-11 09:21:02
 */
const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
const { STR } = require("./../libs/str");

const ROOT = "C:/Users/Administrator/Documents/plsqldoc";

/**
 * 
 * @param {String} folder 
 */
function format(folder) {
        DIR.getFiles(folder).forEach(f => {
                let text = FILE.read(`${folder}/${f}`);
                FILE.write(`${folder}/${f}`, formatCore(text));
        })

        DIR.getFolders(folder).forEach(dir => {
                format(`${folder}/${dir}`);
        });
}

/**
 * 
 * @param {String} text 
 */
function formatCore(text) {
        text = text.toLowerCase();

        let pairs = {
                "<table": "<div",
                "</table>": "</div>",
                "<tr": "<div",
                "</tr>": "</div>",
                "<td": "<div",
                "</td>": "</div>",
                "<a":"<div",
                "</a>":"</div>"

        };

        return STR.replace(text, pairs);
}

/**
 *  main
 */
 format(ROOT);