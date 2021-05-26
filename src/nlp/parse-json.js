const {FILE,DIR} =require("./../libs");


function main(){
    let t=1;
  DIR.getFiles("D:/test/word-json").forEach(x=>{
       let data =FILE.readJson("D:/test/word-json/"+x);
       data.forEach(d=>{
           d.forEach(k=>{
            let o= JSON.parse(k);
            if(o.data.summary){
              FILE.write("D:/test/word-count/"+t+".txt",o.data.summary);
              t++;
            }
           })
           
       })
  });
}

main();