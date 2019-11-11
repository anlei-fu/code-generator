/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-21 14:03:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-11 09:20:52
 */



/**
 * 
 * @param {[String]} headers 
 * @param {[String|Any=>String)]} columns 
 * @param {[String|Any=>String]} datas 
 * @param {Any} param3  {title,tail}
 */
function writeTable(headers, columns, datas, title) {
        let output = "";

        if (title)
                output += `${title}\r\n`;
        output += "|";
        headers.forEach(x => {
                output += `${x}|`;
        });

        output += "\r\n|";
        for (let i = 0; i < headers.length; i++)
                output += "----|";

        output += "\r\n";

        datas.forEach(data => {
                output += "|";
                columns.forEach(getter => {
                        output += `${getter(data)}|`;
                });
                output += "\r\n";
        });

        if (tail)
                output += `${tail}\r\n`;

        return output;
}

function writeList() {
        
}