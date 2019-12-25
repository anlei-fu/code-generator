const {SimpleRender} =require("../../simple-pattern-render/simple-pattern-render");
const {renderText} =require("./text-render");
const {renderSelect}=require("./select-render")

const FILTER_RENDER=new SimpleRender({},`${__dirname}/templates/filter.html`);

/**
 * 
 * @param {{selects:[],texts:[]}} config 
 */
function renderFilter(config){
   let content="";

   config.selectConfig.selects.forEach(x=>{
      content+=renderSelect(x);
   });

   config.selectConfig.texts.forEach(x=>{
     content+=renderText(x);
   });

   return FILTER_RENDER.renderTemplate({content});
}

exports.renderFilter=renderFilter;