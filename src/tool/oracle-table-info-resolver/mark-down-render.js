const { FILE } = require("../../libs/file");
const { OBJECT } = require("../../libs/utils");

const { SimpleRender } = require("../simple-pattern-render/simple-pattern-render");

const TABLE_RENDER = new SimpleRender({}, `${__dirname}/templates/table.md`);
const ROW_RENDER = new SimpleRender({}, `${__dirname}/templates/row.md`);

/**
 * Write table infos  with markdown by table metainfos
 * 
 * @param {String} project 
 */
function renderMarkDown(project) {
       const { all } = require(`./outputs/${project}/all.js`);
       let output = "";
       let tables = OBJECT.toArray(all).sort((x, y) => y.name - x.name);
       tables.forEach(table => {
              let columnStr = ""
              OBJECT.forEach(table.columns, (_, column) => {
                     let type = column.type.length
                            ? `${column.type.name}(${column.type.length})`
                            : `${column.type.name}`;

                     columnStr += ROW_RENDER.renderTemplate({
                            name: column.name,
                            isPk: column.isPk + "",
                            nullable: column.nullable,
                            type,
                            description: column.description
                     });
              });

              output += TABLE_RENDER.renderTemplate({
                     name: table.name,
                     description: table.description,
                     content: columnStr
              });
       });

       FILE.write(`${__dirname}/outputs/${project}/all.md`, output);
}

exports.renderMarkDown = renderMarkDown;