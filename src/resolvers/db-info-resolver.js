/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:27:10
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 16:27:10
 */
var cheerio = require("cheerio");

function parse() {

}
function parseTable() {
        let name = $(".main_title")[0].innerText.replace("table ", "");
        let tab = new Table(name, "");
        let simple_tables = $(".simple_table");
        var columns = parseColumns(simple_tables[0])

}
function parseColumns(el) {
        let columns = {};
        for (let i = 1; i < el.tr.length; i++) {
                let name = tr[i].td[0].innerText;
                let description = tr[i].td[4].innerText;
                let column = new Column(name, description);
        }

}
/**
 * @description tr[1] is the target
 * start from 1 ,because 0 is column infomation
 * @param {[Elements]} els 
 */
function parseConstraints(els) {
        for (let i = 1; i < els.length; i++) {
                let type = els[i].tr[1].td[0].innerText;
                let name = els[i].tr[1].td[1].innerText;
                let column = els[i].tr[1].td[2].innerText;
        }

}
function parseParameter() {

}
function parsePackage() {

}
function parseFunction() {

}
function parseProcedure() {

}
