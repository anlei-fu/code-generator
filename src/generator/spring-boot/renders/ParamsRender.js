const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { STR } = require("../../../libs/str");
const { ARRAY } = require("../../../libs/type");

const PARAMS_RENDER = new SimpleRender({}, `${__dirname}/templates/params.java`);
const PARAMS_ITEM_REQ_GETTER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/params-req-getter-item.java`);
const PARAMS_GETTER_SETTER_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/params-item-getter-setter-item.java`);
class ParamRender {

        /**
         * 
         * @param {*} config 
         * @param {*} reqType 
         */
        renderParams(config, reqType) {
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
                                        reqGetter += this._renderParamsReqItemGetterSetter(x);
                                });
                        } else if (key == "constructor") {
                                value=value.reverse();
                                value.forEach(x => {
                                        delete x.t;
                                        getSet += this._renderParamsGetterSetterItem(x);
                                        constructorContent += `        this.${x.name} = ${x.name};\r\n`
                                        constructorParams += `${x.type} ${x.name}, `;
                                });
                        } else {
                                value.forEach(x => {
                                        delete x.t;
                                        getSet += this._renderParamsGetterSetterItem(x);
                                        constructorContent += `        this.${x.name} = user;\r\n`
                                        constructorParams = `${x.type} user, ` + constructorParams;
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

        /**
         * 
         * @private
         * @param {*} config 
         */
        _renderParamsReqItemGetterSetter(config) {
                let model;
                if (config.isList) {
                        model = {};
                        model.name = config.name + "s";
                        model.type = `List<${config.type}>`;
                }
                return PARAMS_ITEM_REQ_GETTER_ITEM_RENDER.renderTemplate(model || config);
        }

        /**
         * 
         * @private
         * @param {*} config 
         */
        _renderParamsGetterSetterItem(config) {
                return PARAMS_GETTER_SETTER_ITEM_RENDER.renderTemplate(config);
        }
}

exports.ParamRender = ParamRender