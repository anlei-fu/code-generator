const {STR} =require("./../../libs/str")

const DEFAULT_MATCHER = (name, pattern) => name.toLowerCase().includes(pattern.toLowerCase());
const LOWER_INCLUDES_MATCHER= (x,y)=> x.toLowerCase().includes(y.toLowerCase());
const LOWER_ENDS_WITH_MATCHER=(x,y)=>x.toLowerCase().endsWith(y.toLowerCase());

const INSERT_EXCLUDES = {
        int: {
                id: {
                        matcher: x => x == "Id",
                }
        },
        string: {
                user: {
                        matcher: x => {
                                let low = x.toLowerCase();
                                if (!low.includes("user"))
                                        return false;

                                return low.indexOf("create") || low.indexOf("update") || low.indexOf("edit");
                        }
                },
        },
        DateTime: {
                time: {
                        matcher: x => {
                                let low = x.toLowerCase();
                                if (!low.includes("time")||!low.includes("date"))
                                        return false;

                                return low.indexOf("create") || low.indexOf("update") || low.indexOf("edit");
                        }
                },
        }
}

/**
 * Analyze Insert excludes
 */
class AddAnalyzer {
        constructor() {
                this._insertExcludes = INSERT_EXCLUDES;
        }

        /**
         * Check should column be excluded
         * 
         * @param {Column} column 
         */
        shouldBeCandidate(column) {
                if (!this._insertExcludes[column.type])
                        return true;

                for (const c in this._insertExcludes[column.type]) {
                        let match = this._insertExcludes[column.type][c].matcher
                                ? this._insertExcludes[column.type][c].matcher(column.name)
                                : DEFAULT_MATCHER(column.name, c);

                        if (match)
                                return false;
                }

                return true;
        }
}




const STRING_INCLUDES = {
        string: {
                no: {
                        matcher: x => x.toLowerCase().endsWith("no"),
                },
                email: {
                        matcher: x => x.toLowerCase().includes("email"),
                },
                phone: {
                        matcher: x => x.toLowerCase().includes("phone"),
                },
                mobile: {
                        matcher: x => x.toLowerCase().includes("mobile"),
                },
                order: {
                        matcher: x => x.toLowerCase().includes("order"),
                },
                idcardno: {
                        matcher: x => x.toLowerCase().includes("idcardno"),
                }
        },
        int:{

        },

}

const SELECT_EXCLUDES = {
        int: {
                balance: {

                },
                count: {

                },
                amount: {

                },
                price: {

                },
                total: {

                }
        },
        decimal:{
                balance: {

                },
                count: {

                },
                amount: {

                },
                price: {

                },
                total: {

                }
        }
}

/**
 * Analyze select candidates fields
 */
class SelectAnalyzer {
        constructor() {
                this._stringIncludes = STRING_INCLUDES;
                this._intExcludes = SELECT_EXCLUDES;
                this._controlAnalyzer=new ControlAnlyzer();
        }

        /**
         * Analyze select candidate
         * 
         * @param {Column} column 
         * @returns {boolean}
         */
        shouldBeCandidate(column) {

                // excludes all DateTime field
                if (column.type == "DateTime")
                        return false;

                // analyze string includes
                if (column.type == "string") {
                        for (const c in this._stringIncludes["string"]) {
                                let match = this._stringIncludes["string"][c].matcher
                                        ? this._stringIncludes["string"][c].matcher(column.name)
                                        : DEFAULT_MATCHER(column.name, c);

                                if (match)
                                        return true;
                        }

                        return false;
                }

                return this._controlAnalyzer.shouldBeSelect(column);
        }
}



/**
 * Text areas 
 */
const TEXT_AREAS = {
        remark: {
                matcher: x => LOWER_INCLUDES_MATCHER(x,"remark"),
        },
        description: {
                matcher: x => LOWER_INCLUDES_MATCHER(x,"descrp"),
        },
        message: {
                matcher:  x => LOWER_INCLUDES_MATCHER(x,"message"),
        },
        msg: {
                matcher:  x => LOWER_INCLUDES_MATCHER(x,"msg"),
        },
        info: {
                matcher:  x => LOWER_INCLUDES_MATCHER(x,"info"),
        },
        detail: {
                matcher:  x => LOWER_INCLUDES_MATCHER(x,"detail"),
        },
        log: {
                matcher:  x => LOWER_INCLUDES_MATCHER(x,"log"),
        }
}

const { NamingStrategy } = require("../../libs/naming-strategy");

/**
 * Analyze column :
 *    table header
 *    table content
 *    control
 *    join expression
 *    select output column
 */
class ColumnAnalyzer {

        constructor() {
                this._controlAnalyzer = new ControlAnlyzer();
                this.index = 0;
                this._textArea = TEXT_AREAS;
        }

        /**
         * Analyze column
         * 
         * @param {Column} column 
         * @returns {AnalyzeColumnResult}
         */
        analyzeColumn(column) {
                let output = {

                }
                if (this._controlAnalyzer.shouldBeSelect(column)) {
                        output.select = this._controlAnalyzer.getSelectControlConfig(column);
                        output.lable = column.description;
                        output.join = this.makeJoin(column, output.select);
                        output.gettter = `.GetDataValue("${column.name}Name")`;
                        output.column = `t${this.index}.NAME ${column.name}Name`;
                } else {
                        output.gettter = `.${column.name}`;
                        output.column = `t.${NamingStrategy.toHungary(column.name).toUpperCase()}`;
                        output.text = {
                                lable: column.description,
                                name: column.name,
                                textArea: this.isTextArea(column.name)
                        }
                }

                return output;
        }

