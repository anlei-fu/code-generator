/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-21 14:03:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 14:22:02
 */



/**
 * 
 * @param {[String]} headers 
 * @param {[Any=>String)]} columns 
 * @param {[Any]} datas 
 * @param {Any} param3  {title,tail}
 */
function writeTable(headers, columns, datas, { title, tail }) {
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