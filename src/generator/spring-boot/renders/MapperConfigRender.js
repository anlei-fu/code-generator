const { SimpleRender } = require("../../common/renders/SimplePatterRender");
const { NamingStrategy } = require("../../../libs/naming-strategy");
const { OBJECT } = require("../../../libs/utils");
const { STR } = require("../../../libs/str");
const { getJavaType } = require("../utils");
const { ReqUtils } = require("../ReqUtils");

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

// set, use in update statement
const SET_RENDER = new SimpleRender({}, `${BASE_PATH}/set.xml`);
class SetModel {
        constructor () {
                this.content = "";
        }
}

// in
const INRENDER = new SimpleRender({}, `${BASE_PATH}/in.xml`);
class InModel {

}

// trim, use in insert statement and in clause
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

// batch
const BTACH_PREFIX = '  <foreach item="item" collection="list" separator=",">';
const BATCH_SUFFIX = '  </foreach>';

// insert
const INSERT_RENDER = new SimpleRender({}, `${BASE_PATH}/insert.xml`);
// use to analyze default time column and auto generate xxtime=current_timestamp
const INSERT_TIME_MATCHERS = columnName => STR.includesAny(columnName.toLowerCase(), [
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
const UPDATE_TIME_MATCHERS = columnName => STR.includesAny(columnName.toLowerCase(), [
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
         * @param {ConfigGroup} configGroup
         * @returns {String}
         */
        renderMapperConfig(configGroup) {
                let statements = STR.arrayToString1(configGroup.items, configItem => this._renderMapperConfigItem(configItem) + "\r\n");
                let mapperModel = {
                        statements,
                        tableName: NamingStrategy.toHungary(configGroup.table.name).toLowerCase()
                }

                return MAPPER_CONFIG_RENDER.renderTemplate(mapperModel);
        }

        /**
         * Render mapper config item, dispatch by "config.type"
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _renderMapperConfigItem(configItem) {
                switch (configItem.type) {
                        case "insert": return this._renderInsert(configItem);
                        case "update": return this._renderUpdate(configItem);
                        case "delete": return this._renderDelete(configItem);
                        default: return this._renderSelect(configItem);
                }
        }

        /**
         * Render insert sql template
         * 
         * @private
         * @param {ConfigItem} configItem
         * @returns {String}
         */
        _renderInsert(configItem) {
                let names = "";
                let values = "";
                let includes = configItem.context.columnAnalyzer.analyzeIncludes(configItem);
                let createTime = this._findCreateTimeColumn(configItem.table);
                if (createTime) {
                        createTime.column = "1." + NamingStrategy.toHungary(createTime.name).toLowerCase();
                        includes.push(createTime);
                }

                let isList = ReqUtils.hasBatchReq(configItem);

                includes.forEach((include, i, array) => {

                        // add 'item.' prefix if is batch
                        if (isList)
                                include.property = "item." + include.property;

                        include.suffix = i == array.length - 1 ? "" : ",";
                        var sourceColumn = include.column;
                        include.column = include.column.split(".")[1];
                        names += this._renderColumnName(include);
                        include.column = sourceColumn;
                        values += this._renderValue(include);
                });

                // todo : latency bug point 
                values = values.replace("#{createTime}", "current_timestamp");

                let parameterType;
                if (configItem.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${configItem.params.type}"`;
                } else if (configItem.reqs.length == 1 && configItem.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${configItem.reqs[0].type}"`;
                }

                let insertModel = {
                        alias: configItem.alias || "",
                        id: configItem.id,
                        columnNames: this._renderTrim({ content: names, suffix: ")", prefix: "(" }),
                        values: this._renderTrim({ content: values, suffix: ")", prefix: "(" }),
                        parameterType: parameterType || ""
                }

                let content = INSERT_RENDER.renderTemplate(insertModel);
                return isList ? this._renderBatch(content) : content;
        }

        /**
         * Get create time column from table
         * 
         * @private
         * @param {Table} table 
         * @returns {Column}
         */
        _findCreateTimeColumn(table) {
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
         * @param {ConfigItem} configItem
         * @returns {String}
         */
        _renderDelete(configItem) {
                let deleteModel = {
                        alias: configItem.alias || "",
                        id: configItem.id,
                        where: this._renderConditions(configItem)
                }

                return DELETE_RENDER.renderTemplate(deleteModel);
        }

        /**
         * Render select sql template
         * 
         * @private
         * @param {ConfigItem} configItem       
         * @returns {String}
         */
        _renderSelect(configItem) {
                let joinsSegment = STR.arrayToString1(configItem.joins, join => this._renderJoin(join) + "\r\n");

                let outpuColumnsSegment = "";
                configItem.context.columnAnalyzer.analyzeIncludes(configItem).forEach((include, i, array) => {
                        include.suffix = i == array.length - 1 ? "" : ",";
                        outpuColumnsSegment += this._renderColumnName(include);
                });

                let parameterType;
                if (configItem.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${configItem.params.type}"`;
                } else if (configItem.reqs.length == 1 && configItem.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${configItem.reqs[0].type}"`;
                }

                let selectModel = {
                        alias: configItem.alias || "",
                        columns: outpuColumnsSegment,
                        resultType: configItem.resp.doCreate
                                ? `resp.${configItem.resp.type}` : `entity.${STR.upperFirstLetter(configItem.table.name)}`,

                        where: this._renderConditions(configItem),
                        joins: joinsSegment,
                        id: configItem.id,
                        parameterType: parameterType || ""
                };

                return SELECT_RENDER.renderTemplate(selectModel);
        }

        /**
         * Render update sql template
         * 
         * @private
         * @param {ConfigItem} configItem
         * @returns {String}
         */
        _renderUpdate(configItem) {

                let setColumnsSegment = "";
                configItem.context.columnAnalyzer.analyzeIncludes(configItem).forEach((include, i, array) => {
                        include.prefix = "";
                        include.suffix = i == array.length - 1 ? "" : ",";
                        setColumnsSegment += this._renderAsign(include);
                });
                setColumnsSegment += this._renderUpdateTime(configItem.table, configItem.alias);

                let parameterType;
                if (configItem.params.doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.param.${configItem.params.type}"`;
                } else if (configItem.reqs.length == 1 && configItem.reqs[0].doCreate) {
                        parameterType = ` parameterType="com.@project.pojo.req.${configItem.reqs[0].type}"`;
                }

                let updateModel = {
                        alias: configItem.alias || "",
                        id: configItem.id,
                        set: this._renderSet({ content: setColumnsSegment }),
                        where: this._renderConditions(configItem),
                        parameterType: parameterType || ""
                }

                return UPDATE_RENDER.renderTemplate(updateModel);
        }

        /**
         * Render update sql ,update time field
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
        _renderColumnName(columnModel) {
                columnModel.alias = columnModel.alias
                        ? ` as ${NamingStrategy.toHungary(columnModel.alias).toLowerCase()}` : "";

                let content = COLUMN_RENDER.renderTemplate(columnModel);
                columnModel.content = content;
                return this._renderIf(columnModel);
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
                return this._renderIf(asignModel);
        }

        /**
         * Render sql where clause
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @returns {String}
         */
        _renderConditions(configItem) {
                let whereSegment = "";
                configItem.context.columnAnalyzer.analyzeConditions(configItem).forEach((condition, i) => {
                        condition.prefix = i == 0 ? "" : "and ";
                        if (condition.isList) {
                                whereSegment += this._renderIn(condition);
                        } else {
                                whereSegment += condition.expression ? this._renderExpression(condition) : this._renderAsign(condition);
                        }
                });

                return this._renderWhere({ content: whereSegment });
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
         * Render batch insert
         * 
         * @param {String} content 
         * @returns {String}
         */
        _renderBatch(content) {
                let lines=STR.splitToLines(content.trim())
                lines.splice(1, 0, BTACH_PREFIX);
                lines.splice(lines.length - 1,0, BATCH_SUFFIX);
                for (let line of lines) {
                        line = "        "+ line;
                }

                return STR.arrayToString1(lines, line => line+"\r\n");
        }

        /**
         * Render property template
         * 
         * @private     
         * @param {PropertyModel} propertyModel
         * @returns {String}
         */
        _renderValue(propertyModel) {
                propertyModel.property = propertyModel.name;
                propertyModel.content = PROPERTY_RENDER.renderTemplate(propertyModel);
                return this._renderIf(propertyModel);
        }


        /**
         * Render in segment
         * 
         * @param {InModel} inModel 
         * @returns {String}
         */
        _renderIn(inModel) {
                inModel.content = INRENDER.renderTemplate(inModel);
                return this._renderIf(inModel);
        }

}

exports.MapperConfigRender = MapperConfigRender