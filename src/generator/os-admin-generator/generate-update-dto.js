const {DtoGenerator} =require("./update-dto-generator")

const { all } = require("../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR } = require("../../libs");

function main(...tables){
   let generator =new DtoGenerator();
   tables.forEach(x=>{
      let name =STR.upperFirstLetter(x.name);
      name =name.substr(2,name.length-2);
      FILE.write(`./output/dto/${name}UpdateDTO.java`,generator.generate(x));
   })
}
/***************************************************main************************************************/

main(
   all.osUpProduct,
   all.osUpApiConfig,
   all.osUpErrorMap,
   all.osDownChannel,
   all.osDownProduct,
   all.osDownProductRule,
   all.osDownToUp,
   all.osTermInfo,
   all.osTermProduct,
   all.osTermPage,
   all.osTermPageTrack,
   all.osFlowInfo,
   all.osFlowStep,
   all.osTermTheme
   // all.osOrderCallback,
   // all.osOrderNotify,
   // all.osOrderCaptcha,
)