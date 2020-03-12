const { STR } = require("./../../libs/str");
const { OBJECT } = require("./../../libs/utils");
const { Matcher } = require("./../common/matchers");
const { getJavaType } = require("./utils");

/**
 * Analyze candidate
 */
class AnalyzerBase {

        /**
        * Add customer configs just extend not override
        * 
        * @param {any} target 
        * @param {{type:String,items:[String]}} param1 
        */
        _useCore(target, config) {
                OBJECT.deepExtend(target, config);
        }

        /**
         * Delete config item
         * 
         * @param {any} target 
         * @param {any} config 
         */
        _disableCore(target, config) {
                Object.keys(config).forEach(typeKey => {
                        if (target[typeKey]) {
                                Object.keys(config[typeKey]).forEach(matcherKey => {
                                        if (target[typeKey][matcherKey])
                                                delete target[typeKey][matcherKey];
                                });
                        }
                });
        }
}

/**
 * Default validate
 */
const DEFAULT_VALIDATES = {
        String: {
                "phone": {
                        matcher: (x) => x.toLowerCase().includes("phone"),
                        validate: "@Phone"
                },
                "mobile": {
                        matcher: (x) => x.toLowerCase().includes("mobile"),
                        validate: "@Phone"
                },
                "telephone": {
                        matcher: (x) => x.toLowerCase().includes("tel"),
                        validate: "@Telephone"
                },
                "idCardNo": {
                        validate: "@IdCardNo"
                },
                "email": {
                        matcher: (x) => x.toLowerCase().includes("email"),
                        validate: "@Email"
                },
                "pwd": {
                        matcher: (x) => x.toLowerCase().includes("pwd"),
                        validate: "@Password"
                },
                "password": {
                        validate: "@Password"
                },
                "url": {
                        matcher: (x) => x.toLowerCase().includes("url"),
                        validate: "@Url"
                },
                "path": {
                        matcher: (x) => x.toLowerCase().includes("path"),
                        validate: "@Path"
                },
                "file": {
                        matcher: (x) => x.toLowerCase().includes("file"),
                        validate: "@Path"
                },
                "domain": {
                        validate: "@Url"
                },
                "host": {
                        matcher: (x) => x.toLowerCase() == "host",
                        validate: "@Url"
                },
                "ip": {
                        matcher: (x) => x.endsWith("Ip") || x.toLowerCase() == "ip",
                        validate: "@Ip"
                },
                "postCode": {
                        validate: "@PostCode"
                },
                "addr": {
                        matcher: (x) => x.toLowerCase().endsWith("addr"),
                },
                "address": {
                        matcher: (x) => x.toLowerCase().endsWith("address"),
                },
                "updateuser": {
                        matcher: (x) => x.toLowerCase().endsWith("updateuser"),
                },
                "createuser": {
                        matcher: (x) => x.toLowerCase().endsWith("createuser"),
                },
        },

        Integer: {
                "status": {
                        matcher: (x) => x.toLowerCase().endsWith("status"),
                        generator: (name) => "@Enum(@type)".replace("@type", `"${name}"`),
                },
                "state": {
                        matcher: (x) => x.toLowerCase().endsWith("state"),
                        generator: (name) => "@Enum(@type)".replace("@type", `"${name}"`),
                },
                "type": {
                        matcher: (x) => x.toLowerCase().endsWith("type"),
                        generator: (name) => "@Enum(@type)".replace("@type", `"${name}"`),
                },
                "level": {
                        matcher: (x) => x.toLowerCase().endsWith("level"),
                        generator: (name) => "@Enum(@type)".replace("@type", `"${name}"`),
                },
                "gender": {
                        validate: "@Enum(\"gender\")"
                },
                "sex": {
                        validate: "@Enum(\"sex\")"
                },

        }
}

/**
 * To generate column validate
 */
class ValidateAnalyzer extends AnalyzerBase {
        constructor() {
                super();
                this.validates = DEFAULT_VALIDATES;
        }

        /**
         * 
         * @param {String} name 
         * @param {String} type 
         * @returns {[String]} 
         */
        getValidates(type, name) {
                let validates = []
                if (!this.validates[type])
                        return validates;

                for (const item in this.validates[type]) {
                        let match = this.validates[type][item].matcher
                                ? this.validates[type][item].matcher(name) : name.toLowerCase().indexOf(item) != -1;
                        if (!match)
                                continue;

                        if (this.validates[type][item].generator) {
                                validates.push(this.validates[type][item].generator(name))
                        } else {
                                validates.push(this.validates[type][item].validate);
                        }
                }

                return validates;
        }

        /**
         * 
         * @param {{type:String,}} config 
         */
        useValidates(config) {
                this._useCore(this.validates, config);
        }

