const { NamingStrategy, FILE } = require("../libs")

/**
 * 
 * @param {String} row 
 */
function main(row) {
        let content = "";
        row.split(",").forEach(x => {
                content += "public int? " + NamingStrategy.toPascal(x.replace(/"/g, "").trim()) + "{ get; set;}\r\n";
        });

        FILE.write("entity.cs", content);
}

/******************************************************************************************************************* */
main(`
"TIME",
"OPEN_CNT","LOAD_TIME",
"PHONE_CNT",
"PHONE_RATE",
"SMS_BNT_CNT",
"SMS_BNT_CNT_RATE",
"SMS_CNT","SMS_CNT_RATE",
"SUBMIT_BNT_CNT",
"SUBMIT_BNT_CNT_RATE",
"FORM_BNT_CNT",
"FORM_BNT_CNT_RATE",
"STOP_TIME",
"TERM_NAME",
"PROMOTER_NAME","PRINCIPAL","BUSINESS_TYPE","PRODUCT_NAME"`);