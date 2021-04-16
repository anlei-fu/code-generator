const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { ReqUtils } = require("../ReqUtils");
const { ConfirItemUtils } = require("./../ConfigItemUtils");
const { STR ,FILE} = require("../../../libs");
const { ConfigGroup } = require("./../builders/ConfigGroup");
const { ConfigItem } = require("./../builders/ConfigItem");

const SERVICE_ITEM_CONTENT = FILE.read(`${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-item.java`);
const SERVICE_IMPL_PAGE_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl-page.java`);
const SERVICE_IMPL_RENDER = new SimpleRender({}, `${__dirname}/templates/serviceImpl.java`);

class ServiceImplRender {
        /**
         * Render service impl template
         * 
         * @param {ConfigGroup} configGroup 
         * @returns {String}
         */
        renderServiceImpl(configGroup) {
                let content = "";
                configGroup.items.forEach(configItem => {
                        let item = this._getMethodConfig(configItem, configGroup.name);

                        if (configItem.type != "select" ||
                                (configItem.type == "select" && (configItem.resp.single || configItem.resp.list))
                        ) {
                                let template =SERVICE_ITEM_CONTENT;
                                if(configItem.id =="add"){
                                     template =template.replace("@snameMapper.@methodName(@mapperArgs)@suffix;","add(req);");
                                }else if(configItem.id == "update"){
                                        template =template.replace("@snameMapper.@methodName(@mapperArgs)@suffix;","update(req);");
                                }else if(configItem.id.startsWith("deleteBy")){
                                        template =template.replace("@snameMapper.@methodName(@mapperArgs)@suffix;","delete(id);");
                                }else if(configItem.id.startsWith("getBy")){
                                        template =template.replace("@snameMapper.@methodName(@mapperArgs)@suffix;","getById(id);");
                                }

                                content += STR.removeEmptyLine(SERVICE_IMPL_ITEM_RENDER.renderContent(template,item)) + "\r\n";
                                return;
                        }

                        content += STR.removeEmptyLine(SERVICE_IMPL_PAGE_ITEM_RENDER.renderTemplate(item)) + "\r\n";
                });

                content = content.trimRight() + "\r\n";
                return SERVICE_IMPL_RENDER.renderTemplate({
                        name: configGroup.name,
                        content,
                        sname: STR.lowerFirstLetter(configGroup.name)
                });
        }

        /**
         * Get service impl item config
         *  public @serviceImplReturnType  @name(@serviceImplParams){
         *         @content
         *       return @mapper(@serviceImplMapperParams)@suffix;
         *  }
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {String} tableName
         * @returns {String}
         */
        _getMethodConfig(configItem, tableName) {
                return {
                        methodName: configItem.id,
                        args: ReqUtils.generateReqArgsWithType(configItem),
                        returnType: ConfirItemUtils.getServiceReturnType(configItem, tableName),
                        mapperArgs: configItem.params.doCreate
                                ? "params" : ReqUtils.generateReqArgsWithoutType(configItem),

                        suffix: configItem.type != "select" ? ReqUtils.hasBatchReq(configItem) ? "" : " > 0" : "",
                        content: !configItem.params.doCreate ? "" : this._renderMethodContent(configItem),
                        sname: STR.lowerFirstLetter(tableName)
                };
        }

        /**
         * Render service impl content  template
         * if params ,create instance and set default values
         * 
         * @private
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _renderMethodContent(configItem) {
                let content = "";
                if (!ReqUtils.hasBatchReq(configItem) || configItem.type == "update") {
                        content = `${configItem.params.type} params = new ${configItem.params.type}(@params);`;
                        content = content.replace(
                                "@params",
                                ReqUtils.generateReqArgsWithoutType(configItem)
                        );

                        // if has default values, generate set expression
                        if (configItem.params.defaultValues) {
                                configItem.params.defaultValues.forEach((value, key) => {
                                        content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                                });
                        }

                        return content;
                } else {
                        let reqTypeAndName = ReqUtils.getDoCreateReqNameAndType(configItem);
                        content = `List<${configItem.params.type}> params = new LinkedList<>();\r\n`;
                        content += `        for ( final ${reqTypeAndName.type} item : ${reqTypeAndName.name}) {\r\n                params.add(new ${configItem.params.type}(@params)); \r\n        }`;
                        content = content.replace("@params",
                                ReqUtils.generateReqArgsWithoutType(configItem).replace(reqTypeAndName.name, "item"));

                }

                return content;
        }

}

exports.ServiceImplRender = ServiceImplRender;