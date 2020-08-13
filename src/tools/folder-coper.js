const { FILE } = require("./../libs/file");
const { DIR } = require("./../libs/dir");
const { STR } = require("./../libs/str");

function copyFolder(sourceFolder, targetFolder, replacePattern) {
        DIR.getFiles(sourceFolder).forEach(f => {
                FILE.write(
                        `${targetFolder}/${f}`,
                        STR.replace(FILE.read(`${sourceFolder}/${f}`), replacePattern)
                );
        });
        
        DIR.getFolders(sourceFolder).forEach(folder => {
                DIR.create(`${targetFolder}/${folder}`);
                copyFolder(`${sourceFolder}/${folder}`,`${targetFolder}/${folder}`,replacePattern);
        })

}

copyFolder(
        "D:/test/all/crawler/crawler/src/test/java/com/jasmine/crawler/service/impl",
        "D:/test/crawler/crawler/jasmine-crawler/admin-web/src/test/java/com/jasmine/crawler/web/admin/service/impl",
        {
                "com.jasmine.crawler":"com.jasmine.crawler.web.admin"
        }
);