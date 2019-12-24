const {SimpleRender} =require("./../../simple-pattern-render/simple-pattern-render");
const {renderHearders}=require("./headerRender");
const {renderBody}=require("./bodyRender")
const TABLE_RENDER=new SimpleRender({},"./templates/table.html");

function renderTable(config){
    let tableConfig={
            headers:renderHearders(config.headers),
            body:renderBody(config.body)
    }

    return TABLE_RENDER.renderTemplate(tableConfig);
}

exports.renderTable=renderTable;