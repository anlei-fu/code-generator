function sleep(ms){
        return new Promise((resolve,reject)=>{
               setTimeout(resolve,ms);
        });
}

exports.ThreadUtils={
        sleep
}