/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-23 14:11:46
 */

const { FILE } = require("./../../libs/file");
const { STR } = require("./../../libs/str");
const DEFAULT_OPTION = "------请选择------";
const { OBJECT } = require("./../../libs/utils");


/**
 * 
 * @param {String} name  lable name
 * @param {String} id   element name
 * @param {String} service  service
 * @param {String} value   value property name
 * @param {String} text     text property name
 * @param {String?} dft   default item
 * @returns {{html:String}}
 */
function renderOption(lable, name, value, text, dft) {
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
 * @param {{name:String,lable:String}} param0  
 * @returns {{html:String}}
 * 
 */
function renderDateFilter({ name, lable }) {
        let html = File.read("templates/dateFilter.cshtml")
                .replace("@name", name)
                .replace("@lable", lable);

        return { html };
}
/**
 * 
 * @param {{String,String,[{String,String}]}} param0 
 *  @returns {{html:String}}
 */
function renderOption1({ name, lable, items }) {
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
 * @param {{String,[{name:String,lable:String}]}} param0 
 * @returns {{js:String,html:String}}
 */
function renderMutipleInput({ name, items }) {
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
        return { html: FILE.read("templates/add.cshtml") };
}

function renderMutipleRadio(id, ...items) {


}
/**
 * 
 * @param {*} tab 
 * @param {{columns:[String],additional:[()=>String],returnFields:[String],orderBy:{name,type}}} option 
 * @returns {{controller:String,
 *            html:String,
 *            js:String,
 *            service:String,
 *            config:String}}
 */
function renderExportExcel(table, option) {

        // controller
        let headers = "",
                body = "",
                ident = "",
                tab = OBJECT.clone(table);

        tab.columns = OBJECT.toArray(tab.columns);

        tab.columns.forEach(x, i, array => {
                let name = STR.upperFirstLetter(x.name);
                if (i != array.length - 1) {
                        headers += `${ident}"${x.chineseName}",\r\n`;
                } else {
                        headers += `${ident}"${x.chineseName}"\r\n`;
                }
                body += `row["${x.chineseName}"] = item.${name};\r\n`
        });

        let controller = FILE.read("templates/export-excel-controller.cs")
                .replace("@headers", headers)
                .replace("@bodys", body);


        //config
        let filters = "";
        option.columns.forEach(x => {
                filters += `{&@t.${x}}\r\n`;
        });

        option.additionals.forEach(x => {
                filters += `${x()}\r\n`;
        })

        let orderBy = "";
        if (option.orderBy) {
                orderBy = `ORDER BY ${option.orderBy.name} ${option.orderBy.type} `;
        }

        let returnFields = "t.*";
        if (option.returnFileds) {
                option.returnFileds.push("t.*");
                returnFields = "";
                option.returnFilelds.forEach(x, i, array => {
                        if (i != array.length - 1)
                                returnFields += `${x},\r\n`;
                        else
                                returnFields += `${x}\r\n`;
                });
        }


        let config = FILE.read("templates/export-excel-config.xml")
                .replace("@filters", filters)
                .replace("@orderBy", orderBy)
                .replace("@returnFields", returnFields);

        // service
        let service = FILE.read("templates/exports-excel-service.cs");

        //html
        let html = FILE.read("templates/exports-excel.cshtml");

        //js
        let js = FILE.read("export-excel.js");

        return {
                controller,
                config,
                service,
                html,
                js
        };
}
/**
 * 
 * @param {[{name:()=>String}]} resolvers 
 * @returns {{
 * controller:String,
 * html:String,
 * page:String,
 * service:String,
 * handler:String,
 * ihandler:String}
 * }
 */
function renderImportExcel(resolvers) {
        // controller
        let controller = FILE.read("templates/import-excel-controller.cs");

        // html
        let html = FILE.read("templates/import-excel.cshtml");

        // service
        let temp = "";
        OBJECT.forEach(resolvers, (key, value) => {
                temp += `entity.${key} = ${value()};\r\n`;
        });
        let service = FILE.read("templates/import-excel-service.cs")
                .replace("@resolvers", temp);

        // handler
        let handler = FILE.read("templates/import-excel-handler.cs");

        // ihandler
        let ihandler = FILE.read("templates/import-excel-ihandler.cs");

        // html
        let html = FILE.read("templates/import-excel.cshtml");

        // page
        let page = FILE.read("templates/import-excel-page.cshtml");

        return {
                controller,
                html,
                service,
                handler,
                ihandler,
                html,
                page
        }
}
/**
 * 
 * @param {[()=>{js:String,html:String}]} items 
 * @param {[{name:String,regex:String}]} rules 
 * @returns {{page:String,js:String,html:String}}
 */
function renderEdit(items, rules) {
        // page
        let page = FILE.read("templates/edit-page.cshtml"),
                j = "",
                temp = "",
                r = "";

        // key items
        items.forEach(x => {
                let componet = x();
                j += componet.js || "";
                temp += componet.html || "";
        });

        // rules
        rules.forEach(x => {
                if (x.regex) {
                        r += `${x.name}:{required:true,${x.regex}:true},\r\n`
                } else {
                        r += `${x.name}:{required:true},\r\n`;
                }

                r = r.substr(0, r.length - 3) + "\r\n";
        })

        page = page.replace("@rules", r)
                .replace("@items", temp)
                .replace("@js", j);

        // js
        let js = FILE.read("templates/edit.js");

        let html = FILE.read("templates/add.cshtml");

        return {
                page,
                html,
                js
        };

}
/**
 * 
 * @param {Any} table 
 * @param {{check:boolean,delete:boolean,edite:boolean}} option
 * @param {{name:()=>String}} cells
 * @returns {{html:String}}
 */
function renderTable(table, option, cells) {

        let tab = OBJECT.clone(table);
        tab.columns = OBJECT.toArray(tab.columns);

        tab.columns.forEach(x => {
                x.name = STR.upperFirstLetter(x);
        });

        let headers = "",
                bodys = "";

        tab.columns.forEach(x => {
                headers += `<th>${x.chineseName}</th>\r\n`;

                let content = `item.${x.name}`;

                if (cells && OBJECT.hasKey(cells, x.name))
                        content = cells[x.name]();

                bodys += `<td>${content}</td>\r\n`;
        })

        if (option) {
                headers += `<th>操作</th>\r\n`;

                let op = `<td>\r\n`;


                if (option.edite) {
                        op += `<a href="javascript:void(0)" onclick="edit('@item.${tab.columns[1].name}')">修改</a>\r\n`;
                }

                if (option.delete) {
                        op += `<a href="javascript:void(0)" onclick="del('@item.${tab.columns[1].name}',this)"> 删除</a>\r\n`;
                }
                op += `</td>`;

                if (option.check) {
                        headers = `` + headers;
                        bodys = `` + bodys;
                }

                bodys += op;
        }

        let html = FILE.read("templates/table.cshtml")
                .replace("@headers", headers)
                .replace("@bodys", bodys);

        return { html };
}

function renderIndex(table) {

}

exports.COMPONENTS = {
        renderDateFilter,
        renderEdit,
        renderExportExcel,
        renderImportExcel,
        renderIndex,
        renderOption,
        renderOption1,
        renderTable,
        renderMutipleInput,
}