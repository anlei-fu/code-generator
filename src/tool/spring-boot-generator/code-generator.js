/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:39
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 10:53:20
 */
const { FILE } = require("../../libs/file")
const { OBJECT } = require("../../libs/utils")
const { STR } = require("../../libs/str")
const { NamingStrategy } = require("../../libs/naming-strategy")
const { isSimpleJavaType, getJavaType } = require("./utils")

const ident1 = "  ";
const ident3 = "          ";
const ident4 = "            "
const DATE_PACKAGE = "import java.util.Date;";
const HTTP_MAPPINGS = new Map();
HTTP_MAPPINGS.set("select", "GetMapping")
        .set("update", "PutMapping")
        .set("delete", "DeleteMapping")
        .set("insert", "PostMapping");

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
                this.table = {}
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
                this.fields = [new Field()]; // just for write entity
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
                this.name = "";
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

                if (!this.config.name)
                        throw new Error("config name property is required!")

                if (!this.config.table)
                        throw new Error("config table property is required!")

                this.initTable(this.config.table);

                this.config.items.forEach(x => {
                        if (x.joins) {
                                x.joins.forEach(join => {
                                        this.initTable(join.table);
                                });
                        }

                        this.initConfig(x);
                        this.writeReq(x);

                        this.writeResp(x);

                        if (x.params.doCreate)
                                this.writeParams(x);

                        this.writeEntity();
                        this.writeMapper();
                        this.writeMapperConfig();

                        if (!x.noController)
                                this.writeController();

                        if (!x.noService) {
                                this.writeService();
                                this.writeServiceImpl();
                        }

                        this.config.alias = undefined;
                });
        }

        /**
         * Check and set default config if absent
         * 
         * @param {Config} config 
         */
        initConfig(config) {

                if (config.alias)
                        this.config.table.alias = config.alias;

                config.type = config.type || "select";
                config.id = config.id || this.getDefaultId(config);

                if (config.reqs.length == 0)
                        config.reqs = this.getDefaultReqs(config);

                config.reqs.forEach(x => {
                        if (x.doCreate)
                                this.initEntityBasicInfo(config, x, "Req");
                });

                if (config.resp.doCreate)
                        this.initEntityBasicInfo(config, config.resp, "Resp");

                if (config.params.doCreate)
                        this.initEntityBasicInfo(config, config.params, "Params");

                if (!config.noController) {
                        config.controller.path = config.controller.path || `/${STR.lowerFirstLetter(config.name)}/${config.id}`;
                        config.controller.description = config.controller.description || "";
                }

                // set default join type
                if (config.joins) {
                        config.joins.forEach(x => {
                                x.type = x.type || "left";
                        });
                }
        }

        initEntityBasicInfo(config, entity, suffix) {
                entity.type = entity.type || STR.upperFirstLetter(config.id) + suffix;
                entity.description = entity.description || "";
                entity.name = entity.name || suffix.toLowerCase();
        }

        /**
         * Init table columns ,convert 'origin type' to 'java type'
         * 
         * @param {Table} table 
         */
        initTable(table) {
                OBJECT.forEach(table.columns, (key, value) => {
                        table.columns[key].type = getJavaType(value.type);
                });
        }

        /**
         * Write entity file
         */
        writeEntity() {
                var entity = {};
                entity.type = this.config.name;
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

                                if(config.type=="update")
                                        items=items.concat(this._getIncludes(config));

                                if (x.excludes)
                                        items = items.filter(item => !x.excludes.has(item.name));

                                x.fields =items;

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
                let constructParams = this._getReqParamsWithoutType(config);
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

                                        getters += FILE.read(`${__dirname}/templates/param-getter-item.java`)
                                                .replace(/@name/g, field.name)
                                                .replace("@type", field.type)
                                                .replace("@reqName", x.name);
                                });
                        } else {
                                if (x.type == "Date")
                                        hasDate = true;

                                getters += FILE.read(`${__dirname}/templates/param-getter-item2.java`)
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
                this._writeCore(`${this.config.mapperFolder}/${this.config.name}Mapper.java`,
                        null,
                        this.getMapperItem,
                        `${__dirname}/templates/mapper.java`);
        }

        /**
         * Write mapper config file
         */
        writeMapperConfig() {
                this._writeCore(`${this.config.mapperConfigFolder}/${this.config.name}Mapper.xml`,
                        null,
                        this.getMapperConfigItem,
                        `${__dirname}/templates/mapper.xml`);
        }

        /**
         * Write controller file
         */
        writeController() {
                this._writeCore(`${this.config.controllerFolder}/${this.config.name}Controller.java`,
                        null,
                        this.getControllerItem,
                        `${__dirname}/templates/controller.java`);
        }

        /**
         * Write service file
         */
        writeService() {
                this._writeCore(`${this.config.serviceFolder}/${this.config.name}Service.java`,
                        null,
                        this.getServiceItem,
                        `${__dirname}/templates/service.java`);
        }

        /**
         * Write service impl file
         */
        writeServiceImpl() {
                this._writeCore(`${this.config.serviceImplFolder}/${this.config.name}ServiceImpl.java`,
                        null,
                        this.getServiceImplItem,
                        `${__dirname}/templates/serviceImpl.java`);
        }

        /**
         * Get mapper interface item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getMapperItem(config) {
                //  this pointer changed ,should call or apply(this,params)
                //  outter if just pass func(arg) then inner won't know who is this pointer,
                //  function is not a part of instance but 
                // get mapper params
                let mapperParams = "";
                if (!config.params.doCreate) {
                        if (config.reqs.length > 1) {
                                config.reqs.forEach(x => {
                                        mapperParams += `@Params("${x.name}") ${x.type} ${x.name}, `;
                                });
                                mapperParams = this._removeLastComa(mapperParams);
                        } else {
                                mapperParams = `${config.reqs[0].type} ${config.reqs[0].name}`;
                        }

                } else {
                        mapperParams = `${STR.upperFirstLetter(config.params.name)} params`;
                }

                // get return type
                let mapperReturnType = "";
                if (config.type == "select") {
                        if (config.resp.single) {
                                mapperReturnType = config.resp.doCreate
                                        ? STR.upperFirstLetter(config.resp.type)
                                        : this.config.name;
                        } else {
                                mapperReturnType = config.resp.doCreate
                                        ? `List<${STR.upperFirstLetter(config.resp.type)}>`
                                        : `List<${this.config.name}>`;
                        }
                } else {
                        mapperReturnType = "int";
                }

                let patterns = {
                        name: config.id,
                        mapperReturnType,
                        mapperParams
                }

                return this._replaceCore(`${__dirname}/templates/mapper-item.java`, patterns, true)
        }

        /**
         * Get mapper config item, dispatch by "config.type"
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
                                        ? STR.upperFirstLetter(config.resp.type)
                                        : STR.upperFirstLetter(this.config.name);
                        } else {
                                serviceReturnType = config.resp.doCreate
                                        ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>`
                                        : `PageInfo<${STR.upperFirstLetter(this.config.name)}>`;
                        }
                } else {
                        serviceReturnType = "boolean";
                }

                let patterns = {
                        serviceParams,
                        serviceReturnType,
                        name: config.id
                };

                return this._replaceCore(`${__dirname}/templates/service-item.java`, patterns, true);
        }

        /**
         * Get service impl item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getServiceImplItem(config) {
                let serviceImplParams = this._getReqParamsWithType(config)
                        , suffix = "";

                // get return type
                let serviceImplReturnType = "";
                if (config.type == "select") {
                        if (config.resp.single) {
                                serviceImplReturnType = config.resp.doCreate
                                        ? STR.upperFirstLetter(config.resp.type)
                                        : this.config.name;
                        } else {
                                serviceImplReturnType = config.resp.doCreate
                                        ? `PageInfo<${STR.upperFirstLetter(config.resp.type)}>`
                                        : `PageInfo<${this.config.name}>`;
                        }
                } else {
                        serviceImplReturnType = "boolean";
                        suffix = " > 0";
                }

                let content = !config.params.doCreate ? "" : this._getServiceImplContent(config)
                        , serviceImplMapperParams = config.param ? "params" : this._getReqParamsWithoutType(config)
                        , patterns = {
                                name: config.id,
                                serviceImplParams,
                                serviceImplReturnType,
                                serviceImplMapperParams,
                                suffix,
                                content,
                                sname: STR.lowerFirstLetter(this.config.name)
                        };

                let ret = this._replaceCore(`${__dirname}/templates/serviceImpl-item.java`, patterns, true);

                return STR.removeEmptyLine(ret) + "\r\n";
        }

        /**
         * Get controller item
         * 
         * @param {Config} config 
         * @returns {String}
         */
        getControllerItem(config) {
                let controllerParams = this._getControllerParams(config)
                        , httpMapping = this._getHttpMapping(config)
                        , serviceParams = this._getReqParamsWithoutType(config)
                        , description = config.controller.description || ""
                        , controllerReturnType = this._getControllerReturnType(config);

                let patterns = {
                        name: config.id,
                        httpMapping,
                        controllerReturnType,
                        serviceParams,
                        description,
                        controllerParams,
                        sname: STR.lowerFirstLetter(this.config.name)
                };

                return this._replaceCore(`${__dirname}/templates/controller-item.java`, patterns);
        }

        /**
         * Analyze and generate default id
         * 
         * 
         * @param {Config} config 
         */
        getDefaultId(config) {
                let id = "";
                switch (config.type) {
                        case "select":
                                id = "get";
                                break;
                        case "delete":
                                id = "get";
                                break;
                        case "insert":
                                id = "add";
                                break;
                        default:
                                id = "update";
                                break;
                }

                let conditions = this._getConditions(config);
                if (conditions.length == 1) {
                        id += this.config.name + "By"
                        id += STR.upperFirstLetter(conditions[0].name);
                } else if (conditions.length < 4) {
                        conditions.forEach((x, i, array) => {
                                id += i == array.length - 1
                                        ? "And" + STR.upperFirstLetter(x.name)
                                        : STR.upperFirstLetter(x.name);
                        });
                        id += this.config.name + "By"
                }

                return id;
        }

        /**
         * Analyze and generate default req
         * 
         * 
         * @param {Config} config 
         */
        getDefaultReqs(config) {
                let conditions = this._getConditions(config);

                return conditions.length < 3 ? conditions : [{ doCreate: true }];
        }

        /**
         * Analyze and generate default resp config
         * 
         * 
         * @param {Config} config 
         */
        getDefaultResp(config) {
                return config.type == "select" && config.joins ? { doCreate: true } : { doCreate: false };
        }

        /**
         * Write req or resp file 
         * 
         * @private
         * @param {String} folder output folder
         * @param {Req} entity  to write
         */
        _writeEntity(folder, entity) {
                let content = ""
                        , header = ""
                        , validates = "";

                // generate all field items
                entity.fields.forEach(x => {
                        if (x.validates) {
                                x.validates.forEach(validate => {
                                        validates += validate + "\r\n";
                                });
                        }

                        let patterns = {
                                name: x.name,
                                type: x.type,
                                description: x.description,
                                validates
                        };

                        let field = this._replaceCore(`${__dirname}/templates/entity-item.java`, patterns, true);
                        content += STR.removeEmptyLine(field) + "\r\n";
                });

                content = content.trimRight() + "\r\n";
                let ptterns = {
                        header,
                        description: entity.description,
                        name: entity.type,
                        content
                }

                let template = this._replaceCore(`${__dirname}/templates/entity.java`, ptterns, true);
                this._writeCore(`${folder}/${entity.type}.java`, template);
        }

        /**
        * Replace templates with patterns
        * if "isfile==true",content means the path of template file,
        * otherwise means some text. 
        * 
        * @private
        * @param {String} content  text or path
        * @param {Map} patterns     
        * @param {boolean} isfile   
        * @returns {String}
        */
        _replaceCore(content, patterns, isfile = true) {
                let map = {};
                OBJECT.forEach(patterns, (key, value) => {
                        map["@" + key] = value;
                });
                return isfile ? STR.replace(FILE.read(content), map) : STR.replace(content, map);
        }

        /**
         * Write file 
         * if content is null, getter and templatePath is enabled
         * means will do a generate content and write operation,
         * otherwise just replace content and write file
         * 
         * @private
         * @param {String} path  output file path
         * @param {String} content  some text or null
         * @param {(Config)=>String} getter 
         * @param {String} templatePath  template file path
         */
        _writeCore(path, content, getter, templatePath) {

                let patterns = {
                        name: this.config.name,
                        project: this.config.project,
                        description: "",
                        sname: STR.lowerFirstLetter(this.config.name)
                };

                if (!content) {
                        if (!getter || !templatePath)
                                throw new Error("unexcepted params");

                        let items = [];
                        this.config.items.forEach(x => {
                                // pass this to getter
                                items.push(getter.call(this, x)+"\r\n");
                        });

                        patterns.content = STR.arrayToString(items).trimRight(),
                                content = this._replaceCore(templatePath, patterns, true);
                } else {
                        content = this._replaceCore(content.trimRight(), patterns, false);
                }

                FILE.write(path, content);
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
                        x.from = x.from || "";
                        params += isSimpleJavaType(x.type)
                                ? `${x.from} ${x.type} ${x.name}, `.trimLeft()
                                : `${x.from} @Validated @ModelAttribute ${x.type} req, `.trimLeft();
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
                if (!HTTP_MAPPINGS.has(config.type))
                        throw new Error(`unexceted type(${config.type})`);

                let path = config.controller.path || `/${this.config.table.name}/${config.id}`;

                return `${HTTP_MAPPINGS.get(config.type)}(path = "${path}")`;
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
        _getReqParamsWithoutType(config) {
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
                content = content.replace("@params", this._getReqParamsWithoutType(config));

                // if has default values, generate set expression
                if (config.params.defaultValues) {
                        config.params.defaultValues.forEach((value, key) => {
                                content += `params.set${STR.upperFirstLetter(key)}(${value});\r\n`;
                        });
                }

                return content;
        }

        /**
         * Get serviceImpl's mapper params
         * default name is "params" if generate Params entity
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _getServiceImplMapperParams(config) {
                return config.params.doCreate ? "params" : this._getReqParamsWithoutType(config);
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
                                ? `R<${STR.upperFirstLetter(config.resp.type)}>`
                                : `R<${this.config.name}>`;
                } else {
                        return config.resp.doCreate
                                ? `R<PageInfo<${STR.upperFirstLetter(config.resp.type)}>>`
                                : `R<PageInfo<${this.config.name}>>`;
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

                let content = FILE.read(`${__dirname}/templates/insert.xml`);
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

                let content = FILE.read(`${__dirname}/templates/delete.xml`);
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

                let content = FILE.read(`${__dirname}/templates/update.xml`);
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
                this._getConditions(config).forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let joins = "";
                if (config.joins)
                        joins = this._renderJoins(config.joins);

                let content = FILE.read(`${__dirname}/templates/select.xml`)
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
                        ? content.replace("@set", FILE.read(`${__dirname}/templates/set.xml`).replace("@content", items))
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
                        let trim = FILE.read(`${__dirname}/templates/trim.xml`);
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
                                FILE.read(`${__dirname}/templates/where.xml`).replace("@content", conditions));
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
                                NamingStrategy.toHungary(this.config.table.name).toLowerCase());
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
                let content = join.table.alias ? `${ident1}${join.type} join ${this._getRawName(join.table)} as ${join.table.alias} on ${join.joinCondition}`
                        : `${ident1}${join.type} join ${this._getRawName(join.table)} on ${join.joinCondition}`;

                join.table.alias = null;
                return content;
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
                return config.type == "insert" ? this._getItems(config, false) : this._getItems(config, true);
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
                let columns = [];
                columns = isCondition
                        ? columns.concat(this._getColumns(this.config.table, config.conditions, true))
                        : columns.concat(this._getColumns(this.config.table, config.includes, false));

                // if type is "select" and has join option
                if (config.joins) {
                        config.joins.forEach(join => {
                                columns = isCondition
                                        ? columns.concat(this._getColumns(join.table1, join.conditions, true))
                                        : columns.concat(this._getColumns(join.table1, join.includes, false));
                        });
                }

                return columns;
        }

        /**
         * Find all columns by giving column names from table
         * 
         * @private
         * @param {Table} table 
         * @param {[Object]} columnConfigs 
         * @returns {[Column]}
         */
        _getColumns(table, columnConfigs = [], isCondition = false) {
                let columns = [];
                columnConfigs.forEach(x => {
                        let column = this._getColumn(table, x);
                        column.required = isCondition ? x.required
                                : this.config.type == "insert" || this.type == "update" ? !column.nullable : x.required;

                        // set properties giving by config "x"
                        column.alias = x.alias;
                        column.prefix = x.prefix;
                        column.rawName = this._getRawName(table, column);
                        columns.push(column);
                });

                return columns;
        }

        /**
         * Find and return column of table or throw not found error
         * 
         * @private
         * @param {Table} table 
         * @param {Object} columnConfig 
         * @returns {Column}
         */
        _getColumn(table, columnConfig) {
                let name = columnConfig.name || columnConfig;
                if (table.columns[name]) {
                        table.columns[name].required = null;
                        table.columns[name].alias = null;
                        table.columns[name].prefix = null;
                        return table.columns[name];
                }
                console.log(table)
                throw new Error(`column(${columnConfig}) can not be found in table(${table})`);
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

                if (!column)
                        return table.alias || NamingStrategy.toHungary(table.name).toLowerCase();

                return column.prefix ? `${prefix}.${NamingStrategy.toHungary(column.name)}`
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
