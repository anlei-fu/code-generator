
const { SimpleRender } = require("../../simple-pattern-render/simple-pattern-render");
const { renderItemSelect } = require("./item-select-render");
const { renderItemText } = require("./item-text-render");
const { renderItemRow } = require("./item-row-render");
const {STR}=require("./../../../libs/str")

const ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/item.html`);


function renderItem(addConfig) {
        let content = "";
        let items = [];
        let requires=[];

        addConfig.selects.forEach(x => {

                items.push(renderItemSelect(x));
                requires.push(`                ${x.name}: { required: true },\r\n`);
        })

        addConfig.texts.forEach(x => {

                if(!x.textArea)
                   requires.push(`                ${x.name}: { required: true },\r\n`);

                x.type=x.textArea?"textArea":"text";
                items.push(renderItemText(x));
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

        let itemConfig={
                content,
                rules:STR.arrayToString(requires).trimRight()
        }
        return ITEM_RENDER.renderTemplate(itemConfig);

}

exports.renderItem = renderItem;