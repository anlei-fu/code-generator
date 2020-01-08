const { getIncludes } = require("./../includes-getter");
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderColumn } = require("./column-render");
const { renderProperty } = require("./property-render");
const { renderTrim } = require("./trim-render");
const { LOWER_INCLUDES_ANY_MATCHER } = require("./../matchers");
const { OBJECT } = require("./../../../libs/utils");
const { STR } = require("./../../../libs/str");
const { NamingStrategy } = require("./../../../libs/naming-strategy");
const { getJavaType } = require("./../utils");

const INSERT_RENDER = new SimpleRender({}, `${__dirname}/templates/insert.xml`);

const INSERT_TIME_MATCHERS = x => LOWER_INCLUDES_ANY_MATCHER(x, [
        "createtime",
        "createdate",
        "inserttime",
        "insertdate"
]);


/**
 * Render insert sql template
 * 
 * @private
 * @param {Config} config
 * @returns {String}
 */
function renderInsert(config) {
        let columns = "";
        let properties = "";
        let includes = getIncludes(config);
        let createTime = getInsertTime(config.table);
        if (createTime) {
                createTime.column = (config.alias || NamingStrategy.toHungary(config.table.name).toLowerCase()) + "."
                        + NamingStrategy.toHungary(createTime.name).toLowerCase();
                includes.push(createTime);
        }

        includes.forEach((x, i, array) => {
                x.suffix = i == array.length - 1 ? "" : ",";
                columns += renderColumn(x);
                properties += renderProperty(x);
        });

        properties = properties.replace("#{createTime}", "current_timestamp");

        let parameterType;
        if (config.params.doCreate) {
                parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
        } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
        }

        let insertModel = {
                alias:config.alias||"",
                id: config.id,
                columns: renderTrim({ content: columns, suffix: ")", prefix: "(" }),
                properties: renderTrim({ content: properties, suffix: ")", prefix: "(" }),
                parameterType: parameterType || ""
        }

        return INSERT_RENDER.renderTemplate(insertModel);
}

function getInsertTime(table) {
        for (const c in table.columns) {
                var type = getJavaType(table.columns[c].type);
                if (type == "Date" && INSERT_TIME_MATCHERS(c))
                        return table.columns[c];
        }
        return null;
}


exports.renderInsert = renderInsert;