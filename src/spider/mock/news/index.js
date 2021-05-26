const { FILE, DIR } = require("../../../libs");
function main(name) {
    DIR.create(`./output/${name}`);
    FILE.write(`./output/${name}/generator.js`, FILE.read("./template/generator.js").replace("@name", name));
}
/**********************************main******************************* */
main("新华网");