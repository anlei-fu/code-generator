/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:27:10
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-10 14:07:11
 */
/**
 * imports  @const cheerio see https://github.com/cheeriojs/cheerio
 */
const { parseValue } = require("./../libs/utils");
const cheerio = require("cheerio");
const { FILE } = require("./../libs/file");
const { STR } = require("./../libs/str");
const { NamingStrategy } = require("./../libs/naming-stratey");
const { Table, Column, SqlType, Package, Constraints, Function, Procedure, Db, SqlConstant, SqlValue, Parameter, Index }
        = require("./db-info");

const ROOT = "./../../resources/plsqldoc";
/**
 * @param {String} path ,main page path
 * @returns {[Db]}
 * */
function parse() {

        let html = FILE.read(`${ROOT}/frame_Index.html`
                 );
        let $ = cheerio.load(html);
        let dbs = {};
        //jq collection can not iterate ,jsut can do for
        // class='main_title' db names
        let names_els = $("td[class='main_title']");
        // sibling sorted left to right in the same layer, 
        //it has no bussiness with the position compare to current element
        let db_els = $("table.main_table").siblings("table.sub_table");
        console.log(db_els.length);
        console.log(db_els[1].attribs);
        console.log(db_els[0]);

        for (let i = 0; i < names_els.length; i++) {
                let name = $(names_els[i]).text();
                dbs[name] = parseDb($, db_els[i])
                dbs[name].name=name;
        }

        return dbs;
}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Any} el 
 * @returns {Db} 
 */
function parseDb($, el) {
        // count should be 8
        let tbs = $(el).children();
        let db = new Db();
       console.log(`table length is`+tbs.length);
        // packages
        db.packages = parseComponent($, tbs[1], parsePackage);
        //tables
        db.tables = parseComponent($, tbs[3], parseTable);
        //functions
        db.functions = parseComponent($, tbs[5], parseFunction);
        //procedures
        db.procedures = parseComponent($, tbs[7], parseProcedure);

        return db;
}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Element} el 
 * @param {Function:()=>Any} fun  ()=> any
 */
function parseComponent($, el, fun) {
        console.log("in parse component");
        let component = {};
        let a_els = $(el).children("a");
        console.log("a length is"+a_els.length);

        for (let i = 0; i < a_els.length; i++) {
                let name = $(a_els[i]).text();
                let path = `${ROOT}/${$(a_els[i]).attr("href")}`;
                console.log(`path is ${path}`);
                component[name] = fun(FILE.read(path));
        }

        return component;
}
/**
 * Value element '<pre class="decl_text">'
 * @param {String} html 
 * @returns {Package}
 */
function parsePackage(html) {
        let pkg = {};
        let $ = cheerio.load(html);
        let cons_els = $("pre[class='decl_text']");

        for (let i = 0; i < cons_els.length; i++) {
                let segs = $(cons_els[i]).text()
                        .trim()
                        .split(" ");
                let name = segs[0];
                let sqlType = SqlType.parse(segs[3]);
                let value = parseValue(segs[5]);
                pkg[name] = new SqlConstant(name, "");
                pkg[name].value = new SqlValue(sqlType, value);
        }
        return pkg;
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
        // first
        tab.columns = parseColumns($, $(".simple_table:first"));
        // from 2ed to last -1
        tab.constraints = parseConstraints($("a[name='primary key']"));
        // last 1
        tab.indexes = parseIndex($("a[name='indexes']"));
        
        return tab;
}
/**
 * Resolve column info 
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
                column.defaltValue = parseValue($(tds[3]).text());
                //add new item
                columns[name] = column;
        }

        return columns;
}
/**
 * @description tr[1] is the target
 * start from 1 ,because 0 is column infomation
 * @param {[Elements]} els 
 * @returns {{Constraint}}
 */
function parseConstraints($, el) {
        if (el.length == 0)
                return {};

        let constraints = {};

        let tabs = $(el[0]).next("table[class='simple_table']");
        let cons = $(tabs[0]).children("tr");

        for (i = 1; i < cons.length; i++) {
                let cells = $(cons[i]).children("td");
                let constraint = new Constraints();
                constraint.name = $(cells[0]).text();
                constraint.columns.push($(cells[1]).text());
                constraint.type = $(cells[2]).text();
                constraints[constraint.name] = constraint;
        }

        return constraints;

}

function parseIndex($, els) {
        if (el.length == 0)
                return {};

        let indexes = {};

        let tabs = $(el[0]).next("table[class='simple_table']");
        let cons = $(tabs[0]).children("tr");

        for (i = 1; i < cons.length; i++) {
                let cells = $(cons[i]).children("td");
                let index = new Index();
                index.name = $(cells[0]).text();
                index.columns.push($(cells[1]).text());
                index.type = $(cells[2]).text();
                indexes[index.name] = index;
        }

        return indexes;
}

/**
 * 
 * @param {String} html 
 * @returns {Function}
 */
function parseFunction(html) {
        let $ = cheerio.load(html);
        let text = $("pre[class='DECL_TEXT']").text();
        let name = STR.select1(text, "f_", "(")[0];

        let func = new Function();
        func.name = name.substr(0, name.length - 1);
        let paramsText = STR.select(text, "(", ")")[0];
        func.parameters = parseParameter(paramsText);
        let returnPos = text.indexOf("return");
        func.returnType = text.substr(returnPos + 6, text.length - returnPos - 6)
                .trim();

        return func;
}
/**
 * 
 * @param {String} text 
 * @returns {{Parameter}}
 */
function parseParameter(text) {
        let parameters = {};

        // remove comment
        text = STR.removeWithMatch(text, "--", "\r\n");
        let params = text.split(",");
        params.forEach(e => {
                let words = STR.splitToWords(e);
                let para = new Parameter(words[0]);

                // len>4 has default value and in/out
                //len >3 has defualt value
                // len >2 has in/out
                // nomal name +type
                if (words.length > 4) {
                        para.isOut = words[1] == "out";
                        para.type = SqlType.parse(words[2]);
                        para.defaltValue = parseValue(words[4]);
                } else if (words.length > 3) {
                        para.type = SqlType.parse(words[1]);
                        para.defaltValue = parseValue(words[3]);
                } else if (words.length > 2) {
                        para.isOut = words[1] == "out";
                        para.type = SqlType.parse(words[2]);
                } else {
                        para.type = SqlType.parse(words[1]);
                }

                parameters[words[0]] = para;
        });

        return parameters;
}

/**
 * 
 * @param {String} html 
 * @returns {Procedure}
 */
function parseProcedure(html) {
        let $ = cheerio.load(html);
        let text = $("pre[class='DECL_TEXT']").text();
        let name = STR.select1(text, "s", "(")[0];

        let proc = new Procedure();
        proc.name = name.substr(0, name.length - 1);
        let paramsText = STR.select(text, "(", ")")[0];
        proc.parameters = parseParameter(paramsText);

        return proc;

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


var dbs= parse();

console.log(dbs);