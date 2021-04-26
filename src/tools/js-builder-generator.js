const { SimpleRender } = require("../generator/common/renders/SimplePatterRender");
const { FILE } = require("../libs");

const builderRender = new SimpleRender({}, `./templates/builder.js`);
const builderItemRender = new SimpleRender({}, `./templates/builderItem.js`);

/**
 * 
 * @param {String} modelName 
 * @param {[]} items 
 */
function main(modelName, items) {
        let content = "";
        items.forEach(item => {
                content += builderItemRender.renderTemplate({
                        name: item,
                        config: modelName
                });
        });

        content = builderRender.renderTemplate({
                config: modelName,
                content
        });
        FILE.write(`./output/${modelName}Builder.js`, content);
        return content;

}

exports.builderGenerator = main;

/******************************************main**********************************8888 */
main(
        "Select",
        ["name", "enume", "label"]
);
