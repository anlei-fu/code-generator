const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
const { STR } = require("./../libs/str");

const ROOT = "./../../resources/plsqldoc";
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
                "</td>": "</div>"
        };

        return STR.replace(text, pairs);
}
/**
 *  main
 */
 format(ROOT);