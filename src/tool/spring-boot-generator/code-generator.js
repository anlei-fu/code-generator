/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-13 09:42:51
 */
const { FILE } = require("../../libs/file")
const { OBJECT } = require("../../libs/utils")
const { STR } = require("../../libs/str")
const { NamingStrategy } = require("../../libs/naming-strategy")
const { isSimpleJavaType, getJavaType } = require("./utils")

const ident1 = "  ";
const ident3 = "      ";
const ident4 = "        "

class Field {
        constructor() {
                this.name = "";
                this.type = "";
                this.description = "";
                this.validates = [""];
        }
}

/**
 * Join properties
 */
class Join {
        constructor() {
                this.includes = [];
                this.conditions = [];
                this.alias = "";
                this.joinCondition = "";
        }
}

/**
 * Req properties
 */
class Req {
        constructor() {
                this.name = "";
                this.description = "";
                this.exlcludes = new Set();
                this.type = "";
                this.doCreate = false;
                this.fields = [new Field()];
                this.page = false;
        }
}

/**
 * Params properties
 */
class Params {
        constructor() {
                this.name = "";
                this.description = "";
                this.req = new Req();
                this.fields = [new Field()];
                this.defaultValues = new Map();
        }
}

/**
 * Resp properties
 */
class Resp {
        constructor() {
                this.name = "";
                this.description = "";
                this.doCreate = false;
                this.single = false;
        }
}

/**
 * Controller properties
 */
class Controller {
        constructor() {
                this.path = "";
                this.description = "";
        }
}

/**
 * Config properties
 */
class Config {
        constructor() {
                this.id = "";
                this.type = "";
                this.table = {};
                this.includes = [];
                this.conditions = [];
                this.joins = [new Join()];
                this.noController = false;
                this.noService = false;
                this.controller = new Controller();
                this.reqs = [new Req()];
                this.resp = new Resp();
                this.params = new Params();
        }
}

/**
 * GeneratorConfig properties
 */
class GeneratorConfig {
        constructor() {
                this.controlerFolder = "";
                this.mapperFolder = "";
                this.mapperConfigFolder = "";
                this.reqFolder = "";
                this.respFolder = "";
                this.serviceFolder = "";
                this.serviceImplFolder = "";
                this.project = "";
                this.entityFolder = "";
                this.items = [new Config()];
        }
}

/**
 *  Genearte web project with spring-boot, mysql, mybatis, vue, ivue and  maven 
 */
class Generator {

        /**
         * 
         * @param {GeneratorConfig} config 
         */
        constructor(config) {
                this.config = config;
                this.mapper = [];
                this.mapperConfig = [];
                this.service = [];
                this.serviceImpl = [];
                this.controller = [];
        }

        /**
         * Write all files
         * 
         * @param {Config} config 
         * @returns {String}
         */
        writeAll() {
                this.initTable(this.config.table);
                this.config.items.forEach(x => {
                        if (x.joins) {
                                x.joins.forEach(join => {
                                        this.initTable(join.table);
                                });
                        }
                        this.initConfig(x);
                        this.getControllerItem(x);
                        this.getMapperItem(x);
                        this.getServiceImplItem(x);
                        this.getServiceItem(x);
                        this.writeReq(x);
                        this.writeResp(x);
                        if (x.params)
                                this.writeParams(x);
                        this.writeEntity();
                        this.writeMapper();
                        this.writeController();
                        this.writeMapperConfig();
                        this.writeService();
                        this.writeServiceImpl();
                });
        }

        /**
         * 
         * @param {Config} config 
         */
        initConfig(config) {
                config.reqs.forEach(x => {
                        if (x.doCreate) {
                                x.name = x.name || config.id + "Req";
                                x.description = x.description || "";
                        }
                });

                if (config.resp.doCreate) {
                        config.resp.name = config.resp.name || config.id + "Resp";
                        config.resp.description = config.resp.description || "";
                }

                if (config.params) {
                        config.params.name = config.params.name || config.id + "Params";
                        config.params.description = config.params.description || "";
                }
        }

