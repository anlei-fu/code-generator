const {TestRender} =require("./../TestRender");
const {FILE} =require("./../../../../libs/file");
function test(){
   let render =new  TestRender();
   let model ={
        methodName:"Echo",
        isQuery:false,
        args:[{value:1}],
        hasDoCreateReq:true,
        doCreateReqType:"Dto",
        fields:[{name:"name",value:12}],
        description:""
   };

   let content= render.renderTestItem(model);

   FILE.write("1.java",content);
}

/****************************main************************ */
test();