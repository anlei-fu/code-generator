const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { NamingStrategy } = require("./../../../libs/naming-strategy");
const { STR } = require("./../../../libs/str");

const BASE_PATH = `${__dirname}/templates`;
const IF_IDENT = "            ";

// if
const IF_RENDER = new SimpleRender({});
IF_RENDER.setTempalte(`${IF_IDENT}<if test="@ifExpression">\r\n${IF_IDENT}      @content${IF_IDENT}</if>\r\n`);
class IfModel {
        constructor () {
                this.ifExpression = "";
        }
}

// column
const COLUMN_RENDER = new SimpleRender();
COLUMN_RENDER.setTempalte(`${IF_IDENT} @column@alias@suffix\r\n`);
class ColumnModel {
        constructor () {
                this.alias = "";
        }
}

// property
const PROPERTY_RENDER = new SimpleRender();
PROPERTY_RENDER.setTempalte(`${IF_IDENT} #{@property}@suffix\r\n`);
class PropertyModel {
        constructor () {
                this.property = "";
                this.suffix = "";
        }
}

// join
const JOIN_RENDER = new SimpleRender({});
JOIN_RENDER.setTempalte("          @type join @table@alias on @joinCondition");
class JoinModel {
        constructor () {
                this.type = "";

                // rawTableName
                this.table = "";
                this.alias = "";
                this.joinCondition = "";
        }
}

// asign, use in where-clause and set-clause
const ASIGN_RENDER = new SimpleRender();
ASIGN_RENDER.setTempalte(`${IF_IDENT}@prefix@column = #{@property}@suffix\r\n`);
class AsignModel {
        constructor () {
                this.suffix = "";
                this.property = "";
        }
}

// set
const SET_RENDER = new SimpleRender({}, `${BASE_PATH}/set.xml`);
class SetModel {
        constructor () {
                this.content = "";
        }
}

// trim, use in insert and in clause
const TRIM_RENDER = new SimpleRender({}, `${BASE_PATH}/Trim.xml`);
class TrimModel {
        constructor () {
                this.content = "";
        }
}

//where
const WHERE_RENDER = new SimpleRender({}, `${BASE_PATH}/where.xml`);
class WhereModel {
        constructor () {
                this.content = "";
        }
}

// insert
const INSERT_RENDER = new SimpleRender({}, `${BASE_PATH}/insert.xml`);
// use to analyze default time column and auto generate xxtime=current_timestamp
const INSERT_TIME_MATCHERS = x => LOWER_INCLUDES_ANY_MATCHER(x, [
        "createtime",
        "createdate",
        "inserttime",
        "insertdate"
]);

// delete
const DELETE_RENDER = new SimpleRender({}, `${BASE_PATH}/delete.xml`);

// select
const SELECT_RENDER = new SimpleRender({}, `${BASE_PATH}/select.xml`);

// update
const SET_ITEM_IDENT = "            ";
const UPDATE_RENDER = new SimpleRender({}, `${BASE_PATH}/update.xml`);
const UPDATE_TIME_MATCHERS = x => LOWER_INCLUDES_ANY_MATCHER(x, [
        "updatetime",
        "updatedate",
        "editdate",
        "editetime",
        "modifydate",
        "modifytime"
]);

// mapper.xml template render
const MAPPER_CONFIG_RENDER = new SimpleRender({}, `${BASE_PATH}/mapper.xml`);

class MapperConfigRender {

        /**
         * Render mapper config template
         * 
         * @param {Config} mapperConfig 
         * @returns {String}
         */
        renderMapperConfig(config) {
                let content = STR.arrayToString1(config.items, x => this._renderMapperConfigItem(x) + "\r\n");
                let mapperModel = {
                        content,
                        tableName: NamingStrategy.toHungary(config.table.name).toLowerCase()
                }

                return MAPPER_CONFIG_RENDER.renderTemplate(mapperModel);
        }

        /**
         * Render mapper config item, dispatch by "config.type"
         * 
         * @private
         * @param {Config} config 
         * @returns {String}
         */
        _renderMapperConfigItem(config) {
                switch (config.type) {
                        case "insert": return this._renderInsert(config);
                        case "update": return this._renderUpdate(config);
                        case "delete": return this._renderDelete(config);
                        default: return this._renderSelect(config);
                }
        }

