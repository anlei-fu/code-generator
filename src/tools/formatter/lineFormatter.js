const { DIR } = require("./../../../libs/dir");
const { FILE } = require("./../../../libs/file");
const { STR } = require("./../../../libs/str");

class LineFormmater{
        format(folder){
                DIR.getFiles(folder).forEach(file => {
                        if(file.endsWith(".vue")){
                      FILE.write(`${folder}/${file}`,STR.removeEmptyLine(FILE.read(`${folder}/${file}`)));
                        console.log(`${folder}/${file}  formatted`);
                        }
                });

                DIR.getFolders(folder).forEach(fd => {
                        this.format(`${folder}/${fd}`);
                });
        }
}

exports.LineFormmater= LineFormmater