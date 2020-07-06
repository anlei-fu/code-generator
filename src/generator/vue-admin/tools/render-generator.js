const { EjsRender } = require("./../../common/renders/EjsRender");
const { FILE } = require("./../../../libs/file");
const { NamingStrategy } = require("./../../../libs/naming-strategy");

/**
 * 
 * @param {[String]} items 
 */
function main(items) {
        let render = new EjsRender("./templates");

        items.forEach(name => {
                let hyphenName = NamingStrategy.toHungary(name)
                        .replace(/_/g, "-")
                        .toLowerCase();

                let content = render.renderContentFromFile(
                        "render.ejs",
                        {
                                name,
                                file: hyphenName + ".ejs"
                        }
                );

                FILE.write(`./../renders/templates/${hyphenName}.ejs`);

                FILE.write(`./../renders/${name}Render.js`, content);
        });
}

/***************************************main************************************************* */
main(
        [
                "Api",
                "Select",
                "Route",
                "PlainText",
                "TextArea",
                "RadioGroup",
                "ListPage",
                "UpdatePage",
                "TimeRange",
                "CheckBox",
                "CheckBoxGroup"
        ]
);