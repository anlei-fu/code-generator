const {ZIP} =require("./../../libs/zip");

/**
 * 
 * @param {String} targetFolder 
 * @param {String} file 
 */
function zip(targetFolder,file){
  ZIP.zipFile(targetFolder,file);
}

exports.zip=zip;