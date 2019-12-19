
function _renderPackage(content) {
        let ls = STR.select(content, "@packages", "@packages");
        if (ls.length == 0)
                return content;

        let packagesPattern = ls[0]
                , systems = []
                , others = STR.remove(packagesPattern, "@packages")
                        .replace(/@project/g, this.config.project)
                        .split("\r\n");


        OBJECT.forEach(this.config.packages, (key, value) => {
                if (content.indexOf(key) == -1 || packages.includes(key))
                        return;

                if (value.isSystem) {
                        systems.push(value.package);
                } else {
                        others.push(value.package || `import com.@project.pojo.${value.type}.${key};`);
                }
        });

        others.forEach((x, i) => {
                others[i] = x.replace(/@project/g, this.config.project);
        });

        systems.forEach((x, i) => {
                systems[i] = x.replace(/@project/g, this.config.project);
        });

        others = others.sort();
        systems = systems.sort();

        let pcontent = STR.arrayToString(others, "", "\r\n");
        pcontent = STR.removeEmptyLine(pcontent);

        if (systems.length != 0) {
                let scontent = STR.arrayToString(systems, "", "\r\n");
                scontent = STR.removeEmptyLine(scontent);
                pcontent += "\r\n" + scontent;
        }

        return content.replace(packagesPattern, pcontent);
}