        /**
         * Render insert sql template
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderInsert(config) {
                let columns = "";
                let properties = "";
                let includes = config.context.columnAnalyzer.getIncludes(config);
                let createTime = this._getInsertTime(config.table);
                if (createTime) {
                        createTime.column = "1." + NamingStrategy.toHungary(createTime.name).toLowerCase();
                        includes.push(createTime);
                }

                let isBatch = ReqUtils.hasBatchReq(config);

                includes.forEach((x, i, array) => {

                        // add 'item.' prefix
                        if (isBatch)
                                x.property = "item." + x.property;

                        x.suffix = i == array.length - 1 ? "" : ",";
                        var sourceColumn = x.column;
                        x.column = x.column.split(".")[1];
                        columns += this._renderColumn(x);
                        x.column = sourceColumn;
                        properties += this._renderProperty(x);
                });

                properties = properties.replace("#{createTime}", "current_timestamp");

                let parameterType;
                if (config.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
                } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
                }

                let insertModel = {
                        alias: config.alias || "",
                        id: config.id,
                        columns: this._renderTrim({ content: columns, suffix: ")", prefix: "(" }),
                        properties: this._renderTrim({ content: properties, suffix: ")", prefix: "(" }),
                        parameterType: parameterType || ""
                }

                return INSERT_RENDER.renderTemplate(insertModel);
        }

        /**
         * 
         * @private
         * @param {Table} table 
         */
        _getInsertTime(table) {
                for (const c in table.columns) {
                        var type = getJavaType(table.columns[c].type);
                        if (type == "Date" && INSERT_TIME_MATCHERS(c))
                                return table.columns[c];
                }

                return null;
        }

        /**
         * Render delete sql template
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderDelete(config) {
                let deleteModel = {
                        alias: config.alias || "",
                        id: config.id,
                        where: this._renderConditions(config)
                }

                return DELETE_RENDER.renderTemplate(deleteModel);
        }

        /**
         * Render select sql template
         * 
         * @private
         * @param {Config} config       
         * @returns {String}
         */
        _renderSelect(config) {
                let joinsSegment = STR.arrayToString1(config.joins, join => this._renderJoin(join) + "\r\n");

                let outpuColumnsSegment = "";
                config.context.columnAnalyzer.getIncludes(config).forEach((include, i, array) => {
                        include.suffix = i == array.length - 1 ? "" : ",";
                        outpuColumnsSegment += this._renderColumn(include);
                });

                let parameterType;
                if (config.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
                } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
                }

                let selectModel = {
                        alias: config.alias || "",
                        columns: outpuColumnsSegment,
                        resultType: config.resp.doCreate ? `resp.${config.resp.type}` : `entity.${STR.upperFirstLetter(config.table.name)}`,
                        where: this._renderConditions(config),
                        joins: joinsSegment,
                        id: config.id,
                        parameterType: parameterType || ""
                };

