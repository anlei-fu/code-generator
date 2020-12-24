const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const {renderExportExcelJs} =require("./export-excel-render");

const JS_RENDER = new SimpleRender({}, `${__dirname}/templates/js.js`);

/**
 * Render index js template
 * 
 * @param {GeneratorConfig} config 
 * @returns {String}
 */
function renderJs(config) {

  let content="";
  if (config.batchOperation)
    content += `
    var batchSelectHelper =new BatchSelectHelper("","");
    batchSelectHelper.bind();
    `;

  if (config.delete)
    content += `
    function _delete(id){
      listPageHelper.delete(id);
 }

    `;

  if (config.add || config.edit)
    content += `
 function add(id){
    listPageHelper.add(id);
 }`;

 if(config.clone)
    content+=`
    function clone(id) {
      listPageHelper.clone(id);
  }
    `;

  if (config.batchDelete) {
        content+=`
        function batchDelete(){
          var ids =batchSelectHelper.getAllIds();
          if(!ids)
            return;

          listPageHelper.confirmAndPost("","");
       }
        `;
  }

  if (config.batchChangeStatus) {
    content+=`
    function batchChangeStatus(){
      var ids =batchSelectHelper.getAllIds();
      if(!ids)
        return;

      listPageHelper.confirmAndPost("","");
   }
    `;
}

  return JS_RENDER.renderTemplate({ content });

}

exports.renderJs = renderJs;