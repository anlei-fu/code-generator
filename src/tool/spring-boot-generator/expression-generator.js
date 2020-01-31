function generateExpression(conditions) {
        conditions.forEach(x => {
                generateExpressionCore(x);
        });

}

// For  generating req validate not for sql
function generateUpdateExpression(includes) {
        includes.forEach(x => {
                generateUpdateExpressionCore(x);
        });
}

function generateUpdateExpressionCore(include) {
        include.ifExpression = `${include.name} != null`;
}

function generateExpressionCore(condition) {

        condition.ifExpression = `${condition.name} != null`;

        if (condition.type == "String") {
                if (condition.nullable)
                        condition.ifExpression = `${condition.name} != null and ${condition.name} != ''`;

                if (condition.like) {
                        condition.expression = `@prefix${condition.column} like '%\${${condition.like}}%'\r\n`;
                } else if (condition.startWith) {
                        condition.expression = `@prefix${condition.column} like '\${${condition.like}}%'\r\n`;
                } else if (condition.endWith) {
                        condition.expression = `@prefix${condition.column} like '%\${${condition.like}}'\r\n`;
                }

        } else if (condition.type == "Integer" || condition.type == "Float"||condition.type == "Double") {
                if (condition.bigger) {
                        condition.expression = `@prefix${condition.column} &gt; ${condition.name}\r\n`;
                } else if (condition.biggerEqual) {
                        condition.expression = `@prefix${condition.column} &get; ${condition.name}\r\n`;
                }
                else if (condition.smaller) {
                        condition.expression = `@prefix${condition.column} &lt; ${condition.name}\r\n`;
                } else if (condition.smallerEqual) {
                        condition.expression = `@prefix${condition.column} &let; ${condition.name}\r\n`;
                } else if (condition.range) {
                        condition.ifExpression = `${condition.name}Min !=null and  ${condition.name}Max != null`;
                        condition.expression = `@prefix${condition.column} between #{${condition.name}Min} and #{${condition.name}Max}\r\n`;
                }
        } else if (condition.type == "Date") {
                condition.ifExpression = `${condition.name}Start !=null and  ${condition.name}End != null`;
                condition.expression = `@prefix${condition.column} between #{${condition.name}Start} and #{${condition.name}End}\r\n`;
        }

}

module.exports = {
        generateExpression,
        generateUpdateExpression
}