        initTable(table) {
                OBJECT.forEach(table.columns, (key, value) => {
                        table.columns[key].type = getJavaType(value.type);
                });
        }

        writeEntity() {
                var entity = {};
                entity.name = STR.upperFirstLetter(this.config.table.name);
                entity.description = this.config.table.description;
                entity.fields = OBJECT.toArray(this.config.table.columns);
                this._writeEntity(this.config.entityFolder, entity);
        }

        /**
         * Write req file
         * 
         * 
         * @param {Config} config 
         * @returns {String}
         */
        writeReq(config) {
                config.reqs.forEach(x => {
                        if (x.doCreate) {

                                let items = config.type == "insert" ? this._getIncludes(config) : this._getConditions(config);
                                if (x.excludes)
                                        items.filter(item => !x.exlcludes.has(item.name));

                                x.fields = x.fields ? x.fields.concat(items) : items;

                                x.fields.forEach(field => {
                                        if (field.required) {
                                                if (!field.validates) {
                                                        field.validates = ["@NotNull"];
                                                } else {
                                                        field.validates.push("@NotNull");
                                                }
                                        }
                                });

                                this._writeEntity(this.config.reqFolder, x);
                        }
                });
        }

        /**
         * Write resp file
         * 
         * @param {Config} config 
         * @returns {String}
         */
        writeResp(config) {
                if (config.type == "select") {
                        if (config.resp.doCreate) {
                                config.resp.fields = this._getIncludes(config);
                                this._writeEntity(this.config.respFolder, config.resp);
                        }
                }
        }

        /**
         * Write param file
         * 
         * @param {Config} config 
         * @returns {String}
         */
        writeParams(config) {
                let constructorContent = "";
                let fields = "";
                let constructParams = this._getReqParams(config);
                let getters = "";
                let hasDate = false;
                config.params.fields.forEach(x => {
                        fileds += `private ${x.type} ${x.name};\r\n`;
                        constructParams += `${x.type} ${x.name}, `;
                        constructorContent += `this.${x.name}=${x.name};\r\n`;

                        if (!isSimpleJavaType(x.type)) {
                                x.fields.forEach(field => {
                                        if (x.type == "Date")
                                                hasDate = true;

                                        getters += FILE.read("./templates/param-getter-item.java")
                                                .replace(/@name/g, field.name)
                                                .replace("@type", field.type)
                                                .replace("@reqName", x.name);
                                });
                        } else {
                                if (x.type == "Date")
                                        hasDate = true;

                                getters += FILE.read("./templates/param-getter-item2.java")
                                        .replace(/@name/g, x.name)
                                        .replace("@type", x.type);
                        }

                });

                constructParams = this._removeLastComa(constructParams);
        }

        /**
         * Write mapper file
         */
        writeMapper() {
                let items=[];
                this.config.items.forEach(x=>{
                  items.push(this.getMapperItem(x));
                });
                let content = FILE.read("./templates/mapper.java")
                        .replace(/@name/g, this.config.name)
                        .replace("@content", this.arrayToString(items));

                FILE.write(`${this.config.mapperFolder}/${this.config.name}Mapper.java`, content);
        }

        /**
         * Write mapper config file
         */
        writeMapperConfig() {
                let items=[];
                this.config.items.forEach(x=>{
                  items.push(this.getMapperConfigItem(x));
                });
                let content = FILE.read("./templates/mapper.xml")
                        .replace(/@name/g, this.config.name)
                        .replace("@content", this.arrayToString(items));

                FILE.write(`${this.config.mapperConfigFolder}/${this.config.name}Mapper.xml`, content);
        }

        /**
         * 
         * @param {[String]} array 
         */
        arrayToString(array) {
                let ret = "";
                array.forEach(x => {
                        ret += x;
                });
                
                return ret;
        }

