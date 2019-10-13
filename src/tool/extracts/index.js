const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");

function main(name) {
        let text = FILE.read(`${name}.sql`);
         DIR.create(name);

        s = text.indexOf("Creating sequence"),
                v = text.indexOf("Creating view"),
                pkg = text.indexOf("Creating package"),
                f = text.indexOf("Creating function"),
                proc = text.indexOf("Creating procedure");
        if (v == -1)
                v = pkg;
     
        FILE.write(`${name}/seq.sql`, text.substr(s, v-s));
        FILE.write(`${name}/view.sql`, text.substr(v, pkg-v));
        if (v == pkg)
                v = s;
        FILE.write(`${name}/pkg.sql`, text.substr(pkg, f-pkg));
        FILE.write(`${name}/func.sql`, text.substr(f, proc - f));
        FILE.write(`${name}/proc.sql`, text.substr(proc, text.length - proc));


}
// run
main("dm");