                return SELECT_RENDER.renderTemplate(selectModel);
        }

        /**
         * Render update sql template
         * 
         * @private
         * @param {Config} config
         * @returns {String}
         */
        _renderUpdate(config) {

                let setColumnsSegment = "";
                config.context.columnAnalyzer.getIncludes(config).forEach((x, i, array) => {
                        x.prefix = "";
                        x.suffix = i == array.length - 1 ? "" : ",";
                        setColumnsSegment += this._renderAsign(x);
                });
                setColumnsSegment += this._renderUpdateTime(config.table, config.alias);

                let parameterType;
                if (config.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${config.params.type}"`;
                } else if (config.reqs.length == 1 && config.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${config.reqs[0].type}"`;
                }

                let updateModel = {
                        alias: config.alias || "",
                        id: config.id,
                        set: this._renderSet({ content: setColumnsSegment }),
                        where: this._renderConditions(config),
                        parameterType: parameterType || ""
                }

                return UPDATE_RENDER.renderTemplate(updateModel);
        }

        /**
         * 
         * @param {Table} table 
         * @param {String} alias 
         */
        _renderUpdateTime(table, alias) {
                let content = "";
                OBJECT.forEach(table.columns, (columnName, column) => {
                        if (getJavaType(column.type) == "Date" && UPDATE_TIME_MATCHERS(columnName))
                                content = `${SET_ITEM_IDENT}${alias || NamingStrategy.toHungary(table.name).toLowerCase()}`
                                        + `.${NamingStrategy.toHungary(column.name).toLowerCase()}= current_timestamp,\r\n`;
                });

                return STR.removeLastComa(content);
        }

        /**
         * Render expression template
         * 
         * @private
         * @param {{ifExpression:String,suffix:String}} expressionModel
         * @returns {String} 
         */
        _renderExpression(expressionModel) {
                let content = expressionModel.expression.replace("@prefix", expressionModel.prefix);
                expressionModel.content = content;
                return this._renderIf(expressionModel);
        }

        /**
         * Render if template
         * 
         * @param {IfModel} ifModel
         * @returns {String}
         */
        _renderIf(ifModel) {

                // no need to wrap if
                if (!ifModel.ifExpression)
                        return ifModel.content;

                ifModel.content = ifModel.content.trimLeft();
                return IF_RENDER.renderTemplate(ifModel);
        }

        /**
         * Render join template
         * 
         * @param {JoinModel} model
         * @returns {String} 
         */
        _renderJoin(model) {
                let config = {
                        type: model.type,
                        table: model.table.rawName,
                        alias: model.table.alias ? ` ${model.table.alias}` : "",
                        joinCondition: model.joinCondition
                }

                return JOIN_RENDER.renderTemplate(config);
        }

        /**
         * Render trim template
         * 
         * @param {TrimModel} trimModel 
         * @returns {String}
         */
        _renderTrim(trimModel) {
                trimModel.suffix = trimModel.suffix ? ` suffix="${trimModel.suffix}"` : "";
                trimModel.prefix = trimModel.prefix ? `prefix="${trimModel.prefix}"` : "";
                return TRIM_RENDER.renderTemplate(trimModel);
        }

        /**
         * Render column template
         * 
         * @param {ColumnModel} columnModel
         * @returns {String}
         */
        _renderColumn(columnModel) {
                columnModel.alias = columnModel.alias ? ` as ${NamingStrategy.toHungary(columnModel.alias).toLowerCase()}` : "";
                let content = COLUMN_RENDER.renderTemplate(columnModel);
                columnModel.content = content;
                return renderIf(columnModel);
        }

        /**
         * Render assign template
         * 
         * @private
         * @param {AsignModel} asignModel
         * @returns {String} 
         */
        _renderAsign(asignModel) {
                asignModel.suffix = asignModel.suffix || "";
                asignModel.property = STR.lowerFirstLetter(asignModel.name);
                let content = ASIGN_RENDER.renderTemplate(asignModel);
                asignModel.content = content;
                return renderIf(asignModel);
        }

        /**
         * Render sql where clause
         * 
         * @private
         * @param {Config} config 
         */
        _renderConditions(config) {
                let conditions = "";
                config.context.columnAnalyzer.getConditions(config).forEach((x, i) => {
                        x.prefix = i == 0 ? "" : "and ";
                        conditions += x.expression ? this._renderExpression(x) : this._renderAsign(x);
                });

                return this._renderWhere({ content: conditions });
        }

        /**
         * Render set template
         * 
         * @private
         * @param {SetModel} setModel 
         * @returns {String}
         */
        _renderSet(setModel) {
                return SET_RENDER.renderTemplate(setModel);
        }

        /**
         * Render where template
         * 
         * @param {WhereModel} model 
         * @returns {String}
         */
        _renderWhere(model) {
                return WHERE_RENDER.renderTemplate(model);
        }

        /**
         * 
         * @param {String} content 
         */
        renderBatch(content) {
                let lines = STR.splitToLines(content.trim()).splice(1, 0, BTACH_PREFIX);
                lines = lines.splice(lines.length - 2, BATCH_SUFFIX);
                for (let line of lines) {
                        line = IDENT + line;
                }

                return STR.arrayToString1(lines, line => line);
        }

        /**
         * Render property template
         * 
         * @private     
         * @param {PropertyModel} propertyModel
         */
        _renderProperty(propertyModel) {
                propertyModel.property = propertyModel.name;
                propertyModel.content = PROPERTY_RENDER.renderTemplate(propertyModel);
                return this._renderIf(propertyModel);
        }

}

exports.MapperConfigRender = MapperConfigRender