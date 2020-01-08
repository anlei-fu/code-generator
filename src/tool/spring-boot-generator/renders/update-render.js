const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderConditions } = require("./conditions-render");
const { renderAsign } = require("./assign-render");
const { renderSet } = require("./set-render");
const { getIncludes } = require("./../includes-getter");
const { LOWER_INCLUDES_ANY_MATCHER } = require("./../matchers");
const {OBJECT} =require("./../../../libs/utils");
const {STR} =require("./../../../libs/str");
const {NamingStrategy} =require("./../../../libs/naming-strategy");
const {getJavaType}  =require("./../utils");

const SET_ITEM_IDENT="            ";
const UPDATE_RENDER = new SimpleRender({}, `${__dirname}/templates/update.xml`);

const UPDATE_TIME_MATCHERS = x => LOWER_INCLUDES_ANY_MATCHER(x, [
        "updatetime",
        "updatedate",
        "editdate",
        "editetime",
        "modifydate",
        "modifytime"
]);

/**
 * Render update sql template
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderUpdate(config) {

        let columns = "";
        getIncludes(config).forEach((x, i, array) => {
                x.prefix = "";
                x.suffix = i == array.length - 1 ? "" : ",";
                columns += renderAsign(x);
        });
        columns+=renderUpdateTime(config.table,config.alias);

        let parameterType;
        if (config.params.doCreate) {
                parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
        } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
        }

        let updateModel = {
                alias:config.alias||"",
                id: config.id,
                set: renderSet({ content: columns }),
                where: renderConditions(config),
                parameterType:parameterType||""
        }

        return UPDATE_RENDER.renderTemplate(updateModel);
}

function renderUpdateTime(table,alias) {
        let content="";
  OBJECT.forEach(table.columns,(columnName,column)=>{
      if(getJavaType(column.type)=="Date"&&UPDATE_TIME_MATCHERS(columnName))
         content=`${SET_ITEM_IDENT}${alias||NamingStrategy.toHungary(table.name).toLowerCase()}`
              +`.${NamingStrategy.toHungary(column.name).toLowerCase()}= current_timestamp,\r\n`;
  });

   return STR.removeLastComa(content);
}

exports.renderUpdate = renderUpdate;
