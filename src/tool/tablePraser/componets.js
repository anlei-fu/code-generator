/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-14 17:31:59
 */

var { requireNotNull } = require("./../libs/utils");
var { FILE } = require("./../../libs/file");
const PLZSELECT = "";
const TIMERANGETITLE = "";
class RenderParameter {
        constructor() {
                this.viewParameters = {};
                this.jsParameters = {};
        }
}
class Index {

}
class Edit {

}
class Import {

}
class Config {
        constructor() {
                this.index = {};
                this.edit;
                this.detail;
        }
}

class Context {
        constructor() {
                this.projectName;
                this.service;
                this.handler;
                this.ihandler;
                this.controller;
        }
}
/**
 * 4 positions
 * 4 counters
 */
class Template {
        constructor() {

        }
}
/**
 * 
 * @param {String} name  lable name
 * @param {String} id   element name
 * @param {String} service  service
 * @param {String} value   value property name
 * @param {String} text     text property name
 * @param {String?} dft   default item
 */
exports.option = (name, id, service, value, text, dft) => {
        requireNotNull(name);
        requireNotNull(id);
        requireNotNull(service),
                requireNotNull(value),
                requireNotNull(text),
                dft = dft || PLZSELECT;
        let view;

        view = FILE.read("../componets/select.cshtml")
                .replace(/@Name/g, name)
                .replace(/@Id/g, id)
                .replace(/@Service/g, service)
                .replace(/@Value/gvalue)
                .replace(/@Default/g, dft);

        return { filter: view };

}
/**
 * 
 * @param {String?} name  title
 */
exports.dateFilter = ({name,lable}) => {
        let html=File.read("templates/dateFilter.cshtml")
                     .replace("@name",name)
                     .replace("@lable",lable);

        return {html};
}
/**
 * items [{lable,value}]
 */
exports.option1=({name,lable,items})=>{
        let temp="";
        let item=FILE.read("templates/option1-item.cshtml");
       items.forEach(x=>{
            temp+=item.replace("@lable",x.lable)
                      .replace("@value",x.value);
       })

       let html=FILE.read("templates/option1.cshtml")
                    .replace("@name",name)
                    .replace("@value",lable)
                    .replace("@items",temp);
      return {html};

}
/**
 * items[{lable,name}]
 */
exports.mutipleInput = ({name, items}) => {
        let js=FILE.read("templates/mutiple-input.js"),
            item=FILE.read("templates/mutiple-input-item.js"),
            temp="";

            items.forEach(x=>{
                    temp+=item.replace("@name",x.name)
                              .replace("@lable",x.name);
            })

        let html

        return { js, view }
}
exports.associatedSelects = (option1, option2) => {

}

exports.add=()=>{
    return FILE.read("templates/add.cshtml");
}

function renderMutipleRadio(id, ...items) {


}