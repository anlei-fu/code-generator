/*-----------------------------------------------------------------------------------entities-------------------------------------------------------------------------------*/

/**
 * Field model properties
 */
class Field {
        constructor () {
                this.name = "";
                this.type = "";
                this.description = "";
                this.validates = [""];
        }
}

/**
 * Join model properties
 */
class Join {
        constructor () {
                this.table = new Table();
                this.includes = [new ColumnConfig()];
                this.conditions = [new ColumnConfig()];
                this.alias = "";
                this.joinCondition = "";
        }
}

/**
 * Req model properties
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
 * Params model properties
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
 * Resp model properties
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
 * Controller model properties
 */
class Controller {
        constructor () {
                this.path = "";
                this.description = "";
        }
}

/**
 * Config model properties
 */
class ConfigItem {
        constructor () {
                /**
                 *  Method name
                 */
                this.id = "";

                /**
                 * String |select|update|delete|insert|
                 */
                this.type = "";

                /**
                 * Table
                 */
                this.table = new Table();

                /**
                 * [ColumnMetaInfo]
                 */
                this.includes = [new ColumnConfig()];

                /**
                 * [ColumnMetaInfo]
                 */
                this.conditions = [new ColumnConfig()];

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
                this.context = new SpringBootGeneratorContext();
        }
}

/**
 * GeneratorConfig properties
 */
class ConfigGroup {
        constructor () {

                // items y
                this.items = [new ConfigItem()];
                this.name = "";
                this.table = new Table();
                this.context = new SpringBootGeneratorContext();
        }
}

/*----------------------------------------------------------------------------------------main-----------------------------------------------------------------------*/

const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { ReqUtils } = require("./ReqUtils");
const { getJavaType } = require("./utils");

/**
 *  Genearte web project with spring-boot, mysql, mybatis, vue, ivue and  maven 
 */
class SpringBootGenerator {

        /**
         * Contructor of SpringBootGenerator
         * 
         * @constructor
         * @param {ConfigGroup} configGroup 
         */
        constructor (configGroup) {
                this._checkConfig(configGroup);

                this._configGroup = configGroup;
                this._context = configGroup.context;

                // initialization
                this._initTable(configGroup.table);

                configGroup.items.forEach(configItem => {
                        configItem.table = configGroup.table;
                        this._initConfig(configItem);
                });
        }

        /**
         * Generate all files
         * 
         * @private
         * @returns {String}
         */
        generate() {

                // entity
                this._generateEntity();

                this._configGroup.items.forEach(configItem => {

                        // get detail list use get list req
                        let write=!configItem.id.includes("Detail");
                                    this._generateReq(configItem,write);
                                    
                        this._generateResp(configItem);
                        this._generateParams(configItem);
                });

                this._generateMapper();
                this._generateMapperConfig();
                this._generateService();
                this._generateServiceImpl();
                this._generateController();
                this._generateTest();
        }

