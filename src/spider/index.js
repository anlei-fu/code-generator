const {Crawler} =require("./Crawler");
function main(){
  let crawler =new Crawler();
  crawler.start(`./config.json`);
}

/****************************************main****************************** */
main();