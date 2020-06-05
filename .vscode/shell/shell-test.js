var child = require('child_process');
function main(){
        child.execFile("test.sh",(error,out,outMsg)=>{
                console.log(error);
                console.log(out);
                console.log(outMsg);
        })
}

main();