const {SimpleRender} =require("./../../simple-pattern-render/simple-pattern-render");
const {renderText} =require("./textRender");
const {renderSelect}=require("./selectRender")

const FILTER_RENDER=new SimpleRender({},"./templates/filter.html");

function renderFilter(config){
   let content="";

   config.selects.forEach(x=>{
      content+=renderSelect(x);
   });

   config.texts.forEach(x=>{
     content+=renderText(x);
   });

   return FILTER_RENDER.renderTemplate({content});
}

exports.renderFilter=renderFilter;