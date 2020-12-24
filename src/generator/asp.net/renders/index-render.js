const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderJs } = require("./js-render");
const { renderTable } = require("./table-render");
const { renderFilter } = require("./filter-render");
const { renderButtons } = require("./buttonRender");
const { STR } = require("../../../libs/str");

const INDEX_RENDER = new SimpleRender({}, `${__dirname}/templates/index.html`);

/**
 * Render index.cshtml template
 * 
 * @param {GeneratorConfig} config 
 */
function renderIndex(config) {
        let batchSelect=getBatchSelect(config);
        let operation =getOperation(config);

        let indexConfig = {
                js: renderJs(config),
                description:config.table.description,
                filters: renderFilter(config),
                buttons: renderButtons(config),
                batchSelectLabel:batchSelect.batchSelectLabel,
                batchSelectValue:batchSelect.batchSelectValue,
                operationLabel:operation.operationLabel,
                operationValue:operation.operationValue,
                project: config.project,
                name: config.name
        }

        return INDEX_RENDER.renderTemplate(indexConfig);
}

function getBatchSelect(config){
 let batchSelect={};
  if(config.batchOperation){
    batchSelect.batchSelectLabel=`<th>
    <input type="checkbox" class="frame_middle" onclick="shelfSelect(this)" />
</th>`;
    batchSelect.batchSelectValue=` <td>
    <input type="checkbox" class="frame_middle" name="ShelfNo" value="@item.${STR.upperFirstLetter(config.table.pkColumn)}"  />
</td>
    `;
  }else{
       batchSelect.batchSelectLabel="";
       batchSelect.batchSelectValue="";
  }

  return batchSelect;
}

function getOperation(config){

let operation ={

};
 if(config.operations.length>0){
   operation.operationLabel="<td>操作</td>"
   let content="";
   config.operations.forEach(x=>{
       content+=`<a href="javascript:void(0)" onclick="${x.function}">${x.lable}</a>`
   });

   operation.operationValue=`<td>${content}</td>`;
   
 }else{
        operation.operationLabel="";
        operation.operationValue="";
 }

 return operation;
}

exports.renderIndex = renderIndex;