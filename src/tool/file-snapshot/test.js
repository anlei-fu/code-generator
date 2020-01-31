const {FileSnapShot} =require("./snapshot");

function main(){
  let snapshot=new FileSnapShot();
  snapshot.makeSnapshot("D:/WPS Office");

}

main();