        /**
         * Write controller file
         */
        writeController() {
                let items = [];
                this.config.items.forEach(x => {
                        items.push(this.getControllerItem(x));
                });

                let content = FILE.read("./templates/controller.java")
                        .replace(/@name/g, this.config.name)
                        .replace("@content", this.arrayToString(items))
                        .replace("@description", this.config.table.description);

                FILE.write(`${this.config.controlerFolder}/${this.config.name}Controller.java`, content);
        }

        /**
         * Write service file
         */
        writeService() {
                let items = [];
                this.config.items.forEach(x => {
                        items.push(this.getServiceItem(x));
                });

                let content = FILE.read("./templates/service.java")
                        .replace(/@name/g, this.config.name)
                        .replace("@content", this.arrayToString(items));

                FILE.write(`${this.config.serviceFolder}/${this.config.name}Service.java`, content);
        }

        /**
         * Write service impl file
         */
        writeServiceImpl() {
                let items=[];
                this.config.items.forEach(x=>{
                   items.push(this.getServiceImplItem(x));
                });
                let content = FILE.read("./templates/serviceImpl.java")
                        .replace(/@name/g, this.config.name)
                        .replace("@content", this.arrayToString(items));

                FILE.write(`${this.config.serviceImplFolder}/${this.config.name}ServiceImpl.java`, content);
        }

