/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-17 09:57:56
 */

var { requireNotNull } = require("./../libs/utils");
var { FILE } = require("./../../libs/file");
const PLZSELECT = "";
const TIMERANGETITLE = "";

const DEFAULT_OPTION = "";
const EMPTY = "";


/**
 * 
 * @param {String} name  lable name
 * @param {String} id   element name
 * @param {String} service  service
 * @param {String} value   value property name
 * @param {String} text     text property name
 * @param {String?} dft   default item
 */
function option(label, name, value, text, dft) {
        dft = dft || DEFAULT_OPTION;

        let html = FILE.read("templates/option.cshtml")
                .replace("@name", name)
                .replace("@lable", lable)
                .replace("@text", text)
                .replace("@value", value)
                .replace("@default-option", dft);
        return { html };
}
/**
 * 
 * @param {{String,String}} param0  
 * lable ,name
 * 
 */
function dateFilter({ name, lable }) {
        let html = File.read("templates/dateFilter.cshtml")
                .replace("@name", name)
                .replace("@lable", lable);

        return { html };
}
/**
 * 
 * @param {{String,String,[{String,String}]}} param0 
 *  item {label,value}
 */
function option1({ name, lable, items }) {
        let temp = "";

        let item = FILE.read("templates/option1-item.cshtml");
        items.forEach(x => {
                temp += item.replace("@lable", x.lable)
                        .replace("@value", x.value);
        })

        let html = FILE.read("templates/option1.cshtml")
                .replace("@label", lable)
                .replace("@name", name)
                .replace("@items", temp);

        return { html };

}
/**
 * 
 * @param {{String,[{String,String}]}} param0 
 * item {name,lable}
 */
function mutipleInput({ name, items }) {
        let js = FILE.read("templates/mutiple-input.js"),
                item = FILE.read("templates/mutiple-input-item.js"),
                temp = "";

        items.forEach(x, i => {
                temp += item.replace("@name", x.name)
                        .replace("@lable", x.label)
                        .replace("@index", i);
        })

        let html = FILE.read("templates/mutiple-input.cshtml")
                .replace("@items", temp)
                .replace("@default-item", items[0].name);

        return { js, html }
}
function associatedSelects(option1, option2) {

}

function add() {
        return FILE.read("templates/add.cshtml");
}

function renderMutipleRadio(id, ...items) {


}

exports.COMPONENTS = {

}