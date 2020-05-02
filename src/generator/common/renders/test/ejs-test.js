const ejs =require("ejs");

console.log(ejs.render(`<%if(a) {%><%=a%><%}%>`,{a:true,b:[10]}))