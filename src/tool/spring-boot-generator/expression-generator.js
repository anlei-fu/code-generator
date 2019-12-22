function generateExpression(conditions) {
        conditions.forEach(x => {
               generateExpressionCore(x);
        });

}

function generateExpressionCore(condition) {

        condition.ifExpression = `${condition.name} != null`;

        if (condition.type == "String") {
                if (condition.nullable)
                        condition.ifExpression = `${condition.name} != null and ${condition.name} != ''`;

                if (condition.like) {
                        condition.expression = `${condition.column} like '%\${${condition.like}}%'`;
                } else if (condition.startWith) {
                        condition.expression = `${condition.column} like '\${${condition.like}}%'`;
                } else if (condition.endWith) {
                        condition.expression = `${condition.column} like '%\${${condition.like}}'`;
                } 

        } else if (condition.type == "Integer" || condition.type == "Float") {
                if (condition.bigger) {
                        condition.expression = `${condition.column} &gt; ${condition.name}`;
                } else if (condition.biggerEqual) {
                        condition.expression = `${condition.column} &get; ${condition.name}`;
                }
                else if (condition.smaller) {
                        condition.expression = `${condition.column} &lt; ${condition.name}`;
                } else if (condition.smallerEqual) {
                        condition.expression = `${condition.column} &let; ${condition.name}`;
                } else if (condition.range) {
                        condition.ifExpression = `{${condition.name}Min} !=null and  {${condition.name}Max} != null`;
                        condition.expression = `${condition.column} between #{${condition.name}Min} and  #{${condition.name}Max}`;
                }
        } else if (condition.type == "Date") {
                condition.ifExpression = `{${condition.name}Start} !=null and  {${condition.name}End} != null`;
                condition.expression = `${condition.column} between #{${condition.name}Start} and  #{${condition.name}End}`;
        }

}

exports.generateExpression=generateExpression;