        /**
         * 
         * @param {*} config 
         */
        disableValidates(config) {
                this._disableCore(this.validates, config);
        }
}

/**
 * Wrapper class
 */
class ExcludesAnalyzer extends ValidateAnalyzer {
        constructor() {
                super();
        }

        /**
         * Use additional excludes config
         * 
         * @param {any} target 
         * @param {{type:String,items:[String]}} config
         */
        useExcludes(config) {
                this._useCore(this.excludes, config)
        }

        /**
         * Disable excludes config
         * 
         * @param {{type:String,items:[String]}} config 
         */
        disableEcludes(config) {
                this._disableCore(this.excludes, config);
        }
}

/**
 * Default expressions
 */
const DEFAULT_EXPRESSIONS = {
        Integer: {
                price: {
                        matcher: columnName => columnName.toLowerCase().endsWith("price"),
                        expression: "range"
                },
                total: {
                        matcher: columnName => columnName.toLowerCase().startsWith("total"),
                        expression: "range",
                },
                discount: {
                        matcher: columnName => columnName.toLowerCase().endsWith("discount"),
                        expression: "range",
                },
                age: {
                        expression: "range",
                },
                count: {
                        matcher: columnName => columnName.toLowerCase().endsWith("count"),
                        expression: "range",
                },
                sum: {
                        matcher: columnName => columnName.toLowerCase() == "sum",
                        expression: "range",
                },
                balance: {
                        matcher: columnName => columnName.toLowerCase().endsWith("balance"),
                        expression: "range",
                },
                amount: {
                        matcher: columnName => columnName.toLowerCase().endsWith("amount"),
                        expression: "range",
                },
                timeout: {
                        matcher: columnName => columnName.toLowerCase().endsWith("timeout"),
                        expression: "range",
                },
                grade: {
                        matcher: columnName => columnName.toLowerCase().endsWith("grade"),
                        expression: "range",
                }
        },
        Float: {
                price: {
                        matcher: columnName => columnName.toLowerCase().endsWith("price"),
                        expression: "range"
                },
                total: {
                        matcher: columnName => columnName.toLowerCase().startsWith("total"),
                        expression: "range",
                },
                discount: {
                        matcher: columnName => columnName.toLowerCase().endsWith("discount"),
                        expression: "range",
                },
                age: {
                        expression: "range",
                },
                count: {
                        matcher: columnName => columnName.toLowerCase().endsWith("count"),
                        expression: "range",
                },
                sum: {
                        matcher: columnName => columnName.toLowerCase() == "sum",
                        expression: "range",
                },
                amount: {
                        matcher: columnName => columnName.toLowerCase().endsWith("amount"),
                        expression: "range",
                },
                balance: {
                        matcher: columnName => columnName.toLowerCase().endsWith("balance"),
                        expression: "range",
                },
        },
        Date: {
                createTime: {
                        expression: "timeRange"
                },
                all: {
                        matcher: columnName => true,
                        expression: "timeRange"
                }
        }
}

/**
 * To generate column condition expression
 */
class ExpresssionAnalyzer extends ExcludesAnalyzer {
        constructor() {
                super();
                this.expressions = DEFAULT_EXPRESSIONS;
        }

        /**
         * Get column filter expression by name and type
         * 
         * @param {String} name 
         * @param {String} type 
         * @returns {String?}
         */
        getExpression(type, name) {
                if (!this.expressions[type])
                        return null;

                for (const item in this.expressions[type]) {

                        let match = this.expressions[type][item].matcher
                                ? this.expressions[type][item].matcher(name)
                                : Matcher.lowerIncludes(name, item);

                        if (match)
                                return this.expressions[type][item].expression;
                }

                return null;
        }

        /**
         * Use customer expressions
         * 
         * @param {Config} config 
         */
        useExpression(config) {
                this._useCore(this.expressions, config);
        }

        /**
         * Disable default expressions
         * 
         * @param {Config} config 
         */
        disableExpressions(config) {
                this._disableCore(this.expressions, config);
        }
}

/**
 * Default select ecludes
 */
const SELECT_EXLUCES = {
        String: {
                title: {

                },
                remark: {

                },
                message: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "message"),
                },
                secret: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "secret"),
                },
                description: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "secret"),
                },
                memo: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "memo"),
                },
                summary: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "summary"),
                },
                text: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "text"),
                },
                content: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "content"),
                },
                msg: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "msg"),
                },
                detail: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "detail"),
                },
                name: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "name"),
                },
                info: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "info"),
                },
                log: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "log"),
                },
                url: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "url"),
                },
                file: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "file"),
                },
                path: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "path"),
                },
                pic: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "pic"),
                },
                img: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "img"),
                },
                avartar: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "avartar"),
                },
                pwd: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "pwd"),
                },
                password: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "password"),
                },
                hash: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "hash"),
                },
                credential: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "credentia"),

                },
                cookie: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "cookie"),
                },
                sign: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "sign"),
                },
                key: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName, "key"),
                }
        },
        Integer: {
                value: {
                        matcher: columnName => Matcher.lowerEndsWith(columnName,"value")
                }
        }
}

