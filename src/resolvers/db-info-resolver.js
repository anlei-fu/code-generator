/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:27:10
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 16:04:53
 */
/**
 * imports  @const cheerio see https://github.com/cheeriojs/cheerio
 */
const cheerio = require("cheerio");
const { FILE } = require("./../libs/file");
const { STR } = require("./../libs/str");
const { NamingStrategy } = require("./../libs/naming-stratey")
const { Table, Column, SqlType,Package,Constraints,Function,Procedure } = require("./db-info");

function parse() {

}
/**
 * 
 * @param {String} html 
 * @returns {Table}
 */
function parseTable(html) {
        var $ = cheerio.load(html);
        let name = $(".main_title").text().replace("table ", "");

        let tab = new Table(name, "");
        tab.columns = parseColumns($, $(".simple_table:first"));
        tab.constraints=parseConstraints();

        return tab;
}
/**
 * 
 * @param {Cheerio} selector 
 * @param {Element} el 
 * @returns {{Column}}
 */
function parseColumns($, el) {
        let columns = {};
        // get column rows start with 1
        let trs = el.children("tr");
        for (let i = 1; i < trs.length; i++) {
                // get all 5  cells
                // 1 : name ,2 : type ,3 : nullable 4: defaultValue 5: comments
                let tds = $(tr[i]).children("td");

                let name = NamingStrategy.toLowerCamelCase($(tds[0]).text());
                let description = $(tds[4]).text();
                let column = new Column(name, description);

                column.type = SqlType.parse($(tds[1]).text());
                column.nullable = $(tds[2]).text() == "Y";
                column.defaltValue = formatToSqlString(column.type, $(tds[3]).text());
                //add new item
                columns[name] = column;
        }

        return columns;
}
/**
 * @description tr[1] is the target
 * start from 1 ,because 0 is column infomation
 * @param {[Elements]} els 
 */
function parseConstraints($, ) {
        for (let i = 1; i < els.length; i++) {
                let type = els[i].tr[1].td[0].innerText;
                let name = els[i].tr[1].td[1].innerText;
                let column = els[i].tr[1].td[2].innerText;
        }

}
function parseParameter() {

}
function parsePackage() {
  let pkg= new  Package();
}
function parseFunction() {

}
function parseProcedure() {

}
function parseSqlType(str) {
        let lengths = STR.select(str, "(", ")");
        let name = STR.removeWithMatch(str, "(", ")")
                .trim();
        let type = new SqlType(name);

        if (lengths.length > 0)
                type.length = Number(lengths[0]);
}
/**
 * Convert str to corrected type of value
 * @param {SqlType} sqlType 
 * @param {String} str 
 * @returns {String|Number|Date|boolean} ...
 */
function parseValueFromString(sqlType,str){

}
/**
 * Convert value to sql string
 * @param {SqlType} sqlType 
 * @param {String|Number|Date|boolean} val 
 */
function formatToSqlString(sqlType, val) {

        if (sqlType.name.indexOf("char") != -1
                || sqlType.name.indexOf("text") != -1) {
                return formatString(val);
        } else if (sqlType.name.indexOf("number") != 1) {
                return Number(val).toString();
        } else if (sqlType.name.indexOf("date") != -1) {
                return `to_date(${formatString(val)})`;
        } else {
                throw "unexcepted error happend!";
        }
}
/**
 * @param {String} s
 */
function formatString(s) {
        let ret = "'";
        for (const c of s) {
                if (c == "'") {
                        ret + "''";
                } else {
                        ret += c;
                }
        }

        return ret;
}
