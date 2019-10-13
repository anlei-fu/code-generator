/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 13:36:36
 */

var { requireNotNull } = require("./../libs/utils");
var { FILE } = require("./../libs/file");
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
exports.tiemRange = (name) => {
        name = name || TIMERANGETITLE;
        view = FILE.read("../componets/timeRange.cshtml")
                .replace(/@name/g, name);

        return { filer: view };
}



exports.mutipleRadios = (id, ...items) => {
        let js, view = {};
        js.slot = "";
        js.content = "";

        items.forEach(x => {

        });

        view.content = renderMutipleRadio(id, item);
        view.pos = "";

        return { js, view }
}
exports.associatedSelects = (option1, option2) => {

}

function exportExcel(){
      let btn="";
      let js=FILE.read();
      return {btn,js} ;
}

function renderMutipleRadio(id, ...items) {


}