/**
 * Analyze select candiates
 */
class SelectAnalyzer extends ExpresssionAnalyzer {
        constructor() {
                super();
                this.excludes = SELECT_EXLUCES;

        }

        /**
         * Analyze candidate
         * 
         * @override
         * @param {String} name 
         * @param {String} type 
         * @returns {boolean}
         */
        shouldBeCandidate(type, name) {
                
                // unknown type
                if (!this.excludes[type])
                        return true;

                for (const item in this.excludes[type]) {
                        let match = this.excludes[type][item].matcher
                                ? this.excludes[type][item].matcher(name)
                                : Matcher.lowerIncludes(name, item);

                        if (match)
                                return false;
                }

                return true;
        }
}

/**
 * Insert excludes
 */
const DEFAULT_INSERT_EXCLUDES = {
        String: {
                updateUser: {
                        matcher: columnName => Matcher.lowerIncludesAny(columnName, ["update", "edit"]) && Matcher.lowerIncludes("user")
                }
        },
        Date: {
                updateTime: {

                },
                createTime: {

                }
        }
}

/**
 * Analyze insert candidate
 */
class InsertAnalyzer extends ExcludesAnalyzer {
        constructor() {
                super();
                this.excludes = DEFAULT_INSERT_EXCLUDES;
        }

        /**
         * Analyze candidate
         * 
         * @override
         * @param {Column} column 
         */
        shouldBeCandidate(column) {
                
                //
                if (column.autoInceament || column.defaulValue || column.isPk)
                        return false;

                let type = getJavaType(column.type);
                if (!this.excludes[type])
                        return true;

                for (const item in this.excludes[type]) {
                        let match = this.excludes[type][item].matcher
                                ? this.excludes[type][item].matcher(column.name)
                                : Matcher.lowerIncludes(column.name, item);

                        if (match)
                                return false;
                }

                return true;
        }

        /**
         * Get validate of field, check with nullable constraint
         * 
         * @override
         * @param {Column} column 
         */
        getValidates(column) {
                let type = getJavaType(column.type);
                let validates = [];

                if (!column.nullable)
                        validates.push("@NotNull");

                let ret = validates.concat(super.getValidates(type, column.name));
                return ret;
        }
}

/**
 * Update excludes
 */
const DEFAULT_UPDATE_EXCLUDES = {
        Date: {
                update: {
                        matcher: columnName => Matcher.lowerIncludesAny(columnName, [
                                "updatetime",
                                "updatedate",
                                "createtime",
                                "createdate",
                                "editdate",
                                "editetime",
                                "modifydate",
                                "modifytime"])
                }
        },
        String: {
                createUser: {
                        matcher: columnName => Matcher.lowerIncludesAny(columnName, [
                                "createuser",
                                "creator",
                        ])
                }
        }
}

/**
 * Analyze update candidate
 */
class UpdateAnlyzer extends ExcludesAnalyzer {
        constructor() {
                super();
                this.excludes = DEFAULT_UPDATE_EXCLUDES;
        }

        /**
         * Analyze candiate
         * 
         * @override
         * @param {String} type 
         * @param {String} name 
         * @returns {boolean}
         */
        shouldBeCandidate(type, name) {
                if (!this.excludes[type])
                        return true;

                for (const item in this.excludes[type]) {
                        let match = this.excludes[type][item].matcher
                                ? this.excludes[type][item].matcher(name)
                                : Matcher.lowerIncludes(name, item)

                        if (match)
                                return false;
                }

                return true;
        }
}

/**
 * Default user column matchers
 */
const DEFAULT_USER_MATCHERS = {
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
                        "modifyuser",
                        "operator"
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
 * To find if table has user column
 */
class UserAnalyzer {

        /**
         * Find possibale user column
         * 
         * @param {Config} config 
         */
        findUserColumn(config) {
                let table = config.table;
                let type = config.type;
                for (const columnName in table.columns) {
                        let javaType = getJavaType(table.columns[columnName].type);
                        if (javaType == "String" && DEFAULT_USER_MATCHERS[type].matcher(columnName))
                                return table.columns[columnName].name;

                };

                return null;
        }
}

module.exports = {
        SelectAnalyzer,
        UpdateAnlyzer,
        InsertAnalyzer,
        UserAnalyzer
}