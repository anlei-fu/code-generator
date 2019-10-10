/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:28:55
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 16:16:30
 */
var { UNDEFINED, requireNotNull } = require("./../libs/utils");
/**
 * Sql base class
 */
class DbObject {
        constructor(name, description) {
                this.name = name;
                this.description = description;
        }
        toString() {
                return `${this.name}\r\n${typeof this}\r\n${this.description}`;
        }

}
/**
 * Class of sql db
 */
exports.Db = class Db extends DbObject {
        constructor(name, description) {
                super(name, description);
                /**
                 * @member {{Package}}
                 */
                this.packages = {};
                /**
                * @member {{Procedure}}
                */
                this.procedures = {};
                /**
                * @member {{Sequence}}
                */
                this.sequences = {};
                /**
                * @member {{Table}}
                */
                this.tables = {};
                /**
                * @member {{Function}}
                */
                this.functions = {};
                /**
                * @member {{Job}}
                */
                this.jobs = {};
        }
}
/**
 * Class of sql packege
 */
exports.Package = class Package extends DbObject {

}
/**
 * Class of join relation
 */
class Join {
        constructor(another, condition) {
                this.another = another;
                this.condition = condition;
        }
}
/**
 *  Class of mapping columns
 */
class MappingColumn {
        constructor(table, column) {
                this.table = table;
                this.column = column;
                this.joinType;
        }
}

/**
 * Class of sql table 
 */
exports.Table = class Table extends DbObject {
        constructor(name, description) {
                super(name, description);
                /**
                 * @member {{Column}}
                 */
                this.columns = {};
                /**
                 * @member {boolean} isInfinite role as providing infomation or saving data  
                 */
                this.isInfamationTable = false;
                /**
                 * @member {String} primaryKey ,identity column name
                 */
                this.primaryKey;
                /**
                 * 
                 */
                this.joins = {};
                /**
                 * @member {Constraints}
                 */
                this.constraints = {};
                /**
                 * 
                 */
                this.indexes = {};
        }
        /**
         * Generate create-table string
         */
        toCreateString() {

        }
        /**
         * Render insert string
         */
        renderInsert(parameter) {

        }
        /**
         * Render bulk-insert string
         */
        renderInsertMany() {

        }
        /**
         * Render drop string
         */
        renderDrop() {

        }
        /**
         * Render delete-by-key  string
         */
        renderDeleteByKey() {

        }
        /**
         * Generate clear-all string
         */
        generateClear() {

        }
        /**
         * Render update by key
         */
        renderUpdateByKey() {

        }
        /**
         *  Generate select all sql string
         */
        generateGetAll() {

        }
        /**
         *  Generate count(*) string
         */
        generateGetCount() {

        }
        /**
         * Render get by key
         */
        renderGetByKey() {

        }
}
/**
 * Class of sql type 
 */
exports.SqlType = class SqlType {
        /**
         * 
         * @param {String} name 
         * @param {Number?} length 
         */
        constructor(name, length) {
                this.name = name;
                this.length = length;
        }
        /**
         * @static
         * @param {String} str 
         * @returns {SqlType}
         */
        static parse(str) {
                return new SqlType();
        }
        /**
         * to sql-type string,type|type(length)
         */
        toString() {
                return typeof length == UNDEFINED ?
                        this.name : `${this.name}(${this.length})`;
        }
}
/**
 * Class of sql column
 */
exports.Column = class Column extends DbObject {
        constructor(name, description) {
                super(name, description);
                /**
                 * @member {String} columnName, mapped column 
                 * @required
                 */
                this.columnName;
                /**
                 * @member {SqlType}  
                 * @required
                 */
                this.type;
                /**
                 * @member {boolean}
                 * @default  true
                 */
                this.nullable = true;
                /**
                 * @member {boolean}
                 * @default false
                 */
                this.autoIncrement = false;
                /**
                 * @member {boolean}
                 * @default false
                 */
                this.isPk = false;
                /**
                 * @member {Sequence?} if @member autoIncrement is true ,
                 *  should map a @see {Sequence}
                 */
                this.sequence;
                /**
                 * @member {String} check, check constraint
                 */
                this.check;
                /**
                 * @member {Any} 
                 * @default null
                 */
                this.defaltValue;
                /**
                 * @member {boolean} unique ,unique constraint
                 * @default false
                 */
                this.unique = false;
                /**
                 * @member {String} chineseName
                 */
                this.chineseName;
                /**
                 * @member {boolean} isEnum, render a select controle if true
                 * @required
                 */
                this.isEnum = false;
                /**
                 * @member {MappingColumn} mappingColumn,when render replace with another 
                 *  join table's column
                 */
                this.mappingColumn;
                /**
                 * 
                 */
                this.isFilter;
        }
        toCreatString() {
                var ret = "";

        }

}
/**
 * Class of sequence
 */
class Sequence extends DbObject {
        constructor(name, description) {
                super(name, description);
        }
        nextVal() {
                return `SELECT ${this.name}.nextVal FROM DUAL`;
        }
}
/**
 * 
 */
class Parameter extends DbObject {
        constructor(name, description) {
                super(name, description);
                this.direction;
                this.type;
                this.defaultValue;
        }
}
/**
 * Class of procedure
 */
exports.Procedure = class Procedure extends DbObject {
        constructor(name, description) {
                super(name, description);
                this.parameters = parameters;
        }

        toCreateString() {

        }

        toDropString() {

        }
        render(parameters) {

        }
}
exports.Function = class Function extends Procedure {
        constructor(name, description) {
                super(name, description);
                this.parameters = {};
                this.returnType;
        }
}
class Job {

}
/**
 * Class of sql constraint
 */
exports.Constraints = class Constraint {
        constructor(name, description) {
                super(name, description);
                /**
                 * @member {String}
                 */
                this.type;
                this.columns = [];
        }
}
/**
 * Class of sql index
 */
exports.Index = class Index {
        constructor() {
                this.name;
                /**
                 * @member {String}
                 */
                this.type;
                /**
                 * @member {[String]}
                 */
                this.columns = [];
        }
}

exports.SqlValue = class SqlValue {
        constructor() {
                /**
                 * @member {SqlType}
                 * @required
                 */
                this.type;
                /**
                 * @member {Any}
                 * @required
                 */
                this.value;
        }
}
/**
 * Class of sql constant
 */
class SqlConstant extends DbObject {
        constructor(name, description) {
                super(name, description);
                /**
                 * @member {SqlValue}
                 */
                this.value;
        }
}