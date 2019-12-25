
const {SimpleRender} =require("../../simple-pattern-render/simple-pattern-render");
const {OBJECT}=require("./../../../libs/utils")
const ITEM_RENDER=new SimpleRender({},`${__dirname}/templates/entity-item.cs`);
const ENTITY_RENDER=new SimpleRender({},`${__dirname}/templates/entity.cs`);


function renderEntity(config) {
        let content = "";
        OBJECT.forEach(config.table.columns, (key, value) => {
                let itemConfig = {
                        description: value.description,
                        name: value.name,
                        type: getType(value.type)
                };
                content += ITEM_RENDER.renderTemplate(itemConfig);
        });

        let entityConfig = {
                description: config.table.description,
                name: config.name,
                content:content.trimRight()+"\r\n",
                project:config.project,
                prefix:config.prefix || "M",
        }

        return ENTITY_RENDER.renderTemplate(entityConfig);
}

function getType(type){
        return type=="string"?type:type+"?";
}

exports.renderEntity=renderEntity;

