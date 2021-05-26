const { FILE, NamingStrategy, STR } = require("../../libs");
const {COMMON_UTILS} =require("../../generator/common")

/**
 * Generate csv file
 * 
 * @param {String} entityName 
 * @param {String} file 
 */
function main(entityName, file = "1.csv") {
        let content = `
        @Data
        public class ${NamingStrategy.toPascal(entityName)} { \r\n`;
        let lines = FILE.readLines(file);
        let segs1 = lines[0].split(",");
        let segs2 = lines[1].split(",");
        for (let i = 0; i < segs1.length; i++) {
                let name = NamingStrategy.toCamel(segs1[i].replace(/"/g, "").trim());
                let value = segs2[i].replace(/"/g, "").trim();
                let type = "String";
                // console.log(value);
                
                // console.log(number);
                if (!isNaN(value)) {
                        let number = parseFloat(value);
                        if (name.toLocaleLowerCase().endsWith("no") || number > 1000000000) {

                        } else if (COMMON_UTILS.DEFAULT_FLOAT_MATCHER(name)) {
                                type = "BigDecimal";
                        } else {
                                type = "Integer";
                        }
                }

                content += `private ${type} ${NamingStrategy.toCamel(name)} ;\r\n\r\n`;
        }

        content += "}\r\n";
        FILE.write(`${entityName}.java`, content);
        console.log("completed!");
}

/******************************************************************************************************************* */
main("ProductTypeStatVO");