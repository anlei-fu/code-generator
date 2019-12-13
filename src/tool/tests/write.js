/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-11 16:02:24
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-11 16:25:37
 */
const { FILE } = require("./../../libs/file");
const { NamingStrategy } = require("./../../libs/naming-strategy")

let config = {
        name: "id",
        items: ["mobile","email","compony","realName","signStatus","needPay","payStatus"],
};
const ident="            ";
const ident1="   ";
function main() {
        let output = "";
        config.items.forEach((x, i) => {
                let raw = NamingStrategy.toHungary(x).toLowerCase();
        output += i == 0 ? `${ident}<if test="${x} != null">\r\n${ident1}${ident}${raw}=#{${x}}\r\n${ident}</if>\r\n`
                        : `${ident}<if test="${x} != null">\r\n${ident1}${ident}and ${raw}=#{${x}}\r\n${ident}</if>\r\n`;
        });

        output = FILE.read("./template.xml")
                .replace("@items", output.trimRight())
                .replace("@name", config.name)
                .replace("@nameRaw", NamingStrategy.toHungary(config.name).toLowerCase());
        FILE.write("./output.xml", output);
}

/*------------------------------------------------------main-----------------------------------------------------------*/
main();