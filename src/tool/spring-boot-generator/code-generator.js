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
        constructor () {
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
        constructor (config, writer, packageRebder) {
                this._checkConfig(config);
                this._config = config;

                this._initTable(config.table);
                config.items.forEach(x => {
                        x.table = config.table;
                        this._initConfig(x);
                });

                this._packageRender = packageRebder;
                this._writer = writer;
        }

        /**
         * Write all files
         * 
         * @param {Config} config 
         * @returns {String}
         */
        generate() {

                // entites
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
         * @param {GeneratorConfig} config 
         */
        _initConfig(config) {

                if (config.alias)
                        this._config.table.alias = config.alias;

                config.type = config.type || "select";
                config.id = config.id || this._getDefaultId(config);

                let hasDocreateReq = false;
                // if has req to create
                config.reqs.forEach(req => {
                        if (req.doCreate) {
                                this._initEntityBasicInfo(config, req, "Req");
                                hasDocreateReq = true;
                        }
                });

                if ((hasDocreateReq && config.reqs.length > 1) || config.reqs.length > 3) {
                        config.params.doCreate = true;
                        this._initEntityBasicInfo(config, config.params, "Params");
                }

                if (!config.noController) {
                        config.controller.path = config.controller.path || `/${STR.lowerFirstLetter(config.name)}/${config.id}`;
                        config.controller.description = config.controller.description || "";
                }


                // set default join type
                if (config.joins) {
                        config.joins.forEach(x => {
                                x.type = x.type || "left";
                                this._initTable(x.table);
                        });
                }

                if (config.joins.length > 0 && config.type == "select") {
                        config.resp.doCreate = true;
                        this._initEntityBasicInfo(config, config.resp, "Resp");
                }

        }

        /**
         * Analyze and generate default id
         * 
         *  {get|delete|update|add}{entity}ByxxyyAndzz
         * 
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

                return id;
        }

        /**
         * Init table columns ,convert 'origin type' to 'java type'
         * 
         * @param {Table} table 
         */
        _initTable(table) {
                OBJECT.forEach(table.columns, (key, value) => {
                        table.columns[key].type = getJavaType(value.type);
                });
        }

        /**
         * Set basic infos if absent
         * 
         * 
         * @param {Config} config 
         * @param {Entity} entity 
         * @param {String} type 
         */
        _initEntityBasicInfo(config, entity, type) {
                entity.type = entity.type || STR.upperFirstLetter(config.id) + type;
                entity.description = entity.description || "";
                entity.name = entity.name || type.toLowerCase();
        }

        /**
         * Write entity file
         */
        _generateEntity() {
                var entity = {};
                entity.name = this._config.name;
                entity.type = "entity";
                entity.description = this._config.table.description;
                entity.fields = OBJECT.toArray(this._config.table.columns);
                let content = Render.renderEntity(entity);
                content = this._packageRender.renderPackage(content);
                this._writer.writeEntity(this._config.name, content);

                this._packageRender.addPackage({
                        name: STR.upperFirstLetter(entity.name),
                        type: "entity",
                        isSystem: false
                });
        }

        /**
         * Write mapper file
         */
        _generateMapper() {
                let mapper = Render.renderMapper(this._config);
                mapper = this._packageRender.renderPackage(mapper);
                this._writer.writeMapper(this._config.name, mapper);
        }

        /**
         * Write mapper config file
         */
        _generateMapperConfig() {
                let mapperConfig = Render.renderMapperConfig(this._config);
                this._writer.writeMapperConfig(this._config.name, mapperConfig);
        }

        /**
         * Write service file
         */
        _generateService() {
                let service = Render.renderService(this._config);
                service = this._packageRender.renderPackage(service);
                this._writer.writeService(this._config.name, service);
        }

        /**
         * Write service impl file
         */
        _generateServiceImpl() {
                let serviceImpl = Render.renderServiceImpl(this._config);
                serviceImpl = this._packageRender.renderPackage(serviceImpl);
                this._writer.writeServiceImpl(this._config.name, serviceImpl);
        }

        /**
         * Write controller file
         */
        _generateController() {
                let controller = Render.renderController(this._config);
                controller = this._packageRender.renderPackage(controller);
                this._writer.writeController(this._config.name, controller);
        }

        /**
         * Write req file
         * 
         * 
         * @param {Config} config 
         * @returns {String}
         */
        _generateReq(config) {
                config.reqs.forEach(x => {
                        if (x.doCreate) {
                                let req = {};
                                req.type = x.type;
                                req.fields = generateReq(config, x);
                                req.description = x.description;
                                req.name = x.type;
                                req.type = "req";
                                req.extends = config.resp.single ? "" : "PageReq";
                                let content = Render.renderEntity(req);
                                content = this._packageRender.renderPackage(content);
                                this._writer.writeReq(x.type, content);

                                this._packageRender.addPackage({
                                        name: x.type,
                                        type: "req",
                                        isSystem: false
                                });
                        }
                })
        }

        /**
         * Write resp file
         * 
         * @param {Config} config 
         * @returns {String}
         */
        _generateResp(config) {
                if (config.resp.doCreate) {

                        let includes = getIncludes(config);
                        let entity = {};
                        entity.type = config.resp.type;
                        entity.description = config.resp.description;
                        let content = Render.renderEntity(entity);
                        content = this._packageRender.renderPackage(content);
                        this._writer.writeResp(x.type, content);
                        this._packageRender.addPackage({
                                name: config.resp.type,
                                isSystem: false,
                                type: "resp"
                        });
                }
        }

        /**
         * Write param file
         * 
         * @param {Config} config 
         * @returns {String}
         */
        _generateParams(config) {
                if (!config.params.doCreate)
                        return;

                let map = new Map();

                getConditions(config).forEach(x => {
                        map.set(x.name, x);
                });

                if (config.type == "update") {
                        getIncludes(config).forEach(x => {
                                map.set(x.name, x);
                        });
                }

                let req;
                config.reqs.forEach(x => {
                        if (!x.doCreate && map.has(x.name)) {
                                map.get(x.name)["source"] = "constructor";

                        } else if (x.doCreate) {
                                req=x;
                                generateReq(config,x).forEach(y => {
                                        if (map.has(y.name)) {
                                                map.get(y.name)["source"] = "req";
                                        } else {
                                                map.set(y.name, y);
                                                y.source = "req";
                                        }
                                });
                        } 
                });

                let configs = [];
                map.forEach(value => {
                        configs.push(value);
                });

                let content = Render.renderParams(configs,req.type);
                content = this._packageRender.renderPackage(content);
                this._writer.writeParams(config.params.type, content);
                this._packageRender.addPackage({
                        name: config.params.type,
                        isSystem: false,
                        type: "params"
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
