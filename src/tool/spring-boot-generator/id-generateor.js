

class Field {
        constructor() {
                this.name = "";
                this.type = "";
                this.description = "";
                this.validates = [""];
        }
}

/**
 * Join properties
 */
class Join {
        constructor() {
                this.table = {}
                this.includes = [];
                this.conditions = [];
                this.alias = "";
                this.joinCondition = "";
        }
}

/**
 * Req properties
 */
class Req {
        constructor() {
                this.name = "";
                this.description = "";
                this.exlcludes = new Set();
                this.type = "";
                this.doCreate = false;
                this.fields = [new Field()]; // just for write entity
        }
}

/**
 * Params properties
 */
class Params {
        constructor() {
                this.name = "";
                this.description = "";
                this.req = new Req();
                this.fields = [new Field()];
                this.defaultValues = new Map();
        }
}

/**
 * Resp properties
 */
class Resp {
        constructor() {
                this.name = "";
                this.description = "";
                this.doCreate = false;
                this.single = false;
        }
}

/**
 * Controller properties
 */
class Controller {
        constructor() {
                this.path = "";
                this.description = "";
        }
}

/**
 * Config properties
 */
class Config {
        constructor() {
                this.id = "";
                this.type = "";
                this.table = {};
                this.includes = [];
                this.conditions = [];
                this.joins = [new Join()];
                this.noController = false;
                this.noService = false;
                this.controller = new Controller();
                this.reqs = [new Req()];
                this.resp = new Resp();
                this.params = new Params();
        }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------*/

/**
 * Analyze and generate default id
 * 
 *  {get|delete|update|add}{entity}ByxxyyAndzz
 * 
 * @param {Config} config 
 */
function getDefaultId(config) {
        let id = "";
        switch (config.type) {
                case "select":
                        id = "get";
                        break;
                case "delete":
                        id = "get";
                        break;
                case "insert":
                        id = "add";
                        break;
                default:
                        id = "update";
                        break;
        }

        let conditions = this._getConditions(config);
        if (conditions.length == 1) {
                id += this.config.name + "By"
                id += STR.upperFirstLetter(conditions[0].name);
        } else if (conditions.length < 4) {
                conditions.forEach((x, i, array) => {
                        id += i == array.length - 1
                                ? "And" + STR.upperFirstLetter(x.name)
                                : STR.upperFirstLetter(x.name);
                });
                id += this.config.name + "By"
        } else {
                id += this.config.name;
        }

        return id;
}

exports.getDefaultId = getDefaultId