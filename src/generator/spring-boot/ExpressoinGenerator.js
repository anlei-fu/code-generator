const { getJavaType } = require("./utils");

// Use to generate mapper 'if-test' expression and 'sql-expression'
class ExpressoinGenerator {
        /**
         * Dispatch function 
         * 
         * @param {[ColumnConfig]} conditions 
         */
        generateExpression(conditions) {
                conditions.forEach(x => {
                        this._generateExpressionCore(x);
                });
        }

        /**
         * For  generating req validate not for sql
         * 
         * @param {[ColumnConfig]} includes
         * 
         */
        generateUpdateExpression(includes) {
                includes.forEach(include => {
                        this._generateUpdateExpressionCore(include);
                });
        }

        /**
         * Set update-sql 'if-test-expression'
         * 
         * @private
         * @param {ColumnConfig} include 
         */
        _generateUpdateExpressionCore(include) {
                include.ifExpression = `${include.name} != null`;
                if (getJavaType(include.type) == "String")
                        include.ifExpression += ` and ${include.name} != ''`;
        }

        /**
         * 
         * 
         * @private
         * @param {ColumnConfig} condition 
         */
        _generateExpressionCore(condition) {

                // set default if expression, if condition is nullable
                if (!condition.required)
                        condition.ifExpression = `${condition.name} != null`;

                if (condition.isList)
                        condition.ifExpression = `${condition.name}s != null and ${condition.name}s.size() != 0`

                if (condition.type == "String") {
                        if (condition.nullable)
                                condition.ifExpression = `${condition.name} != null and ${condition.name} != ''`;

                        if (condition.like) {
                                condition.expression = `@prefix${condition.column} like concat('%', #{${condition.like}}, '%')\r\n`;
                        } else if (condition.startWith) {
                                condition.expression = `@prefix${condition.column} like concat(#{${condition.like}}, '%')\r\n`;
                        } else if (condition.endWith) {
                                condition.expression = `@prefix${condition.column} like concat('%', #{${condition.like}})\r\n`;
                        }

                } else if (condition.type == "Integer" || condition.type == "Float" || condition.type == "Double") {
                        if (condition.bigger) {
                                condition.expression = `@prefix${condition.column} &gt; ${condition.name}\r\n`;
                        } else if (condition.biggerEqual) {
                                condition.expression = `@prefix${condition.column} &get; ${condition.name}\r\n`;
                        } else if (condition.smaller) {
                                condition.expression = `@prefix${condition.column} &lt; ${condition.name}\r\n`;
                        } else if (condition.smallerEqual) {
                                condition.expression = `@prefix${condition.column} &let; ${condition.name}\r\n`;
                        } else if (condition.range) {
                                condition.ifExpression = `${condition.name}Min !=null and  ${condition.name}Max != null`;
                                condition.expression = `@prefix${condition.column} between #{${condition.name}Min} and #{${condition.name}Max}\r\n`;
                        }
                } else if (condition.type == "Date") {
                        condition.ifExpression = `${condition.name}Start != null and  ${condition.name}End != null`;
                        condition.expression = `@prefix${condition.column} between #{${condition.name}Start} and #{${condition.name}End}\r\n`;
                }

                if (condition.required)
                        condition.ifExpression = null;
        }
}

exports.ExpressoinGenerator = ExpressoinGenerator