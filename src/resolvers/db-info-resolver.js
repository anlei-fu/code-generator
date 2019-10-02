/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:27:10
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-01 15:26:45
 */
/**
 * imports  @const cheerio see https://github.com/cheeriojs/cheerio
 */
const cheerio = require("cheerio");
const { FILE } = require("./../libs/file");
const { STR } = require("./../libs/str");
const { NamingStrategy } = require("./../libs/naming-stratey")
const { Table, Column, SqlType, Package, Constraints, Function, Procedure, Db } = require("./db-info");
/**
 * @param {String} path ,main page path
 * @returns {[Db]}
 * */
function parse(path) {
        let $ = cheerio.load(path);

        let dbs = {};

        //jq collection can not iterate ,jsut can do for
        // class='main_title' db names
        let names_els = $("td[class='main_title']");

        // sibling sorted left to right in the same layer, 
        //it has no bussiness with the position compare to current element
        let db_els = $(names_els[0]).parent("table")
                .siblings("table[class='sub_table']");

        for (let i = 0; i < names_els.length; i++) {
                let name = $(names_els[i]).text();
                dbs[name] = parseDb($, db_els[i])
        }
}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Any} el 
 * @returns {Db} 
 */
function parseDb($, el) {

        // count should be 8
        let tbs = $(el).children("table['sub_table']");
        let db = new Db();
        db.packages = parsePackages($, tbs[1]);
        db.tables = parseTables();
        db.functions = parseFunctions();
        db.procedures = parseProcedures();

}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {*} el 
 * @returns {{Table}}
 */
function parseTables($, el) {
        parseSubItem($, el, parseTable);
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
        tab.constraints = parseConstraints();

        return tab;
}
/**
 * 
 * @param {CheerioStatic} $ 
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
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Element} el 
 * @returns {[Package]}
 */
function parsePackages($, el) {
        parseSubItem($, el, parsePackage);
}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Element} el 
 * @param {Function:()=>Any} fun  ()=> any
 */
function parseSubItem($, el, fun) {
        let pkgs = {};
        let a_els = $(el).children("a");
        for (let i = 0; i < a_els.length; i++) {
                let name = $(a_els[i]).text();
                tabs[name] = fun($(a_els[i]).attr("href"));
        }
}

/**
 * 
 * @param {String} html 
 * @returns {Package}
 */
function parsePackage(html) {

}
function parseFunctions($, el) {

}
/**
 * 
 * @param {String} html 
 */
function parseFunction(html) {

}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Element} el 
 */
function parseProcedures($, el) {

}
/**
 * 
 * @param {String} html 
 */
function parseProcedure(html) {

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
function parseValueFromString(sqlType, str) {

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
