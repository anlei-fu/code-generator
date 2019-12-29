const { getIncludes } = require("./../includes-getter");
const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { renderColumn } = require("./column-render");
const { renderProperty } = require("./property-render");
const { renderTrim } = require("./trim-render");

const INSERT_RENDER = new SimpleRender({}, `${__dirname}/templates/insert.xml`);

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
        getIncludes(config).forEach(x => {
                columns += renderColumn(x);
                properties += renderProperty(x);
        });

        let insertModel = {
                id: config.id,
                columns: renderTrim({ content: columns, suffix: ")", prefix: "(" }),
                properties: renderTrim({ properties: properties, suffix: ")", prefix: "(" }),
        }

        return INSERT_RENDER.renderTemplate(insertModel);
}

exports.renderInsert = renderInsert;