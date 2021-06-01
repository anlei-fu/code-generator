const ejs = require("ejs");

console.log(
        ejs.render(
                `<%if(c) {%><%=a%><%}%>`,
                { a: true, b: [10], c: null },
                { strict: false, }
        )
)