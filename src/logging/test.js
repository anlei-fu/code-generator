const {LoggerFactory} =require("./index");
const logger =LoggerFactory.getLogger("test");
LoggerFactory.useFileAppender();
LoggerFactory.allowInfos(".*");

setInterval(()=>{
        logger.info("test info");
        try{
          let t =g.ki.kj;
        }catch(ex){
            logger.error("",ex);
        }
},100)

