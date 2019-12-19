const { getIncludes } = require("./../includes-getter");
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderColumn } = require("./column-render");
const { renderProperty } = require("./property-render");
const { renderTrim } = require("./trim-render");


const INSERT_RENDER = new SimpleRender({}, `${__dirname}/templates/insert.xml`);

/**
 * Render insert statement
 * 
 * @private
 * @param {Config} model
 * @returns {String}
 */
function renderInsert(model) {
        let columns = "";
        let properties = "";
        getIncludes(model).forEach(x => {
                columns += renderColumn(x);
                properties += renderProperty(x);
        });

        let insertModel = {
                id: model.id,
                columns: renderTrim({ content: columns, suffix=")", prefix="(" }),
                properties: renderTrim({ properties: properties, suffix=")", prefix="(" }),
        }

        return INSERT_RENDER.renderTemplate(insertModel);
}

exports.renderInsert = renderInsert;