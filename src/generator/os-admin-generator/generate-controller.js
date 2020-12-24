const {ControllerGenerator} =require("./controller-generator");

const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR } = require("./../../libs");

function main(){
   let generator =new ControllerGenerator();
   let tables =[];
   Object.keys(all).forEach(x=>{
           tables.push(all[x]);
   });
   tables.forEach(x=>{
      let name =STR.upperFirstLetter(x.name);
      name =name.substr(2,name.length-2);
      FILE.write(`./output/controller/${name}Controller.java`,generator.generate(x));
   })
}
/***************************************************main************************************************/

main(
   // all.osUpProduct,
   // all.osUpApiConfig,
   // all.osUpErrorMap,
   // all.osDownChannel,
   // all.osDownProduct,
   // all.osDownProductRule,
   // all.osDownToUp,
   // all.osTermInfo,
   // all.osTermProduct,
   // all.osTermPage,
   // all.osTermPageTrack,
   // all.osFlowInfo,
   // all.osFlowStep,
   // all.osOrderCallback,
   // all.osOrderNotify,
   // all.osOrderCaptcha,
   // all.osTermTheme
)