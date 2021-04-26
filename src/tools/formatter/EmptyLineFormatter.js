const { DIR, FILE, STR } = require("../../libs");
class EmptyLineFormmater {
        format(folder) {
                DIR.getFiles(folder).forEach(file => {
                        if (file.endsWith(".vue")) {
                                FILE.write(`${folder}/${file}`, STR.removeEmptyLine(FILE.read(`${folder}/${file}`)));
                                console.log(`${folder}/${file}  formatted`);
                        }
                });

                DIR.getFolders(folder).forEach(fd => {
                        this.format(`${folder}/${fd}`);
                });
        }
}

exports.EmptyLineFormmater = EmptyLineFormmater