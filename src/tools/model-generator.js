const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { FILE } = require("./../libs/file");
const { builderGenerator } = require("./builder-generator");

const MODEL_RENDER = new SimpleRender({}, `./templates/model.js`);
const MODEL_ITEM_RENDER = new SimpleRender({}, `./templates/model-item.js`);

function main(modelName, items, withBuilder = true) {
        let content = "";
        items.forEach(item => {
                content += MODEL_ITEM_RENDER.renderTemplate({
                        name: item,
                });
        });

        content = MODEL_RENDER.renderTemplate({
                model: modelName,
                content
        });

        if (withBuilder)
                content += builderGenerator(modelName, items);

<<<<<<< HEAD
        FILE.write(`D:/project/code-generator/src/spider/mock/news/template/${modelName}.js`, content);
=======
        FILE.write(`C:/Users/Administrator/Desktop/Projects/vue-admin/spider/src/lib/chart/${modelName}.js`, content);
>>>>>>> e91563e6312f82450bb2ed2e3cc4a2ff6a189d4f
        return content;

}

/******************************************main**********************************8888*/
main(
<<<<<<< HEAD
        "NewSiteGenerateConfig",
        [
                "name",
                "domain",
                "siteId",
                "testUrl",
                "title",
                "author",
                "date",
                "content",
                "encoding",
                "navSelector",
                "now"
=======
        "Legend",
        [
               


>>>>>>> e91563e6312f82450bb2ed2e3cc4a2ff6a189d4f
        ],
);