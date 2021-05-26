const { FILE, NamingStrategy, STR } = require("../../libs");

/**
 * Generate csv file
 * 
 * @param {String} entityName 
 * @param {String} file 
 */
function main(entityName, file = "1.csv") {
        let content = `public class ${NamingStrategy.toPascal(entityName)} { \r\n`;
        let lines = FILE.readLines(file);
        let segs1 = lines[0].split(",");
        let segs2 = lines[1].split(",");
        for (let i = 0; i < segs1.length; i++) {
                let name = NamingStrategy.toPascal(segs1[i].replace(/"/g, "").trim());
                let value = segs2[i].replace(/"/g, "").trim();
                let type = "string";
                // console.log(value);
                
                // console.log(number);
                if (!isNaN(value)) {
                        let number = parseFloat(value);
                        if (name.toLocaleLowerCase().endsWith("no") || number > 1000000000) {

                        } else if (STR.endsWithAny(name.toLocaleLowerCase(), ["status", "type", "flag", "id", "uid"])) {
                                type = "int?";
                        } else {
                                type = "decimal?";
                        }
                }

                content += `public ${type} ${NamingStrategy.toPascal(name)} {get; set;}\r\n\r\n`;
        }

        content += "}\r\n";
        FILE.write(`${entityName}.cs`, content);
        console.log("completed!");
}

/******************************************************************************************************************* */
main("Report");