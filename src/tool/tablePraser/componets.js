/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 13:17:04
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 13:36:36
 */

var {requireNotNull} =require("./../libs/utils");
var { FILE}=require("./../libs/file");
const PLZSELECT="";
const TIMERANGETITLE="";
/**
 * 
 * @param {String} name  lable name
 * @param {String} id   element name
 * @param {String} service  service
 * @param {String} value   value property name
 * @param {String} text     text property name
 * @param {String?} def   default item
 */
exports.select=(name,id,service,value,text,def)=>{
        requireNotNull(name);
        requireNotNull(id);
        requireNotNull(service),
        requireNotNull(value),
        requireNotNull(text),
        def= def|| PLZSELECT;

  let view= FILE.read("../componets/select.cshtml")
             .replace(/@Name/g,name)
             .replace(/@Id/g,id)
             .replace(/@Service/g,service)
             .replace(/@Value/g,value)
             .replace(/@Default/g,def);

             return { view};

}
/**
 * 
 * @param {String?} name  title
 */
exports.tiemRange=(name)=> {
        name = name||TIMERANGETITLE;
 let view= FILE.read("../componets/timeRange.cshtml")
            .replace(/@Name/g,name);
            return {view};
}


exports.mutipleOptions=(id,...items)=>{
        
}
exports.mutipleRadios=(id,...items)=>{

}
exports.associatedSelects=()=>{

}


function renderMutipleSelect(id,...items){
        let temp=
``;

}