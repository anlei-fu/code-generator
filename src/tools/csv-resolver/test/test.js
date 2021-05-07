const { default: csvHelper } = require("../../../generator/common/csv-resolver/csv-helper");
const {FILE} =require("./../../../libs");
const {CsvConverterBuilder,CsvResolverBuilder,CsvHelper} =require("./../csv-helper");


function main(){
     let helper =new CsvHelper();
     let builder =new CsvResolverBuilder();

    let resolvers=builder.str("date")
                         .str("term")
                         .str("order")
                         .str("validOrder")
                         .str("validOrderRate")
                         .build();
     
    let converters =new CsvConverterBuilder()
                        .normal("date","date")
                        .normal("term","term")
                        .build();

    let data = helper.resolveCsv(FILE.read("1.csv"),resolvers);

   FILE.writeJson("1.json",data);

   FILE.write("2.csv",helper.toCsvString(data,converters));


}

/***************************************************************************************/
main();