        /**
         * Get mapper interface item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getMapperItem(config) {

                // get mapper params
                let mapperParams = "";
                if (!config.params) {
                        config.reqs.forEach(x => {
                                mapperParams += `@Params("${x.name}") ${x.type} ${x.name}, `;
                        });

                        mapperParams = this._removeLastComa(mapperParams);
                } else {
                        mapperParams = `${Str.upperFirstLetter(config.params.name)} params`;
                }

                // get return type
                let mapperReturnType = "";
                if (config.type == "select") {
                        if (config.resp.single) {
                                mapperReturnType = config.resp.doCreate
                                        ? STR.upperFirstLetter(config.resp.name)
                                        : STR.upperFirstLetter(this.config.table.name);
                        } else {
                                mapperReturnType = config.resp.doCreate
                                        ? `List<${STR.upperFirstLetter(config.resp.name)}>`
                                        : `List<${STR.upperFirstLetter(this.config.table.name)}>`;
                        }
                } else {
                        mapperReturnType = "int";
                }

                return FILE.read("./templates/mapper-item.java")
                        .replace("@name", config.id)
                        .replace("@mapperReturnType", mapperReturnType)
                        .replace("@mapperParams", mapperParams);
        }

        /**
         * Get mapper config item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getMapperConfigItem(config) {
                switch (config.type) {
                        case "insert": return this._renderInsert(config);
                        case "update": return this._renderUpdate(config);
                        case "delete": return this._renderDelete(config);
                        default: return this._renderSelect(config);
                }
        }

        /**
         * Get service interface item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getServiceItem(config) {
                let serviceParams = this._getReqParamsWithType(config);

                // get return type
                let serviceReturnType = "";
                if (config.type == "select") {
                        if (config.resp.single) {
                                serviceReturnType = config.resp.doCreate
                                        ? STR.upperFirstLetter(config.resp.name)
                                        : STR.upperFirstLetter(this.config.table.name);
                        } else {
                                serviceReturnType = config.resp.doCreate
                                        ? `PageInfo<${STR.upperFirstLetter(config.resp.name)}>`
                                        : `PageInfo<${STR.upperFirstLetter(this.config.table.name)}>`;
                        }
                } else {
                        serviceReturnType = "boolean";
                }

                return FILE.read("./templates/service-item.java")
                        .replace("@serviceParams", serviceParams)
                        .replace("@serviceReturnType", serviceReturnType)
                        .replace(/@name/g, config.id);
        }

        /**
         * Get service impl item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getServiceImplItem(config) {
                let serviceParams = this._getReqParamsWithType(config);
                let suffix="";

                // get return type
                let serviceReturnType = "";
                if (config.type == "select") {
                        if (config.resp.single) {
                                serviceReturnType = config.resp.doCreate
                                        ? STR.upperFirstLetter(config.resp.name)
                                        : STR.upperFirstLetter(this.config.table.name);
                        } else {
                                serviceReturnType = config.resp.doCreate
                                        ? `PageInfo<${STR.upperFirstLetter(config.resp.name)}>`
                                        : `PageInfo<${STR.upperFirstLetter(this.config.table.name)}>`;
                        }
                } else {
                        serviceReturnType = "boolean";
                        suffix=" > 0";
                }

                let content = "";
                if (config.params)
                        this._getServiceImplContent(config);

                let serviceMapperParams = config.param ? "params" : this._getReqParams(config);

                let ret= FILE.read("./templates/serviceImpl-item.java")
                        .replace(/@name/g, config.id)
                        .replace("@serviceImplParams", serviceParams)
                        .replace("@serviceMapperParams", serviceMapperParams)
                        .replace("@serviceImplReturnType", serviceReturnType)
                        .replace("@suffix",suffix)
                        .replace("@content", content);
                
                        return STR.removeEmptyLine(ret)+"\r\n";
        }

        /**
         * Get controller item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getControllerItem(config) {

                // is generate controller

                let controllerParams = this._getControllerParams(config)
                        , httpMapping = this._getHttpMapping(config)
                        , serviceParams = this._getReqParams(config)
                        , description = config.controller.description || ""
                        , controllerReturnType = this._getControllerReturnType(config);


                return FILE.read("./templates/controller-item.java")
                        .replace(/@name/g, config.id)
                        .replace("@httpMapping", httpMapping)
                        .replace("@controllerReturnType", controllerReturnType)
                        .replace("@serviceParams", serviceParams)
                        .replace("@description", description)
                        .replace("@controllerParams", controllerParams);
        }

        /**
         * Write req or resp file 
         * 
         * @private
         * @param {String} folder 
         * @param {Req} entity 
         */
        _writeEntity(folder, entity) {
                let template = FILE.read("./templates/entity.java")
                        , content = ""
                        , header = ""
                        , hasDate = false
                        , validates = "";

                entity.fields.forEach(x => {
                        let field = FILE.read("./templates/entity-item.java");
                        if (x.type == "Date")
                                hasDate = true;

                        if (x.validates) {
                                x.validates.forEach(validate => {
                                        validates += validate + "\r\n";
                                });
                        }

                        field = field.replace("@name", x.name)
                                .replace("@type", x.type)
                                .replace("@description", x.description)
                                .replace("@validates", validates);

                        content += STR.removeEmptyLine(field) + "\r\n";
                });

                template = template.replace("@header", header)
                        .replace("@description", entity.description)
                        .replace("@name", entity.name)
                        .replace("@content", content.trimRight() + "\r\n");

                FILE.write(`${folder}/${entity.name}.java`, template);
        }

        /**
         * Get controler params 
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getControllerParams(config) {
                let params = "";
                config.reqs.forEach(x => {
                        params += isSimpleJavaType(x.type)
                                ? `${x.from} ${x.type} ${x.name}, `.trimLeft()
                                : `${x.from} @Validated @ModelAttribute ${x.type} ${x.name}, `.trimLeft();
                });

                return this._removeLastComa(params);
        }

        /**
         * Get http mapping annotation
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getHttpMapping(config) {
                let mapping = "";
                if (config.type == "select") {
                        mapping = "GetMapping";
                } else if (config.type == "update") {
                        mapping = "PutMapping";
                } else if (config.type == "delete") {
                        mapping = "DeleteMapping";
                } else {
                        mapping = "PostMapping";
                }

                let path = config.controller.path || `/${this.config.table.name}/${config.id}`;

                return `${mapping}(path="${path}")`;
        }

        /**
         * Trim end and remove last coma of pattern
         * 
         * @private
         * @param {String} pattern 
         * @returns {String}
         */
        _removeLastComa(pattern) {
                return STR.removeLastComa(pattern);
        }


