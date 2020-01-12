const {getConditions} =require("./../condition-getter");
const {renderIf}=require("./if-render");
const {renderAsign}=require("./assign-render");
const {renderExpression}=require("./expression-render");
const {renderWhere}=require("./where-render");


function renderConditions(config) {
     let conditions="";
     getConditions(config).forEach((x,i)=>{
             x.prefix=i==0?"":"AND ";
             conditions+=x.expression?renderExpression(x):renderAsign(x);
           
     });

     return renderWhere({content:conditions});
}

exports.renderConditions = renderConditions;