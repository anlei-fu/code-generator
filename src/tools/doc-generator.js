const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
let content = ""

function readFolder(folder) {

        DIR.getFiles(folder).forEach(file => {
                if (file.toLowerCase().endsWith(".java")) {
                     
                        try {
                                content +=FILE.read(`${folder}/${file}`);
                        } catch (ex) {
                                console.log(ex);
                        }
                }
        });

        DIR.getFolders(folder).forEach(fd => {
                let t=0;
                readFolder(`${folder}/${fd}`);
        });

       
}

readFolder("F:/业务开发项目_研发一/contract-sign-api/user-api/src/main/java/com/qxnw/user");
FILE.write("./1.text",content);