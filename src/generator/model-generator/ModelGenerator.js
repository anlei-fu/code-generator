const { SimpleRender } = require("./../common/renders/SimplePatterRender");

const BUILDER_RENDER = new SimpleRender({}, `${__dirname}/templates/builder.js`);
const BUILDER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/builderItem.js`);

const MODEL_RENDER = new SimpleRender({}, `${__dirname}/templates/model.js`);
const MODEL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/model-item.js`);

class ModelGenerator {

        /**
         * Generate js model builder
         * 
         * @param {string} modelName 
         * @param {[string]} items 
         * @returns {string}
         */
        generateBuilder(modelName, items) {
                let content = "";
                items.forEach(item => {
                        content += BUILDER_ITEM_RENDER.renderTemplate({
                                name: item,
                                config: modelName
                        });
                });
                content = BUILDER_RENDER.renderTemplate({
                        config: modelName,
                        content
                });

                return content;
        }

        /**
         * Generate js model builder
         * 
         * @param {string} modelName 
         * @param {[string]} items 
         * @returns {string}
         */
        generateModel(modelName, items) {
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

                return content;
        }
}

exports.ModelGenerator = ModelGenerator;