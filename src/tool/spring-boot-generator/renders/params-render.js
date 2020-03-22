const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { STR } = require("./../../../libs/str");
const { renderParamsGetterSetterItem } = require("./params-item-getter-setter-render");
const { renderParamsReqGetterItem } = require("./params-req-getter-item-render");
const { ARRAY } = require("../../../libs/utils");

const PARAMS_RENDER = new SimpleRender({}, `${__dirname}/templates/params.java`);

function renderParams(config, reqType) {
        let reqGetter = "";
        let getSet = "";
        let constructorContent = "";
        let constructorParams = "";
        config = config.filter(x => x.source);
        let map = ARRAY.groupBy(config, x => x.source);
        map.forEach((value, key) => {
                if (key == "req") {
                        value.forEach(x => {
                                x.name = STR.upperFirstLetter(x.name);
                                delete x.t;
                                reqGetter += renderParamsReqGetterItem(x);
                        });
                } else if (key == "constructor") {
                        value.forEach(x => {
                                delete x.t;
                                getSet += renderParamsGetterSetterItem(x);
                                constructorContent += `        this.${x.name} = ${x.name};\r\n`
                                constructorParams += `${x.type} ${x.name}, `;
                        });
                } else {
                        value.forEach(x => {
                                delete x.t;
                                getSet += renderParamsGetterSetterItem(x);
                                constructorContent += `        this.${x.name} = user;\r\n`
                                constructorParams += `${x.type} user, `;
                        });
                }
        });

        if (reqType) {
                constructorContent += `        this.req = req`;
                constructorParams += `${reqType} req`;
                getSet += `    private ${reqType} req;\r\n`;
        }

        constructorParams = STR.removeLastComa(constructorParams);

        return PARAMS_RENDER.renderTemplate({
                constructorParams,
                getSet,
                constructorContent,
                reqGetter: reqGetter.trimRight() + "\r\n"
        });
}

exports.renderParams = renderParams