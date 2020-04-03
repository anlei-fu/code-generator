/*-----------------------------------------------------------------------------------entities-------------------------------------------------------------------------------*/

class Field {
        constructor () {
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
        constructor () {
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
        constructor () {
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
        constructor () {
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
        constructor () {
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
        constructor () {
                this.path = "";
                this.description = "";
        }
}

/**
 * Config properties
 */
class Config {
        constructor () {
                this.id = "";

                /**
                 * String 'entity'|'req'|'resp'|'param'
                 */
                this.type = "";

                /**
                 * Table
                 */
                this.table = {};

                /**
                 * [ColumnMetaInfo]
                 */
                this.includes = [];

                /**
                 * [ColumnMetaInfo]
                 */
                this.conditions = [];

                /**
                 * [Join]
                 */
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
        constructor () {

                // items y
                this.items = [new Config()];

                // with require exist
                this.exists = false;

                // with batch delete operation
                this.bacthDelete = false;

                // with batch update operation
                this.batchUpdate = false;

                // auto join other table
                this.detail = false;

                // auto join other table list
                this.detailList = false;
        }
}

/*----------------------------------------------------------------------------------------main-----------------------------------------------------------------------*/

const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { Render } = require("./renders/render.js");
const { generateReq } = require("./req-common");
const { getJavaType } = require("./utils");
const { getConditions } = require("./condition-getter");
const { getIncludes } = require("./includes-getter");

/**
 *  Genearte web project with spring-boot, mysql, mybatis, vue, ivue and  maven 
 */
class Generator {

        /**
         * 
         * @param {GeneratorConfig} config 
         */
        constructor (config, writer, packageRender) {
                this._checkConfig(config);

                this._config = config;

                this._initTable(config.table);
                config.items.forEach(x => {
                        x.table = config.table;
                        this._initConfig(x);
                });

                this._packageRender = packageRender;
                this._writer = writer;
        }

        /**
         * Generate all files
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        generate() {

                // entity
                this._generateEntity();

                this._config.items.forEach(x => {
                        this._generateReq(x);
                        this._generateResp(x);
                        this._generateParams(x);
                });

                this._generateMapper();
                this._generateMapperConfig();
                this._generateService();
                this._generateServiceImpl();
                this._generateController();
        }

        /**
         * Check config is ok
         * 
         * @private
         * @param {GeneratorConfig} config 
         */
        _checkConfig(config) {
                if (!config.name)
                        throw new Error("config name property is required!")

                if (!config.table)
                        throw new Error("config table property is required!")

                config.items.forEach(item => {
                        item.joins.forEach(join => {
                                if (!join.joinCondition || !join.table)
                                        throw new Error("join config incorrect!");
                        });
                });
        }

        /**
         * Initialize geneartor config
         * 
         * @private
         * @param {GeneratorConfig} config 
         */
        _initConfig(config) {

                if (config.alias)
                        this._config.table.alias = config.alias;

                // if absent set default 'select'
                config.type = config.type || "select";
                config.id = config.id || this._getDefaultId(config);

                // flag
                let hasDocreateReq = false;

                // if has req to create
                config.reqs.forEach(req => {
                        if (req.doCreate) {
                                this._initEntityBasicInfo(config, req, "Req");
                                hasDocreateReq = true;
                        }
                });

                // determine if generate params on has create req and params's length >1
                if ((hasDocreateReq && config.reqs.length > 1) || config.reqs.length > 3) {
                        config.params.doCreate = true;
                        this._initEntityBasicInfo(config, config.params, "Params");
                }

                // generate controller path and description
                if (!config.noController) {
                        config.controller.path = config.controller.path || `/${STR.lowerFirstLetter(config.name)}/${config.id}`;
                        config.controller.description = config.controller.description || "";
                }

                // set default join type
                if (config.joins) {
                        config.joins.forEach(join => {
                                join.type = join.type || "left";
                                this._initTable(join.table);
                        });
                }

                // determine if generate resp on joins' length >0 and type is select
                if (config.joins.length > 0 && config.type == "select") {
                        config.resp.doCreate = true;
                        this._initEntityBasicInfo(config, config.resp, "Resp");
                }

        }

        /**
         * Analyze and generate default id
         *  {get|delete|update|add}{entity}ByxxyyAndzz
         * 
         * 
         * @private
         * @param {Config} config 
         */
        _getDefaultId(config) {
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

                if (config.batch) {
                        return id + config.name + "batch"
                }
                else {
                        let conditions = getConditions(config);
                        if (conditions.length == 1) {
                                id += config.name + "By"
                                id += STR.upperFirstLetter(conditions[0].name);
                        } else if (conditions.length < 4) {
                                conditions.forEach((x, i, array) => {
                                        id += i == array.length - 1
                                                ? "And" + STR.upperFirstLetter(x.name)
                                                : STR.upperFirstLetter(x.name);
                                });
                                id += config.name + "By"
                        } else {
                                id += config.name;
                        }
                }

                return id;
        }

        /**
         * Init table columns ,convert 'sql type' to 'java type'
         * 
         * @private
         * @param {Table} table 
         */
        _initTable(table) {
                OBJECT.forEach(table.columns, (_, Column) => {
                        Column.type = getJavaType(Column.type);
                });
        }

        /**
         * Set basic infos if absent
         * 
         * @private
         * @param {Config} config 
         * @param {Entity} entity 
         * @param {String} entityType "entity|req|resp|param"
         */
        _initEntityBasicInfo(config, entity, entityType) {

                entity.description = entity.description || "";
                if (!entity.type) {
                        entity.type = STR.upperFirstLetter(config.id) + entityType;
                        if (entityType == "Req" || entityType == "Params") {
                                entity.type = entity.type.replace("Detail", "");
                                let pos = entity.type.indexOf("By");
                                if (pos != -1)
                                        entity.type = entity.type.substr(0, pos) + entityType;
                        } else {

                        }
                }
                entity.name = entityType == "Req" ? entityType.toLowerCase() : entity.name;

        }

        /**
         * Generate entity file
         * 
         * @private
         */
        _generateEntity() {
                var entity = {};
                entity.name = this._config.name;
                entity.type = "entity";
                entity.description = this._config.table.description;
                entity.fields = OBJECT.toArray(this._config.table.columns);
                let content = Render.renderEntity(entity);
                this._generateEntityCore(content, "entity", this._config.name);
        }

        /**
         * Generate mapper file
         * 
         * @private
         */
        _generateMapper() {
                let content = Render.renderMapper(this._config);
                content = this._packageRender.renderPackage(content);
                this._writer.writeMapper(this._config.name, content);
        }

        /**
         * Generate mapper config file
         * 
         * @private
         */
        _generateMapperConfig() {
                let content = Render.renderMapperConfig(this._config);
                this._writer.writeMapperConfig(this._config.name, content);
        }

        /**
         * Generate service file
         * 
         * @private
         */
        _generateService() {
                let content = Render.renderService(this._config);
                content = this._packageRender.renderPackage(content);
                this._writer.writeService(this._config.name, content);
        }

        /**
         * Genearate service impl file
         * 
         * @private
         */
        _generateServiceImpl() {
                let content = Render.renderServiceImpl(this._config);
                content = this._packageRender.renderPackage(content);
                this._writer.writeServiceImpl(this._config.name, content);
        }

        /**
         * Generate controller file
         * 
         * @private
         */
        _generateController() {
                let content = Render.renderController(this._config);
                content = this._packageRender.renderPackage(content);
                this._writer.writeController(this._config.name, content);
        }

        /**
         * Generate req file
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _generateReq(config) {
                config.reqs.forEach(x => {
                        if (x.doCreate) {
                                let entity = {};
                                entity.fields = generateReq(config, x);
                                // if (config.type == "select")
                                //         console.log(entity.fields);
                                entity.description = x.description;
                                entity.name = x.type;
                                entity.type = "req";
                                entity.extends = config.type == "select" && !config.resp.single ? "PageReq" : "";
                                let content = Render.renderEntity(entity);

                                this._generateEntityCore(content, "req", x.type);
                        }
                })
        }


        /**
         * Generate resp file
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _generateResp(config) {
                if (config.resp.doCreate) {
                        let entity = {};
                        entity.type = "resp";
                        entity.description = config.resp.description;
                        entity.fields = getIncludes(config);
                        config.resp.type = config.resp.name;
                        entity.name = config.resp.type;
                        let content = Render.renderEntity(entity);
                        this._generateEntityCore(content, "resp", config.resp.type);
                }
        }

        /**
         * Generate param file
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _generateParams(config) {
                if (!config.params.doCreate)
                        return;

                let map = new Map();

                if (config.type == "select" || config.type == "delete")
                        getConditions(config).forEach(x => {
                                map.set(x.name, x);
                        });
                else if (config.type == "update") {
                        getIncludes(config).forEach(x => {
                                map.set(x.name, x);
                        });
                        getConditions(config).forEach(x => {
                                map.set(x.name, x);
                        });
                } else {
                        getIncludes(config).forEach(x => {
                                map.set(x.name, x);
                        });
                }

                let req;
                config.reqs.forEach(x => {
                        if (!x.doCreate && map.has(x.name)) {
                                map.get(x.name)["source"] = "constructor";

                        } else if (x.doCreate) {
                                req = x;
                                generateReq(config, x).forEach(y => {
                                        if (map.has(y.name)) {
                                                map.get(y.name)["source"] = "req";
                                        } else {
                                                map.set(y.name, y);
                                                y.source = "req";
                                        }
                                });
                        } else {
                        }
                });

                let configs = [];
                map.forEach(value => {
                        value.source = value.source || "user";
                        configs.push(value);
                });

                let content = Render.renderParams(configs, req.type);
                content = content.replace("@type", "param");

                this._generateEntityCore(content, "param", config.params.type)
        }

        /**
         * 
         * @param {String} content  rendered without package
         * @param {String} entityType 'entity'|'req'|'resp'|'param' 
         * @param {String} entityName  
         */
        _generateEntityCore(content, entityType, entityName) {
                content = this._packageRender.renderPackage(content);

                if (entityType == "entity") {
                        this._writer.writeEntity(this._config.name, content);
                } else if (entityType == "req") {
                        this._writer.writeReq(entityName, content);
                } else if (entityType == "resp") {
                        this._writer.writeResp(entityName, content);
                } else {
                        this._writer.writeParams(entityName, content);
                }

                this._packageRender.addPackage({
                        name: STR.upperFirstLetter(entityName),
                        type: entityType,
                        isSystem: false
                });
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
