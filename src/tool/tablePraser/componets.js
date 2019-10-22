/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-22 15:53:07
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
 * @param {*} table 
 * @param {{columns:[String],additional:[()=>String]}} config 
 * @returns {{controller:String,
 *            html:String,
 *            js:String,
 *            service:String,
 *            config:String}}
 */
function renderExportExcel(table, config) {

        // controller
        let headers = "",
                body = "",
                ident = "";
        table.columns.forEach(x, i, array => {
                let name;
                if (i != array.length - 1) {
                        headers += `${ident}"${x.chineseName}",\r\n`;
                        body += `row["${x.chineseName}"] = item.${name};`
                } else {
                        headers += `${ident}"${x.chineseName}"\r\n`;
                }
        });

        let controller = FILE.read("templates/export-excel-controller.cs")
                .replace("@headers", headers)
                .replace("@bodys", body);


        //config
        let filters = "";
        config.columns.forEach(x => {
                filters += `{&@t.${x}}\r\n`;
        });

        config.additionals.forEach(x => {
                filters += `${x()}\r\n`;
        })

        let filters = FILE.read("templates/export-excel-config.xml")
                .replace("@filters", filters);

        // service
        let service = FILE.read("templates/exports-excel-service.cs");

        //html
        let html = FILE.read("templates/exports-excel.cshtml");

        //js
        let js = FILE.read("export-excel.js");

        return {
                controller,
                config: filters,
                service,
                html,
                js
        };
}
/**
 * 
 * @param {[{column:String,resolve:()=>String}]} resolvers 
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
        resolvers.forEach(x => {
                temp += `entity.${x.column} = ${x.resolve()};\r\n`;
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

        items.forEach(x => {
                let componet = x();
                j += componet.js || "";
                temp += componet.html || "";
        });

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
 * @param {*} table 
 * @param {{check:boolean,delete:boolean,edite:boolean}} option
 * @returns {{html:String}}
 */
function renderTable(table,option) {
        let headers = "",
                bodys = "";
        

        
        table.columns.forEach(x => {
                headers += `<th>${x.chineseName}</th>\r\n`;
                body += `<td>item.${x.name}</td>\r\n`;
        })

        if(option){
                
                if(option.delete){

                }

                if(option.edite){

                }

                if(option.check){

                }
        }

        let html = FILE.read("templates/table.cshtml")
                .replace("@headers", headers)
                .replace("@bodys", bodys);

        return { html };
}

function renderIndex(table) {

}

exports.COMPONENTS = {

}