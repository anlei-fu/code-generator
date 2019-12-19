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
const { FILE } = require("../../libs/file");
const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { NamingStrategy } = require("../../libs/naming-strategy");
const { isSimpleJavaType, getJavaType } = require("./utils");
const { initConfig } = require("./config-initializer")
const { initTable } = require("./table-initializer")
const { Render } = require("./renders/render.js");

const IDENT_2 = "  ";
const IDENT_8 = "          ";
const IDENT_10 = "            ";
const DATE_PACKAGE = "import java.util.Date;";
const HTTP_MAPPINGS = new Map();
HTTP_MAPPINGS.set("select", "@GetMapping")
        .set("update", "@PutMapping")
        .set("delete", "@DeleteMapping")
        .set("insert", "@PostMapping");
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

                initTable(this.config.table);

                this.config.items.forEach(x => {
                        if (x.joins) {
                                x.joins.forEach(join => {
                                        initTable(join.table);
                                });
                        }

                        initConfig(x);
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
         * Write entity file
         */
        writeEntity() {
                var entity = {};
                entity.type = this.config.name;
                entity.description = this.config.table.description;
                entity.fields = OBJECT.toArray(this.config.table.columns);
                this._writeEntity(this.config.entityFolder, entity);
                this.config.packages[STR.upperFirstLetter(entity.type)] = {
                        type: "entity",
                        isSystem: false
                };
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

                                if (config.type == "update")
                                        items = items.concat(this._getIncludes(config));

                                if (x.excludes)
                                        items = items.filter(item => !x.excludes.has(item.name));

                                x.fields = items;

                                x.fields.forEach(field => {
                                        if (field.required) {
                                                if (!field.validates) {
                                                        field.validates = ["@NotNull"];
                                                } else {
                                                        field.validates.push("@NotNull");
                                                }
                                        }
                                });
                                x.page = !config.resp.single;
                                this._writeEntity(this.config.reqFolder, x);

                                this.config.packages[STR.upperFirstLetter(x.type)] = {
                                        type: "req",
                                        isSystem: false
                                };
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
                                this.config.packages[STR.upperFirstLetter(config.resp.name)] = {
                                        type: "resp",
                                        isSystem: false
                                };
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

                this.config.packages[STR.upperFirstLetter(config.params.name)] = {
                        type: "params",
                        isSystem: false
                };
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
                let controller = {};
                controller.items = this._getItemsCore(this.getControllerItem);
                let content = Render.renderController(controller);
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
                this._writeCore(`${folder}/${entity.type}.java`, Render.renderEntity(entity));
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
                                items.push(getter.call(this, x) + "\r\n");
                        });

                        patterns.content = STR.arrayToString(items).trimRight(),
                                content = this._replaceCore(templatePath, patterns, true);
                } else {
                        content = this._replaceCore(content.trimRight(), patterns, false);
                }

                FILE.write(path, this._renderPackage(content));
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
                                ? this._renderColumn(x, ",", IDENT_10) :
                                this._renderIfColumn(x, ",", IDENT_10);

                        properties += x.required
                                ? this._renderProperty(x, ",", IDENT_10) :
                                this._renderIfProperty(x, ",", IDENT_10);
                });

                let content = FILE.read(`${__dirname}/templates/insert.xml`);
                content = this._renderTrim(content, columns, "@columns");
                content = this._renderTrim(content, properties, "@properties");

                return this._finalReplace(config, content);
        }

        renderColumnCore(columns) {
                columns += x.required
                        ? this._renderColumn(x, ",", IDENT_10) :
                        this._renderIfColumn(x, ",", IDENT_10);
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
                                ? i == 0 ? this._renderAsign(x, "", "", IDENT_10) : this._renderAsign(x, "and ", "", IDENT_10)
                                : i == 0 ? this._renderIfAsign(x, "", "", IDENT_10) : this._renderIfAsign(x, "and ", "", IDENT_10);
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
                                ? i == array.length - 1 ? this._renderAsign(x, "", "", IDENT_10) : this._renderAsign(x, "", ",", IDENT_10)
                                : i == array.length - 1 ? this._renderIfAsign(x, "", "", IDENT_10) : this._renderIfAsign(x, "", ",", IDENT_10);

                });

                let conditions = "";
                this._getConditions(config).forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", IDENT_10) : this._renderAsign(x, "and ", "", IDENT_10)
                                : i == 0 ? this._renderIfAsign(x, "", "", IDENT_10) : this._renderIfAsign(x, "and ", "", IDENT_10);
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
                        columns += this._renderColumn(x, ",", IDENT_10);
                });

                // join alias
                let conditions = "";
                this._getConditions(config).forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", IDENT_10) : this._renderAsign(x, "and ", "", IDENT_10)
                                : i == 0 ? this._renderIfAsign(x, "", "", IDENT_10) : this._renderIfAsign(x, "and ", "", IDENT_10);
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
                        content = content.replace("@where", IDENT_2 + "where\r\n" + IDENT_8 + conditions);
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
                let content = join.table.alias ? `${IDENT_8}${join.type} join ${this._getRawName(join.table)} as ${join.table.alias} on ${join.joinCondition}`
                        : `${IDENT_8}${join.type} join ${this._getRawName(join.table)} on ${join.joinCondition}`;

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
                let columns = [];
                columns = isCondition
                        ? columns.concat(this._getColumns(this.config.table, config.conditions, true, config))
                        : columns.concat(this._getColumns(this.config.table, config.includes, false, config));

                // if type is "select" and has join option
                if (config.joins) {
                        config.joins.forEach(join => {
                                columns = isCondition
                                        ? columns.concat(this._getColumns(join.table, join.conditions, true, config))
                                        : columns.concat(this._getColumns(join.table, join.includes, false, config));
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
        _getColumns(table, columnConfigs = [], isCondition = false, config) {
                let columns = [];
                columnConfigs.forEach(x => {
                        let column = this._getColumn(table, x);
                        column.required = config.type == "insert" ? !column.nullable
                                : isCondition ? x.required : false;

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
