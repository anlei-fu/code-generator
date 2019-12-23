
const {InsertAnalyzer,SelectAnalyzer,UpdateAnlyzer}=require("./../analyzer");
const table=require("./../output/test/db/main").bridgeInfo;
const {getJavaType}=require("./../utils")
const {OBJECT}=require("./../../../libs/utils")
const {BuilderConfigGenerator}=require("../config-template-generator")
const {FILE}=require("./../../../libs/file")

function testSelect(){
        
        
        OBJECT.forEach(table.columns,(key,value)=>{
               let type =getJavaType(value.type);
               let validates=analyzer.getValidate(type,key);
               console.log(` analyze type (${type})  ${key}:`);
               console.log("should be candidate:"+analyzer.shouldBeCandidate(type,key));
               console.log("expression:"+analyzer.getExpression(type,key));
               console.log("validate");
               console.log(validates);
               console.log("\r\r\r\n");

        });

      
}

function testInsert(){
        let analyzer=new InsertAnalyzer();
        OBJECT.forEach(table.columns,(key,value)=>{
                value.type =getJavaType(value.type);
                let validates=analyzer.getValidates(value);
                console.log(` analyze type (${value.type})  ${key}:`);
                console.log("should be candidate:"+analyzer.shouldBeCandidates(value));
                console.log("validate");
                console.log(validates);
                console.log("\r\r\r\n");
 
         });

}

function testConfigBuilder(){
    let generator =new BuilderConfigGenerator();
     FILE.write("1.js",generator.generate(table));

}

//testSelect();

//testInsert();

testConfigBuilder();