        /**
         * Should be text area controle
         * 
         * @param {String} name 
         * @returns {boolean}
         */
        isTextArea(name) {
                for (const c in this._textArea) {
                        let match = this._textArea[c].matcher ?
                                this._textArea[c].matcher(name) :
                                DEFAULT_MATCHER(name, c);

                        if (match)
                                return true;
                }

                return false;
        }

        /**
         * Make join expression
         * 
         * @param {Column} column 
         * @param {String} select  name
         */
        makeJoin(column, select) {
                if (select.table.toLower().includes("systemdictionary")) {
                        return `LEFT JOIN ${NamingStrategy.toHungary(select.table).toUpperCase()} t${++this.index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this.index}.VALUE`
                                + ` AND t${this.index}.${NamingStrategy.toHungary(select.type).toUpperCase()} = '${column.name}'`;
                } else {
                        let suffix = column.name.includes("Id") ? "Id" : "No";
                        return `LEFT JOIN ${NamingStrategy.toHungary(select.table).toUpperCase()} t${++this.index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this.index}.${suffix}`;
                }
        }
}

const { SystemDictionary } = require("./resource/select")

/**
 * Analyze control of field , text or select
 */
class ControlAnlyzer {
        constructor() {
                this.selects = CUSTOM_SELECTS;
        }

        /**
         * Check should generate select control
         * 
         * @param {Column} column 
         * @returns {boolean}
         */
        shouldBeSelect(column) {

                if (!CUSTOM_SELECTS[column.type])
                        return false;

                      
                // check by system dictionary
                for (const c in SystemDictionary) {
                        if (c.indexOf(column.name) != -1)
                                return true;
                }

                // check by customs
                for (const item in this.selects[column.type]) {
                        let match = this.selects[column.type][item].matcher
                                ? this.selects[column.type][item].matcher(column.name) :
                                DEFAULT_MATCHER(column.name, item);

                        if (match)
                                return true;
                }

                return false;
        }

        /**
         * Get select control config
         * 
         * @param {Column} column 
         * @return {SelectControlConfig}
         */
        getSelectControlConfig(column) {

                // get from system dictionary
                for (const c in SystemDictionary) {
                        if (c.indexOf(column.name) != -1)
                                return SystemDictionary[c];
                }

                // get from customs
                for (const item in this.selects[column.type]) {

                        let match = this.selects[column.type][item].matcher
                                ? this.selects[column.type][item].matcher(column.name) :
                                DEFAULT_MATCHER(column.name, item);

                        if (match)
                                return this.selects[column.type][item].generator ?
                                        this.selects[column.type][item].generator(column.name) :
                                        this.selects[column.type][item];
                }
        }
}

/**
 * Create default values
 */
const CREATE_DEFAULT_VALUES = {
        string: {
                user: {
                        matcher: x => x.toLowerCase().includes("user") && x.toLowerCase().includes("create"),
                        generator: x => `entity.${x} = LoginStatus.UserName`
                }
        },
        DateTime: {
                time: {
                        matcher: x => x.toLowerCase().includes("time") && x.toLowerCase().includes("create"),
                        generator: x => `entity.${x} = DateTime.Now()`
                }
        }
}

/**
 *  Update default values
 */
const UPDATE_DEFAULT_VALUES = {
        string: {
                user: {
                        matcher: x => {
                                if (!x.toLowerCase().includes("user"))
                                        return false;

                                return x.toLowerCase().includes("update") || x.toLowerCase().includes("edit");
                        },
                        generator: x => `entity.${x} = LoginStatus.UserName`
                }
        },
        DateTime: {
                time: {
                        matcher: x => {
                                if (!x.toLowerCase().includes("time"))
                                        return false;

                                return x.toLowerCase().includes("update") || x.toLowerCase().includes("edit");
                        },
                        generator: x => `entity.${x} = DateTime.Now()`
                }
        }
}

const { OBJECT } = require("../../libs/utils")

/**
 * Analyze default values
 */
class  DelfaultValueAnalyzer {

        constructor() {
                this.updateDefaultValues = UPDATE_DEFAULT_VALUES;
                this.createDefaultValues = CREATE_DEFAULT_VALUES;
        }

        /**
         * Analyze update and insert default values
         * 
         * @param {Table} table 
         * @return {{updates:{name:String,expression:String},creates:{name:String,expression:String}}}
         */
        analyzeTable(table) {
                let ret = {
                        updates: [],
                        creates: [],
                };

                // analyze insert
                OBJECT.forEach(table.columns, (_, column) => {
                        for (const c in this.createDefaultValues) {
                                let match = this.createDefaultValues[c].matcher
                                        ? this.createDefaultValues[c].matcher(column.name)
                                        : DEFAULT_MATCHER(column.name, c);

                                if (match) {
                                        let item = {
                                                name: column.name,
                                                expression: this.createDefaultValues[c].generator(column.name),
                                        }

                                        ret.creates.push(item);

                                        break;
                                }
                        }

                        // analyze update
                        for (const c in this.updateDefaultValues) {
                                let match = this.updateDefaultValues[c].matcher
                                        ? this.updateDefaultValues[c].matcher(column.name)
                                        : DEFAULT_MATCHER(column.name, c);

                                if (match) {
                                        let item = {
                                                name: column.name,
                                                expression: this.updateDefaultValues[c].generator(column.name),
                                        }

                                        ret.updates.push(item);

                                        break;
                                }
                        }
                });

                return ret;
        }
}

module.exports = {
        AddAnalyzer,
        SelectAnalyzer,
        ControlAnlyzer,
        ColumnAnalyzer,
        DelfaultValueAnalyzer
}