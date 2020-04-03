const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { getJavaType } = require("./utils");
const { SimpleRender } = require("../simple-pattern-render/simple-pattern-render");
const { SelectAnalyzer, UpdateAnlyzer, InsertAnalyzer } = require("./analyzer");
const { renderUserReq } = require("./renders/user-req-render");
const { UserAnalyzer } = require("./analyzer");
const JOIN_ANALYZER = require("./join-analyzer")

const CONFIG_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item.js`);
const REQ_IDENT = "                                           ";
const COMMENT_IDENT = "                        ";
const EXCLUDE_IDENT = "                                                  ";
const USER_ANALYZER = new UserAnalyzer();



/**
 * Analyze and render a config template
 */
class ConfigBuilderGenerator {
        constructor () {
                this._selectAnalyzer = new SelectAnalyzer();
                this._insertAnalyzer = new InsertAnalyzer();
                this._updateAnalyzer = new UpdateAnlyzer();
        }

        /**
         * Generate a config file by table
         * 
         * @param {Table} table 
         * @param {Column} pk
         * @param {TableRelations} relations
         * @returns {String}
         */
        generate(table, pk, tables, relations) {

                // auto analyze join
                let joinItems = JOIN_ANALYZER.analyze(relations, table, tables);
                let joins = STR.arrayToString1(joinItems,
                        (join, i) => JOIN_ANALYZER.renderJoinConfig(join, `t${i + 1}`))

                let select = this._generateSelect(table);
                let insert = this._generateInsert(table);
                let update = this._generateUpdate(table);

                let key = STR.upperFirstLetter(pk.name);
                let skey = pk.name;
                let name = STR.upperFirstLetter(table.name);
                let deleteMethodName = key;
                let updateMethodName = key;
                let selectMethodName = key;
                let keyType = getJavaType(pk.type);

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

                let selete_text = this._renderExcludes(select.excludes)
                if (select.expressions.length != 0)
                        selete_text += this._renderExpression(select.expressions);

                let insert_text = this._renderExcludes(insert.excludes)
                let update_text = this._renderExcludes(update.excludes)

                let model = {
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
                        joins,
                        tableInfo: "",
                        insertExcludes: insert_text.trimRight(),
                        insertReq: this._renderReq(insert.validates).trimRight(),
                        insertMsg: insert.msg.trimRight(),

                        updateMsg: update.msg.trimRight(),
                        updateReq: this._renderReq(update.validates).trimRight(),
                        updateExcludes: update_text,

                        selectExcludes: selete_text.trimRight(),
                        selectReq: this._renderReq(select.validates).trimRight(),
                        selectMsg: select.msg.trimRight()

                }

                let content = CONFIG_ITEM_RENDER.renderTemplate(model);
                let lines = STR.splitToLines(content).filter(x => x.trim() != "@@");
                let output = STR.arrayToString1(lines, x => `${x}\r\n`);

                return output.replace(/@@/g, "");
        }

        /**
         * Render excludes
         * 
         * @param {[String]} items 
         * @returns {String}
         */
        _renderExcludes(items) {
                return items.length != 0
                        ? STR.arrayToString1(items, x => `"${x}",`, `${EXCLUDE_IDENT}.excludes([`, "])\r\n")
                        : "";
        }

        /**
         * Render exxpression
         * 
         * @param {[Expression]} items 
         * @returns {String}
         */
        _renderExpression(items) {
                return STR.arrayToString1(items,
                        x => `${EXCLUDE_IDENT}.exp("${x.key}","${x.expression}")\r\n`)
        }

        /**
         * Render req
         * 
         * @param {{key:String,validates:[String]}} items 
         * @returns {String}
         */
        _renderReq(items) {
                let output = "";
                items.forEach(x => {
                        x.validates.forEach(y => {
                                if (y)
                                        output += `${REQ_IDENT}.validate("${x.key}","${y.replace(/"/g, "\\\"")}")\r\n`;
                        });
                })

                return output;
        }

        /**
         * Generate select config
         * 
         * @param {Table} table 
         * @returns {{msg:String excludes:[String],validates:{key:String,validates:[String]},expressions:{key:String,expression:String}}}
         */
        _generateSelect(table) {
                let validates = []
                        , excludes = []
                        , expressions = []
                        , msg = "";

                OBJECT.forEach(table.columns, (columnName, column) => {
                        let type = getJavaType(column.type);
                        if (!this._selectAnalyzer.shouldBeCandidate(type, columnName)) {
                                excludes.push(columnName);
                                msg += `${COMMENT_IDENT}// ${columnName} : excluded \r\n`;
                                return;
                        }

                        // generate validate
                        let validate = this._selectAnalyzer.getValidates(type, columnName);
                        if (validate.length > 0) {
                                msg += `${COMMENT_IDENT}// ${columnName} : validates --- ${STR.arrayToString(validate, "", "  ")}\r\n`;
                                validates.push({
                                        key: columnName,
                                        validates: validate
                                });
                        }

                        // generate expression
                        let expression = this._selectAnalyzer.getExpression(type, columnName);
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
         * @param {Table} table 
         * @returns {{msg:String excludes:[String],validates:{key:String,validates:[String]}}}
         */
        _generateUpdate(table) {
                let validates = []
                        , excludes = []
                        , msg = "";

                OBJECT.forEach(table.columns, (key, value) => {
                        let type = getJavaType(value.type);
                        if (!this._updateAnalyzer.shouldBeCandidate(type, key)) {
                                excludes.push(key);
                                msg += `${COMMENT_IDENT}// ${key} : excluded \r\n`;
                                return;
                        }

                        // generate validate
                        let validate = this._updateAnalyzer.getValidates(type, key);
                        if (validate.length > 0) {
                                msg += `${COMMENT_IDENT}// ${key} : validate --- ${STR.arrayToString(validate, "", "  ")}\r\n`;
                                validates.push({
                                        key: key,
                                        validates: validate
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
         * @param {Table} table 
         * @returns {{msg:String excludes:[String],validates:{key:String,validates:[String]}}}
         */
        _generateInsert(table) {
                let validates = []
                        , excludes = []
                        , msg = "";

                OBJECT.forEach(table.columns, (key, value) => {
                        if (!this._insertAnalyzer.shouldBeCandidate(value)) {
                                excludes.push(key);
                                msg += `${COMMENT_IDENT}// ${key} excluded \r\n`;
                                return;
                        }

                        // generate validate
                        let validate = this._insertAnalyzer.getValidates(value);
                        if (validate.length > 0) {
                                msg += `${COMMENT_IDENT}// ${key} : validate --- ${STR.arrayToString(validate, "", "  ")}\r\n`;
                                validates.push({
                                        key: key,
                                        validates: validate
                                });
                        }
                });

                return {
                        excludes,
                        validates,
                        msg
                };
        }


}

exports.ConfigBuilderGenerator = ConfigBuilderGenerator