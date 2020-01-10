const { STR } = require("./../../libs/str");
const { Matcher } = require("./../common/matchers")

/**
 * Create select ecludes
 */
const CREATE_SELECT_EXLUCES = () => {
        return {
                String: {
                        title: {

                        },
                        remark: {

                        },
                        message: {
                                matcher: x => x.toLowerCase().includes("message"),
                        },
                        secret: {
                                matcher: x => x.toLowerCase().endsWith("secret"),
                        },
                        description: {

                        },
                        memo: {

                        },
                        summary: {

                        },
                        text: {

                        },
                        content: {

                        },
                        msg: {
                                matcher: x => x.toLowerCase().includes("msg"),
                        },
                        detail: {
                                matcher: x => x.toLowerCase().endsWith("detail"),
                        },
                        name: {
                                matcher: x => x.toLowerCase().includes("name"),
                        },
                        info: {
                                matcher: x => x.toLowerCase().includes("info"),
                        },
                        log: {
                                matcher: x => x.toLowerCase().includes("log"),
                        },
                        url: {
                                matcher: x => x.toLowerCase().includes("url"),
                        },
                        file: {
                                matcher: x => x.toLowerCase().includes("file"),
                        },
                        path: {
                                matcher: x => x.toLowerCase().includes("path"),
                        },
                        pic: {
                                matcher: x => x.toLowerCase().includes("pic"),
                        },
                        img: {
                                matcher: x => x.toLowerCase().includes("img"),
                        },
                        avartar: {
                                matcher: x => x.toLowerCase().includes("avartar"),
                        },
                        pwd: {
                                matcher: x => x.toLowerCase().includes("pwd"),
                        },
                        password: {
                                matcher: x => x.toLowerCase().includes("password"),
                        },
                        hash: {
                                matcher: x => x.toLowerCase().includes("hash"),
                        },
                        credential: {
                                matcher: x => x.toLowerCase().includes("credentia"),

                        },
                        cookie: {
                                matcher: x => x.toLowerCase().includes("cookie"),
                        },
                        sign: {
                                matcher: x => x.toLowerCase().includes("sign"),
                        },
                        key: {
                                matcher: x => x.toLowerCase().includes("key"),
                        }
                        ,
                        Integer: [

                        ],
                        Float: [

                        ],
                        Date: [

                        ]
                },
                Integer: {
                        value: {
                                matcher: x => x.toLowerCase().endsWith("value")
                        }
                }

        }
}

/**
 * Create expressions
 */
const CREATE_EXPRESSIONS = () => {
        return {
                Integer: {
                        price: {
                                matcher: x => x.toLowerCase().endsWith("price"),
                                expression: "range"
                        },
                        total: {
                                matcher: x => x.toLowerCase().startsWith("total"),
                                expression: "range",
                        },
                        discount: {
                                matcher: x => x.toLowerCase().endsWith("discount"),
                                expression: "range",
                        },
                        age: {
                                expression: "range",
                        },
                        count: {
                                matcher: x => x.toLowerCase().endsWith("count"),
                                expression: "range",
                        },
                        sum: {
                                matcher: x => x.toLowerCase() == "sum",
                                expression: "range",
                        },
                        balance: {
                                matcher: x => x.toLowerCase().endsWith("balance"),
                                expression: "range",
                        },
                        amount: {
                                matcher: x => x.toLowerCase().endsWith("amount"),
                                expression: "range",
                        },
                        timeout:{
                                matcher: x => x.toLowerCase().endsWith("timeout"),
                                expression: "range",
                        },
                        grade:{
                                matcher: x => x.toLowerCase().endsWith("grade"),
                                expression: "range",
                        }

                },
                Float: {
                        price: {
                                matcher: x => x.toLowerCase().endsWith("price"),
                                expression: "range"
                        },
                        total: {
                                matcher: x => x.toLowerCase().startsWith("total"),
                                expression: "range",
                        },
                        discount: {
                                matcher: x => x.toLowerCase().endsWith("discount"),
                                expression: "range",
                        },
                        age: {
                                expression: "range",
                        },
                        count: {
                                matcher: x => x.toLowerCase().endsWith("count"),
                                expression: "range",
                        },
                        sum: {
                                matcher: x => x.toLowerCase() == "sum",
                                expression: "range",
                        },
                        amount: {
                                matcher: x => x.toLowerCase().endsWith("amount"),
                                expression: "range",
                        },
                        balance: {
                                matcher: x => x.toLowerCase().endsWith("balance"),
                                expression: "range",
                        },
                },
                Date: {
                        createTime: {
                                expression: "timeRange"
                        },
                        detectTime: {
                                expression: "timeRange"
                        },
                        updateTime:{
                                expression: "timeRange"
                        },
                        all:{
                                matcher:x=>true,
                                expression:"timeRange"
                        }
                }
        }
}

/**
 * Create validate
 */
