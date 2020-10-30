const {all} =require("./../../db/all");
const {FILE} =require("./../libs/file");
const {OBJECT} =require("./../libs/utils");
const {STR} =require("./../libs/str");

Object.keys(all).forEach(key=>{
   let model="";
   model.name=key;
    FILE.write(`${key}.js`,STR.replace(FILE.read("D:/test/all/crawler/admin/templates/generate.js"),{
        "@name":key,
        "@columns":OBJECT.text1(all[key].columnsArray)
    }));
});