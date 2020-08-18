const { FILE } = require("./../libs/file");
const { STR } = require("./../libs/str");
const {columns} =require("./columns");

function main(){
        let content="[\r\n";
       columns.forEach(x=>{
               if(x.type=="selection"){
                   content+=`utils.CHECK_BOX_COLUMN,\r\n`;
               }else if(x.format&&x.format.type=="date"){
                       if(!STR.upperFirstLetter(x.slot)==x.title){
                        content+=`utils.dateColumn("${x.slot}","${x.title}"),\r\n`
                       }else{
                        content+=`utils.dateColumn("${x.slot}"),\r\n`
                       }
                    
               }else if(x.format&&x.format.type=="enum"){
                if(STR.upperFirstLetter(x.slot)!=x.title){
                        if(STR.upperFirstLetter(x.slot)!=x.format.pattern){
                                content+=`utils.enumColumn("${x.slot}","${x.format.pattern}","${x.title}"),\r\n`
                        }else{
                                content+=`utils.enumColumn("${x.slot}",null,"${x.title}"),\r\n`
                        }
                       
                       }else{
                        if(STR.upperFirstLetter(x.slot)!=x.format.pattern){
                                content+=`utils.enumColumn("${x.slot}","${x.format.pattern}"),\r\n`
                        }else{
                                content+=`utils.enumColumn("${x.slot}",null),\r\n`
                        }
                       }
               }else if(x.isOperation){
                  content+=`utils.operateColumn([`
                  x.operations.forEach(op=>{
                       content+=`utils.operation("${op.name}"),`
                  });
                  content+=`])\r\n`;
               }else if(x.isPositiveProgress){
                       content+=`utils.positiveProgress("${x.slot}","${x.maxField}","${x.currentField}"),\r\n`;
               }else if(x.isNegativeProgress){
                content+=`utils.negativeProgress("${x.slot}","${x.maxField}","${x.currentField}"),\r\n`;
               }else{
                if(STR.upperFirstLetter(x.slot)!=x.title){
                       content+=`utils.column("${x.slot}","${x.title}"),\r\n`;
                }else{
                        content+=`utils.column("${x.slot}"),\r\n`;
                }
               }
       });
content+="],"
FILE.write("output.js",content);
}

main();