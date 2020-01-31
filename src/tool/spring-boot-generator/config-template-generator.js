const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { getJavaType } = require("./utils");
const { SimpleRender } = require("../simple-pattern-render/simple-pattern-render");
const { SelectAnalyzer, UpdateAnlyzer, InsertAnalyzer } = require("./analyzer");
const { renderUserReq } = require("./renders/user-req-render");

const CONFIG_ITEM_RENDER = new SimpleRender({}, `${__dirname}/templates/config-item.js`);
const REQ_IDENT = "                                           ";
const COMMENT_IDENT = "                        ";
const EXCLUDE_IDENT = "                                                  ";
const USER_MATCHERS = {
        insert: {
                matcher: columnName => STR.includesAny(columnName.toLowerCase(), [
                        "createuser"])
                        || STR.equalAny(columnName.toLowerCase(), ["account",
                                "user",
                                "admin",])
        },
        delete: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "account",
                        "user",
                        "admin"
                ])
        },
        update: {
                matcher: columnName => STR.includesAny(columnName.toLowerCase(), [
                        "updateuser",
                        "edituser",
                        "modifyuser"
                ]) || STR.equalAny(columnName.toLowerCase(), ["user", "admin", "account"])
        },
        select: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "account",
                        "user",
                        "admin"
                ])
        }
};

/**
 * Analyze and render a config template
 */
class ConfigBuilderGenerator {

        constructor() {
                this._selectAnalyzer = new SelectAnalyzer();
                this._insertAnalyzer = new InsertAnalyzer();
                this._updateAnalyzer = new UpdateAnlyzer();
        }

        /**
         * Generate a config file by table
         * 
         * @param {Table} table 
         * @returns {String}
         */
        generate(table, pk) {
                let select = this._generateSelect(table);
                let insert = this._generateInsert(table);
                let update = this._generateUpdate(table);

                let key = STR.upperFirstLetter(pk.name);
                let skey = pk.name;
                let deleteMethodName = key;
                let updateMethodName = key;
                let selectMethodName = key;
                let keyType = getJavaType(pk.type);

                let insertUserReq = "";
                if (this._hasUser(table, "insert")) {
                        insertUserReq = renderUserReq();
                }

                let deleteUserReq = "";
                if (this._hasUser(table, "delete")) {
                        insertUserReq = renderUserReq();
                        deleteMethodName = "UserAnd" + deleteMethodName;
                }

                let updateUserReq = "";
                if (this._hasUser(table, "update")) {
                        insertUserReq = renderUserReq();
                        updateMethodName = "UserAnd" + updateMethodName;
                }

                let selectUserReq = "";
                if (this._hasUser(table, "select")) {
                        insertUserReq = renderUserReq();
                        selectMethodName = "UserAnd" + selectMethodName;
                }



                let selete_text = this._renderExcludes(select.excludes)
                if (select.expressions.length != 0)
                        selete_text += this._renderExpression(select.expressions);

                let insert_text = this._renderExcludes(insert.excludes)
                let update_text = this._renderExcludes(update.excludes)

                let model = {
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
                let output = "";
                STR.splitToLines(content).forEach(x => {
                        if (x.trim() == "@@")
                                return;

                        output += x + "\r\n";
                });

                return output.replace(/@@/g, "");
        }

        /**
         * Render excludes
         * 
         * @param {[String]} items 
         * @returns {String}
         */
        _renderExcludes(items) {
                if (items.length == 0)
                        return "";

                let output = EXCLUDE_IDENT + ".excludes([";
                items.forEach(x => {
                        output += `"${x}",`;
                })

                output = STR.removeLastComa(output);
                return output + "])\r\n";
        }

        /**
         * Render exxpression
         * 
         * @param {[{key:String,expression:String}]} items 
         * @returns {String}
         */
        _renderExpression(items) {
                let output = "";
                items.forEach(x => {
                        output += EXCLUDE_IDENT + `.exp("${x.key}","${x.expression}")\r\n`;
                })

                return output;
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

                OBJECT.forEach(table.columns, (key, value) => {
                        let type = getJavaType(value.type);
                        if (!this._selectAnalyzer.shouldBeCandidate(type, key)) {
                                excludes.push(key);
                                msg += `${COMMENT_IDENT}// ${key} : excluded \r\n`;
                                return;
                        }

                        // generate validate
                        let validate = this._selectAnalyzer.getValidates(type, key);
                        if (validate.length > 0) {
                                msg += `${COMMENT_IDENT}// ${key} : validates --- ${STR.arrayToString(validate, "", "  ")}\r\n`;
                                validates.push({
                                        key: key,
                                        validates: validate
                                });

                        }

                        // generate expression
                        let expression = this._selectAnalyzer.getExpression(type, key);
                        if (expression) {
                                msg += `${COMMENT_IDENT}// ${key} : expression --- ${expression}\r\n`;
                                expressions.push({
                                        key: key,
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

        /**
         * Check if has user column
         * 
         * @param {Table} table 
         * @param {String} type 
         */
        _hasUser(table, type) {
                for (const c in table.columns) {
                        let javaType = getJavaType(table.columns[c].type);
                        if (javaType == "String" && USER_MATCHERS[type].matcher(c))
                                return true;
                };

                return false;
        }
}

exports.ConfigBuilderGenerator = ConfigBuilderGenerator