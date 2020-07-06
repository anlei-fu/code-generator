const { OBJECT } = require("../../libs/utils");
const { STR } = require("../../libs/str");
const { getJavaType } = require("./utils");
const { NamingStrategy } = require("../../libs/naming-strategy");
const { ConfigItem } = require("./builders/ConfigItem");
const { Table } = require("./builders/Table");

class ColumnMerger {
        /**
         * Merge all possible condition columns
         * 
         * @param {ConfigItem} configItem
         * @returns 
         */
        mergeConditions(configItem) {

                let conditions = [];
                configItem.conditions.forEach(condition => {
                        conditions.push(
                                this.mergeColumnAndConlumnConfig(
                                        configItem.table,
                                        condition,
                                        configItem.alias
                                )
                        );
                });

                // At this time do not support other join table condition filter
                // configItem.joins.forEach(join => {
                //         join.conditions.forEach(condition => {
                //                 conditions.push(this.mergeColumnAndConlumnConfig(join.table, condition, join.alias));
                //         });
                // });

                // add mapper.xml if test expression if need
                configItem.context.expressionGenerator.generateExpression(conditions);

                return conditions;
        }

        /**
         * Get all select columns ,or update columns ,or insert columns
         * 
         * @param {ConfigItem} configItem
         * @returns {[ColumnConfig]}
         */
        mergeIncludes(configItem) {

                // merge with column meta info
                let includes = [];
                configItem.includes.forEach(include => {
                        includes.push(
                                this.mergeColumnAndConlumnConfig(
                                        configItem.table,
                                        include,
                                        configItem.alias
                                )
                        );
                });

                // concat joins includes
                configItem.joins.forEach(join => {
                        join.includes.forEach(include => {
                                includes.push(
                                        this.mergeColumnAndConlumnConfig(
                                                join.table,
                                                include,
                                                join.table.alias
                                        )
                                );
                        });
                });

                // set insert not null expression if column nullable
                if (configItem.type == "insert") {
                        includes.forEach(include => {
                                if (include.nullable) {
                                        include.ifExpression = `${include.name} != null`;
                                        if (getJavaType(include.type) == "String")
                                                include.ifExpression += ` and ${include.name} != ''`;
                                }
                        });
                }

                // generate update mapper.xml if expression
                if (configItem.type == "update")
                        configItem.context.expressionGenerator.generateUpdateExpression(includes);

                return includes;
        }

        /**
         * Find column from table and merge into columnConfig,
         * return merged columnConfig
         * @note 
         * 1. column will be a deep-copy of source column
         * 2. column not found will throw a error
         * 
         * @param {Table} table 
         * @param {ColumnConfig} columnConfig 
         * @param {String} alias of table
         */
        mergeColumnAndConlumnConfig(table, columnConfig, alias) {
                columnConfig.name = STR.lowerFirstLetter(columnConfig.name);

                // column not found
                if (!table.columns[columnConfig.name])
                        throw new Error(`column(${columnConfig.name}) can not be found in table(${table.name})`);

                // clone to avoid reference conflict
                let copy = OBJECT.clone(table.columns[columnConfig.name]);
                copy.type = getJavaType(copy.type);
                OBJECT.extend(columnConfig, copy);

                // no alias specified set table name as prefix
                columnConfig.prefix = alias || NamingStrategy.toHungary(table.name);

                // select-sql-statement output name of column
                columnConfig.column = `${columnConfig.prefix}.${NamingStrategy.toHungary(columnConfig.name)}`;

                // if field is list and 's' suffix
                columnConfig.property = columnConfig.isList ? columnConfig.name + "s" : columnConfig.name;

                return columnConfig;
        }
}


exports.ColumnMerger = ColumnMerger