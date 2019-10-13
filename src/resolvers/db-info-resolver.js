/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:27:10
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-12 14:28:50
 */
/**
 * imports  @const cheerio see https://github.com/cheeriojs/cheerio
 */
const { parseValue } = require("./../libs/utils");
const cheerio = require("cheerio");
const { FILE } = require("./../libs/FILE");
const { DIR } = require("./../libs/dir");
const { STR } = require("./../libs/str");
const { NamingStrategy } = require("./../libs/naming-stratey");
const { Table, Column, SqlType, Package, Constraint, Function, Procedure, Db, SqlConstant, SqlValue, Parameter, Index }
        = require("./db-info");

const ROOT = "./../../resources/plsqldoc";
/**
 * @param {String} path ,main page path
 * @returns {[Db]}
 * */
function parse() {
        let html = FILE.read(`${ROOT}/frame_Index.html`),
                $ = cheerio.load(html),
                dbs = {};

        //jq collection can not iterate ,jsut can do for
        // class='main_title' db names
        let names_els = $("div.main_title");

        // sibling sorted left to right in the same layer, 
        //it has no bussiness with the position compare to current element
        let db_els = $("div.main_table").next();

        console.log(db_els.length);
        for (let i = 0; i < names_els.length; i++) {
                let name = $(names_els[i]).text();
                dbs[name] = parseDb($, db_els[i])
                dbs[name].name = name;
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
        let tbs = $(el).children("div");
        let db = new Db();
        // packages
        db.packages = parseComponent($, tbs[1], parsePackage);
        //tables
        db.functions = parseComponent($, tbs[3], parseFunction);
        //functions
        db.procedures = parseComponent($, tbs[5], parseProcedure);
        //procedures
        db.tables = parseComponent($, tbs[7], parseTable);

        return db;
}
/**
 * 
 * @param {CheerioStatic} $ 
 * @param {Element} el 
 * @param {Function:()=>Any} fun  ()=> any
 */
function parseComponent($, el, func) {
        let component = {};
        let a_els = $(el).children("div");

        for (let i = 0; i < a_els.length; i++) {
                let name = $(a_els[i]).children("div").children("div").text().trim();
                let path = `${ROOT}/${$(a_els[i]).children("div").children("div").attr("href")}`;

                if (func == parseTable) {
                        name = NamingStrategy.toCamel(name);
                }

                component[name] = func(FILE.read(path));
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
        let pres = $("pre.decl_text");
        for (let i = 0; i < pres.length; i++) {

                let text = $(pres[i]).text().trim().replace(":=", " = ");
                text = text.substr(0, text.length - 1);
                let segs = STR.splitToWords(text);

                let name = segs[0],
                        sqlType = SqlType.parse(segs[2]),
                        value = parseValue(segs[4]);


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

        let $ = cheerio.load(html),
                name = $(".main_title").text().replace("table ", ""),
                tab = new Table(NamingStrategy.toCamel(name), "");

        let samples = $(".simple_table");
        tab.columns = parseColumns($, samples[0]);

        if (samples.length > 1) {
                tab.constraints = parseConstraints($, samples[1]);
                // set column's ispk by iterate constraint
                for (let constraint in tab.constraints) {
                        for (let cons of tab.constraints[constraint].columns) {
                                for (let col in tab.columns) {
                                        if (col == cons) {
                                                tab.columns[col].isPk = true;
                                        }
                                }
                        }
                }
        }


        if (samples.length > 2) {
                tab.indexes = parseIndex($, samples[2]);
        }

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
        let divs = $(el).children("div");
        for (let i = 1; i < divs.length; i++) {

                // get all 5  cells
                // 1 : name ,2 : type ,3 : nullable 4: defaultValue 5: comments
                let sub_divs = $(divs[i]).children("div");

                let raw_name = $(sub_divs[0]).text().trim(),
                        raw_type = $(sub_divs[1]).text().trim(),
                        raw_nullable = $(sub_divs[2]).text().trim(),
                        raw_def = $(sub_divs[3]).text().trim(),
                        raw_desc = $(sub_divs[4]).text().trim();

                let name = NamingStrategy.toCamel(raw_name);

                let column = new Column(name, raw_desc);
                column.type = SqlType.parse(raw_type);
                column.nullable = raw_nullable == "Y";
                column.defaltValue = raw_def == "" ? null : parseValue(raw_def);
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

        let constraints = {},
                divs = $(el).children("div");

        for (i = 1; i < divs.length; i++) {
                // 1 is name ,2 is column
                let sub_divs = $(divs[i]).children("div");

                let constraint = new Constraint(),
                        raw_name = $(sub_divs[0]).text().trim(),
                        raw_column = $(sub_divs[1]).text().trim();

                constraint.name = NamingStrategy.toCamel(raw_name);
                constraint.columns.push(NamingStrategy.toCamel(raw_column));
                constraints[constraint.name] = constraint;
        }

        return constraints;
}

function parseIndex($, els) {

}

/**
 * 
 * @param {String} html 
 * @returns {Function}
 */
function parseFunction(html) {
        let $ = cheerio.load(html),
                text = $("pre.decl_text").text();

        text = STR.removeWithMatch(text, "--", "\n");
        let names = STR.select1(text, " ", "("),
                name = "";

        if (names.length == 0) {
                name = text.split(" ")[1].trim();
        } else {
                name = names[0];
                name = name.substr(0, name.length - 1).trim();
        }

        let func = new Function(name),
                returnPos = text.indexOf("return"),
                paramsText = STR.select(text, "(", ")")[0];

        if (typeof paramsText != "undefined")
                func.parameters = parseParameter(paramsText);

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
        text = STR.removeWithMatch(text, "--", "\n");
        text = text.replace("','", "' '");
        let params = text.split(",");
        params.forEach(e => {
                let words = STR.splitToWords(e),
                        para = new Parameter(words[0]);

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
                        try {
                                para.type = SqlType.parse(words[1]);
                        } catch (e) {
                                throw e;
                        }
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
        let $ = cheerio.load(html),
                text = $("pre.decl_text").text();

        text = STR.removeWithMatch(text, "--", "\n");

        let names = STR.select1(text, " ", "("),
                name = "";

        if (names.length == 0) {
                try {
                        name = text.split(" ")[1].trim();
                } catch (e) {
                        return {};
                }
        } else {
                name = names[0];
                name = name.substr(0, name.length - 1)
        }

        let proc = new Procedure(),
                paramsText = STR.select(text, "(", ")")[0];

        proc.name = name;

        if (typeof paramsText != "undefined")
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

function writeTables(dbs){
        for (const item in dbs) {
                let out="";
                let template =
`*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|\r\n`;
                for (let tab in dbs[item].tables) {
                       let content = `### ***${tab}***\r\n` + template;
                        for (let col in dbs[item].tables[tab].columns) {
                                let c = dbs[item].tables[tab].columns[col];
                                let nullable=c.nullable;
                                let dft=c.defaltValue||"--";
                                let desc=c.description||"--";
                                let pk=c.isPk ?"yes":"";
                                content += `|${col}|${c.type.toString()}|${nullable}|${pk}|${dft}|${desc}|\r\n`;
                        }
                        out+="\r\n----\r\n"+content;
                }

                FILE.write("mds/" + item + "-tab.md", out);
        }
}

function writeProc(dbs){
        for (const item in dbs) {
                let out="";
                let template =
`*   ***description***\r\n`;
                let paraHead=`
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|\r\n`;
                for (let proc in dbs[item].procedures) {
                       let content = `### ***${proc}***\r\n` + template;
                       if(Object.keys( dbs[item].procedures[proc].parameters).length>0){
                               content+=paraHead;
                       }
                        for (let para in dbs[item].procedures[proc].parameters) {
                                let p = dbs[item].procedures[proc].parameters[para];
                                content += `|${para}|${p.type.toString()}|${p.isOut ? "true" : "false"}|${p.defaltValue||"--"}|${p.description||""}|\r\n`;
                        }
                        out+="\r\n----\r\n"+content;
                }

                FILE.write("mds/" + item + "-proc.md", out);
        }
}

function main() {
        let dbs = parse();
        writeTables(dbs);
        writeProc(dbs);
        DIR.create("mds");
        
        DIR.create("output");
        for (let db in dbs) {
                DIR.create("output/" + db);
                DIR.create("output/" + db + "/pkgs");
                for (let pk in dbs[db].packages) {
                        try {
                                FILE.write(`output/${db}/pkgs/${pk}.json`,
                                        JSON.stringify(dbs[db].packages[pk], null, '\t'));
                        } catch {
                        }
                }
                DIR.create("output/" + db + "/tabs");
                for (let tb in dbs[db].tables) {
                        FILE.write("output/" + `${db}/tabs/${tb}.json`,
                                JSON.stringify(dbs[db].tables[tb], null, '\t'));
                }
                DIR.create("output/" + db + "/funcs");
                for (let func in dbs[db].functions) {
                        FILE.write("output/" + `${db}/funcs/${func}.json`,
                                JSON.stringify(dbs[db].functions[func], null, '\t'));
                }

                DIR.create("output/" + db + "/procs");
                for (let proc in dbs[db].procedures) {
                        FILE.write("output/" + `${db}/procs/${proc}.json`,
                                JSON.stringify(dbs[db].procedures[proc], null, '\t'));
                }
        }

}

// run
main();
