const {FILE}=require("../../libs/file");
const {OBJECT}=require("../../libs/utils")
function generate(){
        let select={

        };
        FILE.readLines("./dic.csv").forEach(x=>{
                select[x.replace(/"/g,"")]={
                          text:"Name",
                          service:"SystemDictionary",
                          value:"Value",
                          defaultText:"--请选择--",
                }
        });

        FILE.write("./resource/select.js",OBJECT.text(select,"dictionsry"));
}

generate();