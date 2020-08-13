
const {STR} =require("./../libs/str");
const {STR} =require("./../libs/str");

function main(items){
        let output="";
        items.forEach(x=>{
            output+=` {
                path: "/${x}",
                icon: "",
                label: "${STR.upperFirstLetter(x)}",
                moduleName: "module1",
        },`;
        });
        console.log(output);
     }
     
     main([
             "site",
             "downSystem",
             "downSystemSite",
             "siteAccount",
             "cookie",
             "proxy",
             "crawler",
             "script",
             "task",
             "siteIpBlockMap",
             "siteIpDelayMap"
     ]);