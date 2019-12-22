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

/*-------------------------------------------------------------------------------------------------------------------------------*/
const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { Render } = require("./renders/render.js");
const { generateReq } = require("./req-common");
const { Writer } = require("./writer");


/**
 *  Genearte web project with spring-boot, mysql, mybatis, vue, ivue and  maven 
 */
class Generator {

        /**
         * 
         * @param {GeneratorConfig} config 
         */
        constructor(config) {
                this._checkConfig(config);
                this._config = config;
                this._initConfig(config);
                this._packageRender = new PackegeRender();
                this._writer = new Writer(config.project);
        }


        /**
         * Write all files
         * 
         * @param {Config} config 
         * @returns {String}
         */
        generate() {

                this._generateMapper();
                this._generateMapperConfig();
                this._generateService();
                this._generateServiceImpl();
                this._generateController();

                // entites
                this._generateEntity();
                this._config.items.forEach(x => {
                        this._generateReq(x);
                        this._generateResp(x);
                        this._generateParams(x);
                });
        }


        _checkConfig() {
                if (!this._config.name)
                        throw new Error("config name property is required!")

                if (!this._config.table)
                        throw new Error("config table property is required!")

                this._config.items.forEach(item => {
                        item.joins.forEach(join => {
                                if (!join.joinCondition || !join.table)
                                        throw new Error("join config incorrect");
                        });
                });
        }

        _initConfig(config) {
                this._initTable(config.table);

                if (config.alias)
                        this._config.table.alias = config.alias;

                config.type = config.type || "select";
                config.id = config.id || getDefaultId(config);

                if (config.reqs.length == 0)
                        config.reqs = getDefaultReqs(config);

                config.reqs.forEach(req => {
                        if (req.doCreate)
                                this._initEntityBasicInfo(config, req, "Req");
                });

                if (config.resp.doCreate)
                        this._initEntityBasicInfo(config, config.resp, "Resp");

                if (config.params.doCreate)
                        this._initEntityBasicInfo(config, config.params, "Params");

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
                entity.type = this._config.name;
                entity.description = this._config.table.description;
                entity.fields = OBJECT.toArray(this._config.table.columns);
                this._writer.writeEntity(entity);

                this._packageRender.addPackage({
                        name:STR.upperFirstLetter(type),
                        isSystem: false
                });
        }

        /**
         * Write mapper file
         */
        _generateMapper() {
                let mapper = Render.renderMapper(this._config);
                mapper = this._packageRender.renderPackage(mapper);
                this._writer.writeMapper(mapper);
        }

        /**
         * Write mapper config file
         */
        _generateMapperConfig() {
                let mapperConfig = Render.renderMapperConfig(this._config);
                this._writer.writeMapperConfig(mapperConfig);
        }

        /**
         * Write service file
         */
        _generateService() {
                let service = Render.renderService(this._config);
                service = this._packageRender.renderPackage(service);
                this._writer.writeController(service);
        }

        /**
         * Write service impl file
         */
        _generateServiceImpl() {
                let serviceImpl = Render.renderService(this._config);
                serviceImpl = this._packageRender.renderPackage(serviceImpl);
                this._writer.writeController(serviceImpl);
        }

        /**
         * Write controller file
         */
        _generateController() {
                let controller = Render.renderController(this._config);
                controller = this._packageRender.renderPackage(controller);
                this._writer.writeController(controller);
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
                                req.fields = generateReq(config);
                                req.description=x.description;
                                this._writer.writeReq(Render.renderEntity(req));

                                this._packageRender.addPackage({
                                        name:x.type,
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
                        let resp = {};
                        resp.type = config.resp.type;
                        resp.fields = getRespFields(config);
                        resp.description=config.resp.description;
                        this._writer.writeResp(config);

                        this._packageRender.addPackage({
                                name:STR.config.resp.type,
                                isSystem: false
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
                if (config.params.doCreate) {
                        let params = {};
                        params.type = config.params.type;
                }
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
