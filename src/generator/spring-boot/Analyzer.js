const { STR } = require("../../libs/str");
const { OBJECT } = require("../../libs/utils");
const { Matcher } = require("../common/matchers");
const { getJavaType } = require("./utils");

/**
 * Analyze candidate
 */
class AnalyzerBase {

        /**
        * Add custom configs just extend not override
        * 
        * @param {any} target 
        * @param {{type:String,items:[String]}} config
        * @private
        */
        _useCore(target, config) {
                OBJECT.deepExtend(target, config);
        }

        /**
         * Delete config item
         * 
         * @param {any} target 
         * @param {any} config 
         * @private
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
                        matcher: (columnName) => columnName.toLowerCase().includes("phone"),
                        validate: "@Phone"
                },
                "mobile": {
                        matcher: (columnName) => columnName.toLowerCase().includes("mobile"),
                        validate: "@Phone"
                },
                "telephone": {
                        matcher: (columnName) => columnName.toLowerCase().includes("tel"),
                        validate: "@Telephone"
                },
                "idCardNo": {
                        validate: "@IdCardNo"
                },
                "email": {
                        matcher: (columnName) => columnName.toLowerCase().includes("email"),
                        validate: "@Email"
                },
                "pwd": {
                        matcher: (columnName) => columnName.toLowerCase().includes("pwd"),
                        validate: "@Password"
                },
                "password": {
                        validate: "@Password"
                },
                "url": {
                        matcher: (columnName) => columnName.toLowerCase().includes("url"),
                        validate: "@Url"
                },
                "path": {
                        matcher: (columnName) => columnName.toLowerCase().includes("path"),
                        validate: "@Path"
                },
                "file": {
                        matcher: (columnName) => columnName.toLowerCase().includes("file"),
                        validate: "@Path"
                },
                "domain": {
                        validate: "@Url"
                },
                "host": {
                        matcher: (columnName) => columnName.toLowerCase() == "host",
                        validate: "@Url"
                },
                "ip": {
                        matcher: (columnName) => columnName.endsWith("Ip") || columnName.toLowerCase() == "ip",
                        validate: "@Ip"
                },
                "postCode": {
                        validate: "@PostCode"
                },
        },

        Integer: {
                "status": {
                        matcher: (columnName) => STR.endsWithAny(columnName.toLowerCase(),
                                ["type", "status", "state", "class", "level", "style"])
                                || STR.startsWithAny(columnName.toLowerCase(),
                                        ["is", "need", "permit", "allow", "support", "can", "should"]),
                        generator: (name) => "@Enum(@type)".replace("@type", `"${name}"`),
                },
        }
}

/**
 * To generate column validate
 */
class ValidateAnalyzer extends AnalyzerBase {
        constructor () {
                super();
                this.validates = DEFAULT_VALIDATES;
        }

