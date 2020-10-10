const {resolve} =require("./../generator/common/html-resolver/table-resolver");
const {FILE} =require("./../libs/file");

function main(){
        let sql ="";
      let data=  resolve(FILE.read("./input/1.html"));

    FILE.writeJson("./output/1.json",data);
}

main();