const CREATE_VALIDATES = () => {
        return {
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
                        "addr":{
                                matcher: (x) => x.toLowerCase().endsWith("addr"),
                        },
                        "address":{
                                matcher: (x) => x.toLowerCase().endsWith("address"),
                        },
                        "updateuser":{
                                matcher: (x) => x.toLowerCase().endsWith("updateuser"),
                        },
                        "createuser":{
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
}

const UPDATE_DEFAULT_PATTERNS = {
        Date: {
                updateTime: {
                        matcher: x => {
                                let lower = x.toLowerCase();
                                if (!lower.includes("time" || !lower.includes("date")))
                                        return false;

                                return STR.includesAny(x, ["edit", "update", "modify"]);
                        },

                        defaultValue: "new Date()"
                }
        }
}

const { getJavaType } = require("./utils")


/**
 * Analyze candidate
 */
class AnalyzerBase {

        /**
        * 
        * @param {any} target 
        * @param {{type:String,items:[String]}} param1 
        */
        _useCore(target, config) {
                if (!target[config.type]) {
                        target[config.type] = config.items;
                        return;
                }

                target[config.type] = target[config.type].concat(config.items);
        }

        /**
         * 
         * @param {any} target 
         * @param {any} config 
         */
        _disableCore(target, config) {
                if (!target[type])
                        return;

                target[config.type] = target[config.type].filter(x => {
                        for (const item of config.items) {
                                if (x == item)
                                        return false;
                        }

                        return true;
                });
        }
}

class ValidateAnalyzer extends AnalyzerBase {
        constructor () {
                super();
                this.validates = CREATE_VALIDATES();
        }

        /**
       * 
       * @param {String} name 
       * @param {String} type 
       * @returns {String?}
       */
        getValidates(type, name) {
                let validates = []
                if (!this.validates[type])
                        return validates;

                for (const item in this.validates[type]) {
                        let match = this.validates[type][item].matcher ? this.validates[type][item].matcher(name) : name.toLowerCase().indexOf(item) != -1;
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

class ExcludesAnalyzer extends ValidateAnalyzer {
        constructor () {
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

class ExpresssionAnalyzer extends ExcludesAnalyzer {
        constructor () {
                super();
                this.expressions = CREATE_EXPRESSIONS();
        }

        /**
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
         * 
         * @param {*} config 
         */
        useExpression(config) {
                this._useCore(this.expressions, config);
        }

        /**
         * 
         * @param {*} config 
         */
        disableExpressions(config) {
                this._disableCore(this.expressions, config);
        }
}

/**
 * Analyze select candiates
 */
class SelectAnalyzer extends ExpresssionAnalyzer {
        constructor () {
                super();
                this.excludes = CREATE_SELECT_EXLUCES();

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
 * Create insert excludes
 */
const INSERT_INSERT_EXCLUDES = () => {
        return {
                String: {
                        updateUser: {
                                matcher: x => Matcher.lowerIncludesAny(x, ["update", "edit"]) && Matcher.lowerIncludes("user")
                        }
                },
                Date: {
                        updateTime: {

                        },
                        createTime: {

                        }
                }
        }
}

/**
 * Analyze insert candidate
 */
class InsertAnalyzer extends ExcludesAnalyzer {
        constructor () {
                super();
                this.excludes = INSERT_INSERT_EXCLUDES();
        }

        /**
         * Analyze candidate
         * 
         * @override
         * @param {*} column 
         */
        shouldBeCandidate(column) {
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
         * Get validate of field
         * 
         * @override
         * @param {} column 
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
 * Create update excludes
 */
const UPDATE_EXCLUDES = () => {
        return {
                Date: {
                        update: {
                                matcher: x => Matcher.lowerIncludesAny(x, [
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
                                matcher: x => Matcher.lowerIncludesAny(x, [
                                        "createuser",
                                        "creator",
                                ])
                        }
                }


        }
}

/**
 * Analyze update candidate
 */
class UpdateAnlyzer extends ExcludesAnalyzer {
        constructor () {
                super();
                this.excludes = UPDATE_EXCLUDES();
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


const USER_MATCHERS = {
        insert: {
                matcher: x => STR.includesAny(x.toLowerCase(), [
                        "createuser"])
                        || STR.equalAny(x.toLowerCase(), ["account",
                                "user",
                                "admin",])
        },
        delete: {
                matcher: x => STR.equalAny(x.toLowerCase(), [
                        "account",
                        "user",
                        "admin"
                ])
        },
        update: {
                matcher: x => STR.includesAny(x.toLowerCase(), [
                        "updateuser",
                        "edituser",
                        "modifyuser"
                ]) || STR.equalAny(x.toLowerCase(), ["user", "admin", "account"])
        },
        select: {
                matcher: x => STR.equalAny(x.toLowerCase(), [
                        "account",
                        "user",
                        "admin"
                ])
        }
};
class UserAnalyzer {
        findUserColumn(config) {
                let table = config.table;
                let type = config.type;
                for (const c in table.columns) {
                        let javaType = getJavaType(table.columns[c].type);
                        if (javaType == "String" && USER_MATCHERS[type].matcher(c))
                                return table.columns[c].name;

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