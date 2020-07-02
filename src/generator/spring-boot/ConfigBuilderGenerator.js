const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { getJavaType } = require("./utils");
const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { SelectAnalyzer, UpdateAnlyzer, InsertAnalyzer } = require("./Analyzer");
const { renderUserReq } = require("./renders/user-req-render");
const { UserColumnAnalyzer } = require("./Analyzer");
const { JoinAnalyzer } = require("./JoinAnalyzer");
const {GenerateItemConfig} =require("./GenerateConfig");

const JOIN_ANALYZER = new JoinAnalyzer();
const CONFIG_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item.js`);
const ADD_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-add.js`);
const ADD_BACTH_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-add-batch.js`);
const DELETE_BY_ID_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-delete-by-id.js`);
const DELETE_BATCH_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-delete-batch.js`);
const UPDATE_BY_ID_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-update-by-id.js`);
const UPDATE_BATCH_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-update-batch.js`);
const GET_BY_ID_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-get-by-id.js`);
const GET_PAGE_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-get-page.js`);
const GET_DETAIL_BY_ID_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-get-detail-by-id.js`);
const GET_DETAIL_PAGE_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-get-detail-page.js`);
const GET_ALL_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-get-all.js`);
const COUNT_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item-count.js`);

const REQ_IDENT = "                                           ";
const COMMENT_IDENT = "                        ";
const EXCLUDE_IDENT = "                                                  ";
const USER_ANALYZER = new UserColumnAnalyzer();


class AnalyzeMsg {
        constructor () {
                this.excludes = [""];
                this.validates = { key: "", validate: [""] };
                this.expressions = { key: "", expression: "" };
        }
}

class SelectConfig {
        constructor () {

        }
}

class InsertConfig {
        constructor () {

        }
}

class UpdateConfig {
        constructor () {

        }
}

class Expressoin {
        constructor () {

        }
}


/**
 * Analyze and render a config template
 */
class ConfigBuilderGenerator {
        /**
         * 
         * @param {GenerateItemConfig} config 
         */
        constructor () {
                this._selectAnalyzer = new SelectAnalyzer();
                this._insertAnalyzer = new InsertAnalyzer();
                this._updateAnalyzer = new UpdateAnlyzer();
        }

        /**
         * Generate a config file by table
         * 
         * @param {Table} table 
         * @param {Column} pkColumn
         * @param {TableRelations} relations
         * @param {Tables} tables
         * @returns {String}
         */
        generate(config,table, pkColumn, tables, relations) {

                // analyze join config and render
                let joinConfigs = JOIN_ANALYZER.analyze(relations, table, tables);
                let joinsSegment = STR.arrayToString1(joinConfigs,
                        (joinConfig, i) => JOIN_ANALYZER.renderJoinConfig(joinConfig, `t${i + 1}`))

                let selectConfig = this._generateSelectConfig(table);
                let insertConfig = this._generateInsertConfig(table);
                let updateConfig = this._generateUpdateConfig(table);

                let key = STR.upperFirstLetter(pkColumn.name);
                let skey = pkColumn.name;
                let name = STR.upperFirstLetter(table.name);
                let deleteMethodName = key;
                let updateMethodName = key;
                let selectMethodName = key;
                let keyType = getJavaType(pkColumn.type);

                // analyze user req
                let userColumn = null;
                let insertUserReq = "";
                userColumn = USER_ANALYZER.findUserColumn(table, "insert");
                if (userColumn != null)
                        insertUserReq = renderUserReq(userColumn);

                let deleteUserReq = "";
                userColumn = USER_ANALYZER.findUserColumn(table, "delete");
                if (userColumn != null)
                        deleteUserReq = renderUserReq(userColumn);

                let updateUserReq = "";
                userColumn = USER_ANALYZER.findUserColumn(table, "update");
                if (userColumn != null)
                        updateUserReq = renderUserReq(userColumn);

                let selectUserReq = "";
                userColumn = USER_ANALYZER.findUserColumn(table, "select");
                if (userColumn != null)
                        selectUserReq = renderUserReq(userColumn);

                let selete_text = this._renderExcludes(selectConfig.excludes)
                if (selectConfig.expressions.length != 0)
                        selete_text += this._renderExpression(selectConfig.expressions);

                let insert_text = this._renderExcludes(insertConfig.excludes)
                let update_text = this._renderExcludes(updateConfig.excludes)

                let generateConfig = {
                        tname: name,
                        keyType,
                        key,
                        skey,
                        deleteMethodName,
                        updateMethodName,
                        selectMethodName,
                        insertUserReq,
                        deleteUserReq,
                        updateUserReq,
                        selectUserReq,
                        joins: joinsSegment,
                        tableInfo: "",
                        insertExcludes: insert_text.trimRight(),
                        insertReq: this._renderReq(insertConfig.validates).trimRight(),
                        insertMsg: insertConfig.msg.trimRight(),

                        updateMsg: updateConfig.msg.trimRight(),
                        updateReq: this._renderReq(updateConfig.validates).trimRight(),
                        updateExcludes: update_text,

                        selectExcludes: selete_text.trimRight(),
                        selectReq: this._renderReq(selectConfig.validates).trimRight(),
                        selectMsg: selectConfig.msg.trimRight()
                }

                let content="";
                content+=this._renderItem(config.add,ADD_RENDER,generateConfig);
                content+=this._renderItem(config.addBatch,ADD_BACTH_RENDER,generateConfig);
                content+=this._renderItem(config.deleteById,DELETE_BY_ID_RENDER,generateConfig);
                content+=this._renderItem(config.deleteBatch,DELETE_BATCH_RENDER,generateConfig);
                content+=this._renderItem(config.updateById,UPDATE_BY_ID_RENDER,generateConfig);
                content+=this._renderItem(config.updateBatch,UPDATE_BATCH_RENDER,generateConfig);
                content+=this._renderItem(config.getById,GET_BY_ID_RENDER,generateConfig);
                content+=this._renderItem(config.getPage,GET_PAGE_RENDER,generateConfig);
                content+=this._renderItem(config.getDetailById,GET_DETAIL_BY_ID_RENDER,generateConfig);
                content+=this._renderItem(config.getDetailPage,GET_DETAIL_PAGE_RENDER,generateConfig);
                content+=this._renderItem(config.getAll,GET_ALL_RENDER,generateConfig);
                content+=this._renderItem(config.count,COUNT_RENDER,generateConfig);

                generateConfig.content=content;

                content = CONFIG_ITEM_RENDER.renderTemplate(generateConfig);

                // remove useless line startsWith '@@'
                let lines = STR.splitToLines(content).filter(x => x.trim() != "@@");
                let output = STR.arrayToString1(lines, x => `${x}\r\n`);

                return output.replace(/@@/g, "");
        }

        /**
         * Generate select config
         * 
         * @private
         * @param {Table} table 
         * @returns {SelectConfig}
         */
        _generateSelectConfig(table) {
                let validates = []
                        , excludes = []
                        , expressions = []
                        , msg = "";

                OBJECT.forEach(table.columns, (columnName, column) => {
                        let javaType = getJavaType(column.type);

                        // check should be in where clause
                        if (!this._selectAnalyzer.shouldBeCandidate(javaType, columnName)) {
                                excludes.push(columnName);
                                msg += `${COMMENT_IDENT}// ${columnName} : excluded \r\n`;
                                return;
                        }

                        // analyze entity field validates
                        let fieldValidates = this._selectAnalyzer.analyzeValidates(javaType, columnName);
                        if (fieldValidates.length > 0) {
                                msg += `${COMMENT_IDENT}// ${columnName} : validates --- ${STR.arrayToString(fieldValidates, "", "  ")}\r\n`;
                                validates.push({
                                        key: columnName,
                                        validates: fieldValidates
                                });
                        }

                        // analyze sql where-clause expression
                        let expression = this._selectAnalyzer.analyzeExpression(javaType, columnName);
                        if (expression) {
                                msg += `${COMMENT_IDENT}// ${columnName} : expression --- ${expression}\r\n`;
                                expressions.push({
                                        key: columnName,
                                        expression: expression
                                });
                        }
                });

                return {
                        validates,
                        msg,
                        excludes,
                        expressions
                };
        }

        /**
         * Generate update config
         * 
         * @private
         * @param {Table} table 
         * @returns {UpdateConfig}
         */
        _generateUpdateConfig(table) {
                let validates = []
                        , excludes = []
                        , msg = "";

                OBJECT.forEach(table.columns, (columnName, column) => {
                        let javaType = getJavaType(column.type);

                        // should be in update req entity
                        // ex: update-time should be 
                        // exclude and auto gen with current_timestamp
                        if (!this._updateAnalyzer.shouldBeCandidate(javaType, columnName)) {
                                excludes.push(columnName);
                                msg += `${COMMENT_IDENT}// ${columnName} : excluded \r\n`;
                                return;
                        }

                        // generate entity field validates
                        let fieldValidates = this._updateAnalyzer.analyzeValidates(javaType, columnName);
                        if (fieldValidates.length > 0) {
                                msg += `${COMMENT_IDENT}// ${columnName} : validate --- ${STR.arrayToString(fieldValidates, "", "  ")}\r\n`;
                                validates.push({
                                        key: columnName,
                                        validates: fieldValidates
                                });
                        }
                });

                return {
                        excludes,
                        validates,
                        msg
                };
        }

        /**
         * Generate Insert config
         * 
         * @private
         * @param {Table} table 
         * @returns {InsertConfig}
         */
        _generateInsertConfig(table) {
                let validates = []
                        , excludes = []
                        , msg = "";

                OBJECT.forEach(table.columns, (columnName, column) => {

                        // create_time and so on should be excluded and auto gen
                        if (!this._insertAnalyzer.shouldBeCandidate(column)) {
                                excludes.push(columnName);
                                msg += `${COMMENT_IDENT}// ${columnName} excluded \r\n`;
                                return;
                        }

                        // generate validate
                        let fieldValidates = this._insertAnalyzer.analyzeValidates(column);
                        if (fieldValidates.length > 0) {
                                msg += `${COMMENT_IDENT}// ${columnName} : validate --- ${STR.arrayToString(fieldValidates, "", "  ")}\r\n`;
                                validates.push({
                                        key: columnName,
                                        validates: fieldValidates
                                });
                        }
                });

                return {
                        excludes,
                        validates,
                        msg
                };
        }

        /**
         * Render excludes
         * 
         * @private
         * @param {[String]} excludes 
         * @returns {String}
         */
        _renderExcludes(excludes) {
                return excludes.length == 0
                        ? ""
                        : STR.arrayToString1(excludes,
                                exclude => `"${exclude}",`, `${EXCLUDE_IDENT}.excludes([`, "])\r\n");
        }

        /**
         * Render exxpression
         * 
         * @private
         * @param {[Expression]} expressions 
         * @returns {String}
         */
        _renderExpression(expressions) {
                return STR.arrayToString1(expressions,
                        expression => `${EXCLUDE_IDENT}.exp("${expression.key}","${expression.expression}")\r\n`)
        }

        /**
         * Render req
         * 
         * @private
         * @param {{key:String,validates:[String]}} reqFields 
         * @returns {String}
         */
        _renderReq(reqFields) {
                let output = "";
                reqFields.forEach(field => {
                        field.validates.forEach(validate => {
                                if (validate)
                                        output += `${REQ_IDENT}.validate("${field.key}","${validate.replace(/"/g, "\\\"")}")\r\n`;
                        });
                })

                return output;
        }

        /**
         * 
         * @param {String} item 
         * @param {SimpleRender} render 
         * @param {Any} model 
         */
        _renderItem(item,render,model){
              if(!item)
                return "";

                return render.renderTemplate(model);
        }
}

exports.ConfigBuilderGenerator = ConfigBuilderGenerator