        /**
         * Get req params with type field
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getReqParamsWithType(config) {
                let params = "";
                config.reqs.forEach(x => {
                        params += `${x.type} ${x.name}, `;
                });

                return this._removeLastComa(params);
        }

        /**
         * Get req params
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getReqParams(config) {
                let params = "";
                config.reqs.forEach(x => {
                        params += `${x.name}, `;
                });

                return this._removeLastComa(params);
        }

        /**
         * Get service impl content 
         * if params ,create instance and set default values
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getServiceImplContent(config) {
                let content = `${config.params.name} params = new ${config.params.name}(@params)`;
                content = content.replace("@params", this._getReqParams(config));
                if (config.params.defaultValues) {
                        config.params.defaultValues.forEach((value, key) => {
                                content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                        });
                }

                return content;
        }

        /**
         * Get serviceImpl's mapper params
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getServiceImplMapperParams(config) {
                return config.params ? "params" : this._getReqParams(config);
        }

        /**
         * Get controller return type
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getControllerReturnType(config) {
                if (config.type != "select")
                        return "R";

                // single or page info
                if (config.resp.single) {
                        return config.resp.doCreate
                                ? `R<${STR.upperFirstLetter(config.resp.name)}>`
                                : `R<${STR.upperFirstLetter(this.config.table.name)}>`;
                } else {
                        return config.resp.doCreate
                                ? `R<PageInfo<${STR.upperFirstLetter(config.resp.name)}>>`
                                : `R<PageInfo<${STR.upperFirstLetter(this.config.table.name)}>>`;
                }
        }

        /**
         * Render insert statement
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderInsert(config) {
                let columns = "(";
                let properties = "(";
                this._getIncludes(config).forEach(x => {
                        columns += x.required
                                ? this._renderColumn(x, ",", ident3) :
                                this._renderIfColumn(x, ",", ident3);

                        properties += x.required
                                ? this._renderProperty(x, ",", ident3) :
                                this._renderIfProperty(x, ",", ident3);
                });

                let content = FILE.read("./templates/insert.xml");
                content = this._renderTrim(content, columns, "@columns");
                content = this._renderTrim(content, properties, "@properties");

                return this._finalReplace(config, content);
        }

        /**
         * Render delete statement
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderDelete(config) {
                let conditions = "";
                this._getConditions(config).forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let content = FILE.read("./templates/delete.xml");
                content = this._renderWhere(content, conditions);

                return this._finalReplace(config, content);
        }

        /**
         * Render update statement
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderUpdate(config) {
                let columns = "";
                this._getIncludes(config).forEach((x, i, array) => {
                        columns += x.required
                                ? i == array.length - 1 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "", ",", ident3)
                                : i == array.length - 1 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "", ",", ident3);

                });

                let conditions = "";
                this._getConditions(config).forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let content = FILE.read("./templates/update.xml");
                content = this._renderSet(content, columns);
                content = this._renderWhere(content, conditions);

                return this._finalReplace(config, content);
        }

        /**
         * Render select statement
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderSelect(config) {
                let columns = "";
                this._getIncludes(config).forEach(x => {
                        columns += this._renderColumn(x, ",", ident3);
                });

                // join alias
                let conditions = "";
                this._getConditions().forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let joins = "";
                if (config.joins)
                        joins = this._renderJoins(config.joins);

                let content = FILE.read("./templates/select.xml")
                        .replace("@joins", joins);

                content = this._renderTrim(content, columns, "@columns");
                content = this._renderWhere(content, conditions);

                return this._finalReplace(config, content);
        }

        /**
         * 
         * @param {String} content 
         * @param {*} items 
         */
        _renderSet(content, items) {
                return items.indexOf("</if>") != -1
                        ? content.replace("@set", FILE.read("./templates/set.xml").replace("@content", items))
                        : content = content.replace("@set", items);
        }