        /**
         * Check config is ok, must conatain 'name' and 'table' field
         * 
         * @private
         * @param {ConfigGroup} configGroup 
         */
        _checkConfig(configGroup) {
                if (!configGroup.name)
                        throw new Error("config name property is required!")

                if (!configGroup.table)
                        throw new Error("config table property is required!")

                configGroup.items.forEach(item => {
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
         * @param {ConfigItem} configItem 
         */
        _initConfig(configItem) {

                // set sql table alias if configed
                if (configItem.alias)
                        this._configGroup.table.alias = configItem.alias;

                // set default type 'select' if type absent
                configItem.type = configItem.type || "select";

                // generate default-id if id absent
                configItem.id = configItem.id || this._getDefaultId(configItem);

                // flag
                let hasDocreateReq = false;

                // if has req to create
                configItem.reqs.forEach(req => {
                        if (req.doCreate) {
                                this._initEntityBasicInfo(configItem, req, "Req");
                                hasDocreateReq = true;
                        }
                });

                // determine if generate params on has doCreate req and reqs' length > 1
                if ((hasDocreateReq && configItem.reqs.length > 1) || configItem.reqs.length > 3) {
                        configItem.params.doCreate = true;
                        this._initEntityBasicInfo(configItem, configItem.params, "Params");
                }

                // generate controller path and description
                if (!configItem.noController) {
                        configItem.controller.path = configItem.controller.path || `/${STR.lowerFirstLetter(configItem.name)}/${configItem.id}`;
                        configItem.controller.description = configItem.controller.description || "";
                }

                // set default join type if absent and init join table
                if (configItem.joins) {
                        configItem.joins.forEach(join => {
                                join.type = join.type || "left";
                                this._initTable(join.table);
                        });
                }

                // determine if generate resp on joins' length > 0 and type is select
                if (configItem.joins.length > 0 && configItem.type == "select") {
                        configItem.resp.doCreate = true;
                        this._initEntityBasicInfo(configItem, configItem.resp, "Resp");
                }

        }

        /**
         * Analyze and generate default id
         *  {get|delete|update|add}{entity}ByxxyyAndzz
         * 
         * 
         * @private
         * @param {ConfigItem} configItem 
         */
        _getDefaultId(configItem) {
                let id = "";
                switch (configItem.type) {
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

                if (configItem.batch) {
                        return id + configItem.name + "batch"
                }
                else {
                        let conditions = this._context.columnMerger.mergeConditions(configItem);
                        if (conditions.length == 1) {
                                id += configItem.name + "By"
                                id += STR.upperFirstLetter(conditions[0].name);
                        } else if (conditions.length < 4) {
                                conditions.forEach((condition, i, array) => {
                                        id += i == array.length - 1
                                                ? "And" + STR.upperFirstLetter(condition.name)
                                                : STR.upperFirstLetter(condition.name);
                                });
                                id += configItem.name + "By"
                        } else {
                                id += configItem.name;
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
                OBJECT.forEach(table.columns, (_, column) => {
                        column.type = getJavaType(column.type);
                });
        }

        /**
         * Set basic infos if absent
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {Entity} entity 
         * @param {String} entityType "entity|req|resp|param"
         */
        _initEntityBasicInfo(configItem, entity, entityType) {
                entity.description = entity.description || "";
                if (!entity.type) {

                        // set entity type  if absent
                        entity.type =entity.name
                        ? STR.upperFirstLetter(entity.name):STR.upperFirstLetter(configItem.id) + entityType;

                        // add table suffix if absent e.g AddReq => AddPersonReq
                        // to avoid name conflict
                        if (!entity.type.includes(this._configGroup.name)) {
                                let tableName = STR.upperFirstLetter(this._configGroup.name);
                                entity.type = STR.replace(entity.type, {
                                        "Get": "Get" + tableName,
                                        "Update": "Update" + tableName,
                                        "Add": "Add" + tableName
                                });
                        }

                        // Detail page use the same req create by page
                        if (entityType == "Req" || entityType == "Params") {
                                entity.type = entity.type.replace("Detail", "");
                                let pos = entity.type.indexOf("By");
                                if (pos != -1)
                                        entity.type = entity.type.substr(0, pos) + entityType;
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
                var entityConfig = {};
                entityConfig.name = this._configGroup.name;
                entityConfig.type = "entity";
                entityConfig.description = this._configGroup.table.description;
                entityConfig.fields = OBJECT.toArray(this._configGroup.table.columns);
                let content = this._context.render.renderEntity(entityConfig);
                this._writeEntity(content, "entity", this._configGroup.name);
        }

        /**
         * Generate mapper file
         * 
         * @private
         */
        _generateMapper() {
                let content = this._context.render.renderMapper(this._configGroup);
                content = this._context.packageRender.renderPackage(content);
                this._context.writer.writeMapper(this._configGroup.name, content);
        }

        /**
         * Generate mapper config file
         * 
         * @private
         */
        _generateMapperConfig() {
                let content = this._context.render.renderMapperConfig(this._configGroup);
                this._context.writer.writeMapperConfig(this._configGroup.name, content);
        }

        /**
         * Generate service file
         * 
         * @private
         */
        _generateService() {
                let content = this._context.render.renderService(this._configGroup);
                content = this._context.packageRender.renderPackage(content);
                this._context.writer.writeService(this._configGroup.name, content);
        }

        /**
         * Genearate service impl file
         * 
         * @private
         */
        _generateServiceImpl() {
                let content = this._context.render.renderServiceImpl(this._configGroup);
                content = this._context.packageRender.renderPackage(content);
                this._context.writer.writeServiceImpl(this._configGroup.name, content);
        }

        /**
         * Generate controller file
         * 
         * @private
         */
        _generateController() {
                let content = this._context.render.renderController(this._configGroup);
                content = this._context.packageRender.renderPackage(content);
                this._context.writer.writeController(this._configGroup.name, content);
        }

        /**
         * Generate test file
         * 
         * @private
         */
        _generateTest(){
                let content = this._context.render.renderTest(this._configGroup);
                content = this._context.packageRender.renderPackage(content);
                this._context.writer.writeTest(this._configGroup.name, content);
        }

        /**
         * Generate req file
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _generateReq(configItem,write) {
                configItem.reqs.forEach(req => {
                        if (req.doCreate) {
                                let entityConfig = {};
                                entityConfig.fields = ReqUtils.analyzeReqFields(configItem, req);
                                entityConfig.description = req.description;
                                entityConfig.name = req.type;
                                entityConfig.type = "req";
                                req.fields=entityConfig.fields;

                                entityConfig.extends = 
                                configItem.type == "select" && configItem.resp.list ? "PageReq" : "";

                                let content = this._context.render.renderEntity(entityConfig);

                                if(write)
                                    this._writeEntity(content, "req", req.type),write;
                        }
                })
        }

        /**
         * Generate resp file
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _generateResp(configItem) {
                if (configItem.resp.doCreate) {
                        let entityConfig = {};
                        entityConfig.type = "resp";
                        entityConfig.description = configItem.resp.description;
                        entityConfig.fields = configItem.context.columnMerger.mergeIncludes(configItem);
                        configItem.resp.type = configItem.resp.name;
                        entityConfig.name = configItem.resp.type;
                        configItem.resp.fields=entityConfig.fields;
                        let content = this._context.render.renderEntity(entityConfig);
                        this._writeEntity(content, "resp", configItem.resp.type);
                }
        }

        /**
         * Generate param file
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _generateParams(configItem) {
                if(configItem.type=="insert"&&configItem.id.includes("Batch")){
                   return;
                }

                if (!configItem.params.doCreate)
                        return;

                // get all possible columns
                let map = new Map();
                if (configItem.type == "select" || configItem.type == "delete")
                        configItem.context.columnMerger.mergeConditions(configItem).forEach(condition => {
                                map.set(condition.name, condition);
                        });
                else if (configItem.type == "update") {
                        configItem.context.columnMerger.mergeIncludes(configItem).forEach(include => {
                                map.set(include.name, include);
                        });
                        configItem.context.columnMerger.mergeConditions(configItem).forEach(condition => {
                                map.set(condition.name, condition);
                        });
                } else {
                        configItem.context.columnMerger.mergeIncludes(configItem).forEach(include => {
                                map.set(include.name, include);
                        });
                }

                //  analyze where field comes from  with source property
                //  'constructor' -> from base type req
                //  'req' -> from doCreate-req
                //  'undefined' -> from user column
                let docreateReqType;
                configItem.reqs.forEach(req => {
                        if (!req.doCreate && map.has(req.name)) {
                                map.get(req.name)["source"] = "constructor";


                        } else if (req.doCreate) {
                                req = req;
                                ReqUtils.analyzeReqFields(configItem, req).forEach(field => {

                                        docreateReqType = req.type;
                                        // maybe override source field to other fields
                                        // such as 'createTime' -> 'createTimeStart' & 'createTimeEnd'
                                        if (map.has(field.name)) {
                                                map.get(field.name)["source"] = "req";
                                        } else {
                                                map.set(field.name, field);
                                                field.source = "req";
                                        }
                                });
                        }
                });

                // check user column and convert to array
                let configs = [];
                map.forEach(value => {
                        value.source = value.source || "user";
                        configs.push(value);
                });

                let content = this._context.render.renderParams(configs, docreateReqType)
                        .replace("@type", "param");

                this._writeEntity(content, "param", configItem.params.type)
        }

        /**
         * 
         * @param {String} content  rendered without package
         * @param {String} entityType 'entity'|'req'|'resp'|'param' 
         * @param {String} entityName  
         */
        _writeEntity(content, entityType, entityName) {

                // add imports and sort them
                content = this._context.packageRender.renderPackage(content);

                if (entityType == "entity") {
                        this._context.writer.writeEntity(this._configGroup.name, content);
                } else if (entityType == "req") {
                        this._context.writer.writeReq(entityName, content);
                } else if (entityType == "resp") {
                        this._context.writer.writeResp(entityName, content);
                } else {
                        this._context.writer.writeParams(entityName, content);
                }

                // add into package-render cache
                this._context.packageRender.addPackage({
                        name: STR.upperFirstLetter(entityName),
                        type: entityType,
                        isSystem: false
                });
        }
}

module.exports = {
        ConfigItem,
        ConfigGroup,
        Join,
        Req,
        Resp,
        Params,
        Controller,
        SpringBootGenerator
}
