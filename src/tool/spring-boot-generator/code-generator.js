/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-01 14:51:59
 */
const { FILE } = require("../../libs/file")
const { STR } = require("../../libs/str")
const { NamingStrategy } = require("../../libs/naming-strategy")

const ident1 = "  ";
const ident2 = "    ";
const ident3 = "      ";
const ident4 = "        "

exports.SqlGenerator = class SqlGenerator {

        /**
         * 
         * @param {
                       {
                                id:String,
                                table:Table,
                                type:String,
                                includes:[String|{name:String,reuired:boolean,alias:String}],
                                conditions:[String|{name:String,reuired:boolean,alias:String}],
                                join:{
                                        type:String,
                                        table1:{
                                             alias:String,
                                             table:Table, 
                                             includes:[String|{name:String,reuired:boolean,alias:String}], 
                                             conditions:[String|{name:String,reuired:boolean,alias:String}],
                                        },
                                        table2:{
                                                alias:String,
                                                table:Table, 
                                                includes:[String|{name:String,reuired:boolean,alias:String}], 
                                                conditions:[String|{name:String,reuired:boolean,alias:String}],
                                        }
                                },
                                outputType:String,
                                req:{
                                        includes:[{name:String,type:String,from:String}],
                                        excludes:[String],
                                },
                                resp:boolean,
                                controller:boolean
                        }
          } config 
         */
        constructor(config) {
                this.config = config;
        }

        /**
         * Main render function
         * 
         * @private
         * @returns {String}
         */
        render() {
                if (this.config.type == "insert") {
                        return this._renderInsert();
                } else if (this.config.type == "update") {
                        return this._renderUpdate();
                } else if (this.config.type == "delete") {
                        return this._renderDelete();
                } else {
                        return this._renderSelect();
                }
        }

        /**
         * Render insert statement
         * 
         * @private
         * @returns {String}
         */
        _renderInsert() {
                let columns = "(";
                let properties = "(";
                this._getIncludes().forEach(x => {
                        columns += x.required
                                ? this._renderColumn(x, ",", ident3) :
                                this._renderIfColumn(x, ",", ident3);

                        properties += x.required
                                ? this._renderProperty(x, ",", ident3) :
                                this._renderIfProperty(x, ",", ident3);
                });

                let content = FILE.read("./templates/insert.xml");
                content = this._renderTrim(content, columns, "@columns");
                content = this._renderTrim(content, properties, "@properties");
                return this._finalReplace(content);
        }

        /**
         * Render delete statement
         * 
         * @private
         * @returns {String}
         */
        _renderDelete() {
                let conditions = "";
                this._getConditions().forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let content = FILE.read("./templates/delete.xml");
                content = this._renderWhere(content, conditions);

                return this._finalReplace(content);
        }

        /**
         * Render update statement
         * 
         * @private
         * @returns {String}
         */
        _renderUpdate() {
                let columns = "";
                this._getIncludes().forEach((x, i, array) => {
                        columns += x.required
                                ? i == array.length - 1 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "", ",", ident3)
                                : i == array.length - 1 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "", ",", ident3);

                });

                let conditions = "";
                this._getConditions().forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let content = FILE.read("./templates/update.xml");
                content = this._renderSet(content, columns);
                content = this._renderWhere(content, conditions);

                return this._finalReplace(content);
        }

        /**
         * Render select statement
         * 
         * @private
         * @returns {String}
         */
        _renderSelect() {
                let columns = "";
                this._getIncludes().forEach(x => {
                        columns += this._renderColumn(x, ",", ident3);
                });

                // join alias
                let conditions = "";
                this._getConditions().forEach((x, i) => {
                        conditions += x.required
                                ? i == 0 ? this._renderAsign(x, "", "", ident3) : this._renderAsign(x, "and ", "", ident3)
                                : i == 0 ? this._renderIfAsign(x, "", "", ident3) : this._renderIfAsign(x, "and ", "", ident3);
                });

                let joins = "";
                if (this.config.joins)
                        joins = this._renderJoins(this.config.joins);

                let content = FILE.read("./templates/select.xml")
                        .replace("@joins", joins);
                content = this._renderTrim(content, columns, "@columns");
                content = this._renderWhere(content, conditions);

                return this._finalReplace(content);
        }

        /**
         * 
         * @param {String} content 
         * @param {*} items 
         */
        _renderSet(content, items) {
                return items.indexOf("</if>") != -1
                        ? content.replace("@set", FILE.read("./templates/set.xml").replace("@content", items))
                        : content = content.replace("@set", items);
        }

        /**
         * Render trim segment
         * 
         * @param {String} content 
         * @param {String} columns 
         * @param {String} pattern
         * @returns {String} 
         */
        _renderTrim(content, columns, pattern) {
                if (columns.indexOf("</if>") != -1) {
                        let trim = FILE.read("./templates/trim.xml");
                        if (columns.indexOf("(") == -1) {
                                trim = trim.replace("@prefix", "")
                                        .replace("@suffix", "");
                        } else {
                                trim = trim.replace("@prefix", " prefix=\"(\"")
                                        .replace("@suffix", " suffix=\")\"");
                                columns = columns.replace("(", "");
                        }

                        content = content.replace(pattern, trim.replace("@content", columns));
                }
                else {
                        if (columns.length != 0) {
                                columns = columns.trimRight();
                                columns = columns.substr(0, columns.length - 1);

                                if (columns.indexOf("(") != -1)
                                        columns += ")";
                        }
                        content = content.replace(pattern, columns);
                }

                return content;
        }

        /**
         * Render where segment
         * 
         * @private
         * @param {String} content 
         * @param {String} conditions 
         * @returns {String}
         */
        _renderWhere(content, conditions) {
                if (conditions.indexOf("</if>") != -1) {
                        content = content.replace("@where",
                                FILE.read("./templates/where.xml").replace("@content", conditions));
                } else {
                        conditions = conditions.trimLeft();
                        content = content.replace("@where", ident1 + "where\r\n" + ident4 + conditions);
                }

                return content;
        }

        /**
         * 
         * @private
         * @param {String} content 
         * @returns {String}
         */
        _finalReplace(content) {
                return STR.removeEmptyLine(content)
                        .replace("@id", this.config.id)
                        .replace("@tableName",
                                NamingStrategy.toHungary(this.config.table.name).toLowerCase())
        }

        /**
         * Render if column expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix 
         */
        _renderIfColumn(column, suffix = ",", ident) {
                return column.alias
                        ? `${ident}<if test="${column.name} != null">\r\n${ident}  ${column.rawName} as ${column.alias}${suffix}\r\n${ident}</if>\r\n`
                        : `${ident}<if test="${column.name} != null">\r\n${ident}  ${column.rawName}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render if property expression
         * 
         * @private
         * @param {String} property 
         * @param {String} suffix 
         * @returns {String}
         */
        _renderIfProperty(column, suffix, ident) {
                return `${ident}<if test="${column.name} != null">\r\n${ident}  #{${column.name}}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render if assign expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderIfAsign(column, prefix = "and", suffix = ",", ident) {
                return `${ident}<if test="${column.name} != null">\r\n${ident}  ${prefix}${column.rawName} = #{${column.name}}${suffix}\r\n${ident}</if>\r\n`;
        }

        /**
         * Render assign expression
         * 
         * @private
         * @param {Column} column 
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderAsign(column, prefix = "and", suffix = ",", ident) {
                return `${ident}  ${prefix}${column.rawName} = #{${column.name}}${suffix}\r\n`;
        }

        /**
         * Render column field
         * 
         * @private
         * @param {Column} column 
         * @param {String} suffix 
         * @returns {String}
         */
        _renderColumn(column, suffix = ",", ident) {
                return column.alias ? `${ident}  ${column.rawName} as ${column.alias}${suffix}\r\n`
                        : `${ident}  ${column.rawName}${suffix}\r\n`;
        }

        /**
         * Render property field
         * 
         * @private
         * @param {String} property 
         * @param {String} suffix
         * @returns {String} 
         */
        _renderProperty(column, suffix = ",", ident) {
                return `${ident}  #{${column.name}}${suffix}\r\n`;
        }

        /**
         * Render joins
         * 
         * @private
         * @param {[Joins]} joins 
         * @returns {String}
         */
        _renderJoins(joins) {
                let output = "";
                joins.forEach(x => {
                        output += this._renderJoin(x);
                });
                return output;
        }

        /**
         * Render join 
         * 
         * @private
         * @param {Join} join
         * @returns {String} 
         */
        _renderJoin(join) {
                return join.alias ? `${ident1}${join.type} join ${this._getRawName(join.table1)} as ${join.alias} on ${join.joinCondition}`
                        : `${ident1}${join.type} join ${this._getRawName(join.table1)} on ${join.joinCondition}`;
        }

        /**
         * Get all select columns ,or update columns ,or insert columns
         * 
         * @private
         * @returns {[Column]}
         */
        _getIncludes() {
                return this._getItems(false);
        }

        /**
         * Get all codition columns
         * 
         * @private
         * @returns {[Column]}
         */
        _getConditions() {
                return this._getItems(true);
        }

        /**
         * If is {isCondition} is true ,return all condition columns 
         * ,or select columns, or update columns
         * 
         * @private
         * @param {boolen} isCondition 
         * @returns {[Column]}
         */
        _getItems(isCondition = false) {
                let columns = [];
                if (isCondition) {
                        this._merge(columns, this._getColumns(this.config.table, this.config.conditions, true));
                } else {
                        this._merge(columns, this._getColumns(this.config.table, this.config.includes));
                }

                if (this.config.joins) {
                        this.config.joins.forEach(join => {
                                if (isCondition) {
                                        this._merge(columns, this._getColumns(join.table1, join.conditions, true))
                                } else {
                                        this._merge(columns, this._getColumns(join.table1, join.includes))
                                }
                        });
                }

                return columns;
        }

        /**
         * Append array2's elements into array1
         * 
         * @private
         * @param {[]} array1 
         * @param {[]} array2 
         */
        _merge(array1, array2) {
                array2.forEach(x => {
                        array1.push(x);
                });
        }

        /**
         * Find all columns by giving column names from table
         * 
         * @private
         * @param {Table} table 
         * @param {[String]} columnNames 
         * @returns {[Column]}
         */
        _getColumns(table, columnNames = [], isCondition) {
                let columns = [];
                columnNames.forEach(x => {
                        let column = this._getColumn(table, x);
                        column.required = isCondition ? x.required
                                : this.config.type == "insert" || this.type == "update" ? !column.nullable : x.required;

                        column.alias = x.alias;
                        column.rawName = this._getRawName(table, column, x.prefix);
                        columns.push(column);
                });

                return columns;
        }

        /**
         * Find and return column of table or throw not found error
         * 
         * @private
         * @param {Table} table 
         * @param {String|{name:String,required:boolean}} columnName 
         * @returns {Column}
         */
        _getColumn(table, columnName) {
                let name = columnName.name || columnName;
                if (table.columns[name]) {
                        table.columns[name].required = null;
                        table.columns[name].alias = null;
                        return table.columns[name];
                }

                throw new Error(`column(${columnName}) can not be found in table(${table})`);
        }

        /**
         * Return raw table name or raw table.column
         * 
         * @private
         * @param {String} table 
         * @param {Column} column 
         * @returns {String}
         */
        _getRawName(table, column, prefix) {
                return !column ? NamingStrategy.toHungary(table.name).toLowerCase()
                        : prefix ? `${prefix}.${NamingStrategy.toHungary(column.name)}`
                                : `${NamingStrategy.toHungary(table.name).toLowerCase()}.${NamingStrategy.toHungary(column.name)}`;
        }
}
