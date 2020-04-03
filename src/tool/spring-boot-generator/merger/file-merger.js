const{FILE} =require("./../../../libs/file")
function mergeFile(source ,targetFolder){
     FILE.copy(source,`${targetFolder}/${source}`);
}

exports.mergeFile=mergeFile;