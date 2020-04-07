const { OBJECT } = require("./../../libs/utils");
const { getJavaType } = require("./utils");
const { NamingStrategy } = require("./../../libs/naming-strategy");

class ColumnAnalyzer {

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

                // column not found
                if (!table.columns[columnConfig.name])
                        throw new Error(`column(${columnConfig.name}) can not be found in table(${table.name})`);

                // clone to avoid reference conflict
                let copy = OBJECT.clone(table.columns[columnConfig.name]);
                copy.type = getJavaType(copy.type);
                OBJECT.extend(columnConfig, copy);
                columnConfig.prefix = alias || NamingStrategy.toHungary(table.name);

                // select-sql-statement output name of column
                columnConfig.column = `${columnConfig.prefix}.${NamingStrategy.toHungary(columnConfig.name)}`;

                // entity field name of column
                if (columnConfig.alias)
                        columnConfig.name = columnConfig.alias;

                // batch set to 'list' type
                if (columnConfig.batch)
                        columnConfig.type = `List<${columnConfig.type}>`;

                return columnConfig;
        }

        /**
         * Get all codition columns
         * 
         * @returns {[ColumnConfig]}
         */
        getConditions(configItem) {

                // already generated and cached before
                if (configItem.context.cache.has(configItem.id))
                        return configItem.context.cache.get(configItem.id);

                let conditions = [];
                configItem.conditions.forEach(condition => {
                        conditions.push(this.mergeColumnAndConlumnConfig(configItem.table, condition, configItem.alias));
                });

                configItem.joins.forEach(join => {
                        join.conditions.forEach(condition => {
                                conditions.push(this.mergeColumnAndConlumnConfig(join.table, condition, join.alias));
                        });
                });

                // add mapper.xml if test expression if need
                configItem.context.expressionGenerator.generateExpression(conditions);

                configItem.context.cache.set(configItem.id, conditions);
                return conditions;
        }

        /**
         * Get all select columns ,or update columns ,or insert columns
         * 
         * @returns {[ColumnConfig]}
         */
        getIncludes(configItem) {

                if (configItem.context.cache.has(configItem.id))
                        return configItem.context.cache.get(configItem.id);

                // merge with column meta info
                let includes = [];
                configItem.includes.forEach(include => {
                        includes.push(this.mergeColumnAndConlumnConfig(configItem.table, include, configItem.alias));
                });

                // concat joins includes
                configItem.joins.forEach(join => {
                        join.includes.forEach(include => {
                                includes.push(this.mergeColumnAndConlumnConfig(join.table, include, join.table.alias));
                        });
                });

                // set insert not null expression if column nullable
                if (configItem.type == "insert") {
                        includes.forEach(include => {
                                if (include.nullable)
                                        include.ifExpression = `${include.name} != null`;
                        });
                }

                // generate update mapper.xml if expression
                if (configItem.type == "update")
                        configItem.context.expressionGenerator.generateUpdateExpression(includes);

                configItem.context.cache.set(configItem.id, includes);
                return includes;
        }
}


exports.ColumnAnalyzer = ColumnAnalyzer