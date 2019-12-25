
/**
 * Create select ecludes
 */
const CREATE_SELECT_EXLUCES = () => {
        return {
                String: {
                        remark: {

                        },
                        message: {
                                matcher: x => x.toLowerCase().includes("message"),
                        },
                        description: {

                        },
                        memo: {

                        },
                        summary: {

                        },
                        text: {

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
                        secret: {
                                matcher: x => x.toLowerCase().includes("secrate"),
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
                        amount: {
                                matcher: x => x.toLowerCase().endsWith("amount"),
                                expression: "range",
                        },
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
                },
                Date: {
                        createTime: {
                                expression: "timeRange"
                        },
                        detectTime: {
                                expression: "timeRange"
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
        "updateTime": "new Date()",
}

const { getJavaType } = require("./utils")

/**
 * Analyze candidate
 */
class AnalyzerBase {
        constructor() {
                this.validates = CREATE_VALIDATES();
        }

        /**
         * Analyze candidate
         * 
         * @abstract
         * @param {String} type 
         * @param {String} name 
         * @returns {boolean}
         */
        shouldBeCandidate(type, name) {
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

/**
 * Analyze select candiates
 */
class SelectAnalyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = CREATE_SELECT_EXLUCES();
                this.expressions = CREATE_EXPRESSIONS();
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
                                : name.toLowerCase().indexOf(item) != -1

                        if (match)
                                return false;
                }

                return true;
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
                                : name.toLowerCase().indexOf(item) != -1

                        if (match)
                                return this.expressions[type][item].expression;
                }

                return null;
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
 * Create insert excludes
 */
const CREATE_INSERT_EXCLUDES = () => {
        return {
                String: [
                        "updateUser"
                ],
                Date: [
                        "updateTime",
                        "createTime"
                ]
        }
}

/**
 * Analyze insert candidate
 */
class InsertAnalyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = CREATE_INSERT_EXCLUDES();
                this.validates = CREATE_VALIDATES();
        }

        /**
         * Analyze candidate
         * 
         * @override
         * @param {*} column 
         */
        shouldBeCandidate(column) {
                if (column.autoInceament || column.defaulValue)
                        return false;

                let type = getJavaType(column.type);
                if (!this.excludes[type])
                        return true;

                for (const item in this.excludes[type]) {
                        let match = this.excludes[type][item].matcher
                                ? this.excludes[type][item].matcher(column.name)
                                : column.name.toLowerCase().indexOf(item) != -1

                        if (match)
                                return false;
                }

                return true;
        }

        /**
         * Get validate of field
         * 
         * @override
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
const CREATE_UPDATE_EXCLUDES = () => {
        return {
                Date: [
                        "createTime",
                ],
                String: [
                        "createUser",
                ],
                Integer: [

                ]
        }
}

/**
 * Analyze update candidate
 */
class UpdateAnlyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = CREATE_UPDATE_EXCLUDES();
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
                                : name.toLowerCase().indexOf(item) != -1

                        if (match)
                                return false;
                }

                return true;
        }

}

module.exports = {
        SelectAnalyzer,
        UpdateAnlyzer,
        InsertAnalyzer,
}