        /**
         * Render trim segment
         * 
         * @param {String} content 
         * @param {String} columns 
         * @param {String} pattern
         * @returns {String} 
         */
        _renderTrim(content, columns, pattern) {
                if (columns.indexOf("</if>") != -1) {
                        let trim = FILE.read("./templates/trim.xml");
                        if (columns.indexOf("(") == -1) {
                                trim = trim.replace("@prefix", "")
                                        .replace("@suffix", "");
                        } else {
                                trim = trim.replace("@prefix", " prefix=\"(\"")
                                        .replace("@suffix", " suffix=\")\"");
                                columns = columns.replace("(", "");
                        }

                        content = content.replace(pattern, trim.replace("@content", columns));
                }
                else {
                        if (columns.length != 0) {
                                columns = columns.trimRight();
                                columns = columns.substr(0, columns.length - 1);

                                if (columns.indexOf("(") != -1)
                                        columns += ")";
                        }
                        content = content.replace(pattern, columns);
                }

                return content;
        }

        /**
         * Render where segment
         * 
         * @private
         * @param {String} content 
         * @param {String} conditions 
         * @returns {String}
         */
        _renderWhere(content, conditions) {
                if (conditions.indexOf("</if>") != -1) {
                        content = content.replace("@where",
                                FILE.read("./templates/where.xml").replace("@content", conditions));
                } else {
                        conditions = conditions.trimLeft();
                        content = content.replace("@where", ident1 + "where\r\n" + ident4 + conditions);
                }

                return content;
        }

        /**
         * 
         * @private
         * @param {String} content 
         * @returns {String}
         */
        _finalReplace(config, content) {
                return STR.removeEmptyLine(content)
                        .replace("@id", config.id)
                        .replace("@tableName",
                                NamingStrategy.toHungary(config.table.name).toLowerCase())
        }

        /**
         * Render if column expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix 
         */
        _renderIfColumn(column, suffix = ",", ident) {
                return column.alias
                        ? `${ident}<if test="${column.name} != null">\r\n${ident}  ${column.rawName} as ${column.alias}${suffix}\r\n${ident}</if>\r\n`
                        : `${ident}<if test="${column.name} != null">\r\n${ident}  ${column.rawName}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render if property expression
         * 
         * @private
         * @param {String} property 
         * @param {String} suffix 
         * @returns {String}
         */
        _renderIfProperty(column, suffix, ident) {
                return `${ident}<if test="${column.name} != null">\r\n${ident}  #{${column.name}}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render if assign expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderIfAsign(column, prefix = "and", suffix = ",", ident) {
                return `${ident}<if test="${column.name} != null">\r\n${ident}  ${prefix}${column.rawName} = #{${column.name}}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render assign expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderAsign(column, prefix = "and", suffix = ",", ident) {
                return `${ident}  ${prefix}${column.rawName} = #{${column.name}}${suffix}\r\n`;
        }

        /**
         * Render column field
         * 
         * @private
         * @param {Column} column 
         * @param {String} suffix 
         * @returns {String}
         */
        _renderColumn(column, suffix = ",", ident) {
                return column.alias ? `${ident}  ${column.rawName} as ${column.alias}${suffix}\r\n`
                        : `${ident}  ${column.rawName}${suffix}\r\n`;
        }

        /**
         * Render property field
         * 
         * @private
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderProperty(column, suffix = ",", ident) {
                return `${ident}  #{${column.name}}${suffix}\r\n`;
        }

        /**
         * Render joins
         * 
         * @private
         * @param {[Joins]} joins 
         * @returns {String}
         */
        _renderJoins(joins) {
                let output = "";
                joins.forEach(x => {
                        output += this._renderJoin(x);
                });

                return output;
        }

