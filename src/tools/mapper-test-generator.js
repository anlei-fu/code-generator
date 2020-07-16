const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
const { STR } = require("./../libs/str");
const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { strictEqual } = require("assert");

const MODEL_RENDER = new SimpleRender({}, `./templates/test.java`);
const MODEL_ITEM_RENDER = new SimpleRender({}, `./templates/test-item.java`);

function main(){
    let  inputFolder ="F:/业务开发项目_研发一/contract-sign-api/user-api/src/main/java/com/qxnw/user/mapper";
    let  outputFolder="F:/业务开发项目_研发一/contract-sign-api/user-api/src/test/java/com/qxnw/user/mapper";
    DIR.getFiles(inputFolder).forEach(f=>{
         let lines= FILE.readLines(`${inputFolder}/${f}`).filter(
                 x=>(x.includes("(")&&x.includes(";")&&!x.startsWith("@")));
         let content="";
         lines.forEach(line=>{
                let endPoistion =line.indexOf("(");
                if(endPoistion==-1)
                   return;

                let startPosition =line.lastIndexOf(" ",endPoistion);
                if(startPosition==-1)
                  throw new Error();

                let name= line.substr(startPosition,endPoistion-startPosition);

                let item=MODEL_ITEM_RENDER.renderTemplate({
                        name:STR.upperFirstLetter(name.trim())
                });
                content+=item;
         });

         let n =f.substr(1,f.length-1).replace(".java","");

         FILE.write(`${outputFolder}/${n}Test.java`,MODEL_RENDER.renderTemplate( {
                 name:n,
                 content
         }))

    });
}

main();