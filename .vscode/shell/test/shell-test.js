var child = require('child_process');
function main(){
        console.log(__dirname);
        child.execFile("sh",["test.sh"],(error,out,outMsg)=>{
             console.log("error");
                console.log(error);
              console.log("out");
                console.log(out);
               console.log("out msg");
                console.log(outMsg);
        })
}

main();