        /**
         * Analyze column validate
         * 
         * @param {String} name 
         * @param {String} type 
         * @returns {[String]} 
         */
        analyzeValidates(type, name) {
                let validates = []
                if (!this.validates[type])
                        return validates;

                for (const item in this.validates[type]) {
                        let match = this.validates[type][item].matcher
                                ? this.validates[type][item].matcher(name)
                                : name.toLowerCase().indexOf(item) != -1;

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
         * Use custom validate config
         * 
         * @param {{type:String,}} config 
         */
        useValidates(config) {
                this._useCore(this.validates, config);
        }

        /**
         * Disable validate config
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
        constructor () {
                super();
        }

        /**
         * Use custom excludes config
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
                range: {
                        matcher: columnName => STR.endsWithAny(columnName.toLowerCase(),
                                ["count", "total", "price", "num", "sum",
                                        "amount", "profit", "discount", "amount", "balance"]),
                        expression: "range"
                }
        },
        Float: {
                range: {
                        matcher: columnName => STR.endsWithAny(columnName.toLowerCase(),
                                ["count", "total", "price", "num", "sum", "amount",
                                        "profit", "discount", "amount", "balance"]),
                        expression: "range"
                }
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
 * To analyze where-clause expression of column in sql
 */
class ExpresssionAnalyzer extends ExcludesAnalyzer {
        constructor () {
                super();
                this.expressions = DEFAULT_EXPRESSIONS;
        }

        /**
         * Get column filter expression by name and type
         * 
         * @param {String} name, field name
         * @param {String} type Integer|String|Date and so on
         * @returns {String?}
         */
        analyzeExpression(type, name) {
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
         * Use custom expressions
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
                all: {
                        matcher: columnName => !STR.endsWithAny(columnName.toLowerCase(), ["id", "no"])
                }
        },
        Integer: {
                all: {
                        matcher: columnName => !(STR.endsWithAny(columnName.toLowerCase(),
                                ["id", "no", "type", "status", "state",
                                        "class", "level", "style"])
                                || STR.startsWithAny(columnName.toLowerCase(),
                                        ["is", "need", "permit", "allow",
                                                "support", "can", "should"]))
                }
        },
        Date: {
                date: {
                        matcher: columnName => !STR.startsWithAny(columnName.toLowerCase(), ["create"])
                }
        },
        Float: {
                all: {
                        matcher: columnName => true
                }
        },
        Double: {
                all: {
                        matcher: columnName => true
                }
        }

}

/**
 * Analyze select candiates
 */
class SelectAnalyzer extends ExpresssionAnalyzer {
        constructor () {
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
                                : name.toLowerCase().includes(item);

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
                        matcher: columnName => Matcher.lowerIncludesAny(columnName, ["update", "edit"])
                                && Matcher.lowerIncludes("user")
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
        constructor () {
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
         * Get validates of field, and analyze should hava nullable constraint
         * 
         * @override
         * @param {Column} column 
         * @returns {[string]}
         */
        analyzeValidates(column) {
                let type = getJavaType(column.type);
                let validates = [];

                if (!column.nullable)
                        validates.push("@NotNull");

                let ret = validates.concat(super.analyzeValidates(type, column.name));
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
        constructor () {
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
 * Default user column admin matchers
 * admin api
 */
const DEFAULT_USER_ADMIN_MATCHERS = {
        insert: {
                matcher: columnName => STR.includesAny(columnName.toLowerCase(), [
                        "createuser", "operator", "admin"])
        },
        delete: {
                matcher: columnName => false
        },
        update: {
                matcher: columnName => STR.includesAny(columnName.toLowerCase(), [
                        "updateuser",
                        "edituser",
                        "modifyuser",
                        "admin",
                        "operator"
                ])
        },
        select: {
                matcher: columnName => false
        }
};

// user api 
const DEFAULT_USER_MATCHER = {
        insert: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "user", "userid", "owner"])
        },
        delete: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "user", "userid", "owner"])
        },
        update: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "user", "userid", "owner"])
        },
        select: {
                matcher: columnName => STR.equalAny(columnName.toLowerCase(), [
                        "user", "userid", "owner"])
        }
}


/**
 * To find if table has user column
 */
class UserColumnAnalyzer {

        /**
         * Find possibale user column
         * 
         * @param {Config} config 
         * @returns {Column?}
         */
        findUserColumnByConfig(config) {
                return this.findUserColumn(config.table, config.type);

        }

        /**
         * Find userColumn
         * 
         * @param {Table} table 
         * @param {String} sqlType select|update|delete|insert
         * @returns {Column?}
         */
        findUserColumn(table, sqlType) {
                for (const columnName in table.columns) {
                        if (DEFAULT_USER_ADMIN_MATCHERS[sqlType].matcher(columnName)) {
                                return table.columns[columnName];
                        }
                };

                return null;
        }
}


module.exports = {
        SelectAnalyzer,
        UpdateAnlyzer,
        InsertAnalyzer,
        UserColumnAnalyzer
}