
const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
const { renderItemSelect } = require("./item-select-render");
const { renderItemText } = require("./item-text-render");
const { renderItemRow } = require("./item-row-render");
const { renderItemTextArea } = require("./item-text-area-render");
const { STR } = require("./../../../libs/str")

const ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/item.html`);


function renderItem(addConfig) {
        let content = "";
        let items = [];
        let requires = [];

        addConfig.selects.forEach(x => {
                x.dictionaryServiceName = addConfig.dictionaryServiceName;
                x.dictionaryMethod = addConfig.dictionaryMethod;
                x.upperTowLetter = addConfig.upperTowLetter;
                items.push(renderItemSelect(x));
                requires.push(`                ${x.name}: { required: true },\r\n`);
        })

        addConfig.texts.forEach(x => {

                if (!x.textArea) {
                        requires.push(`                ${x.name}: { required: true },\r\n`);

                        x.type = "text";
                        items.push(renderItemText(x));
                } else {
                        items.push(renderItemTextArea(x));
                }
        });

        if (items.length > 8) {
                for (let i = 1; i < items.length; i++) {
                        if (i % 2 == 0)
                                content += renderItemRow(items[i - 1] + items[i]);
                }

                if (items.length % 2 != 0)
                        content += renderItemRow(items[items.length - 1]);

        } else {
                items.forEach(x => {
                        content += renderItemRow(x);
                });
        }

        let itemConfig = {
                content,
                rules: STR.arrayToString(requires).trimRight()
        }
        return ITEM_RENDER.renderTemplate(itemConfig);

}

exports.renderItem = renderItem;