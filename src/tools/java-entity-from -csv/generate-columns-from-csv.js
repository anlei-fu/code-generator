const { FILE, NamingStrategy,OBJECT } = require("../../libs");
/**
 * Generate csv file
 * 
 * @param {String} entityName 
 * @param {String} file 
 */
function main(entityName, file = "1.csv") {
        let lines = FILE.readLines(file);
        let segs1 = lines[0].split(",");

        let columns = [];
        segs1.forEach(x => {
                columns.push({
                        title:"",
                        field:  NamingStrategy.toCamel(x.replace(/"/g, "").trim()),
                        align: "center",
                })
        });

        FILE.write(`${entityName}.js`,OBJECT.export_(columns,"columns"));

        console.log("completed!");
}

/******************************************************************************************************************* */
main("1");