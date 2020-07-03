const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { FILE } = require("./../libs/file");

const builderRender = new SimpleRender({}, `./templates/builder.js`);
const builderItemRender = new SimpleRender({}, `./templates/builderItem.js`);

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

exports.builderGenerator =main;

/******************************************main**********************************8888 */
main(
        "DataSourceConfig",
        ["host", "port", "db", "user", "password"]
);