        /**
         * Render join 
         * 
         * @private
         * @param {Join} join
         * @returns {String} 
         */
        _renderJoin(join) {
                return join.alias ? `${ident1}${join.type} join ${this._getRawName(join.table1)} as ${join.alias} on ${join.joinCondition}`
                        : `${ident1}${join.type} join ${this._getRawName(join.table1)} on ${join.joinCondition}`;
        }

        /**
         * Get all select columns ,or update columns ,or insert columns
         * 
         * @private
         * @returns {[Column]}
         */
        _getIncludes(config) {
                return this._getItems(config, false);
        }

        /**
         * Get all codition columns
         * 
         * @private
         * @returns {[Column]}
         */
        _getConditions(config) {
                return this._getItems(config, true);
        }

        /**
         * If is {isCondition} is true ,return all condition columns 
         * ,or select columns, or update columns
         * 
         * @private
         * @param {Config} config
         * @param {boolen} isCondition 
         * @returns {[Column]}
         */
        _getItems(config, isCondition = false) {
                console.log(Object.keys(config));
                let columns = [];
                if (isCondition) {
                        this._merge(columns, this._getColumns(this.config.table, config.conditions, true));
                } else {
                        this._merge(columns, this._getColumns(this.config.table, config.includes));
                }

                // if type is "select" and has join option
                if (config.joins) {
                        config.joins.forEach(join => {
                                if (isCondition) {
                                        this._merge(columns, this._getColumns(join.table1, join.conditions, true))
                                } else {
                                        this._merge(columns, this._getColumns(join.table1, join.includes))
                                }
                        });
                }

                return columns;
        }

        /**
         * Append array2's elements into array1, avod empty array concat 
         * another array cause type change to [[]]
         * 
         * @private
         * @param {[]} array1 
         * @param {[]} array2 
         */
        _merge(array1, array2) {
                array2.forEach(x => {
                        array1.push(x);
                });
        }

        /**
         * Find all columns by giving column names from table
         * 
         * @private
         * @param {Table} table 
         * @param {[String]} columnNames 
         * @returns {[Column]}
         */
        _getColumns(table, columnNames = [], isCondition = false) {
                let columns = [];
                columnNames.forEach(x => {
                        let column = this._getColumn(table, x);
                        column.required = isCondition ? x.required
                                : this.config.type == "insert" || this.type == "update" ? !column.nullable : x.required;

                        // set properties giving by config "x"
                        column.alias = x.alias;
                        column.rawName = this._getRawName(table, column, x.prefix);
                        columns.push(column);
                });

                return columns;
        }

        /**
         * Find and return column of table or throw not found error
         * 
         * @private
         * @param {Table} table 
         * @param {String|{name:String,required:boolean}} columnName 
         * @returns {Column}
         */
        _getColumn(table, columnName) {
                let name = columnName.name || columnName;
                if (table.columns[name]) {
                        table.columns[name].required = null;
                        table.columns[name].alias = null;
                        return table.columns[name];
                }

                throw new Error(`column(${columnName}) can not be found in table(${table})`);
        }

        /**
         * Return raw table name or raw table.column
         * 
         * @private
         * @param {String} table 
         * @param {Column} column 
         * @returns {String}
         */
        _getRawName(table, column, prefix) {
                return !column ? NamingStrategy.toHungary(table.name).toLowerCase()
                        : prefix ? `${prefix}.${NamingStrategy.toHungary(column.name)}`
                                : `${NamingStrategy.toHungary(table.name).toLowerCase()}.${NamingStrategy.toHungary(column.name)}`;
        }
}

module.exports = {
        Config,
        GeneratorConfig,
        Join,
        Req,
        Resp,
        Params,
        Controller,
        Generator
}
