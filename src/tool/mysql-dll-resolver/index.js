/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 15:38:27
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 15:48:06
 */
const{FILE}=require("./../../libs/file");

function main(){
        let buffer="";
        FILE.readLines("input.sql").forEach(x=>{
                if(!x.startsWith("--")&&!x.startsWith("/*"))
                buffer+=x+"\r\n";
        })

        FILE.write("output.sql",buffer);
}

// 
main();