const {renderAdd}=require("./addRender")


function renderJs(config){

    let content="";

   if(config.batchOperation){

   }

   if(config.delete){

   }

   if(config.add||config.edit){
     content+=renderAdd();
   }

   if(config.exportExcel){

   }

   if(config.importExcel){

   }

}

exports.renderJs=renderJs;