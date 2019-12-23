
const createSelectExcludes = () => {
        return {
                String: [
                        "remark",
                        "message",
                        "description",
                        "msg",
                        "detail",
                        "name",
                        "info",
                        "infomation",
                        "log",
                        "url",
                        "file",
                        "path",
                        "pic",
                        "img",
                        "avartar",
                        "pwd",
                        "password",
                        "secret",
                        "hash",
                        "credential",
                        "cookie"
                ],
                Integer: [

                ],
                Float: [

                ],
                Date: [

                ]
        }
}

const createExpression = () => {
        return {
                Integer: {
                        price: "range",
                        total: "range",
                        discount: "range",
                        age: "range",
                        count: "range",
                        sum: "range",
                        amount: "range",
                },
                Float: {
                        price: "range",
                        discount: "range",
                        sum: "range",
                },
                Date: {
                        createTime: "timeRange",
                        detectTime: "timeRange"
                }
        }
}


const createValidates = () => {
        return {
                String: {
                        "phone": {
                                validate: "@Phone"
                        },
                        "mobile": {
                                validate: "@Phone"
                        },
                        "telephone": {
                                validate: "@Telephone"
                        },
                        "idCardNo": {
                                validate: "@IdCardNo"
                        },
                        "email": {
                                validate: "@Email"
                        },
                        "pwd": {
                                validate: "@Password"
                        },
                        "password": {
                                validate: "@Password"
                        },
                        "url": {
                                validate: "@Url"
                        },
                        "path": {
                                validate: "@Path"
                        },
                        "file": {
                                validate: "@Path"
                        },
                        "domain": {
                                validate: "@Url"
                        },
                        "host": {
                                validate: "@Url"
                        },
                        "ip": {
                                validate: "@Ip"
                        },
                        "postCode": {
                                validate: "@PostCode"
                        },
                },

                Integer: {
                        "status": {
                                generator: (name) => "@Enum(@type)".replace("@type", name),
                        },
                        "state": {
                                generator: (name) => "@Enum(@type)".replace("@type", name),
                        },
                        "type": {
                                generator: (name) => "@Enum(@type)".replace("@type", name),
                        },
                        "level": {
                                generator: (name) => "@Enum(@type)".replace("@type", name),
                        },
                        "gender": {
                                validate: "@Enum(gender)"
                        },
                        "sex": {
                                validate: "@Enum(sex)"
                        },

                }


        }
}

const UPDATE_DEFAULT_PATTERNS = {
        "updateTime": "new Date()",
}

const { getJavaType } = require("./utils")

class AnalyzerBase {
        constructor() {
                this.validates = createValidates();
        }

        /**
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
                        if (name.toLowerCase().indexOf(item) != -1) {
                                if (this.validates[type][item].generator) {
                                        validates.push(this.validates[type][item].generator(name))
                                } else {
                                        validates.push(this.validates[type][item].validate);
                                }
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

class SelectAnalyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = createSelectExcludes();
                this.expressions = createExpression();
        }

        /**
         * 
         * @override
         * @param {String} name 
         * @param {String} type 
         * @returns {boolean}
         */
        shouldBeCandidate(type, name) {
                if (!this.excludes[type])
                        return true;

                for (const item of this.excludes[type]) {
                        if (name.toLowerCase().indexOf(item) != -1)
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
                        if (name.toLowerCase() == item.toLowerCase())
                                return this.expressions[type][item];
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
const createInsertExcludes = () => {
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

class InsertAnalyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = createInsertExcludes();
                this.validates = createValidates();
        }

        /**
         * @override
         * @param {*} column 
         */
        shouldBeCandidate(column) {
                if (column.autoInceament || column.defaulValue)
                        return false;

                let type = getJavaType(column.type);
                if (!this.excludes[type])
                        return true;

                for (const item of this.excludes[type]) {
                        if (column.name.toLowerCase().indexOf(item.toLowerCase()) != -1)
                                return false;
                }

                return true;
        }

        /**
         * 
         * @override
         * @override
         * @param {} column 
         */
        getValidates(column) {
                let type = "";
                let validates = [];

                if (!column.nullable)
                        validates.push("@NotNull");

                return validates.concat(super.getValidates(type, column.name));
        }
}

const createUpdateExcludes = () => {
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
class UpdateAnlyzer extends AnalyzerBase {
        constructor() {
                super();
                this.excludes = createUpdateExcludes();
        }

        /**
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
                        if (name.toLowerCase().indexOf(item) != -1)
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