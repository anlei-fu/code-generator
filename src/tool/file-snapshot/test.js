const {FileSnapShot} =require("./snapshot");
const {zip} =require("./zip");

function main(){
  let snapshot=new FileSnapShot("wps");
 // snapshot.makeSnapshot("D:/WPS Office");
  snapshot.extractChangeFiles("D:/WPS Office","./output/wps");
  zip("./output/wps","1.zip");
}

main();